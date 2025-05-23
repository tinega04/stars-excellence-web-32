
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
  XCircle
} from "lucide-react";

const LearningPortal = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [userType, setUserType] = useState<"teacher" | "learner">("learner");
  const [loginStep, setLoginStep] = useState<"credentials" | "userType">("credentials");
  const { toast } = useToast();
  
  const handleLogin = (username: string, password: string) => {
    // Check for teacher credentials
    if (username === "teacher" && password === "test123") {
      setUserType("teacher");
      setUsername(username);
      setIsLoggedIn(true);
      return;
    }
    
    // Check for learner credentials
    if (username === "learner" && password === "test123") {
      setUserType("learner");
      setUsername(username);
      setIsLoggedIn(true);
      return;
    }
    
    // Invalid credentials
    toast({
      title: "Login Failed",
      description: "Incorrect username or password. Try using: teacher / test123 or learner / test123",
      variant: "destructive"
    });
  };

  if (!isLoggedIn) {
    return (
      <>
        <Helmet>
          <title>Learning Portal | Stevens Integrated Schools</title>
          <meta name="description" content="Access learning materials and assignments." />
        </Helmet>

        <div className="container mx-auto pt-8 pb-16">
          <div className="max-w-3xl mx-auto">
            <div className="mb-8 text-center">
              <h1 className="text-3xl font-playfair font-bold text-darkBlue mb-4">Learning Portal</h1>
              <p className="text-textGray max-w-lg mx-auto">
                Access learning materials, assignments, and educational resources.
                Log in as a teacher to upload content or as a student to view materials.
              </p>
            </div>

            <div className="flex justify-center mb-8">
              <Link to="/" className="text-accentBlue hover:text-darkBlue">← Back to Home</Link>
            </div>

            <PortalLogin
              title="Learning Portal Login"
              description="Access educational resources and materials"
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
      title="Learning Portal"
      userType={userType}
      username={username}
    >
      <div className="max-w-5xl mx-auto">
        <h1 className="text-2xl font-playfair font-bold text-darkBlue mb-6">
          Welcome to the Learning Portal, {username}
        </h1>
        
        {userType === "teacher" ? <TeacherDashboard /> : <LearnerDashboard />}
      </div>
    </PortalLayout>
  );
};

