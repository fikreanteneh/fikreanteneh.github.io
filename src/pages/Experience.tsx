import { MdOutlineWorkHistory } from "react-icons/md"
import { LinkIcon } from "../common/Icons"
import { HeadlineLarge } from "../common/Text"
import ExperienceData from "../data/experience.data"
import ExperienceModel from "../types/experience.model"

const Experience = () => {
  return (
    <div id="experience">
      <HeadlineLarge text="Experiences" Icon={MdOutlineWorkHistory} />
      <ul className="flex flex-col gap-6 group/list">
        {ExperienceData.map(experience => {
          return <ECard experience={experience} />
        })}
      </ul>
    </div>
  )
}

export default Experience

const ECard: React.FC<{ experience: ExperienceModel }> = ({ experience }) => {
  return (
    <li
      className="w-[95%] relative flex gap-4 p-2 transition-all rounded-md group hover:bg-main-8">
      <div className="flex-shrink-0 w-16">
        <img
          className="object-cover w-full rounded-lg hover:cursor-pointer"
          onClick={() => window.open(experience.Links[0].URL, "_blank")}
          src={experience.Icon} alt={experience.Company}
        />
      </div>
      <div className="z-10 sm:order-2 sm:col-span-6">
        <h4
          className="font-bold hover:text-accent hover:cursor-pointer"
          onClick={() => window.open(experience.Links[0].URL, "_blank")}
        >
          {`${experience.Title} @ ${experience.Company}`}
        </h4>
        <p className="text-sm italic font-medium">{experience.StartDate} - {experience.EndDate}</p>
        <p className="my-2 text-sm leading-normal text-justify">{experience.Bullets.join(" ")} </p>
        {/* <ul className="my-2">
          {experience.Bullets.map((bullet, index) => (
            <li key={index} className="text-sm leading-normal text-justify list-none">{bullet}</li>
          ))}
        </ul> */}
        <div className="flex flex-wrap gap-2 my-2">
          {experience.TechStack.map((link) => (
            <LinkIcon icon={link.Icon} />
          ))}
        </div>
      </div>
    </li>
  )
}