
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
import { useToast } from "@/components/ui/use-toast";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Bell } from "lucide-react";

const StaffPortal = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const { toast } = useToast();

  const handleLogin = (username: string, password: string) => {
    // Mock authentication check
    if (username === "staff" && password === "test123") {
      setUsername(username);
      setIsLoggedIn(true);
    } else {
      toast({
        title: "Login Failed",
        description: "Incorrect username or password. Try using: staff / test123",
        variant: "destructive"
      });
    }
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

  // Mock staff data
  const staffData = {
    name: "Jane Smith",
    role: "Senior Teacher",
    department: "Mathematics",
    email: "jane.smith@stevensschools.com",
    phone: "+254 712 345 678",
    dateJoined: "2023-01-15",
    employeeId: "EMP-20230115",
    nationalId: "12345678",
    emergencyContact: "+254 723 456 789",
    emergencyName: "John Smith",
    bankDetails: {
      bankName: "Equity Bank",
      branch: "Nairobi CBD",
      accountNumber: "0123456789"
    }
  };

  const announcements = [
    {
      id: 1,
      title: "Staff Meeting",
      date: "June 5, 2025",
      content: "General staff meeting to be held in the Main Hall at 2:30 PM."
    },
    {
      id: 2,
      title: "End of Term Exams",
      date: "June 15, 2025",
      content: "All teachers to submit exam papers for review by June 10th."
    },
    {
      id: 3,
      title: "Holiday Schedule",
      date: "June 20, 2025",
      content: "The school will close for midterm break from June 25th to July 5th."
    }
  ];

  return (
    <PortalLayout
      title="Staff Portal"
      userType="staff"
      username={username}
    >
      <div className="max-w-5xl mx-auto">
        <h1 className="text-2xl font-playfair font-bold text-darkBlue mb-6">Welcome, {username}</h1>
        
        <div className="grid lg:grid-cols-3 gap-6 mb-8">
          {/* Profile summary card */}
          <div className="lg:col-span-2">
            <Card className="border-accentBlue/20 h-full">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row gap-4 items-start">
                  <div className="bg-accentBlue/10 w-16 h-16 rounded-full flex items-center justify-center text-accentBlue text-2xl font-bold">
                    {staffData.name.substring(0, 1)}
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-medium text-darkBlue">{staffData.name}</h3>
                    <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
                      <div>
                        <span className="text-textGray mr-1">Position:</span>
                        <span className="text-darkBlue font-medium">{staffData.role}</span>
                      </div>
                      <div>
                        <span className="text-textGray mr-1">Department:</span>
                        <span className="text-darkBlue font-medium">{staffData.department}</span>
                      </div>
                      <div>
                        <span className="text-textGray mr-1">Joined:</span>
                        <span className="text-darkBlue font-medium">{staffData.dateJoined}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Announcements card */}
          <div>
            <Card className="border-accentBlue/20 h-full">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Bell size={16} className="text-accentBlue" />
                  <h3 className="text-lg font-medium text-darkBlue">Announcements</h3>
                </div>
                <div className="space-y-3">
                  {announcements.map((announcement) => (
                    <div 
                      key={announcement.id}
                      className="bg-softGray p-3 rounded-md"
                    >
                      <div className="flex justify-between items-start">
                        <h4 className="font-medium text-sm text-darkBlue">{announcement.title}</h4>
                        <span className="text-xs bg-accentBlue/10 text-accentBlue px-2 py-1 rounded">
                          {announcement.date}
                        </span>
                      </div>
                      <p className="text-xs text-textGray mt-1">{announcement.content}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        
        <DashboardSection title="Personal Information" description="Your employee profile and personal details">
          <div>
            <h3 className="font-medium text-darkBlue text-lg mb-4">Basic Information</h3>
            <div className="grid md:grid-cols-2 gap-x-6 gap-y-4">
              <div className="grid grid-cols-1 gap-2">
                <Label htmlFor="full-name">Full Name</Label>
                <Input id="full-name" value={staffData.name} />
              </div>
              
              <div className="grid grid-cols-1 gap-2">
                <Label htmlFor="id-number">National ID</Label>
                <Input id="id-number" value={staffData.nationalId} />
              </div>
              
              <div className="grid grid-cols-1 gap-2">
                <Label htmlFor="department">Department</Label>
                <Input id="department" value={staffData.department} />
              </div>
              
              <div className="grid grid-cols-1 gap-2">
                <Label htmlFor="position">Position</Label>
                <Input id="position" value={staffData.role} />
              </div>
              
              <div className="grid grid-cols-1 gap-2">
                <Label htmlFor="employment-date">Employment Start Date</Label>
                <Input id="employment-date" value={staffData.dateJoined} type="date" />
              </div>
              
              <div className="grid grid-cols-1 gap-2">
                <Label htmlFor="employee-id">Employee ID</Label>
                <Input id="employee-id" value={staffData.employeeId} disabled />
              </div>
            </div>
            
            <Separator className="my-8" />
            
            <h3 className="font-medium text-darkBlue text-lg mb-4">Contact Information</h3>
            <div className="grid md:grid-cols-2 gap-x-6 gap-y-4">
              <div className="grid grid-cols-1 gap-2">
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" value={staffData.email} />
              </div>
              
              <div className="grid grid-cols-1 gap-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" value={staffData.phone} />
              </div>
              
              <div className="grid grid-cols-1 gap-2">
                <Label htmlFor="emergency-contact">Emergency Contact</Label>
                <Input id="emergency-contact" value={staffData.emergencyContact} />
              </div>
              
              <div className="grid grid-cols-1 gap-2">
                <Label htmlFor="emergency-name">Emergency Contact Name</Label>
                <Input id="emergency-name" value={staffData.emergencyName} />
              </div>
            </div>
            
            <Separator className="my-8" />
            
            <h3 className="font-medium text-darkBlue text-lg mb-4">Banking Information</h3>
            <div className="grid md:grid-cols-2 gap-x-6 gap-y-4 mb-6">
              <div className="grid grid-cols-1 gap-2">
                <Label htmlFor="bank-name">Bank Name</Label>
                <Input id="bank-name" value={staffData.bankDetails.bankName} />
              </div>
              
              <div className="grid grid-cols-1 gap-2">
                <Label htmlFor="branch">Branch</Label>
                <Input id="branch" value={staffData.bankDetails.branch} />
              </div>
              
              <div className="grid grid-cols-1 gap-2">
                <Label htmlFor="account-number">Account Number</Label>
                <Input id="account-number" value={staffData.bankDetails.accountNumber} />
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
