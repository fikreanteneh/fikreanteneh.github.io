import { GoProjectRoadmap } from "react-icons/go";
import { NormalButton } from "../common/Buttons";
import ProjectsData from "../data/projects.data";
import { ProjectModel } from "../types/projects.model";
import { HeadlineLarge } from './../common/Text';

const Projects = () => {
  return (
    <div id="projects">
      <HeadlineLarge text="Projects" Icon={GoProjectRoadmap} />
      <ul className="flex flex-col gap-6 group/list">
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
    <li className="w-[95%] relative flex gap-4 p-2 transition-all rounded-md group hover:bg-main-8">
      <div className="flex-shrink-0 w-16">
        {/* TODO: The CLickable */}
        <img
          className="object-cover w-full rounded-lg hover:cursor-pointer"
          onClick={() => window.open(project.Links[0].URL, "_blank")}
          src={project.Icon}
          alt={project.Icon}
        />
      </div>
      <div className="z-10 sm:order-2 sm:col-span-6">
        <h4
          className="font-bold hover:text-accent hover:cursor-pointer"
          onClick={() => window.open(project.Links[0].URL, "_blank")}
        >{project.Name}
        </h4>
        <div className="flex items-start justify-start gap-1 my-1 ">
          {project.Links.map(link => {
            return <NormalButton
              name={link.Name}
              scale={0.7}
              onClick={() => window.open(link.URL, "_blank")}
            />
          })}
        </div>
        <p className="my-2 text-sm leading-normal text-justify">{project.Bullets.join(" ")} </p>
        {/* <ul className="my-2">
          {project.Bullets.map(bullet => {
            return <li className="text-sm leading-normal text-justify">{bullet}</li>
          })}
        </ul> */}
        <div className="flex flex-wrap gap-2 my-2">
          {project.TechStack.map(link => {
            return <img className="h-4" src={link.Icon} alt={link.Stack} />
          })}
        </div>
      </div>
    </li>

  );

}


// <li className="mb-12 p-2 group relative grid gap-4 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:bg-main-8 lg:hover:rounded-md lg:hover:!opacity-100 lg:group-main-8/list:opacity-50">
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