import { FaGraduationCap } from "react-icons/fa"
import { HeadlineLarge } from "../common/Text"
import EducationData from "../data/education.data"
import EducationModel from "../types/education.model"

const Education = () => {
    return (
        <div id="education">
            <HeadlineLarge text={"Education"} Icon={FaGraduationCap} />
            {EducationData.map(education => {
                return <ECard education={education} />
            })}

        </div>
    )
}

const ECard: React.FC<{ education: EducationModel }> = ({ education }) => {
    return (
        <li
            className="relative grid gap-4 p-2 mb-12 transition-all rounded-md group sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:bg-hover hover:cursor-pointer"  //lg:hover:!opacity-100 lg:group-hover/list:opacity-50
            onClick={() => window.open(education.Link, "_blank", "noopener,noreferrer")}
        >
            <div>
                <img className="rounded-lg" src={education.Icon} alt={education.Name} />
            </div>
            <div className="z-10 sm:order-2 sm:col-span-6">
                <h4 className="font-bold group-hover:text-primary"> {education.Name}</h4>
                <p className="text-sm italic font-medium">{education.Degree}</p>
                <p className="text-sm italic font-medium">{education.StartDate} - {education.EndDate}</p>
                <ul className="my-2 list-disc">
                    {education.MainInformation.map(bullet => {
                        return <li className="text-sm leading-normal text-justify">{bullet}</li>
                    })}
                </ul>
            </div>
        </li>
    )
}
export default Education