
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CalendarIcon, MapPinIcon, TruckIcon, RecycleIcon } from "lucide-react";
import EwasteAIAssistant from "@/components/ai/EwasteAIAssistant";
import { Link } from "react-router-dom";

const ConsumerDashboard = () => {
  const [activeRequests, setActiveRequests] = useState([
    {
      id: "1",
      type: "Laptop and Accessories",
      status: "scheduled",
      scheduledDate: "Apr 8, 2025",
      scheduledTime: "9:00 AM - 12:00 PM"
    },
    {
      id: "2",
      type: "Old TV and DVD Player",
      status: "pending",
      createdAt: "Apr 5, 2025"
    }
  ]);

  const cancelRequest = (id: string) => {
    setActiveRequests(activeRequests.filter(request => request.id !== id));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Consumer Dashboard</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="lg:col-span-2">
          <Tabs defaultValue="ai" className="w-full">
            <TabsList className="grid grid-cols-3 mb-6">
              <TabsTrigger value="ai">AI Assistant</TabsTrigger>
              <TabsTrigger value="pickups">My Pickups</TabsTrigger>
              <TabsTrigger value="history">History</TabsTrigger>
            </TabsList>
            
            <TabsContent value="ai">
              <EwasteAIAssistant />
            </TabsContent>
            
            <TabsContent value="pickups">
              <Card>
                <CardHeader>
                  <CardTitle>Active Pickup Requests</CardTitle>
                  <CardDescription>Track your scheduled e-waste pickups</CardDescription>
                </CardHeader>
                <CardContent>
                  {activeRequests.length > 0 ? (
                    <div className="space-y-4">
                      {activeRequests.map((request) => (
                        <div key={request.id} className="p-4 border rounded-lg">
                          <div className="flex justify-between">
                            <div>
                              <h3 className="font-medium">{request.type}</h3>
                              {request.status === "scheduled" ? (
                                <p className="text-sm text-muted-foreground flex items-center mt-1">
                                  <CalendarIcon className="h-3 w-3 mr-1" />
                                  {request.scheduledDate}, {request.scheduledTime}
                                </p>
                              ) : (
                                <p className="text-sm text-muted-foreground">Pending scheduling</p>
                              )}
                            </div>
                            <Button 
                              variant="outline" 
                              size="sm" 
                              onClick={() => cancelRequest(request.id)}
                            >
                              Cancel
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-8">
                      <p className="text-muted-foreground mb-4">You don't have any active pickup requests.</p>
                      <Button className="bg-eco-green-500 hover:bg-eco-green-600" asChild>
                        <Link to="/schedule-pickup">Schedule a Pickup</Link>
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="history">
              <Card>
                <CardHeader>
                  <CardTitle>Recycling History</CardTitle>
                  <CardDescription>Your contribution to a greener planet</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-4 border rounded-lg">
                      <div className="flex justify-between">
                        <div>
                          <h3 className="font-medium">2 Smartphones, 1 Tablet</h3>
                          <p className="text-sm text-muted-foreground">Mar 15, 2025</p>
                        </div>
                        <div className="text-right">
                          <span className="text-xs bg-eco-green-100 text-eco-green-800 py-1 px-2 rounded-full">
                            3.2 kg CO2 saved
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="p-4 border rounded-lg">
                      <div className="flex justify-between">
                        <div>
                          <h3 className="font-medium">Desktop Computer, Monitor</h3>
                          <p className="text-sm text-muted-foreground">Feb 23, 2025</p>
                        </div>
                        <div className="text-right">
                          <span className="text-xs bg-eco-green-100 text-eco-green-800 py-1 px-2 rounded-full">
                            12.5 kg CO2 saved
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="p-4 border rounded-lg">
                      <div className="flex justify-between">
                        <div>
                          <h3 className="font-medium">Microwave, Toaster, Coffee Maker</h3>
                          <p className="text-sm text-muted-foreground">Jan 10, 2025</p>
                        </div>
                        <div className="text-right">
                          <span className="text-xs bg-eco-green-100 text-eco-green-800 py-1 px-2 rounded-full">
                            8.7 kg CO2 saved
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
        
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Recycling Impact</CardTitle>
              <CardDescription>Your environmental contribution</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-eco-green-600">24.4 kg</div>
                <p className="text-sm text-muted-foreground">CO2 emissions saved</p>
              </div>
              
              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="p-3 bg-eco-green-50 rounded-lg">
                  <div className="text-xl font-bold text-eco-green-600">6</div>
                  <p className="text-xs text-muted-foreground">Items recycled</p>
                </div>
                <div className="p-3 bg-eco-green-50 rounded-lg">
                  <div className="text-xl font-bold text-eco-green-600">3</div>
                  <p className="text-xs text-muted-foreground">Pickups completed</p>
                </div>
              </div>
              
              <div className="space-y-2 pt-4">
                <h3 className="text-sm font-medium">Quick Actions</h3>
                <div className="grid grid-cols-1 gap-2">
                  <Button className="bg-eco-green-500 hover:bg-eco-green-600 justify-start" asChild>
                    <Link to="/schedule-pickup">
                      <RecycleIcon className="mr-2 h-4 w-4" />
                      Schedule a Pickup
                    </Link>
                  </Button>
                  <Button variant="outline" className="border-eco-green-200 text-eco-green-700 hover:bg-eco-green-50 justify-start">
                    <MapPinIcon className="mr-2 h-4 w-4" />
                    Find Drop-off Points
                  </Button>
                  <Button variant="outline" className="border-eco-green-200 text-eco-green-700 hover:bg-eco-green-50 justify-start">
                    <TruckIcon className="mr-2 h-4 w-4" />
                    Track Current Pickup
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ConsumerDashboard;
