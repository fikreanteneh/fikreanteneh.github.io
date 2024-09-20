import React from 'react';

interface TooltipProps {
    text: string;
}

const Tooltip: React.FC<TooltipProps> = ({ text }) => {
    return (
        <div className="absolute z-10 p-2 text-white bg-black rounded shadow-lg">
            {text}
        </div>
    );
};

export default Tooltip;