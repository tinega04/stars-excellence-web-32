import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ChevronRight, CalendarIcon, ArrowRight } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
const Index = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  // Hero slider configuration
  const slides = [{
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=1600&h=900",
    title: "Nurturing Tomorrow's Leaders",
    subtitle: "Providing holistic, quality education that transforms families and communities.",
    cta: "Discover Our Approach",
    link: "/about"
  }, {
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1600&h=900",
    title: "Excellence in Education",
    subtitle: "Our CBC-aligned curriculum ensures comprehensive development.",
    cta: "Explore Academics",
    link: "/academics"
  }, {
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=1600&h=900",
    title: "Modern Learning Facilities",
    subtitle: "Experience our state-of-the-art campuses in Nairobi and Kitengela.",
    cta: "View Our Campuses",
    link: "/campuses"
  }];

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide(prev => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);
  const setSlide = (index: number) => {
    setActiveSlide(index);
  };
  return <div className="min-h-screen">
      <Helmet>
        <title>Stevens Integrated Schools | Stars of Excellence</title>
        <meta name="description" content="Stevens Integrated Schools is a leading education institution providing holistic, quality education that transforms families and communities." />
        <meta name="keywords" content="Stevens Integrated Schools, education Kenya, CBC curriculum, private schools Nairobi" />
        <link rel="canonical" href="https://stevensschools.com" />
      </Helmet>

      {/* Hero Section with Slider */}
      <section className="relative h-screen-90 bg-darkBlue overflow-hidden">
        <div className="absolute inset-0 z-10">
          <div className="relative h-full w-full overflow-hidden">
            {slides.map((slide, index) => <div key={index} className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${activeSlide === index ? "opacity-100 z-20" : "opacity-0 z-10"}`}>
                <div className="absolute inset-0 bg-darkBlue/60 z-10"></div>
                <img src={slide.image} alt={slide.title} className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 flex flex-col justify-center items-center text-white z-20 px-4">
                  <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-4 animate-fade-in">
                    {slide.title}
                  </h1>
                  <p className="text-xl md:text-2xl text-center mb-8 max-w-2xl animate-fade-in">
                    {slide.subtitle}
                  </p>
                  <Link to={slide.link} className="bg-accentBlue hover:bg-white hover:text-accentBlue text-white px-6 py-3 rounded flex items-center gap-2 transition duration-300 animate-fade-in">
                    {slide.cta}
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>)}
          </div>
        </div>
        
        {/* Slider Controls */}
        <div className="absolute bottom-10 left-0 right-0 z-30 flex justify-center">
          <div className="flex space-x-2">
            {slides.map((_, index) => <button key={index} onClick={() => setSlide(index)} className={`w-3 h-3 rounded-full transition-all ${activeSlide === index ? 'bg-accentBlue w-8' : 'bg-white/80 hover:bg-white'}`} aria-label={`Go to slide ${index + 1}`}></button>)}
          </div>
        </div>
      </section>

      {/* Campuses Section */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="section-title mx-auto after:left-0 after:right-0 after:mx-auto">Our Campuses</h2>
            <p className="text-darkBlue max-w-2xl mx-auto">
              Experience excellence in education at our two state-of-the-art campuses, 
              each offering a unique learning environment designed to inspire growth and achievement.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Nairobi Campus */}
            <div className="group card-premium">
              <div className="h-64 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&h=500" alt="Nairobi Campus" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              </div>
              <div className="p-6">
                <h3 className="font-playfair text-2xl text-darkBlue mb-2">Nairobi Campus</h3>
                <p className="text-textGray mb-4 leading-relaxed">
                  Located in the heart of Nairobi, our main campus offers modern facilities and a conducive learning environment for students.
                </p>
                <Link to="/campuses" className="flex items-center text-accentBlue font-medium hover:text-accentBlue-600 transition duration-300 group">
                  Learn More <ChevronRight size={16} className="ml-1 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
            
            {/* Kitengela Campus */}
            <div className="group card-premium">
              <div className="h-64 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&h=500" alt="Kitengela Campus" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              </div>
              <div className="p-6">
                <h3 className="font-playfair text-2xl text-darkBlue mb-2">Kitengela Campus</h3>
                <p className="text-textGray mb-4 leading-relaxed">
                  Our Kitengela campus provides a spacious and serene environment for learning, with state-of-the-art facilities.
                </p>
                <Link to="/campuses" className="flex items-center text-accentBlue font-medium hover:text-accentBlue-600 transition duration-300 group">
                  Learn More <ChevronRight size={16} className="ml-1 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CBC Curriculum Section */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="section-title mx-auto after:left-0 after:right-0 after:mx-auto">CBC Curriculum</h2>
            <p className="text-textGray max-w-3xl mx-auto">
              We follow the Competency-Based Curriculum (CBC) that focuses on developing skills, knowledge, 
              and attitudes for holistic growth of your child.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Kindergarten */}
            <div className="bg-white rounded-lg p-8 shadow-md text-center hover:shadow-lg transition-shadow duration-300">
              <div className="w-20 h-20 bg-accentBlue/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <img src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=80&h=80" alt="Kindergarten icon" className="w-12 h-12 object-contain" />
              </div>
              <h3 className="font-playfair text-xl text-darkBlue mb-4">Kindergarten</h3>
              <p className="text-textGray mb-6 leading-relaxed">
                Our kindergarten program focuses on early development through play-based learning and foundational skills.
              </p>
              <div className="inline-block w-12 h-0.5 bg-accentBlue"></div>
            </div>
            
            {/* Lower Primary */}
            <div className="bg-white rounded-lg p-8 shadow-md text-center hover:shadow-lg transition-shadow duration-300">
              <div className="w-20 h-20 bg-accentBlue/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=80&h=80" alt="Primary icon" className="w-12 h-12 object-contain" />
              </div>
              <h3 className="font-playfair text-xl text-darkBlue mb-4">Primary</h3>
              <p className="text-textGray mb-6 leading-relaxed">
                Building on the foundation, primary education focuses on literacy, numeracy, and core competencies.
              </p>
              <div className="inline-block w-12 h-0.5 bg-accentBlue"></div>
            </div>
            
            {/* Junior School */}
            <div className="bg-white rounded-lg p-8 shadow-md text-center hover:shadow-lg transition-shadow duration-300">
              <div className="w-20 h-20 bg-accentBlue/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <img src="https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=80&h=80" alt="Junior School icon" className="w-12 h-12 object-contain" />
              </div>
              <h3 className="font-playfair text-xl text-darkBlue mb-4">Junior School</h3>
              <p className="text-textGray mb-6 leading-relaxed">
                Junior school expands knowledge while developing critical thinking, creativity, and practical skills.
              </p>
              <div className="inline-block w-12 h-0.5 bg-accentBlue"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding bg-white relative">
        <div className="container relative z-10">
          <div className="bg-white p-8 md:p-12 rounded-lg shadow-lg">
            <div className="text-center mb-12">
              <h2 className="section-title mx-auto after:left-0 after:right-0 after:mx-auto">Why Choose Us</h2>
              <p className="text-textGray max-w-3xl mx-auto">
                Stevens Integrated Schools offers a comprehensive educational experience designed 
                to nurture well-rounded individuals ready for the future.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* CBC-aligned */}
              <div className="flex flex-col items-center text-center group">
                <div className="w-16 h-16 bg-accentBlue/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-accentBlue/20 transition-colors duration-300">
                  <img src="https://images.unsplash.com/photo-1469474038136-46273834b3fb?auto=format&fit=crop&w=64&h=64" alt="CBC icon" className="w-8 h-8 object-contain" />
                </div>
                <h3 className="font-playfair text-lg text-darkBlue mb-3">CBC-Aligned</h3>
                <p className="text-textGray leading-relaxed">
                  Our curriculum is fully aligned with CBC requirements, ensuring your child's education meets national standards.
                </p>
              </div>
              
              {/* Safe Environment */}
              <div className="flex flex-col items-center text-center group">
                <div className="w-16 h-16 bg-accentBlue/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-accentBlue/20 transition-colors duration-300">
                  <img src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=64&h=64" alt="Safety icon" className="w-8 h-8 object-contain" />
                </div>
                <h3 className="font-playfair text-lg text-darkBlue mb-3">Safe Environment</h3>
                <p className="text-textGray leading-relaxed">
                  We prioritize student safety with secure facilities and vigilant staff supervision.
                </p>
              </div>
              
              {/* Qualified Staff */}
              <div className="flex flex-col items-center text-center group">
                <div className="w-16 h-16 bg-accentBlue/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-accentBlue/20 transition-colors duration-300">
                  <img src="https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?auto=format&fit=crop&w=64&h=64" alt="Staff icon" className="w-8 h-8 object-contain" />
                </div>
                <h3 className="font-playfair text-lg text-darkBlue mb-3">Qualified Staff</h3>
                <p className="text-textGray leading-relaxed">
                  Our teachers are experienced, certified, and committed to educational excellence.
                </p>
              </div>
              
              {/* Co-curricular Activities */}
              <div className="flex flex-col items-center text-center group">
                <div className="w-16 h-16 bg-accentBlue/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-accentBlue/20 transition-colors duration-300">
                  <img src="https://images.unsplash.com/photo-1506744476757-2fa66ead5fd1?auto=format&fit=crop&w=64&h=64" alt="Activities icon" className="w-8 h-8 object-contain" />
                </div>
                <h3 className="font-playfair text-lg text-darkBlue mb-3">Co-curricular Activities</h3>
                <p className="text-textGray leading-relaxed">
                  We offer diverse activities to develop talents and skills beyond academics.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* News & Events Section with Carousel */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="section-title mx-auto after:left-0 after:right-0 after:mx-auto">News & Events</h2>
            <p className="text-textGray max-w-3xl mx-auto">
              Stay updated with the latest happenings and upcoming events at Stevens Integrated Schools.
            </p>
          </div>
          
          <Carousel className="max-w-5xl mx-auto">
            <CarouselContent>
              {/* Event 1 */}
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <div className="bg-white rounded-lg shadow-md overflow-hidden h-full">
                  <div className="h-48 overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=600&h=400" alt="News event" className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center text-sm text-textGray mb-2">
                      <CalendarIcon size={16} className="mr-1" />
                      <span>May 15, 2025</span>
                    </div>
                    <h3 className="font-playfair text-xl text-darkBlue mb-2">Annual Sports Day</h3>
                    <p className="text-textGray mb-4 line-clamp-3">
                      Join us for our annual sports day celebration featuring competitions and performances from all grade levels.
                    </p>
                    <Link to="/" className="flex items-center text-accentBlue font-medium hover:text-accentBlue-600 transition duration-300 group">
                      Read More <ChevronRight size={16} className="ml-1 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </CarouselItem>
              
              {/* Event 2 */}
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <div className="bg-white rounded-lg shadow-md overflow-hidden h-full">
                  <div className="h-48 overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=600&h=400" alt="News event" className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center text-sm text-textGray mb-2">
                      <CalendarIcon size={16} className="mr-1" />
                      <span>May 8, 2025</span>
                    </div>
                    <h3 className="font-playfair text-xl text-darkBlue mb-2">CBC Parent Workshop</h3>
                    <p className="text-textGray mb-4 line-clamp-3">
                      Parents are invited to learn more about CBC implementation and how to support their children's learning at home.
                    </p>
                    <Link to="/" className="flex items-center text-accentBlue font-medium hover:text-accentBlue-600 transition duration-300 group">
                      Read More <ChevronRight size={16} className="ml-1 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </CarouselItem>
              
              {/* Event 3 */}
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <div className="bg-white rounded-lg shadow-md overflow-hidden h-full">
                  <div className="h-48 overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1431576901776-e539bd916ba2?auto=format&fit=crop&w=600&h=400" alt="News event" className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center text-sm text-textGray mb-2">
                      <CalendarIcon size={16} className="mr-1" />
                      <span>April 28, 2025</span>
                    </div>
                    <h3 className="font-playfair text-xl text-darkBlue mb-2">New Science Lab Opening</h3>
                    <p className="text-textGray mb-4 line-clamp-3">
                      We're excited to announce the opening of our new state-of-the-art science laboratory at our Nairobi campus.
                    </p>
                    <Link to="/" className="flex items-center text-accentBlue font-medium hover:text-accentBlue-600 transition duration-300 group">
                      Read More <ChevronRight size={16} className="ml-1 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </CarouselItem>
              
              {/* Event 4 */}
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <div className="bg-white rounded-lg shadow-md overflow-hidden h-full">
                  <div className="h-48 overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1506744476757-2fa66ead5fd1?auto=format&fit=crop&w=600&h=400" alt="News event" className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center text-sm text-textGray mb-2">
                      <CalendarIcon size={16} className="mr-1" />
                      <span>April 15, 2025</span>
                    </div>
                    <h3 className="font-playfair text-xl text-darkBlue mb-2">Cultural Day Celebrations</h3>
                    <p className="text-textGray mb-4 line-clamp-3">
                      Join us for a day of celebrating Kenya's diverse cultures with food, music, dance and traditional attire.
                    </p>
                    <Link to="/" className="flex items-center text-accentBlue font-medium hover:text-accentBlue-600 transition duration-300 group">
                      Read More <ChevronRight size={16} className="ml-1 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </CarouselItem>
            </CarouselContent>
            <div className="hidden md:flex">
              <CarouselPrevious className="bg-darkBlue text-white hover:bg-darkBlue-600 border-0" />
              <CarouselNext className="bg-darkBlue text-white hover:bg-darkBlue-600 border-0" />
            </div>
          </Carousel>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="section-padding bg-darkBlue text-white relative overflow-hidden border-b-8 border-accentBlue">
        <div className="absolute inset-0 bg-darkBlue/90 z-10"></div>
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=1600&h=900" alt="School background" className="w-full h-full object-cover opacity-20" />
        </div>
        <div className="container relative z-20 text-center">
          <h2 className="font-playfair text-3xl md:text-4xl mb-6 max-w-3xl mx-auto text-zinc-50 font-bold lg:text-5xl">
            Join the Stars of Excellence
          </h2>
          <div className="w-24 h-1 bg-accentBlue mx-auto mb-8"></div>
          <p className="text-lg text-white max-w-2xl mx-auto mb-10 leading-relaxed">
            Give your child the gift of quality education in a nurturing environment. 
            Applications for the next intake are now open.
          </p>
          <Link to="/admissions" className="bg-accentBlue hover:bg-white hover:text-darkBlue text-white transition duration-300 px-8 py-3 rounded inline-flex items-center font-medium">
            Apply Now
          </Link>
        </div>
      </section>
    </div>;
};
export default Index;