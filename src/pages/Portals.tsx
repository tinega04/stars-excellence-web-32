import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Users, BookOpen, UserCheck, Lock, ArrowRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const portalFeatures = {
  learner: [
    "View exam results and academic progress",
    "Access fee statements and payment history",
    "Update personal profile and interests",
    "Reset password and manage account"
  ],
  staff: [
    "Manage employment information",
    "View teaching schedule",
    "Update qualifications and certifications",
    "Access staff resources and notices"
  ],
  learning: [
    "Access class-specific learning materials",
    "Submit and track assignments",
    "Interact with course content",
    "Download study resources"
  ]
};

const Portals = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <Helmet>
        <title>Digital Portals | Stevens Integrated Schools</title>
        <meta name="description" content="Access our secure digital portals for students, staff, and learning resources at Stevens Integrated Schools." />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-darkBlue text-white py-16 md:py-24">
        <div className="container px-4 sm:px-6 md:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Digital Learning Portals
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8">
              Access our secure online portals designed to enhance the educational experience 
              for students, teachers, and staff members.
            </p>
          </div>
        </div>
      </section>

      {/* Portals Grid */}
      <section className="py-16 md:py-24">
        <div className="container px-4 sm:px-6 md:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Learner Portal */}
            <Card className="relative group hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-accentBlue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-accentBlue" />
                </div>
                <CardTitle className="text-2xl font-playfair text-darkBlue">Learner Portal</CardTitle>
                <CardDescription className="text-base">
                  Access your academic information and personal profile
                </CardDescription>
              </CardHeader>
              <CardContent className="text-sm">
                <ul className="space-y-2">
                  {portalFeatures.learner.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <ArrowRight className="w-4 h-4 text-accentBlue mr-2 mt-1 flex-shrink-0" />
                      <span className="text-textGray">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="pt-4">
                <Link to="/portals/learner" className="w-full">
                  <Button className="w-full bg-accentBlue hover:bg-accentBlue-600 text-white gap-2">
                    Access Portal <Lock className="w-4 h-4" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>

            {/* Staff Portal */}
            <Card className="relative group hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-darkBlue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <UserCheck className="w-8 h-8 text-darkBlue" />
                </div>
                <CardTitle className="text-2xl font-playfair text-darkBlue">Staff Portal</CardTitle>
                <CardDescription className="text-base">
                  Manage your employment information and schedule
                </CardDescription>
              </CardHeader>
              <CardContent className="text-sm">
                <ul className="space-y-2">
                  {portalFeatures.staff.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <ArrowRight className="w-4 h-4 text-darkBlue mr-2 mt-1 flex-shrink-0" />
                      <span className="text-textGray">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="pt-4">
                <Link to="/portals/staff" className="w-full">
                  <Button className="w-full bg-darkBlue hover:bg-darkBlue-600 text-white gap-2">
                    Access Portal <Lock className="w-4 h-4" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>

            {/* Learning Portal */}
            <Card className="relative group hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-accentBlue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-8 h-8 text-accentBlue" />
                </div>
                <CardTitle className="text-2xl font-playfair text-darkBlue">Learning Portal</CardTitle>
                <CardDescription className="text-base">
                  Access learning materials and assignments
                </CardDescription>
              </CardHeader>
              <CardContent className="text-sm">
                <ul className="space-y-2">
                  {portalFeatures.learning.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <ArrowRight className="w-4 h-4 text-accentBlue mr-2 mt-1 flex-shrink-0" />
                      <span className="text-textGray">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="pt-4">
                <Link to="/portals/learning" className="w-full">
                  <Button className="w-full bg-accentBlue hover:bg-accentBlue-600 text-white gap-2">
                    Access Portal <Lock className="w-4 h-4" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Security Notice */}
      <section className="py-12 bg-slate-100">
        <div className="container px-4 sm:px-6 md:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-playfair text-2xl md:text-3xl text-darkBlue mb-4">
              Secure Access
            </h2>
            <p className="text-textGray">
              Our portals use industry-standard encryption to protect your data. 
              Each portal requires unique credentials for access. If you're having trouble logging in, 
              please contact our IT support team.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portals; 