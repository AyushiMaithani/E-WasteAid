
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Car, MapPin, Clock, Box, Check } from "lucide-react";
import { toast } from "sonner";

const DriverDashboard = () => {
  const [activePickups, setActivePickups] = useState([
    {
      id: "1",
      status: "assigned",
      address: "123 Green St, Eco City",
      date: "Apr 7, 2025",
      time: "10:00 AM - 12:00 PM",
      items: "2 laptops, 1 printer",
      distance: "3.2 km"
    },
    {
      id: "2",
      status: "assigned",
      address: "456 Forest Ave, Eco City",
      date: "Apr 7, 2025",
      time: "1:30 PM - 3:30 PM",
      items: "1 TV, 2 monitors",
      distance: "5.1 km"
    }
  ]);

  const completePickup = (id: string) => {
    setActivePickups(activePickups.filter(pickup => pickup.id !== id));
    toast.success("Pickup marked as complete!");
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Driver Dashboard</h1>
      
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Welcome back, Driver!</h2>
        <p className="text-muted-foreground">Manage your e-waste transportation tasks.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center">
              <Car className="mr-2 h-5 w-5 text-eco-green-500" />
              Today's Pickups
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">2</p>
            <p className="text-sm text-muted-foreground">Total distance: 8.3 km</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center">
              <Box className="mr-2 h-5 w-5 text-eco-green-500" />
              Weekly Collections
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">156 kg</p>
            <p className="text-sm text-muted-foreground">From 14 pickups</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center">
              <Clock className="mr-2 h-5 w-5 text-eco-green-500" />
              Next Schedule
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">10:00 AM</p>
            <p className="text-sm text-muted-foreground">Today, Apr 7</p>
          </CardContent>
        </Card>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Tabs defaultValue="today" className="w-full">
            <TabsList className="grid grid-cols-3 mb-6">
              <TabsTrigger value="today">Today's Schedule</TabsTrigger>
              <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
              <TabsTrigger value="completed">Completed</TabsTrigger>
            </TabsList>
            
            <TabsContent value="today">
              <Card>
                <CardHeader>
                  <CardTitle>Today's Pickup Schedule</CardTitle>
                  <CardDescription>April 7, 2025</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {activePickups.map((pickup) => (
                      <div key={pickup.id} className="p-4 border rounded-lg bg-eco-green-50">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <h3 className="font-medium">{pickup.address}</h3>
                            <p className="text-sm text-muted-foreground">{pickup.time}</p>
                          </div>
                          <Badge className="bg-eco-green-500">{pickup.distance} away</Badge>
                        </div>
                        <p className="text-sm mb-4">Items: {pickup.items}</p>
                        <div className="flex justify-between items-center">
                          <Button 
                            variant="outline" 
                            className="text-eco-green-600 border-eco-green-200"
                            onClick={() => toast.success("Navigation started!")}
                          >
                            <MapPin className="mr-2 h-4 w-4" />
                            Navigate
                          </Button>
                          <Button 
                            className="bg-eco-green-500 hover:bg-eco-green-600"
                            onClick={() => completePickup(pickup.id)}
                          >
                            <Check className="mr-2 h-4 w-4" />
                            Mark Complete
                          </Button>
                        </div>
                      </div>
                    ))}
                    
                    {activePickups.length === 0 && (
                      <div className="text-center py-8">
                        <p>No more pickups scheduled for today.</p>
                        <Button 
                          className="mt-4 bg-eco-green-500 hover:bg-eco-green-600"
                          onClick={() => toast.success("Checking for new assignments...")}
                        >
                          Check for New Assignments
                        </Button>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="upcoming">
              <Card>
                <CardHeader>
                  <CardTitle>Upcoming Schedule</CardTitle>
                  <CardDescription>Your future assignments</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-4 border rounded-lg">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-medium">789 Recycle Blvd, Eco City</h3>
                          <p className="text-sm text-muted-foreground">Apr 8, 2025, 9:00 AM - 11:00 AM</p>
                          <p className="text-sm">Items: 3 desktop computers, 1 microwave</p>
                        </div>
                        <Badge variant="outline" className="border-eco-green-200 text-eco-green-700">
                          Tomorrow
                        </Badge>
                      </div>
                    </div>
                    
                    <div className="p-4 border rounded-lg">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-medium">321 Nature St, Eco City</h3>
                          <p className="text-sm text-muted-foreground">Apr 8, 2025, 1:00 PM - 3:00 PM</p>
                          <p className="text-sm">Items: 2 printers, 4 old phones</p>
                        </div>
                        <Badge variant="outline" className="border-eco-green-200 text-eco-green-700">
                          Tomorrow
                        </Badge>
                      </div>
                    </div>
                    
                    <div className="p-4 border rounded-lg">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-medium">555 Sustainability Rd, Eco City</h3>
                          <p className="text-sm text-muted-foreground">Apr 9, 2025, 10:30 AM - 12:30 PM</p>
                          <p className="text-sm">Items: 1 refrigerator, 1 washing machine</p>
                        </div>
                        <Badge variant="outline" className="border-eco-green-200 text-eco-green-700">
                          2 days
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="completed">
              <Card>
                <CardHeader>
                  <CardTitle>Completed Pickups</CardTitle>
                  <CardDescription>Your recent completed assignments</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-4 border rounded-lg">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="font-medium">987 Green Ave, Eco City</h3>
                          <p className="text-sm text-muted-foreground">Apr 6, 2025</p>
                        </div>
                        <Badge className="bg-eco-green-100 text-eco-green-800">30.5 kg collected</Badge>
                      </div>
                      <p className="text-sm">Items: 1 TV, 2 laptops, 1 air conditioner</p>
                    </div>
                    
                    <div className="p-4 border rounded-lg">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="font-medium">654 Earth St, Eco City</h3>
                          <p className="text-sm text-muted-foreground">Apr 5, 2025</p>
                        </div>
                        <Badge className="bg-eco-green-100 text-eco-green-800">18.3 kg collected</Badge>
                      </div>
                      <p className="text-sm">Items: 3 monitors, 1 printer, 5 keyboards</p>
                    </div>
                    
                    <div className="p-4 border rounded-lg">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="font-medium">321 Renewable Dr, Eco City</h3>
                          <p className="text-sm text-muted-foreground">Apr 4, 2025</p>
                        </div>
                        <Badge className="bg-eco-green-100 text-eco-green-800">22.1 kg collected</Badge>
                      </div>
                      <p className="text-sm">Items: 2 desktop computers, 1 server rack</p>
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
              <CardTitle>Driver Tools</CardTitle>
              <CardDescription>Manage your daily operations</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button
                className="w-full bg-eco-green-500 hover:bg-eco-green-600"
                onClick={() => toast.success("Route optimization completed!")}
              >
                <MapPin className="mr-2 h-4 w-4" />
                Optimize Today's Route
              </Button>
              <Button 
                variant="outline" 
                className="w-full border-eco-green-200 text-eco-green-700 hover:bg-eco-green-50"
                onClick={() => toast.success("Status updated to Available!")}
              >
                <Car className="mr-2 h-4 w-4" />
                Update Availability
              </Button>
              <Button 
                variant="outline" 
                className="w-full border-eco-green-200 text-eco-green-700 hover:bg-eco-green-50"
                onClick={() => toast.success("Daily report submitted!")}
              >
                <Box className="mr-2 h-4 w-4" />
                Submit Daily Report
              </Button>
              <div className="p-4 bg-eco-green-50 rounded-lg mt-6">
                <h3 className="font-medium mb-2">Today's Performance</h3>
                <div className="flex justify-between text-sm mb-1">
                  <span>On-time pickups:</span>
                  <span className="font-medium">100%</span>
                </div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Average time per pickup:</span>
                  <span className="font-medium">18 min</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Fuel efficiency:</span>
                  <span className="font-medium">Good</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default DriverDashboard;
