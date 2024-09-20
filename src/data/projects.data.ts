import assets from "../assets";
import { ProjectModel } from "../types/projects.model";

const temp: ProjectModel = {
    Name: "Track Mingle ",
    Completed: false,
    Bullets: [
        "Built an extension for 400+ students to submit Leetcode&Codeforcessolutionsto A2SV site directly from the platforms",
        "Built an extension for 400+ students to submit Leetcode&Codeforcessolutionsto A2SV site directly from the platforms",
        "Built an extension for 400+ students to submit Leetcode&Codeforcessolutionsto A2SV site directly from the platforms"
    ],
    Picture: [
        assets.Projects.portal,
        assets.Projects.portal,
        assets.Projects.portal,
    ],
    TechStack: [
        { Stack: "TypeScript", Icon: assets.Icons.TypeScript },
        { Stack: "TypeScript", Icon: assets.Icons.TypeScript },
        { Stack: "TypeScript", Icon: assets.Icons.TypeScript },
        { Stack: "TypeScript", Icon: assets.Icons.TypeScript },
    ],
    Links: [
        { Icon: assets.Icons.Github, URL: "kjsckn", Name: "GitHub" },
        { Icon: assets.Icons.Github, URL: "kjsckn", Name: "GitHub" }
    ],
    Achievements: [],
    Icon: assets.Projects.portal
}

const ProjectsData: ProjectModel[] = [
    temp, temp, temp

]



// const pro = [
//     {
//         Name: "Track Mingle"
//     },
//     {
//         Name: "Mini Distributed File System"
//     },
//     {
//         Name: "A2SV Chrome Extension"
//     },
//     {
//         Name: "Student Portal System"
//     },
//     {
//         Name: "Expense Tracker Mobile App"
//     },
//     {
//         Name: "Appointment App"
//     },
//     {
//         Name: "News Classifier"
//     },
//     {
//         Name: "Qatar World Cup Website"
//     },
//     {
//         Name: "EOTC"
//     },
//     {
//         Name: "C to MIPS Compiler"
//     },
//     {
//         Name: "Blog App API"
//     },
//     {
//         Name: "Blog App with JSP"
//     },

// ]



export default ProjectsData;