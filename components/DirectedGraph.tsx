import React from 'react';

export default function DirectedGraph() {
  return (
    <span className="flex justify-center my-8">
      <svg width="300" height="300" className="bg-white rounded-lg shadow-sm border border-gray-200">
        <defs>
          <marker id="arrow" markerWidth="10" markerHeight="10" refX="9" refY="5" orient="auto-start-reverse">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#64748b" />
          </marker>
        </defs>

        {/* Self loops */}
        <path d="M 40 40 C 10 10, 10 70, 40 40" fill="none" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow)" />
        <path d="M 260 40 C 290 10, 290 70, 260 40" fill="none" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow)" />
        <path d="M 260 260 C 290 290, 290 230, 260 260" fill="none" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow)" />
        <path d="M 40 260 C 10 290, 10 230, 40 260" fill="none" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow)" />

        {/* a <-> b */}
        <line x1="70" y1="45" x2="230" y2="45" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow)" />
        <line x1="230" y1="55" x2="70" y2="55" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow)" />

        {/* b <-> c */}
        <line x1="255" y1="70" x2="255" y2="230" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow)" />
        <line x1="245" y1="230" x2="245" y2="70" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow)" />

        {/* c <-> d */}
        <line x1="230" y1="255" x2="70" y2="255" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow)" />
        <line x1="70" y1="245" x2="230" y2="245" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow)" />

        {/* d <-> a */}
        <line x1="45" y1="230" x2="45" y2="70" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow)" />
        <line x1="55" y1="70" x2="55" y2="230" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow)" />

        {/* Nodes */}
        <g transform="translate(50, 50)">
          <circle r="15" fill="#f1f5f9" stroke="#334155" strokeWidth="2" />
          <text textAnchor="middle" dy=".3em" className="text-sm font-bold fill-slate-800">a</text>
        </g>
        <g transform="translate(250, 50)">
          <circle r="15" fill="#f1f5f9" stroke="#334155" strokeWidth="2" />
          <text textAnchor="middle" dy=".3em" className="text-sm font-bold fill-slate-800">b</text>
        </g>
        <g transform="translate(250, 250)">
          <circle r="15" fill="#f1f5f9" stroke="#334155" strokeWidth="2" />
          <text textAnchor="middle" dy=".3em" className="text-sm font-bold fill-slate-800">c</text>
        </g>
        <g transform="translate(50, 250)">
          <circle r="15" fill="#f1f5f9" stroke="#334155" strokeWidth="2" />
          <text textAnchor="middle" dy=".3em" className="text-sm font-bold fill-slate-800">d</text>
        </g>
      </svg>
    </span>
  );
}
