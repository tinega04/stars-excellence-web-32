
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>About Us | Stevens Integrated Schools</title>
        <meta name="description" content="Stevens Integrated Schools, founded in 2004, is a nurturing learning community serving learners from early childhood through junior school across our Imara Daima and Airview campuses." />
        <meta name="keywords" content="Stevens Integrated Schools, CBC curriculum, private schools Nairobi, education Kenya, Imara Daima school, Airview school" />
        <link rel="canonical" href="https://stevensschools.com/about" />
      </Helmet>

      {/* Hero Section */}
      <div className="bg-darkBlue w-full h-80 md:h-96 relative overflow-hidden">
        <div className="absolute inset-0 bg-darkBlue/60 z-10"></div>
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80" alt="Stevens Integrated Schools campus" className="w-full h-full object-cover object-center" />
        </div>
        <div className="container relative z-20 h-full flex flex-col justify-center items-center text-white">
          <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6 animate-fade-in">
            About Stevens Integrated Schools
          </h1>
          <div className="w-24 h-1 bg-accentBlue animate-fade-in-delayed opacity-0"></div>
        </div>
      </div>
      
      <main className="container py-10 md:py-16 animate-fade-in">
        <div className="max-w-4xl mx-auto">
          <section className="mb-16">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="card-premium rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <img src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=1000" alt="Stevens Integrated Schools campus" className="w-full h-64 object-cover" loading="lazy" />
              </div>
              <div>
                <h2 className="text-3xl font-playfair text-darkBlue mb-4">About Us</h2>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Stevens Integrated Schools, founded in 2004, is a nurturing learning community that serves learners from early childhood through junior school. With two vibrant campuses in Imara Daima (Nairobi) and Airview (Kitengela), we deliver a rich academic experience grounded in Kenya's Competency-Based Curriculum (CBC).
                </p>
                <p className="text-gray-700 leading-relaxed">
                  More than just a place of learning, our school is a place of transformation — where students grow in knowledge, character, and confidence to impact their families and communities.
                </p>
              </div>
            </div>
          </section>

          <div className="border-t border-gray-200 my-12"></div>

          <section className="mb-16">
            <div className="bg-darkBlue/5 p-10 rounded-lg shadow-inner relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-accentBlue"></div>
              <h2 className="text-3xl font-playfair text-darkBlue mb-6 text-center">Vision</h2>
              <p className="text-lg text-gray-700 text-center italic">
                "A school where learners receive holistic, quality education in order to transform their families and communities at large."
              </p>
            </div>
          </section>

          <div className="border-t border-gray-200 my-12"></div>

          <section className="mb-16">
            <div className="bg-darkBlue/5 p-10 rounded-lg shadow-inner relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-accentBlue"></div>
              <h2 className="text-3xl font-playfair text-darkBlue mb-6 text-center">Mission</h2>
              <p className="text-lg text-gray-700 text-center italic">
                "To provide and advance holistic, quality education that develops young people into useful and productive members of their families and the wider society."
              </p>
            </div>
          </section>

          <div className="border-t border-gray-200 my-12"></div>

          <section className="mb-16">
            <h2 className="text-3xl font-playfair text-darkBlue mb-10 text-center">Core Values</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {["Trust in God", "Integrity", "Team Spirit", "Professionalism", "Responsibility", "Accountability", "Commitment to Service", "Excellence"].map((value, index) => (
                <div key={index} className="bg-white p-5 rounded-lg border border-darkBlue/10 shadow-sm hover:shadow-md hover:border-accentBlue/30 transition-all duration-300 flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-accentBlue"></div>
                  <span className="font-medium text-darkBlue">{value}</span>
                </div>
              ))}
            </div>
          </section>

          <div className="border-t border-gray-200 my-12"></div>

          <section className="mb-16">
            <div className="bg-darkBlue/5 p-10 rounded-lg shadow-inner relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-accentBlue"></div>
              <h2 className="text-3xl font-playfair text-darkBlue mb-6 text-center">Belief</h2>
              <p className="text-lg text-gray-700 text-center italic">
                "We believe that all learners are capable — only that they all learn differently."
              </p>
            </div>
          </section>

          <div className="border-t border-gray-200 my-12"></div>

          <section className="mb-16">
            <h2 className="text-3xl font-playfair text-darkBlue mb-10 text-center">Visit Our Campuses</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="card-premium p-6">
                <h3 className="text-xl font-playfair text-darkBlue mb-2">Imara Daima Campus</h3>
                <p className="text-gray-600 mb-4">Our flagship campus with state-of-the-art facilities serving Nairobi.</p>
                <Button asChild className="w-full bg-accentBlue hover:bg-accentBlue/90 text-white">
                  <Link to="/campuses">Schedule a Visit</Link>
                </Button>
              </div>
              <div className="card-premium p-6">
                <h3 className="text-xl font-playfair text-darkBlue mb-2">Airview Campus</h3>
                <p className="text-gray-600 mb-4">Our Kitengela campus providing quality education in a serene environment.</p>
                <Button asChild className="w-full bg-accentBlue hover:bg-accentBlue/90 text-white">
                  <Link to="/campuses">Schedule a Visit</Link>
                </Button>
              </div>
            </div>
          </section>

          <section>
            <div className="bg-darkBlue text-white p-10 rounded-lg shadow-xl text-center">
              <h2 className="text-3xl font-playfair mb-6 text-white">Join Our Community</h2>
              <p className="text-lg mb-8 text-gray-200">Discover how your child can benefit from our holistic approach to education.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild className="bg-white text-darkBlue hover:bg-gray-100 font-medium">
                  <Link to="/admissions" className="px-8">Apply Now</Link>
                </Button>
                <Button asChild className="bg-accentBlue hover:bg-accentBlue/90 text-white font-medium">
                  <Link to="/contact" className="px-8">Contact Us</Link>
                </Button>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default About;
