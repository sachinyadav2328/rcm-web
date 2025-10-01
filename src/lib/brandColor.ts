export type RGB = { r: number; g: number; b: number }

function clamp(value: number, min = 0, max = 255): number {
  return Math.max(min, Math.min(max, value))
}

function rgbToLuminance({ r, g, b }: RGB): number {
  // Rec. 709 luma approximation
  return 0.2126 * (r / 255) + 0.7152 * (g / 255) + 0.0722 * (b / 255)
}

function getContrastTextColor(color: RGB): string {
  const luminance = rgbToLuminance(color)
  return luminance > 0.5 ? 'oklch(0.145 0 0)' : 'oklch(0.985 0 0)'
}

function toCssRgb({ r, g, b }: RGB): string {
  return `rgb(${clamp(r)}, ${clamp(g)}, ${clamp(b)})`
}

function lighten(color: RGB, amount = 0.15): RGB {
  return {
    r: clamp(color.r + 255 * amount),
    g: clamp(color.g + 255 * amount),
    b: clamp(color.b + 255 * amount),
  }
}

function saturate(color: RGB, amount = 0.1): RGB {
  // Simple saturation via distance from gray
  const avg = (color.r + color.g + color.b) / 3
  return {
    r: clamp(avg + (color.r - avg) * (1 + amount)),
    g: clamp(avg + (color.g - avg) * (1 + amount)),
    b: clamp(avg + (color.b - avg) * (1 + amount)),
  }
}

export async function applyBrandColorsFromImage(imageSrc: string): Promise<void> {
  if (typeof window === 'undefined' || !('document' in window)) return

  await new Promise<void>((resolve, reject) => {
    const img = new Image()
    img.crossOrigin = 'anonymous'
    img.onload = () => {
      try {
        const canvas = document.createElement('canvas')
        const context = canvas.getContext('2d')
        if (!context) return resolve()

        // Downscale for performance
        const target = 64
        const scale = Math.max(img.width, img.height) / target || 1
        canvas.width = Math.max(1, Math.floor(img.width / scale))
        canvas.height = Math.max(1, Math.floor(img.height / scale))
        context.drawImage(img, 0, 0, canvas.width, canvas.height)

        const { data } = context.getImageData(0, 0, canvas.width, canvas.height)

        // Simple histogram-based dominant color (quantized)
        const bucketSize = 24
        const buckets = new Map<string, { count: number; sum: RGB }>()
        for (let i = 0; i < data.length; i += 4) {
          const a = data[i + 3]
          if (a < 250) continue // skip transparent/semtransparent
          const r = data[i]
          const g = data[i + 1]
          const b = data[i + 2]
          const key = `${Math.floor(r / bucketSize)}-${Math.floor(g / bucketSize)}-${Math.floor(b / bucketSize)}`
          const entry = buckets.get(key) || { count: 0, sum: { r: 0, g: 0, b: 0 } }
          entry.count += 1
          entry.sum.r += r
          entry.sum.g += g
          entry.sum.b += b
          buckets.set(key, entry)
        }

        let bestColor: RGB | null = null
        let bestScore = -1
        buckets.forEach((entry) => {
          const score = entry.count
          if (score > bestScore) {
            bestScore = score
            bestColor = {
              r: Math.round(entry.sum.r / entry.count),
              g: Math.round(entry.sum.g / entry.count),
              b: Math.round(entry.sum.b / entry.count),
            }
          }
        })

        if (!bestColor) return resolve()

        const primary = saturate(bestColor, 0.25)
        const accent = lighten(primary, 0.15)
        const primaryForeground = getContrastTextColor(primary)
        const accentForeground = getContrastTextColor(accent)

        const root = document.documentElement
        root.style.setProperty('--primary', toCssRgb(primary))
        root.style.setProperty('--primary-foreground', primaryForeground)
        root.style.setProperty('--accent', toCssRgb(accent))
        root.style.setProperty('--accent-foreground', accentForeground)
        // Optional: also set ring color to match
        root.style.setProperty('--ring', toCssRgb(lighten(primary, 0.3)))

        resolve()
      } catch (e) {
        resolve()
      }
    }
    img.onerror = () => resolve()
    img.src = imageSrc
  })
}


