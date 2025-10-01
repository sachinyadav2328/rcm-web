import { useRef } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./components/ui/card"
import { Shield, Truck, Users, Mail, MapPin } from "lucide-react"
import logo from './assets/logo.png'
import crane from './assets/crane-grab-scrap.jpg'
import copper from './assets/copper.jpeg'

export default function RCMMetalsPage() {

  const aboutRef = useRef<HTMLDivElement>(null)
  const servicesRef = useRef<HTMLDivElement>(null)
  const contactRef = useRef<HTMLDivElement>(null)

  const scrollTo = (ref: React.RefObject<HTMLElement | null>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" })
  }
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/70 border-b border-gray-200 text-gray-900">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img src={logo} alt="Logo" className="h-10 w-10" />
            <div>
              <h1 className="text-xl font-bold">RCM Metals LLC</h1>
              <p className="text-sm opacity-90">Metal Trading Company</p>
            </div>
          </div>
          <nav className="hidden md:flex space-x-6">
          <button
              onClick={() => scrollTo(aboutRef)}
              className="hover:text-amber-300 transition-colors"
            >
              About
            </button>

            <button
              onClick={() => scrollTo(servicesRef)}
              className="hover:text-amber-300 transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => scrollTo(contactRef)}
              className="hover:text-amber-300 transition-colors"
            >
              Contact
            </button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative  text-white py-24">
        {/* Animated background image layer */}
        <div
          className="absolute inset-0 bg-center bg-cover 
          "
          style={{ backgroundImage: `url(${crane})` }}
        ></div>
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h2 className="text-5xl font-bold mb-6 text-balance">Metal Trading Company</h2>
            <p className="text-xl mb-8 text-pretty leading-relaxed">
             experience in the metal trading industry, RCM Metals LLC delivers reliable, efficient, and
              competitive metal trading solutions across Georgia and beyond.
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section ref={aboutRef} id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold mb-4 text-gray-900">About RCM Metals LLC</h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto text-pretty">
              Founded in Georgia, RCM Metals LLC has established itself as a trusted leader in the metal trading
              industry, serving clients with integrity, expertise, and unwavering commitment to excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center bg-white border border-gray-200 shadow-sm">
              <CardHeader>
                <Shield className="h-12 w-12 text-cyan-600 mx-auto mb-4" />
                <CardTitle className="text-gray-900">Trusted Expertise</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-gray-600">
                  Decades of experience in metal trading with deep market knowledge and industry connections.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center bg-white border border-gray-200 shadow-sm">
              <CardHeader>
                <Truck className="h-12 w-12 text-cyan-600 mx-auto mb-4" />
                <CardTitle className="text-gray-900">Reliable Logistics</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-gray-600">
                  Efficient supply chain management ensuring timely delivery and competitive pricing.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center bg-white border border-gray-200 shadow-sm">
              <CardHeader>
                <Users className="h-12 w-12 text-cyan-600 mx-auto mb-4" />
                <CardTitle className="text-gray-900">Client-Focused</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-gray-600">
                  Personalized service tailored to meet the unique needs of each client and project.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section ref={servicesRef} id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold mb-4 text-gray-900">Our Services</h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto text-pretty">
              Comprehensive metal trading solutions designed to meet the diverse needs of our clients.
            </p>
          </div>

          {/* Ferrous Scrap Section */}
          <div className="mb-16">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
                  <div
                    className="absolute inset-0 bg-center bg-cover bg-gray-800"
                    style={{ backgroundImage: `url(${crane})` }}
                  ></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 text-white">
                    <h4 className="text-2xl font-bold mb-2">Ferrous Scrap Processing</h4>
                    <p className="text-sm opacity-90">Heavy-duty equipment for iron and steel scrap</p>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <h4 className="text-3xl font-bold text-gray-900 mb-6">Ferrous Scrap</h4>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  We specialize in the collection, processing, and trading of ferrous metals including iron and steel scrap. 
                  Our advanced processing facilities ensure maximum value recovery from your ferrous materials.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h5 className="font-semibold text-gray-900">Steel Scrap Processing</h5>
                      <p className="text-gray-600">Structural steel, rebar, and industrial steel components</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h5 className="font-semibold text-gray-900">Iron Scrap Collection</h5>
                      <p className="text-gray-600">Cast iron, wrought iron, and automotive scrap</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h5 className="font-semibold text-gray-900">Industrial Demolition</h5>
                      <p className="text-gray-600">Large-scale ferrous metal recovery from demolition projects</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Non-Ferrous Metals Section */}
          <div>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h4 className="text-3xl font-bold text-gray-900 mb-6">Non-Ferrous Metals</h4>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Our non-ferrous metal trading division handles precious and specialty metals including aluminum, 
                  copper, brass, and other valuable materials with specialized processing capabilities.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h5 className="font-semibold text-gray-900">Aluminum Solutions</h5>
                      <p className="text-gray-600">High-grade aluminum alloys for construction and manufacturing</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h5 className="font-semibold text-gray-900">Copper & Brass</h5>
                      <p className="text-gray-600">Premium copper and brass materials for electrical applications</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h5 className="font-semibold text-gray-900">Precious Metals</h5>
                      <p className="text-gray-600">Specialized handling of precious and rare earth metals</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h5 className="font-semibold text-gray-900">Custom Alloys</h5>
                      <p className="text-gray-600">Specialized alloy trading and custom material sourcing</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
                  <div
                    className="absolute inset-0 bg-center bg-cover bg-gray-800"
                    style={{ backgroundImage: `url(${copper})` }}
                  ></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 text-white">
                    <h4 className="text-2xl font-bold mb-2">Non-Ferrous Excellence</h4>
                    <p className="text-sm opacity-90">Premium metals for advanced applications</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      

      {/* Footer */}
      <footer ref={contactRef} className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <img src={logo} alt="Logo" className="h-6 w-6" />
                <span className="text-lg font-bold">RCM Metals LLC</span>
              </div>
              <p className="text-sm opacity-80 text-pretty">
                Metal trading company, delivering excellence in every transaction since our founding.
              </p>
            </div>

            <div>
              <h5 className="font-bold mb-4">Contact Information</h5>
              <div className="space-y-3 text-sm">
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4" />
                  <span>Georgia</span>
                </div>
                {/* <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4" />
                  <span>(555) 123-4567</span>
                </div> */}
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4" />
                  <span>info@rcmmetals.com</span>
                </div>
              </div>
            </div>

            <div>
              <h5 className="font-bold mb-4">Business Hours</h5>
              <div className="space-y-2 text-sm opacity-80">
                <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                <p>Saturday: 9:00 AM - 4:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>

            <div>
              <h5 className="font-bold mb-4">Services</h5>
              <div className="space-y-2 text-sm">
                <p>Steel Trading</p>
                <p>Aluminum Solutions</p>
                <p>Copper & Brass</p>
                <p>Scrap Metal Processing</p>
                <p>Market Analysis</p>
              </div>
            </div>
          </div>

          <div className="border-t border-white/20 mt-8 pt-8 text-center text-sm opacity-80">
            <p>&copy; 2024 RCM Metals LLC. All rights reserved. | Metal Trading Company</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
