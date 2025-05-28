import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { DashboardLayout } from '@/components/dashboard/DashboardLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { useAuth } from '@/lib/auth';
import { supabase } from '@/lib/supabase';
import { Database } from '@/types/supabase';

type StaffProfile = Database['public']['Tables']['staff_profiles']['Row'];

export default function StaffDashboard() {
  const { profile } = useAuth();
  const { toast } = useToast();
  const [staffProfile, setStaffProfile] = useState<StaffProfile | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (profile) {
      fetchStaffProfile();
    }
  }, [profile]);

  const fetchStaffProfile = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('staff_profiles')
        .select('*')
        .eq('user_id', profile!.id)
        .single();

      if (error) throw error;
      setStaffProfile(data);
    } catch (error) {
      console.error('Error fetching staff profile:', error);
      toast({
        title: 'Error',
        description: 'Failed to load staff profile. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <DashboardLayout title="Staff Dashboard">
      <Helmet>
        <title>Staff Dashboard | Stars Excellence</title>
      </Helmet>

      <div className="space-y-6">
        {/* Profile Card */}
        <Card>
          <CardHeader>
            <CardTitle>Staff Profile</CardTitle>
            <CardDescription>Your professional information and contact details</CardDescription>
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
                <h3 className="font-medium text-sm text-slate-500">Department</h3>
                <p className="mt-1">{staffProfile?.subjects.join(', ')}</p>
              </div>
            </div>

            <div className="mt-6">
              <h3 className="font-medium text-sm text-slate-500 mb-2">Qualifications</h3>
              <div className="space-y-2">
                {staffProfile?.qualifications.map((qual, index) => (
                  <div key={index} className="bg-slate-50 p-3 rounded-lg">
                    <p className="text-sm">{JSON.stringify(qual)}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6">
              <h3 className="font-medium text-sm text-slate-500 mb-2">Schedule</h3>
              <div className="bg-slate-50 p-4 rounded-lg">
                <pre className="text-sm overflow-x-auto">
                  {JSON.stringify(staffProfile?.schedule, null, 2)}
                </pre>
              </div>
            </div>

            <div className="mt-6 flex gap-2">
              <Button variant="outline">Edit Profile</Button>
              <Button variant="outline">Reset Password</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
} 