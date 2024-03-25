import React from 'react';

interface LegendProps {
  legends: { text: string; color: string }[];
  top: number,
  left: number,
  unit?: string
}

const Legend: React.FC<LegendProps> = ({ legends, top, left, unit = "px" }) => {
  const legendStyle: React.CSSProperties = { 
    top: `${top}${unit}`,
    left: `${left}${unit}`
  }

  return (
    <div className="absolute" style={legendStyle}>
      {legends.map((legend, index) => (
        <div key={index} className="flex items-center text-gray-700">
          <span
            className="inline-block w-4 h-4 mr-2 rounded-full"
            style={{ backgroundColor: legend.color }}
          ></span>
          <span>{legend.text}</span>
        </div>
      ))}
    </div>
  );
};

export default Legend;