
export const HeadlineLarge: React.FC<{ text: string, Icon?: React.FC<{ className?: string }>, className?: string }> = ({ text, Icon }) => {
    return (
        <h2 className="flex items-center my-4 text-2xl font-extrabold">
            {Icon && <Icon className="inline mr-1" />}
            <span>{text}</span>
        </h2>
    );
};


export const HeadlineMedium: React.FC<{ text: string, Icon?: React.FC<{ className?: string }>, className?: string }> = ({ text, Icon }) => {
    if (!Icon) return <h3 className="my-2 text-xl font-bold">{text}</h3>
    return (
        <h3 className="my-2 text-xl font-bold">
            {Icon && <Icon className="inline mr-1" />}
            {text}
        </h3>
    );
};
export const HeadlineSmall: React.FC<{ text: string, Icon?: React.FC<{ className?: string }>, className?: string }> = ({ text, Icon }) => {
    return (
        <h4 className="font-semibold"  >
            {Icon && <Icon className="inline mr-1" />}
            {text}
        </h4>
    );
};


