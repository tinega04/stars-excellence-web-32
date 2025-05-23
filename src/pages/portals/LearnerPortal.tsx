
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import PortalLogin from "@/components/portals/PortalLogin";
import PortalLayout from "@/components/portals/PortalLayout";
import DashboardSection from "@/components/portals/DashboardSection";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { 
  Table, 
  TableBody, 
  TableCaption, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { ArrowRight, Download } from "lucide-react";

const LearnerPortal = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const { toast } = useToast();

  const handleLogin = (username: string, password: string) => {
    // Mock authentication check
    if (username === "learner" && password === "test123") {
      setUsername(username);
      setIsLoggedIn(true);
    } else {
      toast({
        title: "Login Failed",
        description: "Incorrect username or password. Try using: learner / test123",
        variant: "destructive"
      });
    }
  };

  if (!isLoggedIn) {
    return (
      <>
        <Helmet>
          <title>Learner Portal | Stevens Integrated Schools</title>
          <meta name="description" content="Access your academic information, fee statements, and profile data." />
        </Helmet>

        <div className="container mx-auto pt-8 pb-16">
          <div className="max-w-3xl mx-auto">
            <div className="mb-8 text-center">
              <h1 className="text-3xl font-playfair font-bold text-darkBlue mb-4">Learner Portal</h1>
              <p className="text-textGray max-w-lg mx-auto">
                Access your academic information, fee statements, and personal profile. 
                Log in with your school-provided credentials.
              </p>
            </div>

            <div className="flex justify-center mb-8">
              <Link to="/" className="text-accentBlue hover:text-darkBlue">← Back to Home</Link>
            </div>

            <PortalLogin
              title="Learner Login"
              description="Access your academic profile and information"
              onLogin={handleLogin}
              forgotPasswordLink="#forgot-password"
            />
          </div>
        </div>
      </>
    );
  }

  // Mock data for the dashboard
  const examResults = [
    { subject: "Mathematics", score: 85, grade: "A", term: "Term 1", year: "2025" },
    { subject: "English", score: 78, grade: "B+", term: "Term 1", year: "2025" },
    { subject: "Science", score: 92, grade: "A", term: "Term 1", year: "2025" },
    { subject: "Social Studies", score: 74, grade: "B", term: "Term 1", year: "2025" },
    { subject: "Kiswahili", score: 80, grade: "A-", term: "Term 1", year: "2025" },
  ];
  
  const feeStatements = [
    { term: "Term 1", year: "2025", amount: 45000, paid: 45000, balance: 0, status: "Paid", date: "2025-01-15" },
    { term: "Term 2", year: "2025", amount: 45000, paid: 30000, balance: 15000, status: "Partial", date: "2025-05-10" },
    { term: "Term 3", year: "2025", amount: 45000, paid: 0, balance: 45000, status: "Unpaid", date: "2025-09-05" }
  ];

  return (
    <PortalLayout
      title="Learner Portal"
      userType="learner"
      username={username}
    >
      <div className="max-w-5xl mx-auto">
        <h1 className="text-2xl font-playfair font-bold text-darkBlue mb-6">Welcome, {username}</h1>
        
        <DashboardSection title="Exam Results" description="View your academic performance by term">
          <Tabs defaultValue="current">
            <TabsList className="mb-6">
              <TabsTrigger value="current">Current Term</TabsTrigger>
              <TabsTrigger value="previous">Previous Terms</TabsTrigger>
            </TabsList>
            <TabsContent value="current">
              <Table>
                <TableCaption>Term 1, 2025 Examination Results</TableCaption>
                <TableHeader>
                  <TableRow>
                    <TableHead>Subject</TableHead>
                    <TableHead className="text-right">Score</TableHead>
                    <TableHead className="text-right">Grade</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {examResults.map((result, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">{result.subject}</TableCell>
                      <TableCell className="text-right">{result.score}%</TableCell>
                      <TableCell className="text-right">{result.grade}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              <div className="flex justify-end mt-4">
                <Button variant="outline" className="text-accentBlue border-accentBlue/30 hover:bg-accentBlue/10">
                  <Download size={16} className="mr-2" /> Download Report
                </Button>
              </div>
            </TabsContent>
            <TabsContent value="previous">
              <div className="text-center py-8 text-textGray">
                <p>No previous term results available.</p>
              </div>
            </TabsContent>
          </Tabs>
        </DashboardSection>
        
        <DashboardSection title="Fee Statements" description="View your current and past fee information">
          <Tabs defaultValue="current">
            <TabsList className="mb-6">
              <TabsTrigger value="current">Current Term</TabsTrigger>
              <TabsTrigger value="history">Payment History</TabsTrigger>
            </TabsList>
            <TabsContent value="current">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Term/Year</TableHead>
                    <TableHead className="text-right">Amount</TableHead>
                    <TableHead className="text-right">Paid</TableHead>
                    <TableHead className="text-right">Balance</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Receipt</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {feeStatements.map((statement, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">{statement.term}, {statement.year}</TableCell>
                      <TableCell className="text-right">Ksh {statement.amount.toLocaleString()}</TableCell>
                      <TableCell className="text-right">Ksh {statement.paid.toLocaleString()}</TableCell>
                      <TableCell className="text-right">Ksh {statement.balance.toLocaleString()}</TableCell>
                      <TableCell>
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          statement.status === "Paid" 
                            ? "bg-green-100 text-green-800" 
                            : statement.status === "Partial"
                            ? "bg-yellow-100 text-yellow-800"
                            : "bg-red-100 text-red-800"
                        }`}>
                          {statement.status}
                        </span>
                      </TableCell>
                      <TableCell className="text-right">
                        {statement.status !== "Unpaid" && (
                          <Button variant="ghost" size="sm" className="text-accentBlue hover:text-accentBlue-600 hover:bg-accentBlue/10 h-auto p-1">
                            <Download size={16} />
                          </Button>
                        )}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TabsContent>
            <TabsContent value="history">
              <div className="text-center py-8 text-textGray">
                <p>Payment history from previous terms will be shown here.</p>
              </div>
            </TabsContent>
          </Tabs>
        </DashboardSection>
        
        <DashboardSection title="Personal Profile" description="View and update your personal information">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-medium text-darkBlue mb-4">Personal Information</h3>
              <div className="space-y-4">
                <div className="grid grid-cols-1 gap-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" value="John Doe" />
                </div>
                
                <div className="grid grid-cols-1 gap-2">
                  <Label htmlFor="dob">Date of Birth</Label>
                  <Input id="dob" value="2010-05-15" type="date" />
                </div>
                
                <div className="grid grid-cols-1 gap-2">
                  <Label htmlFor="class">Class/Grade</Label>
                  <Input id="class" value="Grade 8" disabled />
                </div>
                
                <div className="grid grid-cols-1 gap-2">
                  <Label htmlFor="county">County</Label>
                  <Input id="county" value="Nairobi" />
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="font-medium text-darkBlue mb-4">Contact Information</h3>
              <div className="space-y-4">
                <div className="grid grid-cols-1 gap-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" value="student@example.com" />
                </div>
                
                <div className="grid grid-cols-1 gap-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" value="+254 712 345 678" />
                </div>
                
                <div className="grid grid-cols-1 gap-2">
                  <Label htmlFor="interests">Extracurricular Interests</Label>
                  <Input id="interests" value="Soccer, Chess, Drama" />
                </div>
                
                <Button className="bg-accentBlue hover:bg-accentBlue-600 mt-2 w-full sm:w-auto">
                  Update Information
                </Button>
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

export default LearnerPortal;
