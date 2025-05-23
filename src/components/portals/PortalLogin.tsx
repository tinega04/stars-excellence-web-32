
import { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";
import { Eye, EyeOff, ArrowRight } from "lucide-react";

interface PortalLoginProps {
  title: string;
  description: string;
  onLogin: (username: string, password: string) => void;
  forgotPasswordLink?: string;
  createAccountLink?: string;
}

const PortalLogin = ({
  title,
  description,
  onLogin,
  forgotPasswordLink,
  createAccountLink
}: PortalLoginProps) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin(username, password);
  };

  return (
    <div className="flex justify-center items-center min-h-[70vh] p-4">
      <Card className="w-full max-w-md border-accentBlue">
        <CardHeader className="space-y-2 bg-darkBlue text-white rounded-t-lg">
          <CardTitle className="text-2xl font-bold text-white">{title}</CardTitle>
          <CardDescription className="text-white/80">{description}</CardDescription>
        </CardHeader>
        <CardContent className="pt-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                className="border-accentBlue/30 focus:border-accentBlue"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="border-accentBlue/30 focus:border-accentBlue pr-10"
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>
            
            <Button 
              type="submit" 
              className="w-full bg-accentBlue hover:bg-accentBlue-600 text-white"
            >
              Log In <ArrowRight size={16} className="ml-1" />
            </Button>
          </form>
        </CardContent>
        
        {(forgotPasswordLink || createAccountLink) && (
          <CardFooter className="flex flex-col space-y-2 pt-0">
            {forgotPasswordLink && (
              <Link 
                to={forgotPasswordLink} 
                className="text-sm text-accentBlue hover:underline self-end"
              >
                Forgot password?
              </Link>
            )}
            
            {createAccountLink && (
              <div className="text-sm text-center w-full pt-2 border-t">
                Don't have an account?{" "}
                <Link to={createAccountLink} className="text-accentBlue hover:underline font-medium">
                  Create one
                </Link>
              </div>
            )}
          </CardFooter>
        )}
      </Card>
    </div>
  );
};

export default PortalLogin;
