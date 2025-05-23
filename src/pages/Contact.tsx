
import { useState } from "react";
import { Link } from "react-router-dom";
import { Mail, MapPin, Phone } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Contact = () => {
  const [formData, setState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setState(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    toast({
      title: "Message Sent",
      description: "Thank you for your message. We will get back to you soon.",
    });
    // Reset form
    setState({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <div className="bg-darkBlue py-20 text-white">
        <div className="container">
          <h1 className="font-serif text-4xl md:text-5xl font-bold">Contact Us</h1>
        </div>
      </div>
      
      <main className="container py-12">
        <div className="flex justify-center mb-8">
          <Link to="/" className="text-accentBlue hover:text-darkBlue">← Back to Home</Link>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Contact Information */}
          <Card className="border-accentBlue border-2">
            <CardHeader className="bg-darkBlue/5">
              <CardTitle className="text-2xl font-serif text-darkBlue">Get in Touch</CardTitle>
              <CardDescription className="text-textGray-700">We'd love to hear from you</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 pt-6">
              <div className="flex items-start">
                <Phone className="mr-3 text-accentBlue h-5 w-5 mt-1" />
                <div>
                  <h3 className="font-medium text-darkBlue">Phone</h3>
                  <p className="text-textGray-800">Nairobi Campus: +254 720 688 293</p>
                  <p className="text-textGray-800">Kitengela Campus: +254 743 794 301</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Mail className="mr-3 text-accentBlue h-5 w-5 mt-1" />
                <div>
                  <h3 className="font-medium text-darkBlue">Email</h3>
                  <p className="text-textGray-800">stevensintegratedschools@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <MapPin className="mr-3 text-accentBlue h-5 w-5 mt-1" />
                <div>
                  <h3 className="font-medium text-darkBlue">Address</h3>
                  <p className="text-textGray-800">Nairobi Campus: Imara Daima</p>
                  <p className="text-textGray-800">Kitengela Campus: Airview</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact Form */}
          <Card className="border-accentBlue border-2">
            <CardHeader className="bg-darkBlue/5">
              <CardTitle className="text-2xl font-serif text-darkBlue">Send us a Message</CardTitle>
              <CardDescription className="text-textGray-700">Fill out the form below</CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-darkBlue mb-1" htmlFor="name">
                    Your Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full rounded-md border border-accentBlue/30 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-accentBlue"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-darkBlue mb-1" htmlFor="email">
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full rounded-md border border-accentBlue/30 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-accentBlue"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-darkBlue mb-1" htmlFor="subject">
                    Subject
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full rounded-md border border-accentBlue/30 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-accentBlue"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-darkBlue mb-1" htmlFor="message">
                    Your Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="min-h-[120px] w-full rounded-md border border-accentBlue/30"
                    required
                  />
                </div>
                
                <button
                  type="submit"
                  className="bg-accentBlue hover:bg-darkBlue text-white font-medium rounded-md px-4 py-2 transition duration-300"
                >
                  Send Message
                </button>
              </form>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Contact;
