
import { Link } from "react-router-dom";

const Campuses = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="bg-blue-900 py-20 text-white">
        <div className="container">
          <h1 className="font-serif text-4xl md:text-5xl font-bold">Our Campuses</h1>
        </div>
      </div>
      
      <main className="container py-12">
        <div className="flex justify-center mb-8">
          <Link to="/" className="text-blue-600 hover:text-blue-800">← Back to Home</Link>
        </div>
        <div className="prose lg:prose-xl max-w-4xl mx-auto">
          <p className="lead text-xl text-gray-600">
            This is the Campuses page. Content will be added soon.
          </p>
        </div>
      </main>
    </div>
  );
};

export default Campuses;
