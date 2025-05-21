
import { Link } from "react-router-dom";
import { Check } from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";

const Academics = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="bg-blue-900 py-20 text-white">
        <div className="container">
          <h1 className="font-serif text-4xl md:text-5xl font-bold">Academics</h1>
        </div>
      </div>
      
      <main className="container py-12">
        <div className="flex justify-center mb-8">
          <Link to="/" className="text-blue-600 hover:text-blue-800">← Back to Home</Link>
        </div>
        <div className="max-w-6xl mx-auto">
          <div className="prose max-w-none mb-10">
            <h2 className="text-3xl font-serif text-blue-800 mb-4">Our Academic Approach</h2>
            <p className="text-lg text-gray-600">
              At Stevens Integrated Schools, we follow the Competency-Based Curriculum (CBC) that focuses on developing 
              skills, knowledge, and attitudes for the holistic growth of your child. Our teaching methodology emphasizes 
              practical learning, critical thinking, and creativity while maintaining high academic standards.
            </p>
          </div>

          {/* Education Levels */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Kindergarten */}
            <Card>
              <CardHeader className="bg-blue-50 rounded-t-lg">
                <CardTitle className="text-2xl font-serif text-blue-800">Kindergarten</CardTitle>
                <CardDescription>Ages 4-6 years</CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <p className="text-gray-600 mb-4">
                  Our kindergarten program creates a foundation for learning through play-based activities,
                  developing social skills, and introducing basic literacy and numeracy concepts.
                </p>
                <h3 className="font-medium text-blue-700 mb-2">Key Focus Areas:</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Development of motor skills</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Introduction to phonics and numbers</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Creative expression through art and music</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Social interaction and emotional development</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Primary */}
            <Card>
              <CardHeader className="bg-blue-50 rounded-t-lg">
                <CardTitle className="text-2xl font-serif text-blue-800">Primary</CardTitle>
                <CardDescription>Ages 6-12 years</CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <p className="text-gray-600 mb-4">
                  Our primary education program builds on the foundation with a focus on literacy, numeracy,
                  and developing core competencies across various subject areas.
                </p>
                <h3 className="font-medium text-blue-700 mb-2">Key Focus Areas:</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Literacy and language development</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Mathematical concepts and problem-solving</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Scientific inquiry and exploration</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Social studies and environmental awareness</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Junior School */}
            <Card>
              <CardHeader className="bg-blue-50 rounded-t-lg">
                <CardTitle className="text-2xl font-serif text-blue-800">Junior School</CardTitle>
                <CardDescription>Ages 12-15 years</CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <p className="text-gray-600 mb-4">
                  Our junior school program expands knowledge while developing critical thinking,
                  creativity, and practical skills to prepare students for higher education.
                </p>
                <h3 className="font-medium text-blue-700 mb-2">Key Focus Areas:</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Advanced literacy and communication</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Advanced mathematics and sciences</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Digital literacy and technology skills</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Life skills and career preparation</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* CBC Curriculum */}
          <div className="mb-16">
            <h2 className="text-3xl font-serif text-blue-800 mb-6">CBC Curriculum Framework</h2>
            <p className="text-lg text-gray-600 mb-8">
              Our curriculum implementation follows the Competency-Based Curriculum framework, focusing on developing 
              essential skills and competencies rather than memorization of facts.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-medium text-blue-700 mb-4">Core Competencies</h3>
                <div className="space-y-3">
                  {[
                    "Communication and collaboration",
                    "Critical thinking and problem solving",
                    "Creativity and imagination",
                    "Citizenship",
                    "Digital literacy",
                    "Learning to learn",
                    "Self-efficacy"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <Checkbox id={`competency-${index}`} />
                      <label
                        htmlFor={`competency-${index}`}
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        {item}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-medium text-blue-700 mb-4">Values</h3>
                <div className="space-y-3">
                  {[
                    "Respect",
                    "Responsibility",
                    "Integrity",
                    "Excellence",
                    "Patriotism",
                    "Unity",
                    "Peace",
                    "Social justice"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <Checkbox id={`value-${index}`} />
                      <label
                        htmlFor={`value-${index}`}
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        {item}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div>
            <h2 className="text-3xl font-serif text-blue-800 mb-6">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {[
                {
                  question: "What is the teacher to student ratio?",
                  answer: "We maintain a teacher to student ratio of 1:20 to ensure personalized attention for each child."
                },
                {
                  question: "Do you offer extracurricular activities?",
                  answer: "Yes, we offer a wide range of extracurricular activities including sports, music, art, drama, and various clubs to develop students' talents and interests beyond academics."
                },
                {
                  question: "How do you assess student progress?",
                  answer: "We use continuous assessment techniques including projects, presentations, portfolios, and traditional tests to provide a comprehensive view of each student's progress and development."
                },
                {
                  question: "Do you offer special education services?",
                  answer: "Yes, we have support programs for students with special educational needs, with specialized teachers trained to provide appropriate interventions and accommodations."
                }
              ].map((faq, index) => (
                <Collapsible key={index} className="border rounded-md">
                  <CollapsibleTrigger className="flex justify-between items-center w-full p-4 text-left font-medium hover:bg-blue-50">
                    {faq.question}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-chevron-down h-5 w-5"
                    >
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </CollapsibleTrigger>
                  <CollapsibleContent className="p-4 pt-0 text-gray-600 border-t">
                    {faq.answer}
                  </CollapsibleContent>
                </Collapsible>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Academics;
