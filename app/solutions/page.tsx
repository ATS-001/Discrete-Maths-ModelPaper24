'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { solutions } from '@/data/solutions';
import SolutionViewer from '@/components/SolutionViewer';
import Footer from '@/components/Footer';
import { BookOpen, CheckCircle2, ChevronRight, Menu, X, ArrowLeft } from 'lucide-react';

export default function Home() {
  const [activeId, setActiveId] = useState(solutions[0].id);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const activeSolution = solutions.find(s => s.id === activeId) || solutions[0];

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className="min-h-[100dvh] bg-gray-50 flex flex-col md:flex-row font-sans overflow-hidden">
      {/* Mobile Header */}
      <header className="md:hidden bg-white border-b border-gray-200 p-4 flex items-center justify-between sticky top-0 z-20 w-full">
        <div className="flex items-center space-x-3">
          <Link href="/" className="text-gray-500 hover:text-gray-900 p-1" aria-label="Back to Home">
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <div className="flex items-center space-x-2 text-blue-600">
            <BookOpen className="w-5 h-5" />
            <span className="font-bold text-lg text-gray-900 truncate max-w-[150px]">KTU Math</span>
          </div>
        </div>
        <button 
          onClick={toggleSidebar} 
          className="text-gray-500 hover:text-gray-700 p-1"
          aria-label={isSidebarOpen ? "Close menu" : "Open menu"}
          aria-expanded={isSidebarOpen}
        >
          {isSidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </header>

      {/* Sidebar */}
      <aside 
        className={`
          fixed inset-y-0 left-0 z-30 w-72 bg-white border-r border-gray-200 transform transition-transform duration-300 ease-in-out
          md:relative md:translate-x-0 flex flex-col h-[100dvh]
          ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
        `}
        aria-label="Sidebar navigation"
      >
        <div className="p-4 border-b border-gray-100 hidden md:block">
          <Link href="/" className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors group">
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
        </div>
        <div className="p-6 border-b border-gray-100 hidden md:flex items-center space-x-3">
          <div className="bg-blue-100 p-2 rounded-lg text-blue-600">
            <BookOpen className="w-6 h-6" />
          </div>
          <div>
            <h1 className="font-bold text-gray-900 leading-tight">KTU Syllabus 2024</h1>
            <p className="text-xs text-gray-500 font-medium">Discrete Mathematics</p>
          </div>
        </div>

        <nav className="flex-1 overflow-y-auto py-4">
          <div className="px-4 mb-2">
            <h2 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 px-3">Part A (3 Marks Each)</h2>
            <div className="space-y-1">
              {solutions.filter(s => s.part === 'A').map(solution => (
                <button
                  key={solution.id}
                  onClick={() => { setActiveId(solution.id); setIsSidebarOpen(false); }}
                  className={`w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium transition-colors flex items-center justify-between group
                    ${activeId === solution.id 
                      ? 'bg-blue-50 text-blue-700' 
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'}`}
                  aria-current={activeId === solution.id ? 'page' : undefined}
                >
                  <span className="flex items-center truncate">
                    {activeId === solution.id && <CheckCircle2 className="w-4 h-4 mr-2 text-blue-600 flex-shrink-0" />}
                    <span className="truncate">{solution.title}</span>
                  </span>
                  <ChevronRight className={`w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity ${activeId === solution.id ? 'opacity-100 text-blue-600' : 'text-gray-400'}`} />
                </button>
              ))}
            </div>
          </div>

          <div className="px-4 mt-8">
            <h2 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 px-3">Part B (9 Marks Each)</h2>
            <div className="space-y-1">
              {solutions.filter(s => s.part === 'B').map(solution => (
                <button
                  key={solution.id}
                  onClick={() => { setActiveId(solution.id); setIsSidebarOpen(false); }}
                  className={`w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium transition-colors flex items-center justify-between group
                    ${activeId === solution.id 
                      ? 'bg-blue-50 text-blue-700' 
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'}`}
                  aria-current={activeId === solution.id ? 'page' : undefined}
                >
                  <span className="flex items-center truncate">
                    {activeId === solution.id && <CheckCircle2 className="w-4 h-4 mr-2 text-blue-600 flex-shrink-0" />}
                    <span className="truncate">{solution.title}</span>
                  </span>
                  <ChevronRight className={`w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity ${activeId === solution.id ? 'opacity-100 text-blue-600' : 'text-gray-400'}`} />
                </button>
              ))}
            </div>
          </div>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto h-[100dvh] flex flex-col">
        <div className="flex-1 max-w-4xl mx-auto w-full p-4 md:p-8 lg:p-12">
          <div className="mb-8">
            <div className="flex flex-wrap items-center gap-2 text-sm font-medium text-gray-500 mb-3">
              <span className="bg-gray-200 text-gray-700 px-2.5 py-0.5 rounded-full whitespace-nowrap">Part {activeSolution.part}</span>
              <span className="hidden sm:inline">•</span>
              <span className="whitespace-nowrap">Module {activeSolution.module}</span>
              <span className="hidden sm:inline">•</span>
              <span className="text-blue-600 bg-blue-50 px-2.5 py-0.5 rounded-full whitespace-nowrap">{activeSolution.marks} Marks</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight">{activeSolution.title}</h2>
          </div>

          <SolutionViewer 
            question={activeSolution.question} 
            answer={activeSolution.answer} 
          />
        </div>
        <Footer />
      </main>

      {/* Overlay for mobile sidebar */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/40 z-20 md:hidden backdrop-blur-sm transition-opacity"
          onClick={() => setIsSidebarOpen(false)}
          aria-hidden="true"
        />
      )}
    </div>
  );
}
