
import MainLayout from "@/components/layout/MainLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Smartphone, 
  Monitor, 
  Printer, 
  Battery, 
  TruckIcon, 
  Recycle, 
  BarChart4, 
  Award 
} from "lucide-react";

const Services = () => {
  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-eco-green-700 mb-4">Our Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer comprehensive e-waste management solutions to make recycling easy and convenient for everyone.
          </p>
        </div>

        {/* Main Services */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-eco-green-600 mb-8 text-center">What We Recycle</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <Card>
              <CardContent className="pt-6">
                <div className="text-center mb-4">
                  <div className="bg-eco-green-100 p-3 rounded-full inline-flex justify-center">
                    <Smartphone className="h-8 w-8 text-eco-green-600" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-center mb-2">Mobile Devices</h3>
                <p className="text-gray-600 text-center">
                  Smartphones, tablets, and other portable electronics
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <div className="text-center mb-4">
                  <div className="bg-eco-green-100 p-3 rounded-full inline-flex justify-center">
                    <Monitor className="h-8 w-8 text-eco-green-600" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-center mb-2">Computers</h3>
                <p className="text-gray-600 text-center">
                  Desktops, laptops, monitors, and peripherals
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <div className="text-center mb-4">
                  <div className="bg-eco-green-100 p-3 rounded-full inline-flex justify-center">
                    <Printer className="h-8 w-8 text-eco-green-600" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-center mb-2">Office Equipment</h3>
                <p className="text-gray-600 text-center">
                  Printers, scanners, fax machines, and accessories
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <div className="text-center mb-4">
                  <div className="bg-eco-green-100 p-3 rounded-full inline-flex justify-center">
                    <Battery className="h-8 w-8 text-eco-green-600" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-center mb-2">Batteries</h3>
                <p className="text-gray-600 text-center">
                  All types of batteries including lithium-ion and alkaline
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Service Process */}
        <div className="bg-eco-green-50 p-8 rounded-lg mb-16">
          <h2 className="text-2xl font-bold text-eco-green-600 mb-8 text-center">How It Works</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-white p-4 rounded-full inline-flex justify-center mb-4">
                <span className="text-2xl font-bold text-eco-green-600">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Schedule a Pickup</h3>
              <p className="text-gray-600">
                Request a convenient pickup time for your e-waste items directly through our platform.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-white p-4 rounded-full inline-flex justify-center mb-4">
                <span className="text-2xl font-bold text-eco-green-600">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">We Collect</h3>
              <p className="text-gray-600">
                Our certified drivers will arrive at your location to safely collect your e-waste.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-white p-4 rounded-full inline-flex justify-center mb-4">
                <span className="text-2xl font-bold text-eco-green-600">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Responsible Recycling</h3>
              <p className="text-gray-600">
                Your items are processed at certified recycling centers following environmental standards.
              </p>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <Button asChild className="bg-eco-green-600 hover:bg-eco-green-700 text-lg px-8 py-6 h-auto">
              <Link to="/schedule-pickup">Schedule a Pickup Now</Link>
            </Button>
          </div>
        </div>

        {/* Additional Services */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-eco-green-600 mb-8 text-center">Additional Services</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6">
                <div className="mb-4">
                  <TruckIcon className="h-8 w-8 text-eco-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Business Pickups</h3>
                <p className="text-gray-600 mb-4">
                  Specialized service for businesses looking to dispose of large quantities of e-waste. We offer 
                  custom solutions and compliance documentation.
                </p>
                <Button variant="outline" className="border-eco-green-300 text-eco-green-700 hover:bg-eco-green-50">
                  Learn More
                </Button>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="mb-4">
                  <Recycle className="h-8 w-8 text-eco-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Data Destruction</h3>
                <p className="text-gray-600 mb-4">
                  Secure data wiping and physical destruction services for sensitive information stored 
                  on electronic devices.
                </p>
                <Button variant="outline" className="border-eco-green-300 text-eco-green-700 hover:bg-eco-green-50">
                  Learn More
                </Button>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="mb-4">
                  <BarChart4 className="h-8 w-8 text-eco-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Recycling Reports</h3>
                <p className="text-gray-600 mb-4">
                  Comprehensive reporting on your recycling impact for corporate sustainability 
                  reporting and environmental initiatives.
                </p>
                <Button variant="outline" className="border-eco-green-300 text-eco-green-700 hover:bg-eco-green-50">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Certification */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-eco-green-600 mb-4">We're Certified</h2>
          <div className="flex justify-center items-center gap-8">
            <div className="flex items-center bg-gray-100 p-4 rounded-lg">
              <Award className="h-6 w-6 text-eco-green-600 mr-2" />
              <span className="font-semibold">ISO 14001</span>
            </div>
            <div className="flex items-center bg-gray-100 p-4 rounded-lg">
              <Award className="h-6 w-6 text-eco-green-600 mr-2" />
              <span className="font-semibold">R2 Certified</span>
            </div>
            <div className="flex items-center bg-gray-100 p-4 rounded-lg">
              <Award className="h-6 w-6 text-eco-green-600 mr-2" />
              <span className="font-semibold">e-Stewards</span>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Services;
