import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PortalLogin from "@/components/portals/PortalLogin";
import PortalLayout from "@/components/portals/PortalLayout";
import DashboardSection from "@/components/portals/DashboardSection";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { 
  Download, 
  FileText, 
  FileImage, 
  Link as LinkIcon,
  Calendar,
  Upload,
  Eye,
  Search,
  Filter,
  PlusCircle,
  Clock,
  AlertCircle,
  Facebook,
  Instagram,
  CheckCircle2,
  XCircle,
  Plus
} from "lucide-react";
import { useAuth } from '@/lib/auth';

const LearningPortal = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('resources');
  const isTeacher = user?.role === 'staff';

  return (
    <div className="min-h-screen bg-slate-50 py-8">
      <Helmet>
        <title>Learning Portal | Stevens Integrated Schools</title>
      </Helmet>

      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-2xl sm:text-3xl font-playfair text-darkBlue font-bold mb-2">
            Learning Portal
          </h1>
          <p className="text-textGray">
            {isTeacher 
              ? 'Manage and share learning materials with your students'
              : 'Access your learning materials and assignments'
            }
          </p>
        </div>

        <Tabs defaultValue="resources" className="space-y-6" onValueChange={setActiveTab}>
          <TabsList>
            <TabsTrigger value="resources">Learning Resources</TabsTrigger>
            <TabsTrigger value="assignments">Assignments</TabsTrigger>
            {isTeacher && <TabsTrigger value="upload">Upload Content</TabsTrigger>}
          </TabsList>

          <TabsContent value="resources">
            <Card>
              <CardHeader>
                <CardTitle>Learning Resources</CardTitle>
                <CardDescription>Access study materials and resources</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3 px-4">Title</th>
                        <th className="text-left py-3 px-4">Subject</th>
                        <th className="text-left py-3 px-4">Class</th>
                        <th className="text-left py-3 px-4">Type</th>
                        <th className="text-left py-3 px-4">Uploaded By</th>
                        <th className="text-left py-3 px-4">Date</th>
                        <th className="text-left py-3 px-4">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {mockResources.map((resource) => (
                        <tr key={resource.id} className="border-b">
                          <td className="py-3 px-4">{resource.title}</td>
                          <td className="py-3 px-4">{resource.subject}</td>
                          <td className="py-3 px-4">{resource.class}</td>
                          <td className="py-3 px-4">{resource.type}</td>
                          <td className="py-3 px-4">{resource.uploadedBy}</td>
                          <td className="py-3 px-4">{resource.date}</td>
                          <td className="py-3 px-4">
                            <Button variant="ghost" size="sm" className="text-accentBlue hover:text-accentBlue-600">
                              <Download size={16} className="mr-2" /> Download
                            </Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="assignments">
            <Card>
              <CardHeader>
                <CardTitle>Assignments</CardTitle>
                <CardDescription>
                  {isTeacher ? 'Manage assignments and submissions' : 'View and submit your assignments'}
                </CardDescription>
              </CardHeader>
              <CardContent>
                {isTeacher && (
                  <div className="mb-6">
                    <Button className="bg-accentBlue hover:bg-accentBlue-600">
                      <Plus size={16} className="mr-2" /> Create Assignment
                    </Button>
                  </div>
                )}
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3 px-4">Title</th>
                        <th className="text-left py-3 px-4">Subject</th>
                        <th className="text-left py-3 px-4">Class</th>
                        <th className="text-left py-3 px-4">Due Date</th>
                        <th className="text-left py-3 px-4">Status</th>
                        <th className="text-left py-3 px-4">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {mockAssignments.map((assignment) => (
                        <tr key={assignment.id} className="border-b">
                          <td className="py-3 px-4">{assignment.title}</td>
                          <td className="py-3 px-4">{assignment.subject}</td>
                          <td className="py-3 px-4">{assignment.class}</td>
                          <td className="py-3 px-4">{assignment.dueDate}</td>
                          <td className="py-3 px-4">
                            <span className={`inline-block px-2 py-1 rounded text-sm ${
                              assignment.status === 'Submitted'
                                ? 'bg-green-100 text-green-800'
                                : 'bg-yellow-100 text-yellow-800'
                            }`}>
                              {assignment.status}
                            </span>
                          </td>
                          <td className="py-3 px-4">
                            <Button variant="ghost" size="sm" className="text-accentBlue hover:text-accentBlue-600">
                              {isTeacher ? (
                                <>
                                  <FileText size={16} className="mr-2" /> View Submissions
                                </>
                              ) : (
                                <>
                                  <Upload size={16} className="mr-2" /> Submit
                                </>
                              )}
                            </Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {isTeacher && (
            <TabsContent value="upload">
              <Card>
                <CardHeader>
                  <CardTitle>Upload Learning Material</CardTitle>
                  <CardDescription>Share resources with your students</CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="title">Title</Label>
                        <Input id="title" placeholder="Enter resource title" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="subject">Subject</Label>
                        <Input id="subject" placeholder="Select subject" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="class">Class</Label>
                        <Input id="class" placeholder="Select class" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="type">Resource Type</Label>
                        <Input id="type" placeholder="e.g., Notes, Worksheet" />
                      </div>
                      <div className="space-y-2 md:col-span-2">
                        <Label htmlFor="description">Description</Label>
                        <Textarea
                          id="description"
                          placeholder="Provide a brief description of the resource"
                          className="min-h-[100px]"
                        />
                      </div>
                      <div className="space-y-2 md:col-span-2">
                        <Label htmlFor="file">Upload File</Label>
                        <Input id="file" type="file" />
                      </div>
                    </div>
                    <Button type="submit" className="bg-accentBlue hover:bg-accentBlue-600">
                      <Upload size={16} className="mr-2" /> Upload Resource
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>
          )}
        </Tabs>
      </div>
    </div>
  );
};

// Mock data for development
const mockResources = [
  {
    id: 1,
    title: 'Mathematics Chapter 1 Notes',
    subject: 'Mathematics',
    class: 'Grade 8',
    type: 'Notes',
    uploadedBy: 'Mr. John Smith',
    date: '2025-02-15'
  },
  {
    id: 2,
    title: 'Science Lab Report Template',
    subject: 'Science',
    class: 'Grade 8',
    type: 'Template',
    uploadedBy: 'Mrs. Sarah Johnson',
    date: '2025-02-14'
  }
];

const mockAssignments = [
  {
    id: 1,
    title: 'Mathematics Problem Set 1',
    subject: 'Mathematics',
    class: 'Grade 8',
    dueDate: '2025-03-01',
    status: 'Pending'
  },
  {
    id: 2,
    title: 'Science Lab Report',
    subject: 'Science',
    class: 'Grade 8',
    dueDate: '2025-02-28',
    status: 'Submitted'
  }
];

export default LearningPortal;
