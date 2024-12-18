
type NormalButtonProp = {
    name: string;
    onClick?: () => void;
    icon?: string;
    scale?: number;
}


export const NormalButton: React.FC<NormalButtonProp> = ({ name, onClick, icon, scale = 1 }) => {
    const [px, py, textSize, imageHight] = [0.4 * scale, 0.2 * scale, 1 * scale, 1 * scale];
    return (
        <button
            className="flex items-center justify-start gap-1 space-x-1 transition-all duration-300 rounded-lg cursor-pointer text-main-9 bg-main-1 hover:bg-main-4"
            style={{ padding: `${py}rem ${px}rem`, fontSize: `${textSize}rem` }}
            onClick={onClick}
        >
            {icon && <img src={icon} alt={name} style={{ height: `${imageHight}rem` }} />}
            {name}
        </button>
    );
}


type ChipProp = {
    name: string;
    icon?: string;
    scale?: number;
}
export const Chip: React.FC<ChipProp> = ({ name, icon, scale = 1 }) => {
    const [px, py, textSize, imageHight] = [0.5 * scale, 0.25 * scale, 1 * scale, 1 * scale];
    return (
        <button
            className="flex items-center justify-start gap-1 space-x-1 transition-all duration-300 border rounded-lg cursor-default border-main-1"
            style={{ padding: `${py}rem ${px}rem`, fontSize: `${textSize}rem` }}
        >
            {icon && <img src={icon} alt={name} style={{ height: `${imageHight}rem` }} />}
            {name}
        </button>
    );
} 