const TeacherDashboard = () => {
  const [activeTab, setActiveTab] = useState("content");
  const { toast } = useToast();
  
  const handleUploadContent = () => {
    toast({
      title: "Content Uploaded",
      description: "Your content has been successfully uploaded.",
      variant: "default"
    });
  };
  
  const handleCreateAssignment = () => {
    toast({
      title: "Assignment Created",
      description: "Your assignment has been successfully created and assigned to students.",
      variant: "default"
    });
  };
  
  return (
    <>
      <Tabs defaultValue="content" onValueChange={(value) => setActiveTab(value)}>
        <TabsList className="mb-6 bg-white border border-accentBlue/20">
          <TabsTrigger value="content">Learning Content</TabsTrigger>
          <TabsTrigger value="assignments">Assignments</TabsTrigger>
        </TabsList>
        
        <TabsContent value="content">
          <DashboardSection 
            title="Upload Learning Materials" 
            description="Share resources with your students by class and subject"
          >
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="grid grid-cols-1 gap-2">
                    <Label htmlFor="content-title">Title</Label>
                    <Input id="content-title" placeholder="Enter resource title" />
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="grid grid-cols-1 gap-2">
                      <Label htmlFor="class-select">Class</Label>
                      <Select>
                        <SelectTrigger id="class-select">
                          <SelectValue placeholder="Select class" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="grade1">Grade 1</SelectItem>
                          <SelectItem value="grade2">Grade 2</SelectItem>
                          <SelectItem value="grade3">Grade 3</SelectItem>
                          <SelectItem value="grade4">Grade 4</SelectItem>
                          <SelectItem value="grade5">Grade 5</SelectItem>
                          <SelectItem value="grade6">Grade 6</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="grid grid-cols-1 gap-2">
                      <Label htmlFor="subject-select">Subject</Label>
                      <Select>
                        <SelectTrigger id="subject-select">
                          <SelectValue placeholder="Select subject" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="math">Mathematics</SelectItem>
                          <SelectItem value="english">English</SelectItem>
                          <SelectItem value="science">Science</SelectItem>
                          <SelectItem value="social">Social Studies</SelectItem>
                          <SelectItem value="kiswahili">Kiswahili</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 gap-2">
                    <Label htmlFor="description">Description</Label>
                    <Textarea 
                      id="description"
                      placeholder="Describe what this resource is about"
                      className="resize-none h-24"
                    />
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="grid grid-cols-1 gap-2">
                    <Label>Resource Type</Label>
                    <div className="grid grid-cols-3 gap-4">
                      <div className="border border-accentBlue/30 rounded-md flex flex-col items-center justify-center p-4 hover:bg-accentBlue/5 cursor-pointer">
                        <FileText className="h-8 w-8 text-accentBlue mb-2" />
                        <span className="text-sm text-center">Document</span>
                      </div>
                      <div className="border border-accentBlue/30 rounded-md flex flex-col items-center justify-center p-4 hover:bg-accentBlue/5 cursor-pointer">
                        <FileImage className="h-8 w-8 text-accentBlue mb-2" />
                        <span className="text-sm text-center">Image</span>
                      </div>
                      <div className="border border-accentBlue/30 rounded-md flex flex-col items-center justify-center p-4 hover:bg-accentBlue/5 cursor-pointer">
                        <LinkIcon className="h-8 w-8 text-accentBlue mb-2" />
                        <span className="text-sm text-center">Link</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="file-upload">Upload File</Label>
                    <div className="border-2 border-dashed border-accentBlue/30 rounded-md p-8 text-center cursor-pointer hover:bg-accentBlue/5">
                      <Upload className="h-8 w-8 text-accentBlue/70 mx-auto mb-2" />
                      <p className="text-sm text-textGray">Drag and drop files here or click to browse</p>
                      <p className="text-xs text-textGray mt-2">Supported formats: PDF, DOCX, JPG, PNG (Max 10MB)</p>
                      <input type="file" id="file-upload" className="hidden" />
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-end">
                <Button 
                  className="bg-accentBlue hover:bg-accentBlue-600 text-white"
                  onClick={handleUploadContent}
                >
                  <Upload className="h-4 w-4 mr-2" /> Upload Resource
                </Button>
              </div>
            </div>
          </DashboardSection>
          
          <DashboardSection 
            title="Recent Uploads" 
            description="View and manage your uploaded learning materials"
          >
            <div className="mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div className="relative w-full sm:w-64">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-textGray" />
                <Input 
                  placeholder="Search resources..." 
                  className="pl-9"
                />
              </div>
              <div className="flex items-center gap-2">
                <Button variant="outline" className="border-accentBlue/30">
                  <Filter className="h-4 w-4 mr-2" /> Filter
                </Button>
              </div>
            </div>
            
            <div className="space-y-4">
              {Array.from({length: 3}).map((_, i) => (
                <Card key={i} className="border-accentBlue/20">
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-lg text-darkBlue">Mathematics Formulas - {i === 0 ? 'Grade 6' : i === 1 ? 'Grade 5' : 'Grade 4'}</CardTitle>
                        <CardDescription className="text-textGray flex items-center mt-1">
                          <Calendar className="h-3 w-3 mr-1" /> Uploaded on: May {20 - i}, 2025
                        </CardDescription>
                      </div>
                      <Badge className={i === 0 ? 'bg-accentBlue' : 'bg-darkBlue'}>
                        {i === 0 ? 'PDF Document' : i === 1 ? 'Image' : 'External Link'}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="pb-2">
                    <p className="text-sm text-textGray">
                      {i === 0 ? 'Comprehensive formula sheet for Grade 6 mathematics covering geometry, algebra, and arithmetic.' : 
                       i === 1 ? 'Visual reference chart for Grade 5 mathematics with multiplication tables and fraction examples.' : 
                       'Interactive online exercises for Grade 4 students to practice basic math skills.'}
                    </p>
                  </CardContent>
                  <CardFooter className="flex justify-between pt-2">
                    <div className="text-xs text-textGray">
                      <span className="font-medium">Subject:</span> Mathematics
                    </div>
                    <div className="flex gap-2">
                      <Button variant="ghost" size="sm" className="text-accentBlue">
                        <Eye className="h-4 w-4 mr-1" /> Preview
                      </Button>
                      <Button variant="outline" size="sm" className="border-accentBlue/30">
                        Edit
                      </Button>
                    </div>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </DashboardSection>
        </TabsContent>
        
        <TabsContent value="assignments">
          <DashboardSection 
            title="Create Assignment" 
            description="Create and distribute assignments to students"
          >
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="grid grid-cols-1 gap-2">
                    <Label htmlFor="assignment-title">Assignment Title</Label>
                    <Input id="assignment-title" placeholder="Enter assignment title" />
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="grid grid-cols-1 gap-2">
                      <Label htmlFor="class-select-assignment">Class</Label>
                      <Select>
                        <SelectTrigger id="class-select-assignment">
                          <SelectValue placeholder="Select class" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="grade1">Grade 1</SelectItem>
                          <SelectItem value="grade2">Grade 2</SelectItem>
                          <SelectItem value="grade3">Grade 3</SelectItem>
                          <SelectItem value="grade4">Grade 4</SelectItem>
                          <SelectItem value="grade5">Grade 5</SelectItem>
                          <SelectItem value="grade6">Grade 6</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="grid grid-cols-1 gap-2">
                      <Label htmlFor="subject-select-assignment">Subject</Label>
                      <Select>
                        <SelectTrigger id="subject-select-assignment">
                          <SelectValue placeholder="Select subject" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="math">Mathematics</SelectItem>
                          <SelectItem value="english">English</SelectItem>
                          <SelectItem value="science">Science</SelectItem>
                          <SelectItem value="social">Social Studies</SelectItem>
                          <SelectItem value="kiswahili">Kiswahili</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 gap-2">
                    <Label htmlFor="instructions">Instructions</Label>
                    <Textarea 
                      id="instructions"
                      placeholder="Provide detailed instructions for the assignment"
                      className="resize-none h-32"
                    />
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="grid grid-cols-1 gap-2">
                      <Label htmlFor="due-date">Due Date</Label>
                      <Input id="due-date" type="date" />
                    </div>
                    
                    <div className="grid grid-cols-1 gap-2">
                      <Label htmlFor="max-score">Maximum Score</Label>
                      <Input id="max-score" type="number" placeholder="100" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="assignment-file">Add Assignment File (Optional)</Label>
                    <div className="border-2 border-dashed border-accentBlue/30 rounded-md p-6 text-center cursor-pointer hover:bg-accentBlue/5">
                      <Upload className="h-6 w-6 text-accentBlue/70 mx-auto mb-2" />
                      <p className="text-sm text-textGray">Attach worksheet or supporting materials</p>
                      <input type="file" id="assignment-file" className="hidden" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label>Assignment Type</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="file">File Upload</SelectItem>
                        <SelectItem value="text">Text Submission</SelectItem>
                        <SelectItem value="both">Both</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-end">
                <Button 
                  className="bg-accentBlue hover:bg-accentBlue-600 text-white"
                  onClick={handleCreateAssignment}
                >
                  <PlusCircle className="h-4 w-4 mr-2" /> Create Assignment
                </Button>
              </div>
            </div>
          </DashboardSection>
          
          <DashboardSection 
            title="Manage Assignments" 
            description="View and track currently assigned work"
          >
            <div className="mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div className="relative w-full sm:w-64">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-textGray" />
                <Input 
                  placeholder="Search assignments..." 
                  className="pl-9"
                />
              </div>
              <div className="flex items-center gap-2">
                <Button variant="outline" className="border-accentBlue/30">
                  <Filter className="h-4 w-4 mr-2" /> Filter
                </Button>
              </div>
            </div>
            
            <div className="space-y-4">
              {Array.from({length: 3}).map((_, i) => (
                <Card key={i} className="border-accentBlue/20">
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-lg text-darkBlue">
                          {i === 0 ? 'Science Lab Report' : i === 1 ? 'English Essay' : 'Mathematics Problem Set'}
                        </CardTitle>
                        <CardDescription className="text-textGray flex items-center mt-1">
                          <Calendar className="h-3 w-3 mr-1" /> Due: June {5 + i * 3}, 2025
                        </CardDescription>
                      </div>
                      <div className="flex items-center">
                        <Badge className={i === 0 ? 'bg-green-600' : i === 1 ? 'bg-accentBlue' : 'bg-amber-500'}>
                          {i === 0 ? 'Active' : i === 1 ? 'New' : 'Upcoming'}
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pb-2">
                    <p className="text-sm text-textGray">
                      {i === 0 ? 'Write a lab report based on the plant growth experiment conducted in class.' : 
                       i === 1 ? 'Write a 500-word essay discussing a character from the novel we read in class.' : 
                       'Complete problems 1-15 on page 42 of the textbook.'}
                    </p>
                    <div className="mt-2 flex items-center text-xs text-textGray">
                      <span className="font-medium mr-2">Class: {i === 0 ? 'Grade 5' : i === 1 ? 'Grade 6' : 'Grade 4'}</span>
                      <span className="mx-2">|</span>
                      <span className="font-medium">Subject: {i === 0 ? 'Science' : i === 1 ? 'English' : 'Mathematics'}</span>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between pt-2">
                    <div className="flex items-center text-xs">
                      <Clock className="h-3 w-3 mr-1 text-textGray" />
                      <span className="text-textGray">Submissions: {i * 5 + 3}/25</span>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" className="border-accentBlue/30">
                        View Submissions
                      </Button>
                      <Button variant="outline" size="sm" className="border-accentBlue/30">
                        Edit
                      </Button>
                    </div>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </DashboardSection>
        </TabsContent>
      </Tabs>
    </>
  );
};

const LearnerDashboard = () => {
  const { toast } = useToast();
  
  const handleSubmitWork = () => {
    toast({
      title: "Work Submitted",
      description: "Your assignment has been successfully submitted.",
      variant: "default"
    });
  };
  
  return (
    <>
      <DashboardSection 
        title="Learning Materials" 
        description="Access educational resources by class and subject"
      >
        <div className="mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div className="relative w-full sm:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-textGray" />
            <Input 
              placeholder="Search materials..." 
              className="pl-9"
            />
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <Select>
              <SelectTrigger className="w-[120px]">
                <SelectValue placeholder="Class" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Classes</SelectItem>
                <SelectItem value="grade4">Grade 4</SelectItem>
                <SelectItem value="grade5">Grade 5</SelectItem>
                <SelectItem value="grade6">Grade 6</SelectItem>
              </SelectContent>
            </Select>
            
            <Select>
              <SelectTrigger className="w-[120px]">
                <SelectValue placeholder="Subject" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Subjects</SelectItem>
                <SelectItem value="math">Mathematics</SelectItem>
                <SelectItem value="english">English</SelectItem>
                <SelectItem value="science">Science</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {Array.from({length: 6}).map((_, i) => {
            const subjects = ["Mathematics", "Science", "English", "Social Studies", "Kiswahili", "Arts"];
            const types = ["PDF Document", "Image", "Video", "Presentation", "Interactive", "External Link"];
            const titles = [
              "Number Theory Basics", 
              "Plant Cell Structure", 
              "Grammar Essentials", 
              "Kenya's Geography", 
              "Verb Conjugation", 
              "Color Theory"
            ];
            
            return (
              <Card key={i} className="border-accentBlue/20 hover:border-accentBlue transition-colors cursor-pointer group">
                <CardHeader className="pb-2">
                  <Badge className={i % 2 === 0 ? 'bg-accentBlue' : 'bg-darkBlue'}>
                    {types[i % types.length]}
                  </Badge>
                  <CardTitle className="text-base text-darkBlue mt-2 group-hover:text-accentBlue transition-colors">
                    {titles[i % titles.length]}
                  </CardTitle>
                  <CardDescription className="text-xs text-textGray">
                    Grade {4 + (i % 3)} • {subjects[i % subjects.length]}
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-sm text-textGray pb-2">
                  <p className="line-clamp-2">
                    Educational resource to help students understand key concepts and practice skills.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" size="sm" className="text-accentBlue hover:text-accentBlue-600 hover:bg-accentBlue/10 w-full justify-center">
                    <Download className="h-4 w-4 mr-2" /> 
                    Access Material
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </DashboardSection>
      
      <DashboardSection 
        title="Assignments" 
        description="View and submit your assigned work"
      >
        <div className="mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div className="relative w-full sm:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-textGray" />
            <Input 
              placeholder="Search assignments..." 
              className="pl-9"
            />
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <Select>
              <SelectTrigger className="w-[120px]">
                <SelectValue placeholder="Subject" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Subjects</SelectItem>
                <SelectItem value="math">Mathematics</SelectItem>
                <SelectItem value="english">English</SelectItem>
                <SelectItem value="science">Science</SelectItem>
              </SelectContent>
            </Select>
            
            <Select>
              <SelectTrigger className="w-[120px]">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Statuses</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="submitted">Submitted</SelectItem>
                <SelectItem value="overdue">Overdue</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        
        <div className="space-y-4">
          {Array.from({length: 3}).map((_, i) => {
            const subjects = ["Mathematics", "English", "Science"];
            const titles = [
              "Linear Equations Homework", 
              "Book Report Assignment", 
              "Ecosystem Observation Project"
            ];
            const statuses = [
              { label: "Due Soon", color: "bg-amber-500" },
              { label: "Submitted", color: "bg-green-600" },
              { label: "Overdue", color: "bg-red-500" }
            ];
            
            return (
              <Card key={i} className="border-accentBlue/20">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-lg text-darkBlue">{titles[i]}</CardTitle>
                      <CardDescription className="text-textGray flex items-center mt-1">
                        <span className="mr-2">{subjects[i]}</span>
                        <span className="mx-2">•</span>
                        <div className="flex items-center">
                          <Calendar className="h-3 w-3 mr-1" /> Due: June {5 + i * 3}, 2025
                        </div>
                      </CardDescription>
                    </div>
                    <Badge className={statuses[i].color}>
                      {statuses[i].label}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="pb-2">
                  <p className="text-sm text-textGray">
                    {i === 0 ? 'Complete problems 1-15 from the textbook and show your work.' : 
                     i === 1 ? 'Write a 500-word book report on the novel we\'ve been reading in class.' : 
                     'Observe a natural ecosystem and document your findings with photos and notes.'}
                  </p>
                </CardContent>
                <CardFooter className="flex justify-between pt-2">
                  <div className="flex items-center gap-2">
                    {i === 1 ? (
                      <div className="flex items-center text-xs text-green-600">
                        <CheckCircle2 className="h-3 w-3 mr-1" />
                        Submitted on May 18, 2025
                      </div>
                    ) : i === 2 ? (
                      <div className="flex items-center text-xs text-red-500">
                        <XCircle className="h-3 w-3 mr-1" />
                        2 days overdue
                      </div>
                    ) : (
                      <div className="flex items-center text-xs text-amber-600">
                        <Clock className="h-3 w-3 mr-1" />
                        Due in 3 days
                      </div>
                    )}
                  </div>
                  <div className="flex gap-2">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="border-accentBlue/30"
                    >
                      View Details
                    </Button>
                    {i !== 1 && (
                      <Button 
                        className="bg-accentBlue hover:bg-accentBlue-600 text-white" 
                        size="sm"
                        onClick={handleSubmitWork}
                      >
                        Submit Work
                      </Button>
                    )}
                  </div>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </DashboardSection>
    </>
  );
};

export default LearningPortal;
