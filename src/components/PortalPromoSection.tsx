
import { Link } from "react-router-dom";
import { 
  Users, 
  BookOpen, 
  UserCheck, 
  ArrowRight 
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const PortalPromoSection = () => {
  const portalOptions = [
    {
      title: "Learner Portal",
      description: "Access your academic information, fee statements, and personal profile.",
      icon: Users,
      link: "/portals/learner",
      color: "bg-accentBlue"
    },
    {
      title: "Staff Portal",
      description: "Access staff information, apply for leave, and manage your employment details.",
      icon: UserCheck,
      link: "/portals/staff",
      color: "bg-darkBlue"
    },
    {
      title: "Learning Portal",
      description: "Access learning materials, assignments, and educational resources.",
      icon: BookOpen,
      link: "/portals/learning",
      color: "bg-accentBlue"
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="section-title mx-auto after:left-0 after:right-0 after:mx-auto">
            Our Digital Portals
          </h2>
          <p className="text-textGray max-w-3xl mx-auto">
            Access our secure online portals designed to enhance the educational experience 
            for students, teachers, and staff members.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {portalOptions.map((portal, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow group">
              <CardContent className="p-0">
                <div className={`p-6 ${portal.color} text-white`}>
                  <portal.icon size={32} className="mb-4" />
                  <h3 className="font-playfair text-xl text-white font-bold mb-2">{portal.title}</h3>
                  <p className="text-white/90 text-sm leading-relaxed">{portal.description}</p>
                </div>
                <div className="p-6 flex justify-end">
                  <Link 
                    to={portal.link} 
                    className={`flex items-center text-${portal.color === "bg-accentBlue" ? "accentBlue" : "darkBlue"} font-medium hover:underline transition-all group-hover:translate-x-1`}
                  >
                    Access Portal <ArrowRight size={16} className="ml-1" />
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortalPromoSection;
