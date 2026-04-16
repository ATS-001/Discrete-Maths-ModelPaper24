'use client';

import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import remarkGfm from 'remark-gfm';
import rehypeKatex from 'rehype-katex';
import rehypeRaw from 'rehype-raw';
import 'katex/dist/katex.min.css';
import HasseDiagram from './HasseDiagram';
import DirectedGraph from './DirectedGraph';
import PosetDiagram from './PosetDiagram';

interface SolutionViewerProps {
  question: string;
  answer: string;
}

export default function SolutionViewer({ question, answer }: SolutionViewerProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
      <div className="p-6 border-b border-gray-100 bg-gray-50">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Question</h3>
        <div className="prose prose-slate max-w-none">
          <ReactMarkdown remarkPlugins={[remarkMath, remarkGfm]} rehypePlugins={[rehypeKatex]}>
            {question}
          </ReactMarkdown>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Step-by-Step Solution</h3>
        <div className="prose prose-slate max-w-none prose-headings:font-semibold prose-a:text-blue-600">
          <ReactMarkdown
            remarkPlugins={[remarkMath, remarkGfm]}
            rehypePlugins={[rehypeKatex, rehypeRaw]}
            components={{
              // @ts-ignore
              hassediagram: () => <HasseDiagram />,
              // @ts-ignore
              directedgraph: () => <DirectedGraph />,
              // @ts-ignore
              posetdiagram: () => <PosetDiagram />,
              table: ({node, ...props}: any) => (
                <div className="overflow-x-auto overflow-y-hidden my-8 rounded-lg border border-gray-200">
                  <table className="min-w-full divide-y divide-gray-200 text-xs sm:text-sm" {...props} />
                </div>
              ),
              thead: ({node, ...props}: any) => <thead className="bg-gray-50" {...props} />,
              th: ({node, ...props}: any) => (
                <th 
                  className="px-3 sm:px-6 py-2 sm:py-3 text-left font-bold text-gray-500 uppercase tracking-wider border-b border-gray-200" 
                  {...props} 
                />
              ),
              td: ({node, ...props}: any) => (
                <td 
                  className="px-3 sm:px-6 py-2 sm:py-4 text-gray-600 border-b border-gray-100 break-words" 
                  {...props} 
                />
              ),
              tr: ({node, ...props}: any) => (
                <tr className="hover:bg-gray-50 transition-colors odd:bg-white even:bg-gray-50/30" {...props} />
              ),
              blockquote: ({node, ...props}: any) => (
                <blockquote className="border-l-4 border-blue-500 pl-4 py-1 my-6 italic text-gray-700 bg-blue-50/50 rounded-r-lg" {...props} />
              ),
              ul: ({node, ...props}: any) => <ul className="list-disc list-outside ml-6 my-4 space-y-2" {...props} />,
              ol: ({node, ...props}: any) => <ol className="list-decimal list-outside ml-6 my-4 space-y-2" {...props} />,
              li: ({node, ...props}: any) => <li className="text-gray-700 leading-relaxed" {...props} />,
              hr: ({node, ...props}: any) => <hr className="my-8 border-gray-200" {...props} />,
            } as any}
          >
            {answer}
          </ReactMarkdown>
        </div>
      </div>
    </div>
  );
}
