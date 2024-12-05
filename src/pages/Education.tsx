import { FaGraduationCap } from "react-icons/fa"
import { HeadlineLarge } from "../common/Text"
import EducationData from "../data/education.data"
import EducationModel from "../types/education.model"

const Education = () => {
    return (
        <div id="education">
            <HeadlineLarge text={"Education"} Icon={FaGraduationCap} />
            <ul className="flex flex-col gap-6 group/list">
                {EducationData.map(education => {
                    return <ECard education={education} />
                })}
            </ul>
        </div>
    )
}

const ECard: React.FC<{ education: EducationModel }> = ({ education }) => {
    return (
        <li
            className="w-[95%] relative flex gap-4 p-2 transition-all rounded-md group hover:bg-main-8"
        >
            <div className="flex-shrink-0 w-16">
                <img
                    className="object-cover w-full rounded-lg cursor-pointer" src={education.Icon} alt={education.Name}
                    onClick={() => window.open(education.Link, "_blank")}
                />
            </div>
            <div className="z-10 sm:order-2 sm:col-span-6">
                <h4
                    className="font-bold hover:text-accent hover:cursor-pointer"
                    onClick={() => window.open(education.Link, "_blank")}
                >{education.Name}</h4>
                <p className="text-sm italic font-medium">{education.Degree}</p>
                <p className="pb-2 text-sm italic font-medium">{education.StartDate} - {education.EndDate}</p>
                {
                    education.Information.map(bullet => {
                        return <p className="text-justify">
                            {bullet}
                        </p>
                    })
                }
            </div>
        </li>
    )
}
export default Education