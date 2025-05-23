
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Layout from "./components/Layout";
import Index from "./pages/Index";
import About from "./pages/About";
import Academics from "./pages/Academics"; // This will be our Curriculum page
import Campuses from "./pages/Campuses"; // This will be our Facilities page
import Admissions from "./pages/Admissions";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import LearnerPortal from "./pages/portals/LearnerPortal";
import StaffPortal from "./pages/portals/StaffPortal";
import LearningPortal from "./pages/portals/LearningPortal";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <HelmetProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<About />} />
              <Route path="/academics" element={<Academics />} /> {/* Curriculum route */}
              <Route path="/campuses" element={<Campuses />} /> {/* Facilities route */}
              <Route path="/admissions" element={<Admissions />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/portals/learner" element={<LearnerPortal />} />
              <Route path="/portals/staff" element={<StaffPortal />} />
              <Route path="/portals/learning" element={<LearningPortal />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </HelmetProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
