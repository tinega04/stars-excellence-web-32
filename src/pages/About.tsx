
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>About Us | Stevens Integrated Schools</title>
        <meta name="description" content="Stevens Integrated Schools, founded in 2004, is a nurturing learning community serving learners from early childhood through junior school across our Imara Daima and Airview campuses." />
        <meta name="keywords" content="Stevens Integrated Schools, CBC curriculum, private schools Nairobi, education Kenya, Imara Daima school, Airview school" />
        <link rel="canonical" href="https://stevensschools.com/about" />
      </Helmet>

      <div className="bg-blue-900 py-20 text-white">
        <div className="container">
          <h1 className="font-serif text-4xl md:text-5xl font-bold">About Stevens Integrated Schools</h1>
        </div>
      </div>
      
      <main className="container py-12 animate-fade-in">
        <div className="flex justify-center mb-8">
          <Link to="/" className="text-blue-600 hover:text-blue-800 flex items-center gap-1 transition-colors">
            <span>← Back to Home</span>
          </Link>
        </div>

        <div className="prose lg:prose-xl max-w-4xl mx-auto">
          <section className="mb-16">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-serif text-blue-900 mb-4">About Us</h2>
                <p className="text-lg text-gray-700 mb-4">
                  Stevens Integrated Schools, founded in 2004, is a nurturing learning community that serves learners from early childhood through junior school. With two vibrant campuses in Imara Daima (Nairobi) and Airview (Kitengela), we deliver a rich academic experience grounded in Kenya's Competency-Based Curriculum (CBC).
                </p>
                <p className="text-lg text-gray-700">
                  More than just a place of learning, our school is a place of transformation — where students grow in knowledge, character, and confidence to impact their families and communities.
                </p>
              </div>
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=1000"
                  alt="Stevens Integrated Schools campus" 
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </section>

          <div className="border-t border-gray-200 my-12"></div>

          <section className="mb-16">
            <div className="bg-blue-50 p-8 rounded-lg shadow-inner">
              <h2 className="text-3xl font-serif text-blue-900 mb-6 text-center">Vision</h2>
              <p className="text-lg text-gray-700 text-center italic">
                A school where learners receive holistic, quality education in order to transform their families and communities at large.
              </p>
            </div>
          </section>

          <div className="border-t border-gray-200 my-12"></div>

          <section className="mb-16">
            <div className="bg-blue-50 p-8 rounded-lg shadow-inner">
              <h2 className="text-3xl font-serif text-blue-900 mb-6 text-center">Mission</h2>
              <p className="text-lg text-gray-700 text-center italic">
                To provide and advance holistic, quality education that develops young people into useful and productive members of their families and the wider society.
              </p>
            </div>
          </section>

          <div className="border-t border-gray-200 my-12"></div>

          <section className="mb-16">
            <h2 className="text-3xl font-serif text-blue-900 mb-6">Core Values</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                "Trust in God",
                "Integrity",
                "Team Spirit", 
                "Professionalism",
                "Responsibility", 
                "Accountability",
                "Commitment to Service",
                "Excellence"
              ].map((value, index) => (
                <div key={index} className="bg-white p-4 rounded-lg border border-blue-100 shadow-sm hover:shadow-md transition-shadow flex items-center gap-2">
                  <ChevronRight size={16} className="text-blue-600 flex-shrink-0" />
                  <span>{value}</span>
                </div>
              ))}
            </div>
          </section>

          <div className="border-t border-gray-200 my-12"></div>

          <section className="mb-16">
            <div className="bg-blue-50 p-8 rounded-lg shadow-inner">
              <h2 className="text-3xl font-serif text-blue-900 mb-6 text-center">Belief</h2>
              <p className="text-lg text-gray-700 text-center italic">
                We believe that all learners are capable — only that they all learn differently.
              </p>
            </div>
          </section>

          <div className="border-t border-gray-200 my-12"></div>

          <section className="mb-16">
            <h2 className="text-3xl font-serif text-blue-900 mb-6">Visit Our Campuses</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-md">
                <h3 className="text-xl font-semibold text-blue-800 mb-2">Imara Daima Campus</h3>
                <p className="text-gray-600 mb-4">Our flagship campus with state-of-the-art facilities serving Nairobi.</p>
                <Button asChild>
                  <Link to="/campuses" className="w-full">Schedule a Visit</Link>
                </Button>
              </div>
              <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-md">
                <h3 className="text-xl font-semibold text-blue-800 mb-2">Airview Campus</h3>
                <p className="text-gray-600 mb-4">Our Kitengela campus providing quality education in a serene environment.</p>
                <Button asChild>
                  <Link to="/campuses" className="w-full">Schedule a Visit</Link>
                </Button>
              </div>
            </div>
          </section>

          <section>
            <div className="bg-blue-900 text-white p-8 rounded-lg shadow-xl text-center">
              <h2 className="text-3xl font-serif mb-6">Join Our Community</h2>
              <p className="text-lg mb-8">Discover how your child can benefit from our holistic approach to education.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild variant="secondary">
                  <Link to="/admissions" className="px-8">Apply Now</Link>
                </Button>
                <Button asChild>
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
