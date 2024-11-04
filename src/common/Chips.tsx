// Define the props for the Chip component
interface ChipProps {
    label: string;
    isSelected: boolean;
    onClick: () => void;
}

// Chip component
export const Chip: React.FC<ChipProps> = ({ label, isSelected, onClick }) => {
    return (
        <button
            onClick={onClick}
            className={`px-2 m-1 rounded-full border  ${isSelected
                ? 'text-main-9 bg-main-1'
                : 'text-main-1 bg-main-9'
                } transition-colors duration-100`}
        >
            {label}
        </button>
    );
};