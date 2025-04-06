
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Loader2, Upload, HelpCircle } from "lucide-react";
import { pipeline } from "@huggingface/transformers";

const EWASTE_CATEGORIES = [
  { 
    name: "Large Appliances", 
    examples: "Refrigerators, Washing Machines, Dishwashers, Air Conditioners",
    disposal: "These require special handling due to their size and potentially harmful components."
  },
  { 
    name: "Small Appliances", 
    examples: "Microwaves, Toasters, Vacuum Cleaners, Fans",
    disposal: "These can often be brought to local e-waste collection events."
  },
  { 
    name: "IT and Telecommunications", 
    examples: "Computers, Laptops, Mobile Phones, Tablets, Printers",
    disposal: "Contains valuable materials that can be recovered; many manufacturers offer take-back programs."
  },
  { 
    name: "Consumer Electronics", 
    examples: "TVs, Cameras, Radios, Audio Equipment",
    disposal: "Often contain lead and mercury; should be taken to certified recyclers."
  },
  { 
    name: "Lighting Equipment", 
    examples: "Fluorescent Tubes, LED Bulbs, Lamps",
    disposal: "May contain mercury; special handling required."
  },
  { 
    name: "Batteries", 
    examples: "Alkaline, Lithium, Button Cells, Car Batteries",
    disposal: "Different types require different disposal methods; never throw in regular trash."
  }
];

const EwasteAIAssistant = () => {
  const [query, setQuery] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [result, setResult] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [filePreview, setFilePreview] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];
      setFile(selectedFile);
      
      // Create preview for images
      if (selectedFile.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = (e) => {
          setFilePreview(e.target?.result as string);
        };
        reader.readAsDataURL(selectedFile);
      } else {
        setFilePreview(null);
      }
    }
  };

  const analyzeWaste = async () => {
    if (!query && !file) {
      toast.error("Please enter a description or upload an image of your e-waste item");
      return;
    }

    setIsLoading(true);
    setResult(null);

    try {
      // For text-based query
      if (query && !file) {
        // In a real implementation, this would use a properly fine-tuned model
        // For this demo, we're using a simple text classification approach
        
        // Simulate AI processing
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        // Find the most likely category based on keyword matching
        const keywords = query.toLowerCase().split(" ");
        const scores = EWASTE_CATEGORIES.map(category => {
          let score = 0;
          const categoryKeywords = category.examples.toLowerCase().split(/[ ,]/);
          keywords.forEach(word => {
            if (categoryKeywords.some(keyword => keyword.includes(word) || word.includes(keyword))) {
              score += 1;
            }
            if (category.name.toLowerCase().includes(word)) {
              score += 2;
            }
          });
          return { category, score };
        });
        
        const bestMatch = scores.sort((a, b) => b.score - a.score)[0];
        
        if (bestMatch.score > 0) {
          setResult(`Based on your description, this appears to be in the "${bestMatch.category.name}" category.
          
Examples: ${bestMatch.category.examples}
          
Disposal Recommendation: ${bestMatch.category.disposal}`);
        } else {
          setResult("I couldn't determine the e-waste category from your description. Please provide more details or upload an image.");
        }
      } 
      // For image-based analysis
      else if (file) {
        if (file.type.startsWith('image/')) {
          try {
            // Initialize image classification pipeline using transformers.js
            const classifier = await pipeline(
              "image-classification",
              "onnx-community/mobilenetv4_conv_small.e2400_r224_in1k"
            );
            
            // Classify the image
            const results = await classifier(filePreview);
            console.log("Classification results:", results);
            
            // Map the classification results to e-waste categories
            // This is a simplified mapping and would need to be refined in a real application
            let detectedObjects = results.map((item: any) => item.label.split(',')[0]).slice(0, 3);
            
            setResult(`I detected: ${detectedObjects.join(", ")}
            
Based on what I can see, this might be in the "Consumer Electronics" or "IT and Telecommunications" category.

For accurate categorization, please consult your local e-waste recycling guidelines or contact a recycling center.`);
            
          } catch (error) {
            console.error("Error classifying image:", error);
            setResult("I had trouble analyzing your image. For now, you can describe your item or consult your local e-waste guidelines.");
          }
        } else {
          setResult("The file you uploaded is not an image. Please upload an image file or provide a text description.");
        }
      }
    } catch (error) {
      console.error("AI processing error:", error);
      toast.error("An error occurred while analyzing your e-waste");
      setResult("I encountered an error while processing your request. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="w-full">
      <CardHeader className="bg-eco-green-50">
        <CardTitle className="flex items-center">
          <HelpCircle className="h-5 w-5 mr-2 text-eco-green-600" />
          E-Waste AI Assistant
        </CardTitle>
        <CardDescription>
          Get help identifying and categorizing your electronic waste
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="query">Describe your e-waste item</Label>
            <Textarea
              id="query"
              placeholder="E.g., Old smartphone with cracked screen, doesn't turn on"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              rows={3}
              className="resize-none"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="image">Or upload an image</Label>
            <div className="flex items-center gap-2">
              <Input
                id="image"
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="max-w-md"
              />
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => {
                  setFile(null);
                  setFilePreview(null);
                }}
                disabled={!file}
              >
                Clear
              </Button>
            </div>
            {filePreview && (
              <div className="mt-2">
                <img 
                  src={filePreview} 
                  alt="Preview" 
                  className="max-h-48 rounded-md border" 
                />
              </div>
            )}
          </div>

          <Button 
            onClick={analyzeWaste} 
            className="w-full bg-eco-green-500 hover:bg-eco-green-600"
            disabled={isLoading || (!query && !file)}
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Analyzing...
              </>
            ) : (
              <>
                <Upload className="mr-2 h-4 w-4" />
                Analyze E-Waste
              </>
            )}
          </Button>

          {result && (
            <div className="mt-4 p-4 bg-eco-green-50 rounded-md border border-eco-green-200">
              <h4 className="text-md font-medium mb-2">Analysis Result:</h4>
              <p className="whitespace-pre-line text-sm">{result}</p>
            </div>
          )}
        </div>
      </CardContent>
      <CardFooter className="bg-eco-green-50/50 text-xs text-muted-foreground">
        This AI assistant provides general guidance. Always check with local recycling regulations.
      </CardFooter>
    </Card>
  );
};

export default EwasteAIAssistant;
