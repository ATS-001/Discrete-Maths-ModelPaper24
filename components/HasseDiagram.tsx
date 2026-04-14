import React from 'react';

const nodes = [
  { id: '0', label: '∅', x: 300, y: 450 },
  { id: '1', label: '{1}', x: 150, y: 350 },
  { id: '2', label: '{2}', x: 250, y: 350 },
  { id: '3', label: '{3}', x: 350, y: 350 },
  { id: '4', label: '{4}', x: 450, y: 350 },
  { id: '12', label: '{1,2}', x: 50, y: 250 },
  { id: '13', label: '{1,3}', x: 150, y: 250 },
  { id: '14', label: '{1,4}', x: 250, y: 250 },
  { id: '23', label: '{2,3}', x: 350, y: 250 },
  { id: '24', label: '{2,4}', x: 450, y: 250 },
  { id: '34', label: '{3,4}', x: 550, y: 250 },
  { id: '123', label: '{1,2,3}', x: 150, y: 150 },
  { id: '124', label: '{1,2,4}', x: 250, y: 150 },
  { id: '134', label: '{1,3,4}', x: 350, y: 150 },
  { id: '234', label: '{2,3,4}', x: 450, y: 150 },
  { id: '1234', label: '{1,2,3,4}', x: 300, y: 50 },
];

const edges = [
  // Level 0 to 1
  ['0', '1'], ['0', '2'], ['0', '3'], ['0', '4'],
  // Level 1 to 2
  ['1', '12'], ['1', '13'], ['1', '14'],
  ['2', '12'], ['2', '23'], ['2', '24'],
  ['3', '13'], ['3', '23'], ['3', '34'],
  ['4', '14'], ['4', '24'], ['4', '34'],
  // Level 2 to 3
  ['12', '123'], ['12', '124'],
  ['13', '123'], ['13', '134'],
  ['14', '124'], ['14', '134'],
  ['23', '123'], ['23', '234'],
  ['24', '124'], ['24', '234'],
  ['34', '134'], ['34', '234'],
  // Level 3 to 4
  ['123', '1234'], ['124', '1234'], ['134', '1234'], ['234', '1234']
];

export default function HasseDiagram() {
  return (
    <span className="flex justify-center my-8 overflow-x-auto">
      <svg width="600" height="500" className="bg-white rounded-lg shadow-sm border border-gray-200">
        <defs>
          <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill="#9ca3af" />
          </marker>
        </defs>
        
        {/* Draw edges */}
        {edges.map(([sourceId, targetId], idx) => {
          const source = nodes.find(n => n.id === sourceId);
          const target = nodes.find(n => n.id === targetId);
          if (!source || !target) return null;
          return (
            <line
              key={idx}
              x1={source.x}
              y1={source.y}
              x2={target.x}
              y2={target.y}
              stroke="#cbd5e1"
              strokeWidth="2"
            />
          );
        })}

        {/* Draw nodes */}
        {nodes.map(node => (
          <g key={node.id} transform={`translate(${node.x}, ${node.y})`}>
            <circle r="20" fill="#f8fafc" stroke="#3b82f6" strokeWidth="2" />
            <text
              textAnchor="middle"
              dy=".3em"
              className="text-xs font-medium fill-slate-700"
            >
              {node.label}
            </text>
          </g>
        ))}
      </svg>
    </span>
  );
}
