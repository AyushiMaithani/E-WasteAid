
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import MainLayout from "@/components/layout/MainLayout";
import { Recycle, Users, Car, Box, Archive } from "lucide-react";

const Index = () => {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-eco-green-800 to-eco-green-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
              E-Waste Into Innovation, Opportunities Into Action
              </h1>
              <p className="text-lg md:text-xl mb-8 text-eco-green-100">
                Join our community of eco-conscious individuals and businesses committed to proper e-waste disposal and recycling.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/signup">
                  <Button className="bg-white text-eco-green-600 hover:bg-eco-green-50 px-8 py-6 text-lg">
                    Join Now
                  </Button>
                </Link>
                <Link to="/login">
                  <Button variant="outline" className="border-white bg-eco-green-800 text-white hover:bg-eco-green-400 px-8 py-6 text-lg">
                    Sign In
                  </Button>
                </Link>
              </div>
            </div>
            <div className="hidden md:block">
              {/* Placeholder for illustration */}
              <div className="bg-eco-green-700 bg-opacity-50 h-80 rounded-xl flex items-center justify-center">
                <Recycle className="h-32 w-32" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it works section */}
      <section className="py-20 bg-eco-green-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-eco-green-800 mb-4">How E-WasteAid Works</h2>
            <p className="text-lg text-eco-green-600 max-w-3xl mx-auto">
              Our platform connects consumers, collection centers, transporters, and recycling facilities 
              to ensure e-waste is handled responsibly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm border border-eco-green-100 text-center">
              <div className="bg-eco-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-eco-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-eco-green-800">1. Consumers</h3>
              <p className="text-eco-green-600">
                Schedule pickups or locate drop-off points for your electronic waste.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm border border-eco-green-100 text-center">
              <div className="bg-eco-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Car className="h-8 w-8 text-eco-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-eco-green-800">2. Transporters</h3>
              <p className="text-eco-green-600">
                Connect with pickup requests and deliver e-waste to collection centers.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm border border-eco-green-100 text-center">
              <div className="bg-eco-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Box className="h-8 w-8 text-eco-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-eco-green-800">3. Collection Centers</h3>
              <p className="text-eco-green-600">
                Receive, sort, and prepare e-waste for processing.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm border border-eco-green-100 text-center">
              <div className="bg-eco-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Archive className="h-8 w-8 text-eco-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-eco-green-800">4. Recycling Centers</h3>
              <p className="text-eco-green-600">
                Process e-waste and recover valuable materials for reuse.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* User types section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-eco-green-800 mb-4">Choose Your Role</h2>
            <p className="text-lg text-eco-green-600 max-w-3xl mx-auto">
              E-WasteAid serves different stakeholders in the e-waste management ecosystem.
              Register as one of the following:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-eco-green-50 to-white p-8 rounded-lg shadow-sm border border-eco-green-100">
              <h3 className="text-xl font-semibold mb-4 text-eco-green-800 flex items-center">
                <Users className="h-6 w-6 mr-2 text-eco-green-600" />
                Public User
              </h3>
              <p className="text-eco-green-600 mb-6">
                For individuals and households who want to dispose of electronic waste responsibly.
              </p>
              <ul className="space-y-2 mb-6 text-eco-green-800">
                <li className="flex items-start">
                  <span className="text-eco-green-500 mr-2">✓</span>
                  Schedule e-waste pickups from your location
                </li>
                <li className="flex items-start">
                  <span className="text-eco-green-500 mr-2">✓</span>
                  Find nearby drop-off locations
                </li>
                <li className="flex items-start">
                  <span className="text-eco-green-500 mr-2">✓</span>
                  Track your recycling impact
                </li>
                <li className="flex items-start">
                  <span className="text-eco-green-500 mr-2">✓</span>
                  Learn about proper e-waste disposal
                </li>
              </ul>
              <Link to="/signup" className="block">
                <Button className="w-full bg-eco-green-500 hover:bg-eco-green-600">Register as a User</Button>
              </Link>
            </div>

            <div className="bg-gradient-to-br from-eco-green-50 to-white p-8 rounded-lg shadow-sm border border-eco-green-100">
              <h3 className="text-xl font-semibold mb-4 text-eco-green-800 flex items-center">
                <Car className="h-6 w-6 mr-2 text-eco-green-600" />
                Transporter/Driver
              </h3>
              <p className="text-eco-green-600 mb-6">
                For individuals or companies that transport e-waste from consumers to collection centers.
              </p>
              <ul className="space-y-2 mb-6 text-eco-green-800">
                <li className="flex items-start">
                  <span className="text-eco-green-500 mr-2">✓</span>
                  Receive pickup requests in your area
                </li>
                <li className="flex items-start">
                  <span className="text-eco-green-500 mr-2">✓</span>
                  Optimize pickup routes
                </li>
                <li className="flex items-start">
                  <span className="text-eco-green-500 mr-2">✓</span>
                  Track deliveries and manage schedules
                </li>
                <li className="flex items-start">
                  <span className="text-eco-green-500 mr-2">✓</span>
                  Report on completed pickups
                </li>
              </ul>
              <Link to="/signup" className="block">
                <Button className="w-full bg-eco-green-500 hover:bg-eco-green-600">Register as a Transporter</Button>
              </Link>
            </div>

            <div className="bg-gradient-to-br from-eco-green-50 to-white p-8 rounded-lg shadow-sm border border-eco-green-100">
              <h3 className="text-xl font-semibold mb-4 text-eco-green-800 flex items-center">
                <Box className="h-6 w-6 mr-2 text-eco-green-600" />
                E-Waste Collector
              </h3>
              <p className="text-eco-green-600 mb-6">
                For collection centers that gather, sort, and temporarily store e-waste before recycling.
              </p>
              <ul className="space-y-2 mb-6 text-eco-green-800">
                <li className="flex items-start">
                  <span className="text-eco-green-500 mr-2">✓</span>
                  Manage inventory of collected e-waste
                </li>
                <li className="flex items-start">
                  <span className="text-eco-green-500 mr-2">✓</span>
                  Schedule pickups with transporters
                </li>
                <li className="flex items-start">
                  <span className="text-eco-green-500 mr-2">✓</span>
                  Coordinate with recycling centers
                </li>
                <li className="flex items-start">
                  <span className="text-eco-green-500 mr-2">✓</span>
                  Track collection metrics
                </li>
              </ul>
              <Link to="/signup" className="block">
                <Button className="w-full bg-eco-green-500 hover:bg-eco-green-600">Register as a Collector</Button>
              </Link>
            </div>

            <div className="bg-gradient-to-br from-eco-green-50 to-white p-8 rounded-lg shadow-sm border border-eco-green-100">
              <h3 className="text-xl font-semibold mb-4 text-eco-green-800 flex items-center">
                <Archive className="h-6 w-6 mr-2 text-eco-green-600" />
                Recycling Center Manager
              </h3>
              <p className="text-eco-green-600 mb-6">
                For recycling facilities that process e-waste and recover valuable materials.
              </p>
              <ul className="space-y-2 mb-6 text-eco-green-800">
                <li className="flex items-start">
                  <span className="text-eco-green-500 mr-2">✓</span>
                  Schedule incoming shipments from collectors
                </li>
                <li className="flex items-start">
                  <span className="text-eco-green-500 mr-2">✓</span>
                  Track processing and material recovery
                </li>
                <li className="flex items-start">
                  <span className="text-eco-green-500 mr-2">✓</span>
                  Generate recycling reports and metrics
                </li>
                <li className="flex items-start">
                  <span className="text-eco-green-500 mr-2">✓</span>
                  Manage facility operations
                </li>
              </ul>
              <Link to="/signup" className="block">
                <Button className="w-full bg-eco-green-500 hover:bg-eco-green-600">Register as a Recycling Manager</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits section */}
      <section className="py-20 bg-eco-green-800 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Environmental Impact</h2>
            <p className="text-lg text-eco-green-100 max-w-3xl mx-auto">
              By using E-WasteAid, you're contributing to a significant reduction in environmental damage caused by improper e-waste disposal.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-eco-green-700 p-8 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Reduce Landfill Waste</h3>
              <p className="text-eco-green-100">
                Each year, millions of tons of e-waste end up in landfills. By recycling, you prevent harmful materials from contaminating soil and water.
              </p>
            </div>

            <div className="bg-eco-green-700 p-8 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Conserve Resources</h3>
              <p className="text-eco-green-100">
                Recycling recovers valuable materials like gold, silver, copper, and rare earth elements, reducing the need for environmentally destructive mining.
              </p>
            </div>

            <div className="bg-eco-green-700 p-8 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Reduce Carbon Emissions</h3>
              <p className="text-eco-green-100">
                Manufacturing new electronics from recycled materials uses significantly less energy than mining and processing raw materials.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link to="/signup">
              <Button className="bg-white text-eco-green-600 hover:bg-eco-green-50 px-8 py-6 text-lg">
                Join Our Green Movement
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Call to action */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-eco-green-800 mb-4">Ready to Make a Difference?</h2>
          <p className="text-lg text-eco-green-600 max-w-3xl mx-auto mb-8">
            Join E-WasteAid today and be part of the solution to the growing e-waste problem. 
            Together, we can create a more sustainable future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/signup">
              <Button className="bg-eco-green-500 hover:bg-eco-green-600 px-8 py-6 text-lg">
                Create Your Account
              </Button>
            </Link>
            <Link to="/login">
              <Button variant="outline" className="border-eco-green-500 text-eco-green-600 hover:bg-eco-green-50 px-8 py-6 text-lg">
                Sign In
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Index;
