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
import { useAuth } from '@/lib/auth';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const LearnerPortal = () => {
  const { user } = useAuth();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState('results');

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
  const mockExamResults = [
    { subject: 'Mathematics', score: 85, grade: 'A', term: 'Term 1' },
    { subject: 'English', score: 78, grade: 'B+', term: 'Term 1' },
    { subject: 'Science', score: 92, grade: 'A', term: 'Term 1' },
  ];
  
  const mockFeeStatements = [
    { term: 'Term 1 2025', amount: 45000, paid: 45000, balance: 0, status: 'Paid' },
    { term: 'Term 2 2025', amount: 45000, paid: 30000, balance: 15000, status: 'Partial' },
  ];

  return (
    <PortalLayout
      title="Learner Portal"
      userType="learner"
      username={username}
    >
      <div className="max-w-5xl mx-auto">
        <h1 className="text-2xl font-playfair font-bold text-darkBlue mb-6">Welcome, {user?.name}</h1>
        
        <Tabs defaultValue="results" className="space-y-6" onValueChange={setActiveTab}>
          <TabsList>
            <TabsTrigger value="results">Exam Results</TabsTrigger>
            <TabsTrigger value="fees">Fee Statements</TabsTrigger>
            <TabsTrigger value="profile">Profile</TabsTrigger>
          </TabsList>

          <TabsContent value="results">
            <Card>
              <CardHeader>
                <CardTitle>Academic Performance</CardTitle>
                <CardDescription>View your exam results and academic progress</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3 px-4">Subject</th>
                        <th className="text-left py-3 px-4">Score</th>
                        <th className="text-left py-3 px-4">Grade</th>
                        <th className="text-left py-3 px-4">Term</th>
                      </tr>
                    </thead>
                    <tbody>
                      {mockExamResults.map((result, index) => (
                        <tr key={index} className="border-b">
                          <td className="py-3 px-4">{result.subject}</td>
                          <td className="py-3 px-4">{result.score}%</td>
                          <td className="py-3 px-4">{result.grade}</td>
                          <td className="py-3 px-4">{result.term}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="fees">
            <Card>
              <CardHeader>
                <CardTitle>Fee Statements</CardTitle>
                <CardDescription>View your fee statements and payment history</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3 px-4">Term</th>
                        <th className="text-left py-3 px-4">Amount</th>
                        <th className="text-left py-3 px-4">Paid</th>
                        <th className="text-left py-3 px-4">Balance</th>
                        <th className="text-left py-3 px-4">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {mockFeeStatements.map((statement, index) => (
                        <tr key={index} className="border-b">
                          <td className="py-3 px-4">{statement.term}</td>
                          <td className="py-3 px-4">KES {statement.amount.toLocaleString()}</td>
                          <td className="py-3 px-4">KES {statement.paid.toLocaleString()}</td>
                          <td className="py-3 px-4">KES {statement.balance.toLocaleString()}</td>
                          <td className="py-3 px-4">
                            <span className={`inline-block px-2 py-1 rounded text-sm ${
                              statement.status === 'Paid' 
                                ? 'bg-green-100 text-green-800'
                                : 'bg-yellow-100 text-yellow-800'
                            }`}>
                              {statement.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="profile">
            <Card>
              <CardHeader>
                <CardTitle>Personal Profile</CardTitle>
                <CardDescription>Update your personal information</CardDescription>
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
                      <Label htmlFor="dob">Date of Birth</Label>
                      <Input id="dob" type="date" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" type="tel" />
                    </div>
                    <div className="space-y-2 md:col-span-2">
                      <Label htmlFor="interests">Interests & Activities</Label>
                      <Input id="interests" placeholder="e.g., Sports, Music, Drama" />
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

export default LearnerPortal;
