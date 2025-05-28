import { ReactNode, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '@/lib/auth';
import { Button } from '@/components/ui/button';
import { UserCircle, LogOut, Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Skeleton } from '@/components/ui/skeleton';

interface DashboardLayoutProps {
  children: ReactNode;
  title: string;
  loading?: boolean;
}

export function DashboardLayout({ children, title, loading = false }: DashboardLayoutProps) {
  const { profile, signOut } = useAuth();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-white border-b border-slate-200 shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <button
                type="button"
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                className="lg:hidden -ml-2 p-2 rounded-md text-slate-500 hover:text-slate-600 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
                aria-controls="mobile-menu"
                aria-expanded={isSidebarOpen}
              >
                <span className="sr-only">Open main menu</span>
                {isSidebarOpen ? (
                  <X className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <Menu className="block h-6 w-6" aria-hidden="true" />
                )}
              </button>
              <Link 
                to="/" 
                className="text-xl font-playfair text-darkBlue font-bold hover:text-blue-700 transition-colors"
                aria-label="Go to home page"
              >
                Stars Excellence
              </Link>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <UserCircle className="w-5 h-5 text-slate-500" aria-hidden="true" />
                {loading ? (
                  <Skeleton className="h-5 w-32" />
                ) : (
                  <span className="text-sm text-slate-600">
                    {profile?.name} ({profile?.role})
                  </span>
                )}
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => signOut()}
                className={cn(
                  "text-slate-600 hover:text-slate-900 hover:bg-slate-100",
                  "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2",
                  "transition-colors duration-200"
                )}
              >
                <LogOut className="w-4 h-4 mr-2" aria-hidden="true" />
                Sign Out
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile sidebar */}
      <div
        className={cn(
          "fixed inset-0 bg-slate-800 bg-opacity-75 z-20 lg:hidden transition-opacity duration-300",
          isSidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        aria-hidden="true"
        onClick={() => setIsSidebarOpen(false)}
      />

      <div
        className={cn(
          "fixed inset-y-0 left-0 z-30 w-64 bg-white transform transition-transform duration-300 ease-in-out lg:hidden",
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        {/* Mobile sidebar content */}
        <div className="h-16 flex items-center justify-between px-4 border-b border-slate-200">
          <Link to="/" className="text-xl font-playfair text-darkBlue font-bold">
            Stars Excellence
          </Link>
          <button
            type="button"
            onClick={() => setIsSidebarOpen(false)}
            className="p-2 rounded-md text-slate-500 hover:text-slate-600 hover:bg-slate-100"
            aria-label="Close sidebar"
          >
            <X className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        {/* Add mobile navigation items here if needed */}
      </div>

      {/* Main Content */}
      <main 
        className={cn(
          "container mx-auto px-4 sm:px-6 lg:px-8 py-8",
          "transition-all duration-300",
          isSidebarOpen ? "lg:ml-64" : ""
        )}
      >
        <div className="max-w-7xl mx-auto">
          <h1 className="text-2xl font-playfair font-bold text-darkBlue mb-8">
            {loading ? <Skeleton className="h-8 w-48" /> : title}
          </h1>
          {loading ? (
            <div className="space-y-4">
              <Skeleton className="h-48 w-full" />
              <Skeleton className="h-32 w-full" />
              <Skeleton className="h-48 w-full" />
            </div>
          ) : (
            children
          )}
        </div>
      </main>
    </div>
  );
} 