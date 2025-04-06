
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Recycle, Archive, Box, Database, Users, Clock } from "lucide-react";
import { toast } from "sonner";

const RecyclingManagerDashboard = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Recycling Center Manager Dashboard</h1>
      
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Welcome back, Manager!</h2>
        <p className="text-muted-foreground">Manage your recycling center operations and performance.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center">
              <Box className="mr-2 h-5 w-5 text-eco-green-500" />
              Current Processing
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">2,850 kg</p>
            <p className="text-sm text-muted-foreground">73% of capacity</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center">
              <Recycle className="mr-2 h-5 w-5 text-eco-green-500" />
              Weekly Recycled
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">4,230 kg</p>
            <p className="text-sm text-muted-foreground">+8% from last week</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center">
              <Database className="mr-2 h-5 w-5 text-eco-green-500" />
              Raw Materials
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">1,560 kg</p>
            <p className="text-sm text-muted-foreground">Recovered this month</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center">
              <Users className="mr-2 h-5 w-5 text-eco-green-500" />
              Staff Productivity
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">91%</p>
            <p className="text-sm text-muted-foreground">Target: 85%</p>
          </CardContent>
        </Card>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Tabs defaultValue="incoming" className="w-full">
            <TabsList className="grid grid-cols-3 mb-6">
              <TabsTrigger value="incoming">Incoming Shipments</TabsTrigger>
              <TabsTrigger value="processing">Processing Status</TabsTrigger>
              <TabsTrigger value="materials">Material Recovery</TabsTrigger>
            </TabsList>
            
            <TabsContent value="incoming">
              <Card>
                <CardHeader>
                  <CardTitle>Incoming E-Waste Shipments</CardTitle>
                  <CardDescription>Expected deliveries from collection centers</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-4 border rounded-lg bg-eco-green-50">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="font-medium">North District Collection Center</h3>
                          <p className="text-sm text-muted-foreground">ETA: Today, 2:30 PM</p>
                        </div>
                        <Badge className="bg-eco-green-500">Arriving Today</Badge>
                      </div>
                      <p className="text-sm mb-2">Categories: Small Electronics, IT Equipment</p>
                      <p className="text-sm text-muted-foreground">Total weight: 580 kg</p>
                      <div className="flex justify-end mt-4">
                        <Button 
                          className="bg-eco-green-500 hover:bg-eco-green-600"
                          onClick={() => toast.success("Processing plan generated!")}
                        >
                          Generate Processing Plan
                        </Button>
                      </div>
                    </div>
                    
                    <div className="p-4 border rounded-lg">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="font-medium">Central Hub Collection</h3>
                          <p className="text-sm text-muted-foreground">ETA: Tomorrow, 10:15 AM</p>
                        </div>
                        <Badge variant="outline" className="border-eco-green-200 text-eco-green-700">
                          Scheduled
                        </Badge>
                      </div>
                      <p className="text-sm mb-2">Categories: Large Appliances</p>
                      <p className="text-sm text-muted-foreground">Total weight: 940 kg</p>
                    </div>
                    
                    <div className="p-4 border rounded-lg">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="font-medium">South District Collection Center</h3>
                          <p className="text-sm text-muted-foreground">ETA: In 2 days, 9:00 AM</p>
                        </div>
                        <Badge variant="outline" className="border-eco-green-200 text-eco-green-700">
                          Scheduled
                        </Badge>
                      </div>
                      <p className="text-sm mb-2">Categories: Screens & Monitors, Small Electronics</p>
                      <p className="text-sm text-muted-foreground">Total weight: 720 kg</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="processing">
              <Card>
                <CardHeader>
                  <CardTitle>Processing Status</CardTitle>
                  <CardDescription>Current recycling operations</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-4 border rounded-lg bg-eco-green-50">
                      <div className="flex justify-between items-center mb-2">
                        <h3 className="font-medium">Disassembly Line A</h3>
                        <Badge className="bg-eco-green-500">Active</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">Processing: Computers and Laptops</p>
                      <p className="text-sm mb-3">Current batch: 350 kg (62% complete)</p>
                      <div className="w-full bg-eco-green-100 rounded-full h-2.5">
                        <div className="bg-eco-green-600 h-2.5 rounded-full" style={{ width: "62%" }}></div>
                      </div>
                      <p className="text-xs text-right mt-1">Estimated completion: 3.5 hours</p>
                    </div>
                    
                    <div className="p-4 border rounded-lg bg-eco-green-50">
                      <div className="flex justify-between items-center mb-2">
                        <h3 className="font-medium">Disassembly Line B</h3>
                        <Badge className="bg-eco-green-500">Active</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">Processing: TVs and Monitors</p>
                      <p className="text-sm mb-3">Current batch: 420 kg (38% complete)</p>
                      <div className="w-full bg-eco-green-100 rounded-full h-2.5">
                        <div className="bg-eco-green-600 h-2.5 rounded-full" style={{ width: "38%" }}></div>
                      </div>
                      <p className="text-xs text-right mt-1">Estimated completion: 5 hours</p>
                    </div>
                    
                    <div className="p-4 border rounded-lg">
                      <div className="flex justify-between items-center mb-2">
                        <h3 className="font-medium">Large Appliance Processing</h3>
                        <Badge variant="outline" className="border-eco-green-200 text-eco-green-700">Scheduled</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">Processing: Refrigerators, Washing Machines</p>
                      <p className="text-sm">Scheduled start: Tomorrow, 8:00 AM</p>
                      <p className="text-sm text-muted-foreground">Batch size: 840 kg</p>
                    </div>
                    
                    <div className="p-4 border rounded-lg">
                      <div className="flex justify-between items-center mb-2">
                        <h3 className="font-medium">PCB & Component Recovery</h3>
                        <Badge variant="outline" className="border-eco-green-200 text-eco-green-700">
                          Maintenance
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">Scheduled restart: Tomorrow, 12:00 PM</p>
                      <p className="text-sm">Maintenance progress: 85% complete</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="materials">
              <Card>
                <CardHeader>
                  <CardTitle>Material Recovery</CardTitle>
                  <CardDescription>Recovered materials this month</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-4 border rounded-lg">
                      <div className="flex justify-between items-center mb-2">
                        <h3 className="font-medium">Metals</h3>
                        <Badge className="bg-eco-green-100 text-eco-green-800">820 kg</Badge>
                      </div>
                      <div className="grid grid-cols-2 gap-2 text-sm">
                        <div>
                          <p>Aluminum: 285 kg</p>
                          <p>Copper: 192 kg</p>
                        </div>
                        <div>
                          <p>Steel: 310 kg</p>
                          <p>Other metals: 33 kg</p>
                        </div>
                      </div>
                      <p className="text-xs text-muted-foreground mt-2">Recovery rate: 93%</p>
                    </div>
                    
                    <div className="p-4 border rounded-lg">
                      <div className="flex justify-between items-center mb-2">
                        <h3 className="font-medium">Plastics</h3>
                        <Badge className="bg-eco-green-100 text-eco-green-800">430 kg</Badge>
                      </div>
                      <div className="grid grid-cols-2 gap-2 text-sm">
                        <div>
                          <p>ABS: 185 kg</p>
                          <p>PP: 95 kg</p>
                        </div>
                        <div>
                          <p>PC: 75 kg</p>
                          <p>Other plastics: 75 kg</p>
                        </div>
                      </div>
                      <p className="text-xs text-muted-foreground mt-2">Recovery rate: 87%</p>
                    </div>
                    
                    <div className="p-4 border rounded-lg">
                      <div className="flex justify-between items-center mb-2">
                        <h3 className="font-medium">Precious Materials</h3>
                        <Badge className="bg-eco-green-100 text-eco-green-800">5.8 kg</Badge>
                      </div>
                      <div className="grid grid-cols-2 gap-2 text-sm">
                        <div>
                          <p>Gold: 0.24 kg</p>
                          <p>Silver: 2.1 kg</p>
                        </div>
                        <div>
                          <p>Palladium: 0.16 kg</p>
                          <p>Rare earth elements: 3.3 kg</p>
                        </div>
                      </div>
                      <p className="text-xs text-muted-foreground mt-2">Recovery rate: 96%</p>
                    </div>
                    
                    <div className="p-4 border rounded-lg">
                      <div className="flex justify-between items-center mb-2">
                        <h3 className="font-medium">Other Materials</h3>
                        <Badge className="bg-eco-green-100 text-eco-green-800">304 kg</Badge>
                      </div>
                      <div className="grid grid-cols-2 gap-2 text-sm">
                        <div>
                          <p>Glass: 152 kg</p>
                          <p>Circuit boards: 87 kg</p>
                        </div>
                        <div>
                          <p>Batteries: 45 kg</p>
                          <p>Other: 20 kg</p>
                        </div>
                      </div>
                      <p className="text-xs text-muted-foreground mt-2">Recovery rate: 81%</p>
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
              <CardTitle>Center Management</CardTitle>
              <CardDescription>Manage your recycling operations</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button
                className="w-full bg-eco-green-500 hover:bg-eco-green-600"
                onClick={() => toast.success("Report generated!")}
              >
                <Archive className="mr-2 h-4 w-4" />
                Generate Monthly Report
              </Button>
              <Button 
                variant="outline" 
                className="w-full border-eco-green-200 text-eco-green-700 hover:bg-eco-green-50"
                onClick={() => toast.success("Production schedule updated!")}
              >
                <Clock className="mr-2 h-4 w-4" />
                Update Production Schedule
              </Button>
              <Button 
                variant="outline" 
                className="w-full border-eco-green-200 text-eco-green-700 hover:bg-eco-green-50"
                onClick={() => toast.success("Material report generated!")}
              >
                <Database className="mr-2 h-4 w-4" />
                Material Recovery Analysis
              </Button>
              
              <div className="p-4 bg-eco-green-50 rounded-lg mt-6">
                <h3 className="font-medium mb-2">Facility Status</h3>
                <div className="flex justify-between text-sm mb-1">
                  <span>Processing capacity:</span>
                  <span className="font-medium">73% utilized</span>
                </div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Energy efficiency:</span>
                  <span className="font-medium">94%</span>
                </div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Average recovery rate:</span>
                  <span className="font-medium">89%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Next compliance audit:</span>
                  <span className="font-medium">In 12 days</span>
                </div>
              </div>
              
              <Button
                className="w-full mt-4 bg-eco-green-500 hover:bg-eco-green-600"
                onClick={() => toast.success("Staff assignments updated!")}
              >
                <Users className="mr-2 h-4 w-4" />
                Manage Staff Assignments
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default RecyclingManagerDashboard;
