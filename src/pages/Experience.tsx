import { MdOutlineWorkHistory } from "react-icons/md"
import { Headline2, Headline4 } from "../common/Text"
import ExperienceData from "../data/experience.data"
import ExperienceModel from "../types/experience.model"

const Experience = () => {
  return (
    <div>
      <Headline2 text="Experiences" Icon={MdOutlineWorkHistory} />
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
    <li className="mb-12 p-2 group relative grid gap-4 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:bg-hover lg:hover:rounded-md lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
      <div>
        <p>{experience.StartDate} - {experience.EndDate}</p>
        <div className="flex mt-2 space-x-2">
          {experience.Links.map(link => {
            return (
              <a href={link.URL} target="_blank" rel="noreferrer noopener" className="0">
                <img alt={experience.Company} className="h-4" src={link.Icon} />
              </a>
            );
          })}
        </div>
      </div>
      <div className="z-10 sm:order-2 sm:col-span-6">
        {/* <h3 className="inline-flex items-baseline text-base font-bold leading-tight group/link">
          {experience.Name}
        </h3> */}
        <Headline4 text={experience.Company} />
        <ul>
          {experience.Bullets.map(bullet => {
            return <li className="mt-2 text-sm leading-normal text-justify">{bullet}</li>
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