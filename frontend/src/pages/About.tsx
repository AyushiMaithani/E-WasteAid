
import MainLayout from "@/components/layout/MainLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Recycle, Award, Leaf, Users } from "lucide-react";

const About = () => {
  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-eco-green-700 mb-4">About E-WasteAid</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're on a mission to make e-waste recycling accessible, convenient, and rewarding for everyone.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div>
            <h2 className="text-2xl font-bold text-eco-green-600 mb-4">Our Story</h2>
            <p className="text-gray-700 mb-4">
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quaerat quidem ad maiores cupiditate sint aspernatur consectetur dolorum ullam sed! Natus, sint id!
            </p>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae cumque iusto nostrum repellendus assumenda. Deleniti, sed nemo eius nostrum ipsa corporis quisquam dicta reprehenderit, harum expedita atque quis voluptate quaerat ratione ex. Facilis sapiente fugit doloribus, similique cumque quod illum?
            </p>
          </div>
          <div className="bg-eco-green-50 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-eco-green-600 mb-4">Our Impact</h2>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <p className="text-3xl font-bold text-eco-green-700">5,000+</p>
                <p className="text-gray-600">Devices Recycled</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-eco-green-700">1,200+</p>
                <p className="text-gray-600">Pickups Completed</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-eco-green-700">750+</p>
                <p className="text-gray-600">Tons of CO₂ Saved</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-eco-green-700">15+</p>
                <p className="text-gray-600">Partnered Centers</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-bold text-eco-green-600 mb-8 text-center">Our Values</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <Card>
              <CardContent className="pt-6">
                <div className="text-center mb-4">
                  <div className="bg-eco-green-100 p-3 rounded-full inline-flex justify-center">
                    <Recycle className="h-8 w-8 text-eco-green-600" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-center mb-2">Sustainability</h3>
                <p className="text-gray-600 text-center">
                  We're committed to reducing e-waste and promoting circular economy principles.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="text-center mb-4">
                  <div className="bg-eco-green-100 p-3 rounded-full inline-flex justify-center">
                    <Award className="h-8 w-8 text-eco-green-600" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-center mb-2">Quality</h3>
                <p className="text-gray-600 text-center">
                  We ensure the highest standards in every aspect of our recycling processes.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="text-center mb-4">
                  <div className="bg-eco-green-100 p-3 rounded-full inline-flex justify-center">
                    <Leaf className="h-8 w-8 text-eco-green-600" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-center mb-2">Innovation</h3>
                <p className="text-gray-600 text-center">
                  We continuously explore new technologies to improve our recycling solutions.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="text-center mb-4">
                  <div className="bg-eco-green-100 p-3 rounded-full inline-flex justify-center">
                    <Users className="h-8 w-8 text-eco-green-600" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-center mb-2">Community</h3>
                <p className="text-gray-600 text-center">
                  We believe in the power of collective action to create meaningful change.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-eco-green-600 mb-8 text-center">Our Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-gray-200 h-48 rounded-lg mb-4"></div>
              <h3 className="text-xl font-semibold">Ayushi Maithani</h3>
            </div>
            <div className="text-center">
              <div className="bg-gray-200 h-48 rounded-lg mb-4"></div>
              <h3 className="text-xl font-semibold">Tanvi Dhamanda</h3>
            </div>
            <div className="text-center">
              <div className="bg-gray-200 h-48 rounded-lg mb-4"></div>
              <h3 className="text-xl font-semibold">Chandrika Joshi </h3>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default About;
