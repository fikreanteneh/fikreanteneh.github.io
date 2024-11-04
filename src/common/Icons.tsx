import React from 'react';

interface LinkIconProps {
    icon: string;
    scale?: number;
    href?: string;
}

export const LinkIcon: React.FC<LinkIconProps> = ({ icon, scale }) => {
    return (
        <img
            src={icon}
            onClick={() => { window.open(icon, "_blank") }}
            alt="Icon"
            className={`inline h-${scale ? 4 * scale : 4} hover:cursor-pointer transition-all duration-400`}
        />
    );
};

interface NormalIconProps {
    icon: string;
    scale?: number;
}
export const NormalIcon: React.FC<NormalIconProps> = ({ icon, scale }) => {
    return (
        <img
            src={icon}
            onClick={() => { window.open(icon, "_blank") }}
            alt="Icon"
            className={`inline m-1 h-${scale ? 4 * scale : 4}`}
        />
    );
};