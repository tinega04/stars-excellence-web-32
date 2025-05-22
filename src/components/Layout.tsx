
import { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Main content with padding for header */}
      <div className="flex-grow pt-20">
        {children}
      </div>
      
      <Footer />
    </div>
  );
};

export default Layout;
