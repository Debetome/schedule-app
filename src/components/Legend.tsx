import React from 'react';

interface LegendProps {
  legends: { text: string; color: string }[];
}

const Legend: React.FC<LegendProps> = ({ legends }) => {
  return (
    <div>
      {legends.map((legend, index) => (
        <div key={index} className="flex items-center mb-2">
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