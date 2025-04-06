
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "sonner";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

type UserRole = "consumer" | "driver" | "collector" | "recycling-manager";

const AuthForm = ({ type }: { type: "login" | "signup" }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [role, setRole] = useState<UserRole>("consumer");
  const [loading, setLoading] = useState(false);

  // This would be replaced with actual authentication logic
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Validation for signup
    if (type === "signup" && password !== confirmPassword) {
      toast.error("Passwords don't match");
      setLoading(false);
      return;
    }

    // Simulate authentication
    setTimeout(() => {
      setLoading(false);
      if (type === "login") {
        toast.success("Login successful!");
        navigate(`/dashboard/${role}`);
      } else {
        toast.success("Account created successfully!");
        navigate(`/dashboard/${role}`);
      }
    }, 1500);
  };

  const getDashboardRedirectPath = (userRole: UserRole) => {
    switch (userRole) {
      case "consumer":
        return "/dashboard/consumer";
      case "driver":
        return "/dashboard/driver";
      case "collector":
        return "/dashboard/collector";
      case "recycling-manager":
        return "/dashboard/recycling-manager";
      default:
        return "/dashboard/consumer";
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto border-eco-green-100">
      <CardHeader className="space-y-1 text-center">
        <CardTitle className="text-2xl font-bold">
          {type === "login" ? "Login to Your Account" : "Create an Account"}
        </CardTitle>
        <CardDescription>
          {type === "login"
            ? "Enter your email and password to log in"
            : "Fill in the details to create your account"}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          {type === "signup" && (
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
          )}
          
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              placeholder="Your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          
          {type === "signup" && (
            <>
              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Confirm Password</Label>
                <Input
                  id="confirmPassword"
                  type="password"
                  placeholder="Confirm your password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="role">I am a</Label>
                <Select value={role} onValueChange={(value) => setRole(value as UserRole)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your role" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="consumer">Public User</SelectItem>
                    <SelectItem value="driver">Transporter/Driver</SelectItem>
                    <SelectItem value="collector">E-Waste Collector</SelectItem>
                    <SelectItem value="recycling-manager">Recycling Center Manager</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </>
          )}
          
          <Button
            type="submit"
            className="w-full mt-6 bg-eco-green-500 hover:bg-eco-green-600 text-white"
            disabled={loading}
          >
            {loading ? "Processing..." : type === "login" ? "Login" : "Sign Up"}
          </Button>
        </form>
      </CardContent>
      <CardFooter className="flex flex-col space-y-2">
        <div className="text-sm text-center text-muted-foreground">
          {type === "login" ? (
            <>
              Don't have an account?{" "}
              <Link to="/signup" className="text-eco-green-600 hover:underline">
                Sign up
              </Link>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <Link to="/login" className="text-eco-green-600 hover:underline">
                Login
              </Link>
            </>
          )}
        </div>
      </CardFooter>
    </Card>
  );
};

export default AuthForm;
