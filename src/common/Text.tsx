
export const Headline1: React.FC<{ text: string, Icon?: React.FC<{ className?: string }>, className?: string }> = ({ text, Icon }) => {
    return (
        <h2 className="my-4 text-3xl font-extrabold">
            {Icon && <Icon className="inline" />}
            {text}
        </h2>
    );
};


export const Headline2: React.FC<{ text: string, Icon?: React.FC<{ className?: string }>, className?: string }> = ({ text, Icon }) => {
    return (
        <h2 className="my-4 text-2xl font-extrabold">
            {Icon && <Icon className="inline" />}
            {text}
        </h2>
    );
};


export const Headline3: React.FC<{ text: string, Icon?: React.FC<{ className?: string }>, className?: string }> = ({ text, Icon }) => {
    return (
        <h2 className="my-2 text-xl font-bold">
            {Icon && <Icon className="inline" />}
            {text}
        </h2>
    );
};
export const Headline4: React.FC<{ text: string, Icon?: React.FC<{ className?: string }>, className?: string }> = ({ text, Icon }) => {
    return (
        <h2 className="my-2 text-lg font-semibold"  >
            {Icon && <Icon className="inline" />}
            {text}
        </h2>
    );
};


