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
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useAuth } from '@/lib/auth';

const StaffPortal = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const { toast } = useToast();
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('schedule');

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

  // Mock data for development
  const mockSchedule = [
    { day: 'Monday', subject: 'Mathematics', class: 'Grade 8', time: '8:00 AM - 9:30 AM' },
    { day: 'Monday', subject: 'Mathematics', class: 'Grade 7', time: '9:45 AM - 11:15 AM' },
    { day: 'Tuesday', subject: 'Mathematics', class: 'Grade 6', time: '8:00 AM - 9:30 AM' },
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
        
        <Tabs defaultValue="schedule" className="space-y-6" onValueChange={setActiveTab}>
          <TabsList>
            <TabsTrigger value="schedule">Teaching Schedule</TabsTrigger>
            <TabsTrigger value="employment">Employment Info</TabsTrigger>
            <TabsTrigger value="qualifications">Qualifications</TabsTrigger>
            <TabsTrigger value="profile">Profile</TabsTrigger>
          </TabsList>

          <TabsContent value="schedule">
            <Card>
              <CardHeader>
                <CardTitle>Teaching Schedule</CardTitle>
                <CardDescription>View your current teaching timetable</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3 px-4">Day</th>
                        <th className="text-left py-3 px-4">Subject</th>
                        <th className="text-left py-3 px-4">Class</th>
                        <th className="text-left py-3 px-4">Time</th>
                      </tr>
                    </thead>
                    <tbody>
                      {mockSchedule.map((schedule, index) => (
                        <tr key={index} className="border-b">
                          <td className="py-3 px-4">{schedule.day}</td>
                          <td className="py-3 px-4">{schedule.subject}</td>
                          <td className="py-3 px-4">{schedule.class}</td>
                          <td className="py-3 px-4">{schedule.time}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="employment">
            <Card>
              <CardHeader>
                <CardTitle>Employment Information</CardTitle>
                <CardDescription>View and update your employment details</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="employeeId">Employee ID</Label>
                      <Input id="employeeId" defaultValue="EMP001" disabled />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="department">Department</Label>
                      <Input id="department" defaultValue="Mathematics" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="position">Position</Label>
                      <Input id="position" defaultValue="Senior Teacher" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="joinDate">Join Date</Label>
                      <Input id="joinDate" type="date" />
                    </div>
                  </div>
                  <Button type="submit" className="bg-accentBlue hover:bg-accentBlue-600">
                    Update Employment Info
                  </Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="qualifications">
            <Card>
              <CardHeader>
                <CardTitle>Professional Qualifications</CardTitle>
                <CardDescription>Manage your academic and professional certifications</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="education">Education</Label>
                      <Textarea
                        id="education"
                        placeholder="List your academic qualifications"
                        className="min-h-[100px]"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="certifications">Professional Certifications</Label>
                      <Textarea
                        id="certifications"
                        placeholder="List your professional certifications"
                        className="min-h-[100px]"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="specialization">Areas of Specialization</Label>
                      <Input
                        id="specialization"
                        placeholder="e.g., Advanced Mathematics, Physics"
                      />
                    </div>
                  </div>
                  <Button type="submit" className="bg-accentBlue hover:bg-accentBlue-600">
                    Update Qualifications
                  </Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="profile">
            <Card>
              <CardHeader>
                <CardTitle>Personal Profile</CardTitle>
                <CardDescription>Update your contact information</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input id="name" defaultValue={user?.name} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" defaultValue={user?.email} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" type="tel" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="emergency">Emergency Contact</Label>
                      <Input id="emergency" type="tel" />
                    </div>
                    <div className="space-y-2 md:col-span-2">
                      <Label htmlFor="address">Residential Address</Label>
                      <Textarea id="address" className="min-h-[80px]" />
                    </div>
                  </div>
                  <Button type="submit" className="bg-accentBlue hover:bg-accentBlue-600">
                    Save Changes
                  </Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </PortalLayout>
  );
};

export default StaffPortal;
