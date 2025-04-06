
import { useState } from "react";
import MainLayout from "@/components/layout/MainLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { CalendarIcon, CheckIcon, TruckIcon } from "lucide-react";
import { toast } from "sonner";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { format } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";

const SchedulePickup = () => {
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    pickupDate: "",
    pickupTime: "",
    itemsDescription: "",
    itemsSize: "medium",
    itemsList: [] as string[],
  });

  // Common e-waste items
  const commonItems = [
    "Smartphone",
    "Laptop",
    "Desktop Computer",
    "Tablet",
    "TV",
    "Monitor",
    "Printer",
    "Scanner",
    "Gaming Console",
    "Stereo Equipment",
    "DVD/Blu-ray Player",
    "Camera",
    "Microwave",
    "Small Kitchen Appliances"
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleItemToggle = (item: string) => {
    setFormData(prev => {
      if (prev.itemsList.includes(item)) {
        return {
          ...prev,
          itemsList: prev.itemsList.filter(i => i !== item)
        };
      } else {
        return {
          ...prev,
          itemsList: [...prev.itemsList, item]
        };
      }
    });
  };

  const handleDateSelect = (selectedDate: Date | undefined) => {
    setDate(selectedDate);
    if (selectedDate) {
      setFormData(prev => ({
        ...prev,
        pickupDate: format(selectedDate, "PPP")
      }));
    }
  };

  const nextStep = () => {
    if (step === 1) {
      if (!formData.name || !formData.email || !formData.phone || 
          !formData.address || !formData.city || !formData.state || !formData.zipCode) {
        toast.error("Please fill in all required fields to continue");
        return;
      }
    } else if (step === 2) {
      if (!formData.pickupDate || !formData.pickupTime) {
        toast.error("Please select a pickup date and time");
        return;
      }
    }
    
    setStep(step + 1);
    window.scrollTo(0, 0);
  };

  const prevStep = () => {
    setStep(step - 1);
    window.scrollTo(0, 0);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.itemsList.length === 0 && !formData.itemsDescription) {
      toast.error("Please select items or provide a description of your e-waste");
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast.success("Your pickup has been scheduled successfully!");
      setIsSubmitting(false);
      setStep(4); // Success step
    }, 1500);
  };

  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-eco-green-700 mb-4">Schedule an E-Waste Pickup</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Complete the form below to schedule a convenient pickup for your electronic waste. Our team will handle 
            the responsible disposal and recycling.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Progress Tracker */}
          <div className="mb-8">
            <div className="flex justify-between items-center">
              <div className={`flex flex-col items-center ${step >= 1 ? 'text-eco-green-600' : 'text-gray-400'}`}>
                <div className={`h-10 w-10 rounded-full flex items-center justify-center border-2 ${step >= 1 ? 'border-eco-green-600 bg-eco-green-50' : 'border-gray-300'}`}>
                  {step > 1 ? <CheckIcon className="h-5 w-5" /> : <span>1</span>}
                </div>
                <span className="text-sm mt-1">Contact Info</span>
              </div>
              
              <div className={`flex-1 h-1 mx-2 ${step >= 2 ? 'bg-eco-green-500' : 'bg-gray-300'}`}></div>
              
              <div className={`flex flex-col items-center ${step >= 2 ? 'text-eco-green-600' : 'text-gray-400'}`}>
                <div className={`h-10 w-10 rounded-full flex items-center justify-center border-2 ${step >= 2 ? 'border-eco-green-600 bg-eco-green-50' : 'border-gray-300'}`}>
                  {step > 2 ? <CheckIcon className="h-5 w-5" /> : <span>2</span>}
                </div>
                <span className="text-sm mt-1">Schedule</span>
              </div>
              
              <div className={`flex-1 h-1 mx-2 ${step >= 3 ? 'bg-eco-green-500' : 'bg-gray-300'}`}></div>
              
              <div className={`flex flex-col items-center ${step >= 3 ? 'text-eco-green-600' : 'text-gray-400'}`}>
                <div className={`h-10 w-10 rounded-full flex items-center justify-center border-2 ${step >= 3 ? 'border-eco-green-600 bg-eco-green-50' : 'border-gray-300'}`}>
                  {step > 3 ? <CheckIcon className="h-5 w-5" /> : <span>3</span>}
                </div>
                <span className="text-sm mt-1">Items</span>
              </div>
              
              <div className={`flex-1 h-1 mx-2 ${step >= 4 ? 'bg-eco-green-500' : 'bg-gray-300'}`}></div>
              
              <div className={`flex flex-col items-center ${step >= 4 ? 'text-eco-green-600' : 'text-gray-400'}`}>
                <div className={`h-10 w-10 rounded-full flex items-center justify-center border-2 ${step >= 4 ? 'border-eco-green-600 bg-eco-green-50' : 'border-gray-300'}`}>
                  <span>4</span>
                </div>
                <span className="text-sm mt-1">Confirmation</span>
              </div>
            </div>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>
                {step === 1 && "Contact Information"}
                {step === 2 && "Pickup Schedule"}
                {step === 3 && "E-Waste Items"}
                {step === 4 && "Pickup Scheduled"}
              </CardTitle>
              <CardDescription>
                {step === 1 && "Provide your contact and address details"}
                {step === 2 && "Select a convenient date and time for pickup"}
                {step === 3 && "Tell us what items you need to recycle"}
                {step === 4 && "Your pickup has been confirmed"}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={step === 3 ? handleSubmit : (e) => e.preventDefault()}>
                {/* Step 1: Contact Information */}
                {step === 1 && (
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name*</Label>
                        <Input 
                          id="name"
                          name="name"
                          placeholder="Your full name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address*</Label>
                        <Input 
                          id="email"
                          name="email"
                          type="email"
                          placeholder="Your email address"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number*</Label>
                      <Input 
                        id="phone"
                        name="phone"
                        placeholder="Your phone number"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="address">Street Address*</Label>
                      <Input 
                        id="address"
                        name="address"
                        placeholder="Your street address"
                        value={formData.address}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="city">City*</Label>
                        <Input 
                          id="city"
                          name="city"
                          placeholder="City"
                          value={formData.city}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="state">State*</Label>
                        <Input 
                          id="state"
                          name="state"
                          placeholder="State"
                          value={formData.state}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="zipCode">Zip Code*</Label>
                        <Input 
                          id="zipCode"
                          name="zipCode"
                          placeholder="Zip code"
                          value={formData.zipCode}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="pt-4 flex justify-end">
                      <Button 
                        type="button" 
                        onClick={nextStep} 
                        className="bg-eco-green-600 hover:bg-eco-green-700"
                      >
                        Next Step
                      </Button>
                    </div>
                  </div>
                )}
                
                {/* Step 2: Pickup Schedule */}
                {step === 2 && (
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-2">
                        <Label>Pickup Date*</Label>
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button
                              variant={"outline"}
                              className={cn(
                                "w-full justify-start text-left font-normal",
                                !date && "text-muted-foreground"
                              )}
                            >
                              <CalendarIcon className="mr-2 h-4 w-4" />
                              {date ? format(date, "PPP") : <span>Select a date</span>}
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                              mode="single"
                              selected={date}
                              onSelect={handleDateSelect}
                              initialFocus
                              disabled={(date) => 
                                date < new Date() || 
                                date > new Date(new Date().setDate(new Date().getDate() + 30))
                              }
                            />
                          </PopoverContent>
                        </Popover>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="pickupTime">Preferred Time*</Label>
                        <Select
                          onValueChange={(value) => handleSelectChange("pickupTime", value)}
                          value={formData.pickupTime}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select a time slot" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="morning-8-12">Morning (8:00 AM - 12:00 PM)</SelectItem>
                            <SelectItem value="afternoon-12-4">Afternoon (12:00 PM - 4:00 PM)</SelectItem>
                            <SelectItem value="evening-4-8">Evening (4:00 PM - 8:00 PM)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    
                    <div className="bg-eco-green-50 p-4 rounded-lg mt-6">
                      <div className="flex items-start">
                        <div className="mr-4 mt-1">
                          <TruckIcon className="h-5 w-5 text-eco-green-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold">Pickup Guidelines:</h3>
                          <ul className="text-sm text-gray-600 mt-2 space-y-1 list-disc list-inside">
                            <li>Please ensure someone is available during the selected time slot.</li>
                            <li>Our driver will call 30 minutes before arrival.</li>
                            <li>Have your items ready and accessible for efficient pickup.</li>
                            <li>Cancellations must be made at least 24 hours in advance.</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div className="pt-4 flex justify-between">
                      <Button 
                        type="button" 
                        variant="outline" 
                        onClick={prevStep}
                      >
                        Back
                      </Button>
                      <Button 
                        type="button" 
                        onClick={nextStep} 
                        className="bg-eco-green-600 hover:bg-eco-green-700"
                      >
                        Next Step
                      </Button>
                    </div>
                  </div>
                )}
                
                {/* Step 3: E-Waste Items */}
                {step === 3 && (
                  <div className="space-y-6">
                    <div className="space-y-4">
                      <h3 className="font-medium">Common Items</h3>
                      <p className="text-sm text-gray-600">Select the items you want to recycle:</p>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {commonItems.map((item) => (
                          <div key={item} className="flex items-center space-x-2">
                            <Checkbox 
                              id={`item-${item}`} 
                              checked={formData.itemsList.includes(item)}
                              onCheckedChange={() => handleItemToggle(item)}
                            />
                            <label
                              htmlFor={`item-${item}`}
                              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                              {item}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-2 pt-2">
                      <Label htmlFor="itemsDescription">Other Items Description</Label>
                      <Textarea 
                        id="itemsDescription"
                        name="itemsDescription"
                        placeholder="Describe any other electronic items not listed above that you would like to recycle..."
                        value={formData.itemsDescription}
                        onChange={handleChange}
                        className="min-h-[100px]"
                      />
                    </div>
                    
                    <div className="space-y-2 pt-2">
                      <Label htmlFor="itemsSize">Approximate Size of All Items</Label>
                      <RadioGroup 
                        defaultValue={formData.itemsSize}
                        onValueChange={(value) => handleSelectChange("itemsSize", value)}
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="small" id="size-small" />
                          <Label htmlFor="size-small">Small (fits in a shoebox)</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="medium" id="size-medium" />
                          <Label htmlFor="size-medium">Medium (fits in a backpack)</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="large" id="size-large" />
                          <Label htmlFor="size-large">Large (needs a car trunk)</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="x-large" id="size-xlarge" />
                          <Label htmlFor="size-xlarge">Extra Large (multiple large items)</Label>
                        </div>
                      </RadioGroup>
                    </div>
                    
                    <div className="pt-4 flex justify-between">
                      <Button 
                        type="button" 
                        variant="outline" 
                        onClick={prevStep}
                      >
                        Back
                      </Button>
                      <Button 
                        type="submit" 
                        className="bg-eco-green-600 hover:bg-eco-green-700"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Scheduling..." : "Schedule Pickup"}
                      </Button>
                    </div>
                  </div>
                )}
                
                {/* Step 4: Confirmation */}
                {step === 4 && (
                  <div className="text-center py-8">
                    <div className="bg-eco-green-100 h-20 w-20 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckIcon className="h-10 w-10 text-eco-green-600" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-eco-green-700 mb-2">Pickup Successfully Scheduled!</h3>
                    <p className="text-gray-600 mb-6">
                      We've sent a confirmation email to {formData.email} with all the details.
                    </p>
                    
                    <div className="bg-gray-50 rounded-lg p-6 max-w-md mx-auto text-left">
                      <div className="space-y-3">
                        <div>
                          <span className="text-sm text-gray-500">Pickup Date:</span>
                          <p className="font-medium">{formData.pickupDate}</p>
                        </div>
                        <div>
                          <span className="text-sm text-gray-500">Pickup Time:</span>
                          <p className="font-medium">
                            {formData.pickupTime === "morning-8-12" && "Morning (8:00 AM - 12:00 PM)"}
                            {formData.pickupTime === "afternoon-12-4" && "Afternoon (12:00 PM - 4:00 PM)"}
                            {formData.pickupTime === "evening-4-8" && "Evening (4:00 PM - 8:00 PM)"}
                          </p>
                        </div>
                        <div>
                          <span className="text-sm text-gray-500">Address:</span>
                          <p className="font-medium">
                            {formData.address}, {formData.city}, {formData.state} {formData.zipCode}
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-8">
                      <Button asChild className="bg-eco-green-600 hover:bg-eco-green-700">
                        <a href="/dashboard/consumer">Go to Dashboard</a>
                      </Button>
                    </div>
                  </div>
                )}
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </MainLayout>
  );
};

export default SchedulePickup;
