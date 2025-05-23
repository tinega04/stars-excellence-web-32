
import { ReactNode, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { 
  LogOut, 
  User, 
  Key,
  FileText, 
  CreditCard, 
  Book, 
  Upload,
  Calendar,
  ClipboardList,
  Briefcase,
  Menu,
  X
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Helmet } from "react-helmet-async";

interface PortalLayoutProps {
  children: ReactNode;
  title: string;
  userType: "learner" | "staff" | "teacher";
  username: string;
}

const PortalLayout = ({ children, title, userType, username }: PortalLayoutProps) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    // This would contain actual logout logic in a real implementation
    navigate(`/portals/${userType === "teacher" ? "learning" : userType}`);
  };

  const getSidebarItems = () => {
    switch (userType) {
      case "learner":
        return [
          { icon: FileText, label: "Exam Results", href: "#results" },
          { icon: CreditCard, label: "Fee Statements", href: "#fees" },
          { icon: User, label: "Profile", href: "#profile" },
          { icon: Key, label: "Reset Password", href: "#password" },
        ];
      case "staff":
        return [
          { icon: User, label: "Personal Data", href: "#personal" },
          { icon: Calendar, label: "Leave Application", href: "#leave" },
          { icon: Key, label: "Reset Password", href: "#password" },
        ];
      case "teacher":
        return [
          { icon: Upload, label: "Upload Content", href: "#upload" },
          { icon: ClipboardList, label: "Assignments", href: "#assignments" },
          { icon: User, label: "Profile", href: "#profile" },
          { icon: Key, label: "Reset Password", href: "#password" },
        ];
      default:
        return [];
    }
  };

  const sidebarItems = getSidebarItems();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>{title} | Stevens Integrated Schools</title>
      </Helmet>

      <div className="flex h-screen overflow-hidden">
        {/* Sidebar for desktop */}
        <div className={`bg-white border-r border-accentBlue/20 min-h-screen fixed inset-y-0 left-0 z-30 w-64 transform transition-transform duration-300 lg:translate-x-0 lg:static lg:inset-0 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}>
          <div className="flex items-center justify-between h-16 px-4 border-b border-accentBlue/20 bg-darkBlue text-white">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-accentBlue flex items-center justify-center">
                <span className="font-bold text-xs">SIS</span>
              </div>
              <h2 className="font-medium">{title}</h2>
            </div>
            <button 
              className="lg:hidden text-white" 
              onClick={toggleSidebar}
              aria-label="Close sidebar"
            >
              <X size={20} />
            </button>
          </div>
          
          <div className="flex flex-col justify-between h-[calc(100%-4rem)]">
            <nav className="px-2 py-4">
              <ul className="space-y-2">
                {sidebarItems.map((item, index) => (
                  <li key={index}>
                    <Link
                      to={item.href}
                      className="flex items-center gap-3 px-4 py-2 rounded-md hover:bg-accentBlue/10 text-darkBlue hover:text-accentBlue transition-colors duration-200"
                      onClick={() => setIsSidebarOpen(false)}
                    >
                      <item.icon size={18} />
                      <span>{item.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            
            <div className="p-4 border-t border-accentBlue/20">
              <Button 
                variant="outline" 
                className="w-full justify-start border-accentBlue/30 text-darkBlue hover:text-accentBlue hover:bg-accentBlue/10"
                onClick={handleLogout}
              >
                <LogOut size={18} className="mr-2" />
                Sign out
              </Button>
            </div>
          </div>
        </div>

        {/* Main content */}
        <div className="flex-1 flex flex-col overflow-hidden pt-16">
          {/* Top bar */}
          <header className="bg-white border-b border-accentBlue/20 fixed top-0 right-0 left-0 z-20 h-16 flex items-center justify-between px-4 lg:pl-64">
            <button 
              className="lg:hidden text-darkBlue"
              onClick={toggleSidebar}
              aria-label="Open sidebar"
            >
              <Menu size={24} />
            </button>
            
            <div className="flex items-center gap-4 ml-auto">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-medium text-darkBlue">{username}</p>
                <p className="text-xs text-accentBlue capitalize">{userType}</p>
              </div>
              <Avatar>
                <AvatarImage src="" alt={username} />
                <AvatarFallback className="bg-accentBlue text-white">
                  {username.substring(0, 2).toUpperCase()}
                </AvatarFallback>
              </Avatar>
            </div>
          </header>
          
          {/* Page content */}
          <main className="flex-1 overflow-y-auto p-4 pt-6 lg:p-8 mt-4">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
};

export default PortalLayout;
