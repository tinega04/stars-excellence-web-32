
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Admissions = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Admissions | Stevens Integrated Schools</title>
        <meta name="description" content="Join Stevens Integrated Schools and give your child a quality education in a nurturing environment. Learn about our admissions process and application requirements." />
        <meta name="keywords" content="Stevens Integrated Schools admissions, school enrollment Kenya, apply CBC school, private school application" />
        <link rel="canonical" href="https://stevensschools.com/admissions" />
      </Helmet>

      {/* Hero Section */}
      <div className="bg-darkBlue w-full h-80 md:h-96 relative overflow-hidden">
        <div className="absolute inset-0 bg-darkBlue/60 z-10"></div>
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&q=80"
            alt="Admissions at Stevens Integrated Schools" 
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div className="container relative z-20 h-full flex flex-col justify-center items-center text-white">
          <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6 animate-fade-in">
            Admissions
          </h1>
          <div className="w-24 h-1 bg-accentBlue animate-fade-in-delayed opacity-0"></div>
        </div>
      </div>
      
      <main className="container py-10 md:py-16 animate-fade-in">
        <div className="max-w-4xl mx-auto">
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="section-title mx-auto after:left-0 after:right-0 after:mx-auto">Join Our School</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Welcome to Stevens Integrated Schools admissions. We're delighted that you're considering our school for your child's education journey.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="font-playfair text-2xl text-darkBlue mb-4">Admissions Process</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Our admissions process is designed to ensure that each student who joins our community is well-placed to thrive and contribute positively.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  We assess each application individually, considering academic potential, personal qualities, and family commitment to our educational philosophy.
                </p>
              </div>
              <div className="card-premium rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <img 
                  src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=1000"
                  alt="Students at Stevens Integrated Schools" 
                  className="w-full h-64 object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </section>

          <div className="border-t border-gray-200 my-12"></div>

          <section className="mb-16">
            <h2 className="text-3xl font-playfair text-darkBlue mb-10 text-center">How to Apply</h2>
            
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg border border-darkBlue/10 shadow-sm hover:shadow-md transition-shadow duration-300">
                <h3 className="font-playfair text-xl text-darkBlue mb-3 flex items-center">
                  <div className="w-8 h-8 rounded-full bg-darkBlue text-white flex items-center justify-center mr-3">1</div>
                  Inquiry
                </h3>
                <p className="text-gray-600 pl-11 leading-relaxed">
                  Contact our admissions office via email, phone or visit our campus to request information and schedule a tour.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg border border-darkBlue/10 shadow-sm hover:shadow-md transition-shadow duration-300">
                <h3 className="font-playfair text-xl text-darkBlue mb-3 flex items-center">
                  <div className="w-8 h-8 rounded-full bg-darkBlue text-white flex items-center justify-center mr-3">2</div>
                  Application Form
                </h3>
                <p className="text-gray-600 pl-11 leading-relaxed">
                  Complete the online application form and submit required documents, including previous academic records.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg border border-darkBlue/10 shadow-sm hover:shadow-md transition-shadow duration-300">
                <h3 className="font-playfair text-xl text-darkBlue mb-3 flex items-center">
                  <div className="w-8 h-8 rounded-full bg-darkBlue text-white flex items-center justify-center mr-3">3</div>
                  Assessment
                </h3>
                <p className="text-gray-600 pl-11 leading-relaxed">
                  Depending on grade level, students may be required to take an entrance assessment or participate in an interview.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg border border-darkBlue/10 shadow-sm hover:shadow-md transition-shadow duration-300">
                <h3 className="font-playfair text-xl text-darkBlue mb-3 flex items-center">
                  <div className="w-8 h-8 rounded-full bg-darkBlue text-white flex items-center justify-center mr-3">4</div>
                  Decision & Enrollment
                </h3>
                <p className="text-gray-600 pl-11 leading-relaxed">
                  Upon acceptance, you'll receive an offer letter. Complete the enrollment process by paying fees and submitting required forms.
                </p>
              </div>
            </div>
          </section>

          <div className="border-t border-gray-200 my-12"></div>

          <section className="mb-16">
            <h2 className="text-3xl font-playfair text-darkBlue mb-10 text-center">Academic Year & Fees</h2>
            
            <div className="bg-white p-8 rounded-lg border border-darkBlue/10 shadow-md">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-playfair text-xl text-darkBlue mb-4">Academic Calendar</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="w-2 h-2 rounded-full bg-accentBlue mt-2 mr-3"></div>
                      <div>
                        <span className="font-medium">Term 1:</span> January - April
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 rounded-full bg-accentBlue mt-2 mr-3"></div>
                      <div>
                        <span className="font-medium">Term 2:</span> May - August
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 rounded-full bg-accentBlue mt-2 mr-3"></div>
                      <div>
                        <span className="font-medium">Term 3:</span> September - December
                      </div>
                    </li>
                  </ul>
                  <p className="mt-4 text-sm text-gray-500">
                    *The actual dates may vary slightly each year. Please contact us for the current year's specific calendar.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-playfair text-xl text-darkBlue mb-4">Fee Structure</h3>
                  <p className="text-gray-600 mb-4">
                    Our fees include tuition, learning materials, and most co-curricular activities. Additional fees may apply for transportation, uniforms, and special programs.
                  </p>
                  <p className="text-gray-600">
                    For detailed fee information specific to each grade level and campus, please contact our admissions office.
                  </p>
                  <Link 
                    to="/contact" 
                    className="mt-4 inline-flex items-center text-accentBlue font-medium hover:text-accentBlue/80 transition duration-300"
                  >
                    Request Fee Structure <ArrowRight size={16} className="ml-1" />
                  </Link>
                </div>
              </div>
            </div>
          </section>

          <section>
            <div className="bg-darkBlue text-white p-10 rounded-lg shadow-xl">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h2 className="text-3xl font-playfair mb-4 text-white">Ready to Apply?</h2>
                  <p className="text-gray-200 mb-6 leading-relaxed">
                    We look forward to welcoming your child to our school community. Contact us today to begin the application process.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button asChild className="bg-accentBlue hover:bg-accentBlue/90 text-white font-medium">
                      <a href="#">
                        Start Application
                      </a>
                    </Button>
                    <Button asChild variant="outline" className="border-white text-white hover:bg-white hover:text-darkBlue font-medium">
                      <Link to="/contact">
                        Contact Admissions
                      </Link>
                    </Button>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <img 
                    src="https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&w=400&h=400"
                    alt="Students at Stevens Integrated Schools" 
                    className="rounded-full w-48 h-48 object-cover border-4 border-accentBlue"
                  />
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Admissions;
