import React from "react";
import { IconType } from "react-icons";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { IoCopy } from "react-icons/io5";
import { toast } from "react-toastify";
import LinkModel from "../types/links.model";



export const AddressLink: React.FC<{ icon: IconType, text: string, link: string }> = (prop) => {
    return (
        <p className="w-auto no-underline cursor-pointer text-main-1" >
            <prop.icon className="inline-block" />
            <a href={prop.link} target="_blank" className="inline-block px-1 hover:text-accent">{prop.text}</a>
            <IoCopy className="inline-block hover:text-accent" onClick={() => { navigator.clipboard.writeText(prop.text); toast.success("Copied to Clipboard!") }} />
        </p>
    )
}


export const LinkButton: React.FC<{ icon: string, text: string, link: string }> = (prop) => {
    return (
        <a href={prop.link} target="_blank" className="flex items-center p-4 space-x-4 text-lg transition-all duration-300 border cursor-pointer rounded-2xl text-main-1 border-accent hover:bg-accent hover:shadow-md w-96">
            <img className="h-12" src={prop.icon} alt="Icon" />
            <p className="text-5xl">{prop.text}</p>
        </a>

    )
}

export const CustomButton: React.FC<{ icon?: string, text: string, link: string }> = (prop) => {
    return (
        <a href={prop.link} target="_blank" className="flex items-center p-1 space-x-1 transition-all duration-300 border rounded-lg cursor-pointer bg-main-1 hover:bg-main-8 hover:shadow-md">
            {/* <div className="bg-white rounded-[50%] object-cover"> */}
            {prop.icon && (
                <img className="h-4" src={prop.icon} alt="Icon" />
            )}
            {/* </div> */}
            <p className="text-lg text-bold text-main-9">{prop.text}</p>
        </a>

    )
}

export const AddressTable: React.FC<{ email: LinkModel, phone: LinkModel, location: LinkModel }> = ({ email, phone, location }) => {
    return (
        <div className="mx-auto overflow-hidden rounded-lg shadow-lg">
            <div className="p-4">
                <div className="flex items-center mb-4">
                    <FaEnvelope className="w-6 h-6 text-blue-500" />
                    <div className="ml-4">
                        {/* <p className="text-sm">E-mail</p> */}
                        <p className="text-lg font-semibold ">{email.Description}</p>
                    </div>
                </div>
                <div className="flex items-center mb-4">
                    <FaPhoneAlt className="w-6 h-6 text-green-500" />
                    <div className="ml-4">
                        {/* <p className="text-sm">Phone</p> */}
                        <p className="text-lg font-semibold ">{phone.Description}</p>
                    </div>
                </div>
                <div className="flex items-center">
                    <FaMapMarkerAlt className="w-6 h-6 text-red-500" />
                    <div className="ml-4">
                        {/* <p className="text-sm">Address</p> */}
                        <p className="text-lg font-semibold ">{location.Description}</p>
                    </div>
                </div>
            </div>
        </div>

        // <table className="w-full border rounded-lg border-main-8">
        //     <tbody className="divide-y divide-main-8">
        //         <tr>
        //             <td className="p-1 text-sm whitespace-nowrap">E-mail</td>
        //             <td className="p-1 text-sm whitespace-nowrap">{email.Description}</td>
        //         </tr>
        //         <tr>
        //             <td className="p-1 text-sm whitespace-nowrap">Phone</td>
        //             <td className="p-1 text-sm whitespace-nowrap">{phone.Description}</td>
        //         </tr>
        //         <tr>
        //             <td className="p-1 text-sm whitespace-nowrap">Address</td>
        //             <td className="p-1 text-sm whitespace-nowrap">{location.Description}</td>
        //         </tr>
        //     </tbody>
        // </table>
    );
}