import { BrowserRouter as Router } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AuthProvider } from '@/lib/auth';
import { Toaster } from '@/components/ui/toaster';
import AppRoutes from '@/routes';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <AuthProvider>
          <AppRoutes />
          <Toaster />
        </AuthProvider>
      </Router>
    </HelmetProvider>
  );
}

export default App;
