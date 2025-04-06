
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Box, Recycle, Clock, MapPin, Archive, User } from "lucide-react";
import { toast } from "sonner";

const CollectorDashboard = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">E-Waste Collector Dashboard</h1>
      
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Welcome back, Collector!</h2>
        <p className="text-muted-foreground">Manage your collection operations and inventory.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center">
              <Box className="mr-2 h-5 w-5 text-eco-green-500" />
              Current Inventory
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">1,243 kg</p>
            <p className="text-sm text-muted-foreground">84% of capacity</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center">
              <Recycle className="mr-2 h-5 w-5 text-eco-green-500" />
              Weekly Collection
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">358 kg</p>
            <p className="text-sm text-muted-foreground">+12% from last week</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center">
              <Clock className="mr-2 h-5 w-5 text-eco-green-500" />
              Next Pickup
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">Today</p>
            <p className="text-sm text-muted-foreground">10:00 AM - 3 scheduled</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center">
              <User className="mr-2 h-5 w-5 text-eco-green-500" />
              Active Drivers
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">4</p>
            <p className="text-sm text-muted-foreground">All routes assigned</p>
          </CardContent>
        </Card>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Tabs defaultValue="incoming" className="w-full">
            <TabsList className="grid grid-cols-3 mb-6">
              <TabsTrigger value="incoming">Incoming Deliveries</TabsTrigger>
              <TabsTrigger value="inventory">Inventory</TabsTrigger>
              <TabsTrigger value="outgoing">Outgoing Transfers</TabsTrigger>
            </TabsList>
            
            <TabsContent value="incoming">
              <Card>
                <CardHeader>
                  <CardTitle>Today's Incoming Deliveries</CardTitle>
                  <CardDescription>Expected e-waste arrivals</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-4 border rounded-lg bg-eco-green-50">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="font-medium">Driver: Michael Johnson</h3>
                          <p className="text-sm text-muted-foreground">ETA: 10:30 AM</p>
                        </div>
                        <Badge className="bg-eco-green-500">In Progress</Badge>
                      </div>
                      <p className="text-sm mb-2">Items: 3 TVs, 5 laptops, 1 refrigerator</p>
                      <p className="text-sm text-muted-foreground">Estimated weight: 95 kg</p>
                      <div className="flex justify-end mt-4">
                        <Button 
                          className="bg-eco-green-500 hover:bg-eco-green-600" 
                          onClick={() => toast.success("Ready for receiving!")}
                        >
                          Mark as Ready
                        </Button>
                      </div>
                    </div>
                    
                    <div className="p-4 border rounded-lg">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="font-medium">Driver: Sarah Williams</h3>
                          <p className="text-sm text-muted-foreground">ETA: 1:45 PM</p>
                        </div>
                        <Badge variant="outline" className="border-eco-green-200 text-eco-green-700">
                          Scheduled
                        </Badge>
                      </div>
                      <p className="text-sm mb-2">Items: 4 monitors, 8 keyboards, 7 mice, 2 printers</p>
                      <p className="text-sm text-muted-foreground">Estimated weight: 62 kg</p>
                    </div>
                    
                    <div className="p-4 border rounded-lg">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="font-medium">Driver: David Chen</h3>
                          <p className="text-sm text-muted-foreground">ETA: 3:15 PM</p>
                        </div>
                        <Badge variant="outline" className="border-eco-green-200 text-eco-green-700">
                          Scheduled
                        </Badge>
                      </div>
                      <p className="text-sm mb-2">Items: 1 washing machine, 1 dishwasher, 3 microwaves</p>
                      <p className="text-sm text-muted-foreground">Estimated weight: 108 kg</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="inventory">
              <Card>
                <CardHeader>
                  <CardTitle>Current Inventory</CardTitle>
                  <CardDescription>E-waste by category</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-4 border rounded-lg">
                      <div className="flex justify-between items-center mb-2">
                        <h3 className="font-medium">Large Appliances</h3>
                        <Badge className="bg-eco-green-100 text-eco-green-800">580 kg</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">Refrigerators, Washing Machines, Dishwashers, etc.</p>
                      <div className="w-full bg-eco-green-100 rounded-full h-2.5 mt-2">
                        <div className="bg-eco-green-500 h-2.5 rounded-full" style={{ width: "74%" }}></div>
                      </div>
                      <p className="text-xs text-right mt-1">74% of capacity</p>
                    </div>
                    
                    <div className="p-4 border rounded-lg">
                      <div className="flex justify-between items-center mb-2">
                        <h3 className="font-medium">Screens & Monitors</h3>
                        <Badge className="bg-eco-green-100 text-eco-green-800">325 kg</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">TVs, Computer Monitors, Laptops</p>
                      <div className="w-full bg-eco-green-100 rounded-full h-2.5 mt-2">
                        <div className="bg-eco-green-500 h-2.5 rounded-full" style={{ width: "92%" }}></div>
                      </div>
                      <p className="text-xs text-right mt-1">92% of capacity</p>
                    </div>
                    
                    <div className="p-4 border rounded-lg">
                      <div className="flex justify-between items-center mb-2">
                        <h3 className="font-medium">Small Electronics</h3>
                        <Badge className="bg-eco-green-100 text-eco-green-800">192 kg</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">Phones, Tablets, Keyboards, Mice</p>
                      <div className="w-full bg-eco-green-100 rounded-full h-2.5 mt-2">
                        <div className="bg-eco-green-500 h-2.5 rounded-full" style={{ width: "64%" }}></div>
                      </div>
                      <p className="text-xs text-right mt-1">64% of capacity</p>
                    </div>
                    
                    <div className="p-4 border rounded-lg">
                      <div className="flex justify-between items-center mb-2">
                        <h3 className="font-medium">IT Equipment</h3>
                        <Badge className="bg-eco-green-100 text-eco-green-800">146 kg</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">Printers, Servers, Networking Equipment</p>
                      <div className="w-full bg-eco-green-100 rounded-full h-2.5 mt-2">
                        <div className="bg-eco-green-500 h-2.5 rounded-full" style={{ width: "48%" }}></div>
                      </div>
                      <p className="text-xs text-right mt-1">48% of capacity</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="outgoing">
              <Card>
                <CardHeader>
                  <CardTitle>Outgoing Transfers</CardTitle>
                  <CardDescription>Scheduled transfers to recycling centers</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-4 border rounded-lg bg-eco-green-50">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="font-medium">TechRecycle Center</h3>
                          <p className="text-sm text-muted-foreground">Scheduled: Tomorrow, 9:00 AM</p>
                        </div>
                        <Badge className="bg-eco-green-500">Ready for Transfer</Badge>
                      </div>
                      <p className="text-sm mb-2">Categories: Small Electronics, IT Equipment</p>
                      <p className="text-sm text-muted-foreground">Total weight: 240 kg</p>
                      <div className="flex justify-end mt-4">
                        <Button variant="outline" className="mr-2 border-eco-green-200 text-eco-green-700">
                          View Details
                        </Button>
                        <Button 
                          className="bg-eco-green-500 hover:bg-eco-green-600"
                          onClick={() => toast.success("Documentation prepared!")}
                        >
                          Prepare Documentation
                        </Button>
                      </div>
                    </div>
                    
                    <div className="p-4 border rounded-lg">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="font-medium">EcoProcess Industries</h3>
                          <p className="text-sm text-muted-foreground">Scheduled: In 3 days</p>
                        </div>
                        <Badge variant="outline" className="border-eco-green-200 text-eco-green-700">
                          Scheduled
                        </Badge>
                      </div>
                      <p className="text-sm mb-2">Categories: Large Appliances</p>
                      <p className="text-sm text-muted-foreground">Total weight: 420 kg</p>
                    </div>
                    
                    <div className="p-4 border rounded-lg">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="font-medium">Green Materials Recovery</h3>
                          <p className="text-sm text-muted-foreground">Scheduled: In 5 days</p>
                        </div>
                        <Badge variant="outline" className="border-eco-green-200 text-eco-green-700">
                          Scheduled
                        </Badge>
                      </div>
                      <p className="text-sm mb-2">Categories: Screens & Monitors</p>
                      <p className="text-sm text-muted-foreground">Total weight: 280 kg</p>
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
              <CardTitle>Collection Management</CardTitle>
              <CardDescription>Manage your collection operations</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button
                className="w-full bg-eco-green-500 hover:bg-eco-green-600"
                onClick={() => toast.success("New pickup request created!")}
              >
                <Box className="mr-2 h-4 w-4" />
                Create Pickup Request
              </Button>
              <Button 
                variant="outline" 
                className="w-full border-eco-green-200 text-eco-green-700 hover:bg-eco-green-50"
                onClick={() => toast.success("Report generated!")}
              >
                <Archive className="mr-2 h-4 w-4" />
                Generate Inventory Report
              </Button>
              <Button 
                variant="outline" 
                className="w-full border-eco-green-200 text-eco-green-700 hover:bg-eco-green-50"
                onClick={() => toast.success("Transfer documentation ready!")}
              >
                <Recycle className="mr-2 h-4 w-4" />
                Schedule Transfer to Recycling
              </Button>
              
              <div className="p-4 bg-eco-green-50 rounded-lg mt-6">
                <h3 className="font-medium mb-2">Collection Center Status</h3>
                <div className="flex justify-between text-sm mb-1">
                  <span>Storage capacity:</span>
                  <span className="font-medium">84% filled</span>
                </div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Processing efficiency:</span>
                  <span className="font-medium">92%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Next scheduled maintenance:</span>
                  <span className="font-medium">In 5 days</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CollectorDashboard;
