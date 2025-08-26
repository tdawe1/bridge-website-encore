import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-brand-white">
      <div className="max-w-4xl mx-auto py-20 px-4 sm:px-6 lg:px-8">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-brand-electric-blue hover:text-brand-electric-blue/80 transition-colors duration-200 mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>
        
        <h1 className="text-4xl font-bold text-headline mb-8">Privacy Policy</h1>
        
        <div className="prose prose-lg max-w-none text-body">
          <p className="text-xl mb-8">
            This is a placeholder privacy policy page. Bridge & Signal takes your privacy seriously and will implement a comprehensive privacy policy here.
          </p>
          
          <div className="bg-brand-soft-gray p-8 rounded-lg">
            <p className="text-lg font-medium text-headline mb-4">
              Coming Soon
            </p>
            <p>
              Our full privacy policy is being finalized and will be published here shortly. 
              If you have any questions about how we handle your data, please contact us at{" "}
              <a 
                href="mailto:hello@bridgeandsignal.com" 
                className="text-brand-electric-blue hover:underline"
              >
                hello@bridgeandsignal.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
