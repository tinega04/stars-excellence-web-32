import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { DashboardLayout } from '@/components/dashboard/DashboardLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { useAuth } from '@/lib/auth';
import { supabase } from '@/lib/supabase';
import { Database } from '@/types/supabase';

type ExamResult = Database['public']['Tables']['exam_results']['Row'];
type FeeStatement = Database['public']['Tables']['fee_statements']['Row'];
type LearningMaterial = Database['public']['Tables']['learning_materials']['Row'];

export default function LearnerDashboard() {
  const { profile } = useAuth();
  const { toast } = useToast();
  const [examResults, setExamResults] = useState<ExamResult[]>([]);
  const [feeStatements, setFeeStatements] = useState<FeeStatement[]>([]);
  const [learningMaterials, setLearningMaterials] = useState<LearningMaterial[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (profile) {
      fetchData();
    }
  }, [profile]);

  const fetchData = async () => {
    try {
      setLoading(true);

      // Fetch exam results
      const { data: examData, error: examError } = await supabase
        .from('exam_results')
        .select('*')
        .eq('user_id', profile!.id)
        .order('created_at', { ascending: false });

      if (examError) throw examError;
      setExamResults(examData);

      // Fetch fee statements
      const { data: feeData, error: feeError } = await supabase
        .from('fee_statements')
        .select('*')
        .eq('user_id', profile!.id)
        .order('due_date', { ascending: false });

      if (feeError) throw feeError;
      setFeeStatements(feeData);

      // Fetch learning materials
      const { data: materialsData, error: materialsError } = await supabase
        .from('learning_materials')
        .select('*')
        .eq('class', profile!.class!)
        .order('created_at', { ascending: false });

      if (materialsError) throw materialsError;
      setLearningMaterials(materialsData);

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

  return (
    <DashboardLayout title="Learner Dashboard">
      <Helmet>
        <title>Learner Dashboard | Stars Excellence</title>
      </Helmet>

      <div className="space-y-6">
        {/* Profile Card */}
        <Card>
          <CardHeader>
            <CardTitle>Personal Information</CardTitle>
            <CardDescription>Your profile details and academic information</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h3 className="font-medium text-sm text-slate-500">Name</h3>
                <p className="mt-1">{profile?.name}</p>
              </div>
              <div>
                <h3 className="font-medium text-sm text-slate-500">Email</h3>
                <p className="mt-1">{profile?.email}</p>
              </div>
              <div>
                <h3 className="font-medium text-sm text-slate-500">Class</h3>
                <p className="mt-1">{profile?.class || 'Not assigned'}</p>
              </div>
              <div>
                <h3 className="font-medium text-sm text-slate-500">County</h3>
                <p className="mt-1">{profile?.county || 'Not specified'}</p>
              </div>
            </div>
            <div className="mt-4 flex gap-2">
              <Button variant="outline">Update Profile</Button>
              <Button variant="outline">Reset Password</Button>
            </div>
          </CardContent>
        </Card>

        <Tabs defaultValue="results">
          <TabsList>
            <TabsTrigger value="results">Exam Results</TabsTrigger>
            <TabsTrigger value="fees">Fee Statements</TabsTrigger>
            <TabsTrigger value="materials">Learning Materials</TabsTrigger>
          </TabsList>

          <TabsContent value="results">
            <Card>
              <CardHeader>
                <CardTitle>Exam Results</CardTitle>
                <CardDescription>Your academic performance records</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3 px-4">Subject</th>
                        <th className="text-left py-3 px-4">Term</th>
                        <th className="text-left py-3 px-4">Score</th>
                        <th className="text-left py-3 px-4">Date</th>
                      </tr>
                    </thead>
                    <tbody>
                      {examResults.map((result) => (
                        <tr key={result.id} className="border-b">
                          <td className="py-3 px-4">{result.subject}</td>
                          <td className="py-3 px-4">{result.term}</td>
                          <td className="py-3 px-4">{result.score}%</td>
                          <td className="py-3 px-4">
                            {new Date(result.created_at).toLocaleDateString()}
                          </td>
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
                <CardDescription>Your financial records and payments</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3 px-4">Term</th>
                        <th className="text-left py-3 px-4">Amount Due</th>
                        <th className="text-left py-3 px-4">Amount Paid</th>
                        <th className="text-left py-3 px-4">Balance</th>
                        <th className="text-left py-3 px-4">Due Date</th>
                      </tr>
                    </thead>
                    <tbody>
                      {feeStatements.map((statement) => (
                        <tr key={statement.id} className="border-b">
                          <td className="py-3 px-4">{statement.term}</td>
                          <td className="py-3 px-4">KES {statement.amount_due}</td>
                          <td className="py-3 px-4">KES {statement.amount_paid}</td>
                          <td className="py-3 px-4">
                            KES {statement.amount_due - statement.amount_paid}
                          </td>
                          <td className="py-3 px-4">
                            {new Date(statement.due_date).toLocaleDateString()}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="materials">
            <Card>
              <CardHeader>
                <CardTitle>Learning Materials</CardTitle>
                <CardDescription>Access your class resources and assignments</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {learningMaterials.map((material) => (
                    <div
                      key={material.id}
                      className="flex items-center justify-between p-4 bg-white border rounded-lg"
                    >
                      <div>
                        <h3 className="font-medium">{material.description}</h3>
                        <p className="text-sm text-slate-500">
                          {material.subject} • {material.content_type}
                        </p>
                      </div>
                      <Button
                        variant="outline"
                        onClick={() => window.open(material.file_url, '_blank')}
                      >
                        Download
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
} 