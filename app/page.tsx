import Link from 'next/link';
import { BookOpen, Info, ArrowRight, Github, Globe } from 'lucide-react';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-[100dvh] bg-gray-50 flex flex-col font-sans">
      <main className="flex-1 flex flex-col items-center justify-center p-6 md:p-12">
        <div className="max-w-3xl w-full text-center space-y-8">
          {/* Header Section */}
          <div className="space-y-4">
            <div className="inline-flex items-center justify-center p-4 bg-blue-100 rounded-full mb-4">
              <BookOpen className="w-12 h-12 text-blue-600" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight">
              KTU Discrete Math Syllabus 2024
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Comprehensive step-by-step solutions for the KTU Discrete Mathematics Syllabus 2024. Master the concepts with detailed explanations and diagrams.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4 pt-8">
            <Link 
              href="/solutions"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 group"
            >
              Enter Question-Ans Part
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link 
              href="/about"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-gray-700 bg-white border border-gray-300 hover:bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition-all duration-200"
            >
              <Info className="w-5 h-5 mr-2 text-gray-500" />
              About Us
            </Link>

            <a 
              href="https://github.com/ATS-001/Discrete-Maths-ModelPaper24"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-gray-900 bg-gray-100 border border-gray-200 hover:bg-gray-200 rounded-xl shadow-sm hover:shadow-md transition-all duration-200"
            >
              <Github className="w-5 h-5 mr-2" />
              View on GitHub
            </a>

            <a 
              href="https://hexnicai.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-blue-700 bg-blue-50 border border-blue-200 hover:bg-blue-100 rounded-xl shadow-sm hover:shadow-md transition-all duration-200"
            >
              <Globe className="w-5 h-5 mr-2" />
              Visit HexnicAI
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
