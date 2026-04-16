import React from 'react';

export default function PosetDiagram() {
  return (
    <span className="flex justify-center my-8">
      <span className="block w-full max-w-[400px] mx-auto pb-4">
        <svg viewBox="0 0 300 300" className="w-full h-auto bg-white rounded-lg shadow-sm border border-gray-200">
          <defs>
            <marker id="arrowhead-poset" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
              <polygon points="0 0, 10 3.5, 0 7" fill="#9ca3af" />
            </marker>
          </defs>
          
          {/* Edges */}
        <line x1="150" y1="230" x2="150" y2="190" stroke="#cbd5e1" strokeWidth="2" />
        <line x1="150" y1="170" x2="110" y2="130" stroke="#cbd5e1" strokeWidth="2" />
        <line x1="150" y1="170" x2="190" y2="130" stroke="#cbd5e1" strokeWidth="2" />
        <line x1="100" y1="110" x2="100" y2="70" stroke="#cbd5e1" strokeWidth="2" />

        {/* Nodes */}
        {/* Node 12 */}
        <g transform="translate(100, 50)">
          <circle cx="0" cy="0" r="16" className="fill-white stroke-blue-500 stroke-2" />
          <text textAnchor="middle" dy=".3em" className="text-sm font-bold fill-slate-800">12</text>
        </g>

        {/* Node 6 */}
        <g transform="translate(100, 120)">
          <circle cx="0" cy="0" r="16" className="fill-white stroke-blue-500 stroke-2" />
          <text textAnchor="middle" dy=".3em" className="text-sm font-bold fill-slate-800">6</text>
        </g>

        {/* Node 9 */}
        <g transform="translate(200, 120)">
          <circle cx="0" cy="0" r="16" className="fill-white stroke-blue-500 stroke-2" />
          <text textAnchor="middle" dy=".3em" className="text-sm font-bold fill-slate-800">9</text>
        </g>

        {/* Node 3 */}
        <g transform="translate(150, 180)">
          <circle cx="0" cy="0" r="16" className="fill-white stroke-blue-500 stroke-2" />
          <text textAnchor="middle" dy=".3em" className="text-sm font-bold fill-slate-800">3</text>
        </g>

        {/* Node 1 */}
        <g transform="translate(150, 240)">
          <circle cx="0" cy="0" r="16" className="fill-white stroke-blue-500 stroke-2" />
          <text textAnchor="middle" dy=".3em" className="text-sm font-bold fill-slate-800">1</text>
        </g>
      </svg>
      </span>
    </span>
  );
}
