import { GoProjectRoadmap } from "react-icons/go";
import { LinkIcon } from "../common/Icons";
import ProjectsData from "../data/projects.data";
import { ProjectModel } from "../types/projects.model";
import { HeadlineLarge } from './../common/Text';

const Projects = () => {
  return (
    <div id="projects">
      <HeadlineLarge text="Projects" Icon={GoProjectRoadmap} />
      <ul className="group/list">
        {ProjectsData.map(project => {
          return <PCard project={project} />
        })}
      </ul>
    </div>
  )
}

export default Projects

const PCard: React.FC<{ project: ProjectModel }> = ({ project }) => {
  return (
    <li
      className="relative grid gap-4 p-2 mb-12 transition-all rounded-md group sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:bg-hover"  //lg:hover:!opacity-100 lg:group-hover/list:opacity-50
      onClick={() => window.open(project.Links[0].URL, "_blank")}>
      <div>
        <img className="rounded-lg" src={project.Icon} alt={project.Icon} />
      </div>
      <div className="z-10 sm:order-2 sm:col-span-6">
        <div className="flex items-center">
          <h4 className="font-bold">  {project.Name} </h4>
          {project.Links.map(link => {
            return <LinkIcon icon={link.Icon} />
          })}
        </div>
        <ul className="my-3 list-disc">
          {project.Bullets.map(bullet => {
            return <li className="text-sm leading-normal text-justify">{bullet}</li>
          })}
        </ul>
        <div className="flex flex-wrap gap-2 my-2">
          {project.TechStack.map(link => {
            return <img className="h-4" src={link.Icon} alt={link.Stack} />
          })}
        </div>
      </div>
    </li>

  );

}


// <li className="mb-12 p-2 group relative grid gap-4 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:bg-hover lg:hover:rounded-md lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
//   <div>
//     <img
//       alt={""}
//       loading="lazy"
//       width={200}
//       className="transition border-2 rounded sm:order-1 sm:col-span-3 sm:translate-y-1"
//       src={project.Picture[0]}
//     />
//     <div className="flex mt-2 space-x-2">
//       {project.Links.map(link => {
//         return (
//           <a href={link.URL} target="_blank" rel="noreferrer noopener" className="0">
//             <img alt={project.Name} className="h-4" src={link.Icon} />
//           </a>
//         );
//       })}
//     </div>
//   </div>
//   <div className="z-10 sm:order-2 sm:col-span-6">
//     {/* <h3 className="inline-flex items-baseline text-base font-bold leading-tight group/link">
//       {project.Name}
//     </h3> */}
//     <Headline4 text={project.Name} />
//     <ul>
//       {project.Bullets.map(bullet => {
//         return <li className="mt-2 text-sm leading-normal text-justify">{bullet}</li>
//       })}

//     </ul>

//     <div className="flex flex-wrap gap-2 my-2">
//       {project.TechStack.map(link => {
//         return <img className="h-4" src={link.Icon} alt={link.Stack} />
//       })}
//     </div>
//   </div>
// </li>