import { createBrowserRouter } from 'react-router-dom';
import { ProtectedRoute } from './auth';
import Index from '@/pages/Index';
import Login from '@/pages/Login';
import Portals from '@/pages/Portals';
import LearnerPortal from '@/pages/portals/LearnerPortal';
import StaffPortal from '@/pages/portals/StaffPortal';
import LearningPortal from '@/pages/portals/LearningPortal';
import LearnerDashboard from '@/pages/dashboard/LearnerDashboard';
import StaffDashboard from '@/pages/dashboard/StaffDashboard';
import TeacherDashboard from '@/pages/dashboard/TeacherDashboard';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Index />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/portals',
    element: <Portals />
  },
  {
    path: '/portals/learner',
    element: (
      <ProtectedRoute>
        <LearnerPortal />
      </ProtectedRoute>
    )
  },
  {
    path: '/portals/staff',
    element: (
      <ProtectedRoute>
        <StaffPortal />
      </ProtectedRoute>
    )
  },
  {
    path: '/portals/learning',
    element: (
      <ProtectedRoute>
        <LearningPortal />
      </ProtectedRoute>
    )
  },
  {
    path: '/dashboard/learner',
    element: (
      <ProtectedRoute allowedRoles={['learner']}>
        <LearnerDashboard />
      </ProtectedRoute>
    )
  },
  {
    path: '/dashboard/staff',
    element: (
      <ProtectedRoute allowedRoles={['staff']}>
        <StaffDashboard />
      </ProtectedRoute>
    )
  },
  {
    path: '/dashboard/teacher',
    element: (
      <ProtectedRoute allowedRoles={['teacher']}>
        <TeacherDashboard />
      </ProtectedRoute>
    )
  }
]); 