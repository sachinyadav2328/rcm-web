import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Building2, Shield, Truck, Users, Mail, MapPin, Star } from "lucide-react"

export default function RCMMetalsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-cyan-600 text-white shadow-lg">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Building2 className="h-8 w-8" />
            <div>
              <h1 className="text-xl font-bold">RCM Metals LLC</h1>
              <p className="text-sm opacity-90">Metal Trading Company</p>
            </div>
          </div>
          <nav className="hidden md:flex space-x-6">
            <a href="#about" className="hover:text-amber-300 transition-colors">
              About
            </a>
            <a href="#services" className="hover:text-amber-300 transition-colors">
              Services
            </a>
            <a href="#testimonials" className="hover:text-amber-300 transition-colors">
              Testimonials
            </a>
            {/* <a href="#" className="hover:text-amber-300 transition-colors">
              Contact
            </a> */}
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-cyan-600 to-cyan-500 text-white py-24">
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
      <section id="about" className="py-20 bg-gray-50">
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
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold mb-4 text-gray-900">Our Services</h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto text-pretty">
              Comprehensive metal trading solutions designed to meet the diverse needs of our clients.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-l-4 border-l-amber-500 bg-white border border-gray-200 shadow-sm">
              <CardHeader>
                <CardTitle className="text-amber-600">Steel Trading</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-gray-600">
                  Complete steel trading services including structural steel, rebar, and specialty alloys.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-amber-500 bg-white border border-gray-200 shadow-sm">
              <CardHeader>
                <CardTitle className="text-amber-600">Aluminum Solutions</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-gray-600">
                  High-quality aluminum products for construction, manufacturing, and industrial applications.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-amber-500 bg-white border border-gray-200 shadow-sm">
              <CardHeader>
                <CardTitle className="text-amber-600">Copper & Brass</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-gray-600">
                  Premium copper and brass materials for electrical, plumbing, and decorative uses.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-amber-500 bg-white border border-gray-200 shadow-sm">
              <CardHeader>
                <CardTitle className="text-amber-600">Scrap Metal Processing</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-gray-600">
                  Efficient scrap metal collection, processing, and recycling services.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-amber-500 bg-white border border-gray-200 shadow-sm">
              <CardHeader>
                <CardTitle className="text-amber-600">Custom Fabrication</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-gray-600">
                  Tailored metal fabrication services to meet specific project requirements.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-amber-500 bg-white border border-gray-200 shadow-sm">
              <CardHeader>
                <CardTitle className="text-amber-600">Market Analysis</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-gray-600">
                  Expert market insights and pricing analysis to optimize your metal procurement strategy.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold mb-4 text-gray-900">What Our Clients Say</h3>
            <p className="text-xl text-gray-600">Trusted by businesses across Georgia and beyond</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-white border border-gray-200 shadow-sm">
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-amber-500 text-amber-500" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "RCM Metals has been our go-to partner for steel procurement. Their reliability and competitive
                  pricing have been instrumental to our project success."
                </p>
                {/* <div className="font-semibold text-cyan-600">- Sarah Johnson, Construction Manager</div> */}
              </CardContent>
            </Card>

            <Card className="bg-white border border-gray-200 shadow-sm">
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-amber-500 text-amber-500" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "Exceptional service and expertise. RCM Metals consistently delivers quality materials on time and
                  within budget."
                </p>
                {/* <div className="font-semibold text-cyan-600">- Michael Chen, Manufacturing Director</div> */}
              </CardContent>
            </Card>

            <Card className="bg-white border border-gray-200 shadow-sm">
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-amber-500 text-amber-500" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "Their market knowledge and personalized approach have helped us optimize our metal procurement
                  strategy significantly."
                </p>
                {/* <div className="font-semibold text-cyan-600">- David Rodriguez, Procurement Specialist</div> */}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Building2 className="h-6 w-6" />
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
            <p>&copy; 2024 RCM Metals LLC. All rights reserved. | Georgia Metal Trading Company</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
