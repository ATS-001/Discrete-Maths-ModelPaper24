'use client';

import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import rehypeRaw from 'rehype-raw';
import 'katex/dist/katex.min.css';
import HasseDiagram from './HasseDiagram';
import DirectedGraph from './DirectedGraph';

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
          <ReactMarkdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]}>
            {question}
          </ReactMarkdown>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Step-by-Step Solution</h3>
        <div className="prose prose-slate max-w-none prose-headings:font-semibold prose-a:text-blue-600">
          <ReactMarkdown
            remarkPlugins={[remarkMath]}
            rehypePlugins={[rehypeKatex, rehypeRaw]}
            components={{
              // @ts-ignore
              hassediagram: () => <HasseDiagram />,
              // @ts-ignore
              directedgraph: () => <DirectedGraph />,
              table: ({node, ...props}: any) => (
                <div className="overflow-x-auto my-6">
                  <table className="min-w-full border-collapse border border-gray-300" {...props} />
                </div>
              ),
              th: ({node, ...props}: any) => <th className="border border-gray-300 px-4 py-2 bg-gray-100 font-semibold text-left" {...props} />,
              td: ({node, ...props}: any) => <td className="border border-gray-300 px-4 py-2" {...props} />,
            } as any}
          >
            {answer}
          </ReactMarkdown>
        </div>
      </div>
    </div>
  );
}
