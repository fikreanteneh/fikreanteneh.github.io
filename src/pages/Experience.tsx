import { MdOutlineWorkHistory } from "react-icons/md"
import { HeadlineLarge } from "../common/Text"
import ExperienceData from "../data/experience.data"
import ExperienceModel from "../types/experience.model"

const Experience = () => {
  return (
    <div id="experience">
      <HeadlineLarge text="Experiences" Icon={MdOutlineWorkHistory} />
      <ul className="group/list">
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
      className="relative grid gap-4 p-2 mb-12 transition-all rounded-md group sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:bg-hover hover:cursor-pointer"  //lg:hover:!opacity-100 lg:group-hover/list:opacity-50
      onClick={() => window.open(experience.Links[0].URL, "_blank", "noopener,noreferrer")}
    >
      <div>
        <img className="rounded-lg" src={experience.Icon} alt={experience.Company} />
      </div>
      <div className="z-10 sm:order-2 sm:col-span-6">
        <h4 className="font-bold group-hover:text-primary"  >
          {`${experience.Title} @ ${experience.Company}`}
        </h4>
        <p className="text-sm italic font-medium">{experience.StartDate} - {experience.EndDate}</p>
        <ul className="my-2 list-disc">
          {experience.Bullets.map(bullet => {
            return <li className="text-sm leading-normal text-justify">{bullet}</li>
          })}
        </ul>

        <div className="flex flex-wrap gap-2 my-2">
          {experience.TechStack.map(link => {
            return <img className="h-4" src={link.Icon} alt={link.Stack} />
          })}
        </div>
      </div>
    </li>
  )
}

{/* <div className="flex mt-2 space-x-2">
  {experience.Links.map(link => {
    return (
      <a href={link.URL} target="_blank" rel="noreferrer noopener" className="0">
        <img alt={experience.Company} className="h-4" src={link.Icon} />
      </a>
    );
  })}
</div> */}