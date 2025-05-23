
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import PortalLogin from "@/components/portals/PortalLogin";
import PortalLayout from "@/components/portals/PortalLayout";
import DashboardSection from "@/components/portals/DashboardSection";
import { Separator } from "@/components/ui/separator";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

const StaffPortal = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");

  const handleLogin = (username: string, password: string) => {
    // In a real app, this would validate credentials against a backend
    console.log("Logging in with:", username, password);
    setUsername(username);
    setIsLoggedIn(true);
  };

  if (!isLoggedIn) {
    return (
      <>
        <Helmet>
          <title>Staff Portal | Stevens Integrated Schools</title>
          <meta name="description" content="Access your staff profile and submit leave applications." />
        </Helmet>

        <div className="container mx-auto pt-8 pb-16">
          <div className="max-w-3xl mx-auto">
            <div className="mb-8 text-center">
              <h1 className="text-3xl font-playfair font-bold text-darkBlue mb-4">Staff Portal</h1>
              <p className="text-textGray max-w-lg mx-auto">
                Access your staff profile, submit leave applications, and manage your employment information. 
                Log in with your staff credentials.
              </p>
            </div>

            <div className="flex justify-center mb-8">
              <Link to="/" className="text-accentBlue hover:text-darkBlue">← Back to Home</Link>
            </div>

            <PortalLogin
              title="Staff Login"
              description="Access your staff portal"
              onLogin={handleLogin}
              forgotPasswordLink="#forgot-password"
            />
          </div>
        </div>
      </>
    );
  }

  return (
    <PortalLayout
      title="Staff Portal"
      userType="staff"
      username={username}
    >
      <div className="max-w-5xl mx-auto">
        <h1 className="text-2xl font-playfair font-bold text-darkBlue mb-6">Welcome, {username}</h1>
        
        <DashboardSection title="Personal Information" description="Your employee profile and personal details">
          <div>
            <h3 className="font-medium text-darkBlue text-lg mb-4">Basic Information</h3>
            <div className="grid md:grid-cols-2 gap-x-6 gap-y-4">
              <div className="grid grid-cols-1 gap-2">
                <Label htmlFor="full-name">Full Name</Label>
                <Input id="full-name" value="Jane Smith" disabled />
              </div>
              
              <div className="grid grid-cols-1 gap-2">
                <Label htmlFor="id-number">National ID</Label>
                <Input id="id-number" value="12345678" disabled />
              </div>
              
              <div className="grid grid-cols-1 gap-2">
                <Label htmlFor="department">Department</Label>
                <Input id="department" value="Mathematics" disabled />
              </div>
              
              <div className="grid grid-cols-1 gap-2">
                <Label htmlFor="position">Position</Label>
                <Input id="position" value="Senior Teacher" disabled />
              </div>
              
              <div className="grid grid-cols-1 gap-2">
                <Label htmlFor="employment-date">Employment Start Date</Label>
                <Input id="employment-date" value="2023-01-15" disabled />
              </div>
              
              <div className="grid grid-cols-1 gap-2">
                <Label htmlFor="employee-id">Employee ID</Label>
                <Input id="employee-id" value="EMP-20230115" disabled />
              </div>
            </div>
            
            <Separator className="my-8" />
            
            <h3 className="font-medium text-darkBlue text-lg mb-4">Contact Information</h3>
            <div className="grid md:grid-cols-2 gap-x-6 gap-y-4">
              <div className="grid grid-cols-1 gap-2">
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" value="jane.smith@stevensschools.com" />
              </div>
              
              <div className="grid grid-cols-1 gap-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" value="+254 712 345 678" />
              </div>
              
              <div className="grid grid-cols-1 gap-2">
                <Label htmlFor="emergency-contact">Emergency Contact</Label>
                <Input id="emergency-contact" value="+254 723 456 789" />
              </div>
              
              <div className="grid grid-cols-1 gap-2">
                <Label htmlFor="emergency-name">Emergency Contact Name</Label>
                <Input id="emergency-name" value="John Smith" />
              </div>
            </div>
            
            <Separator className="my-8" />
            
            <h3 className="font-medium text-darkBlue text-lg mb-4">Banking Information</h3>
            <div className="grid md:grid-cols-2 gap-x-6 gap-y-4 mb-6">
              <div className="grid grid-cols-1 gap-2">
                <Label htmlFor="bank-name">Bank Name</Label>
                <Input id="bank-name" value="Equity Bank" />
              </div>
              
              <div className="grid grid-cols-1 gap-2">
                <Label htmlFor="branch">Branch</Label>
                <Input id="branch" value="Nairobi CBD" />
              </div>
              
              <div className="grid grid-cols-1 gap-2">
                <Label htmlFor="account-number">Account Number</Label>
                <Input id="account-number" value="0123456789" />
              </div>
            </div>
            
            <Button className="bg-accentBlue hover:bg-accentBlue-600">
              Update Information
            </Button>
          </div>
        </DashboardSection>
        
        <DashboardSection title="Leave Application" description="Submit and track your leave requests">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h3 className="font-medium text-darkBlue mb-4">New Leave Request</h3>
              
              <div className="space-y-4">
                <div className="grid grid-cols-1 gap-2">
                  <Label htmlFor="leave-type">Leave Type</Label>
                  <Select>
                    <SelectTrigger id="leave-type" className="border-accentBlue/30">
                      <SelectValue placeholder="Select leave type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="annual">Annual Leave</SelectItem>
                      <SelectItem value="sick">Sick Leave</SelectItem>
                      <SelectItem value="maternity">Maternity Leave</SelectItem>
                      <SelectItem value="paternity">Paternity Leave</SelectItem>
                      <SelectItem value="bereavement">Bereavement</SelectItem>
                      <SelectItem value="study">Study Leave</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="grid grid-cols-1 gap-2">
                    <Label htmlFor="start-date">Start Date</Label>
                    <Input id="start-date" type="date" className="border-accentBlue/30" />
                  </div>
                  
                  <div className="grid grid-cols-1 gap-2">
                    <Label htmlFor="end-date">End Date</Label>
                    <Input id="end-date" type="date" className="border-accentBlue/30" />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 gap-2">
                  <Label htmlFor="reason">Reason</Label>
                  <Textarea 
                    id="reason" 
                    placeholder="Provide details for your leave request" 
                    className="resize-none h-32 border-accentBlue/30" 
                  />
                </div>
                
                <Button className="bg-accentBlue hover:bg-accentBlue-600 w-full sm:w-auto">
                  Submit Leave Request
                </Button>
              </div>
            </div>
            
            <div>
              <h3 className="font-medium text-darkBlue mb-4">Leave Balance</h3>
              <div className="border border-accentBlue/20 rounded-lg overflow-hidden">
                <div className="grid grid-cols-2 gap-4 p-4 bg-accentBlue/5">
                  <div>
                    <p className="text-sm text-textGray">Annual Leave</p>
                    <p className="text-2xl font-semibold text-darkBlue">15 days</p>
                  </div>
                  <div>
                    <p className="text-sm text-textGray">Sick Leave</p>
                    <p className="text-2xl font-semibold text-darkBlue">10 days</p>
                  </div>
                </div>
                <div className="p-4 border-t border-accentBlue/20">
                  <h4 className="font-medium text-sm mb-2">Recent Leave History</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-textGray">Annual Leave</span>
                      <div>
                        <span className="text-darkBlue">5 days</span>
                        <span className="text-xs text-textGray ml-2">Jan 5 - Jan 9, 2025</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-textGray">Sick Leave</span>
                      <div>
                        <span className="text-darkBlue">2 days</span>
                        <span className="text-xs text-textGray ml-2">Feb 12 - Feb 13, 2025</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </DashboardSection>
        
        <DashboardSection title="Password Management" description="Reset your account password">
          <div className="max-w-md">
            <div className="space-y-4">
              <div className="grid grid-cols-1 gap-2">
                <Label htmlFor="current-password">Current Password</Label>
                <Input id="current-password" type="password" />
              </div>
              
              <div className="grid grid-cols-1 gap-2">
                <Label htmlFor="new-password">New Password</Label>
                <Input id="new-password" type="password" />
              </div>
              
              <div className="grid grid-cols-1 gap-2">
                <Label htmlFor="confirm-password">Confirm New Password</Label>
                <Input id="confirm-password" type="password" />
              </div>
              
              <Button className="bg-accentBlue hover:bg-accentBlue-600">
                Reset Password
              </Button>
            </div>
          </div>
        </DashboardSection>
      </div>
    </PortalLayout>
  );
};

export default StaffPortal;
