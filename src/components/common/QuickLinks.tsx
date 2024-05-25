import { IconType } from "react-icons";
import { IoCopy } from "react-icons/io5";
import { toast } from "react-toastify";



export const AddressLink: React.FC<{ icon: IconType, text: string, link: string }> = (prop) => {
    return (
        <p className="w-auto py-1 text-lg no-underline cursor-pointer text-main" >
            <prop.icon className="inline-block" />
            <a href={prop.link} target="_blank" className="inline-block px-1 hover:text-primary">{prop.text}</a>
            <IoCopy className="inline-block hover:text-primary" onClick={() => { navigator.clipboard.writeText(prop.text); toast.success("Copied to Clipboard!") }} />
        </p>
    )
}


export const LinkButton: React.FC<{ icon: string, text: string, link: string }> = (prop) => {
    return (
        <a href={prop.link} target="_blank" className="flex items-center p-4 space-x-4 text-lg transition-all duration-300 border cursor-pointer rounded-2xl text-main border-primary hover:bg-primary hover:shadow-md w-96">
            <img className="h-12" src={prop.icon} alt="Icon" />
            <p className="text-5xl">{prop.text}</p>
        </a>

    )
}