import Link from 'next/link';
import { ArrowLeft, ExternalLink, Linkedin, User } from 'lucide-react';
import Footer from '@/components/Footer';

export default function About() {
  return (
    <div className="min-h-[100dvh] bg-gray-50 flex flex-col font-sans">
      <main className="flex-1 flex flex-col items-center justify-center p-6 md:p-12">
        <div className="max-w-2xl w-full">
          <Link 
            href="/"
            className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-900 mb-8 transition-colors group"
            aria-label="Back to Home"
          >
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="p-8 md:p-10 text-center space-y-6">
              <div className="inline-flex items-center justify-center p-4 bg-blue-50 rounded-full mb-2">
                <User className="w-10 h-10 text-blue-600" />
              </div>
              
              <div className="space-y-2">
                <h1 className="text-3xl font-bold text-gray-900">About Us</h1>
                <p className="text-gray-500">Learn more about the creator of this project.</p>
              </div>

              <div className="border-t border-gray-100 pt-6 mt-6 space-y-6">
                <div className="space-y-1">
                  <p className="text-sm font-medium text-gray-400 uppercase tracking-wider">Created By</p>
                  <p className="text-xl font-semibold text-gray-900">Aaron Thalakkottor Sooraj</p>
                </div>

                <div className="space-y-1">
                  <p className="text-sm font-medium text-gray-400 uppercase tracking-wider">Affiliation</p>
                  <a 
                    href="https://hexnicai.vercel.app/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-lg font-medium text-blue-600 hover:text-blue-800 transition-colors group"
                  >
                    A part of Hexnicai
                    <ExternalLink className="w-4 h-4 ml-1.5 opacity-50 group-hover:opacity-100 transition-opacity" />
                  </a>
                </div>

                <div className="space-y-1">
                  <p className="text-sm font-medium text-gray-400 uppercase tracking-wider">Connect</p>
                  <a 
                    href="https://www.linkedin.com/in/aaronts127pdz/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-lg font-medium text-blue-600 hover:text-blue-800 transition-colors group"
                  >
                    <Linkedin className="w-5 h-5 mr-2" />
                    LinkedIn Profile
                    <ExternalLink className="w-4 h-4 ml-1.5 opacity-50 group-hover:opacity-100 transition-opacity" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
