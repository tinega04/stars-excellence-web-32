import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { DashboardLayout } from '@/components/dashboard/DashboardLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import { useAuth } from '@/lib/auth';
import { supabase } from '@/lib/supabase';
import { Database } from '@/types/supabase';
import { Upload, Trash2 } from 'lucide-react';

type StaffProfile = Database['public']['Tables']['staff_profiles']['Row'];
type Class = Database['public']['Tables']['classes']['Row'];
type LearningMaterial = Database['public']['Tables']['learning_materials']['Row'];

export default function TeacherDashboard() {
  const { profile } = useAuth();
  const { toast } = useToast();
  const [staffProfile, setStaffProfile] = useState<StaffProfile | null>(null);
  const [classes, setClasses] = useState<Class[]>([]);
  const [materials, setMaterials] = useState<LearningMaterial[]>([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);

  // Form state
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [uploadForm, setUploadForm] = useState({
    subject: '',
    class: '',
    contentType: 'resource' as const,
    description: ''
  });

  useEffect(() => {
    if (profile) {
      fetchData();
    }
  }, [profile]);

  const fetchData = async () => {
    try {
      setLoading(true);

      // Fetch staff profile
      const { data: profileData, error: profileError } = await supabase
        .from('staff_profiles')
        .select('*')
        .eq('user_id', profile!.id)
        .single();

      if (profileError) throw profileError;
      setStaffProfile(profileData);

      // Fetch classes
      const { data: classesData, error: classesError } = await supabase
        .from('classes')
        .select('*')
        .eq('teacher_id', profile!.id);

      if (classesError) throw classesError;
      setClasses(classesData);

      // Fetch materials
      const { data: materialsData, error: materialsError } = await supabase
        .from('learning_materials')
        .select('*')
        .eq('teacher_id', profile!.id)
        .order('created_at', { ascending: false });

      if (materialsError) throw materialsError;
      setMaterials(materialsData);

    } catch (error) {
      console.error('Error fetching data:', error);
      toast({
        title: 'Error',
        description: 'Failed to load dashboard data. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  const handleFileUpload = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedFile || !uploadForm.subject || !uploadForm.class || !uploadForm.description) {
      toast({
        title: 'Error',
        description: 'Please fill in all fields and select a file.',
        variant: 'destructive',
      });
      return;
    }

    try {
      setUploading(true);

      // Upload file to Supabase Storage
      const fileExt = selectedFile.name.split('.').pop();
      const fileName = `${Date.now()}.${fileExt}`;
      const { data: fileData, error: fileError } = await supabase.storage
        .from('learning-materials')
        .upload(fileName, selectedFile);

      if (fileError) throw fileError;

      // Get public URL
      const { data: urlData } = supabase.storage
        .from('learning-materials')
        .getPublicUrl(fileName);

      // Create material record
      const { error: materialError } = await supabase
        .from('learning_materials')
        .insert({
          teacher_id: profile!.id,
          subject: uploadForm.subject,
          class: uploadForm.class,
          content_type: uploadForm.contentType,
          file_url: urlData.publicUrl,
          description: uploadForm.description,
        });

      if (materialError) throw materialError;

      toast({
        title: 'Success',
        description: 'Material uploaded successfully.',
      });

      // Reset form and refresh data
      setSelectedFile(null);
      setUploadForm({
        subject: '',
        class: '',
        contentType: 'resource',
        description: ''
      });
      fetchData();

    } catch (error) {
      console.error('Error uploading material:', error);
      toast({
        title: 'Error',
        description: 'Failed to upload material. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setUploading(false);
    }
  };

  const handleDelete = async (material: LearningMaterial) => {
    try {
      // Delete file from storage
      const fileName = material.file_url.split('/').pop();
      if (fileName) {
        await supabase.storage
          .from('learning-materials')
          .remove([fileName]);
      }

      // Delete record from database
      const { error } = await supabase
        .from('learning_materials')
        .delete()
        .eq('id', material.id);

      if (error) throw error;

      toast({
        title: 'Success',
        description: 'Material deleted successfully.',
      });

      // Refresh materials list
      fetchData();

    } catch (error) {
      console.error('Error deleting material:', error);
      toast({
        title: 'Error',
        description: 'Failed to delete material. Please try again.',
        variant: 'destructive',
      });
    }
  };

  return (
    <DashboardLayout title="Teacher Dashboard">
      <Helmet>
        <title>Teacher Dashboard | Stars Excellence</title>
      </Helmet>

      <div className="space-y-6">
        {/* Profile Card */}
        <Card>
          <CardHeader>
            <CardTitle>Teacher Profile</CardTitle>
            <CardDescription>Your professional information and teaching schedule</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-medium text-sm text-slate-500">Name</h3>
                <p className="mt-1">{profile?.name}</p>
              </div>
              <div>
                <h3 className="font-medium text-sm text-slate-500">Email</h3>
                <p className="mt-1">{profile?.email}</p>
              </div>
              <div>
                <h3 className="font-medium text-sm text-slate-500">Position</h3>
                <p className="mt-1">{staffProfile?.position}</p>
              </div>
              <div>
                <h3 className="font-medium text-sm text-slate-500">Subjects</h3>
                <p className="mt-1">{staffProfile?.subjects.join(', ')}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Tabs defaultValue="classes">
          <TabsList>
            <TabsTrigger value="classes">My Classes</TabsTrigger>
            <TabsTrigger value="materials">Learning Materials</TabsTrigger>
            <TabsTrigger value="upload">Upload Material</TabsTrigger>
          </TabsList>

          <TabsContent value="classes">
            <Card>
              <CardHeader>
                <CardTitle>Classes</CardTitle>
                <CardDescription>Classes you are currently teaching</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {classes.map((cls) => (
                    <div
                      key={cls.id}
                      className="p-4 bg-white border rounded-lg shadow-sm"
                    >
                      <h3 className="font-medium">{cls.name}</h3>
                      <p className="text-sm text-slate-500 mt-1">Level: {cls.level}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="materials">
            <Card>
              <CardHeader>
                <CardTitle>Learning Materials</CardTitle>
                <CardDescription>Materials you have uploaded</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {materials.map((material) => (
                    <div
                      key={material.id}
                      className="flex items-center justify-between p-4 bg-white border rounded-lg"
                    >
                      <div>
                        <h3 className="font-medium">{material.description}</h3>
                        <p className="text-sm text-slate-500">
                          {material.subject} • {material.class} • {material.content_type}
                        </p>
                      </div>
                      <div className="flex gap-2">
                        <Button
                          variant="outline"
                          onClick={() => window.open(material.file_url, '_blank')}
                        >
                          View
                        </Button>
                        <Button
                          variant="destructive"
                          size="icon"
                          onClick={() => handleDelete(material)}
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="upload">
            <Card>
              <CardHeader>
                <CardTitle>Upload Material</CardTitle>
                <CardDescription>Share learning materials with your students</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleFileUpload} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input
                        id="subject"
                        value={uploadForm.subject}
                        onChange={(e) => setUploadForm(prev => ({
                          ...prev,
                          subject: e.target.value
                        }))}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="class">Class</Label>
                      <Select
                        value={uploadForm.class}
                        onValueChange={(value) => setUploadForm(prev => ({
                          ...prev,
                          class: value
                        }))}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select class" />
                        </SelectTrigger>
                        <SelectContent>
                          {classes.map((cls) => (
                            <SelectItem key={cls.id} value={cls.name}>
                              {cls.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="type">Content Type</Label>
                      <Select
                        value={uploadForm.contentType}
                        onValueChange={(value: 'resource' | 'assignment') => setUploadForm(prev => ({
                          ...prev,
                          contentType: value
                        }))}
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="resource">Resource</SelectItem>
                          <SelectItem value="assignment">Assignment</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="file">File</Label>
                      <Input
                        id="file"
                        type="file"
                        onChange={(e) => setSelectedFile(e.target.files?.[0] || null)}
                      />
                    </div>

                    <div className="space-y-2 md:col-span-2">
                      <Label htmlFor="description">Description</Label>
                      <Textarea
                        id="description"
                        value={uploadForm.description}
                        onChange={(e) => setUploadForm(prev => ({
                          ...prev,
                          description: e.target.value
                        }))}
                      />
                    </div>
                  </div>

                  <Button type="submit" disabled={uploading}>
                    <Upload className="w-4 h-4 mr-2" />
                    {uploading ? 'Uploading...' : 'Upload Material'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
} 