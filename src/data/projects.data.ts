import assets from "../assets";
import { ProjectModel } from "../types/projects.model";



const ProjectsData: ProjectModel[] = [
    {
        Name: "Track Mingle",
        Completed: false,
        Bullets: [
            "Developing a real-time friend tracking app inspired by System Design Interview Book and Facebook’s Nearby Friends.",
            "Building a Go WebSocket server for real-time friend location updates, using Redis pub/sub for message distribution.",
            "Creating an Express.js API server for authentication and CRUD operations, using PostgreSQL as the database.",
        ],
        Picture: [
            assets.Projects.portal,
            assets.Projects.portal,
            assets.Projects.portal,
        ],
        TechStack: [
            { Stack: "Go", Icon: assets.Icons.Go },
            { Stack: "Websocket", Icon: assets.Icons.Websocket },
            { Stack: "TypeScript", Icon: assets.Icons.TypeScript },
            { Stack: "PostgreSQL", Icon: assets.Icons.Postgresql },
            { Stack: "Redis", Icon: assets.Icons.Redis },
            { Stack: "Express.js", Icon: assets.Icons.Express },
        ],
        Links: [
            { Icon: assets.Icons.Github, URL: "kjsckn", Name: "GitHub" },
            { Icon: assets.Icons.Github, URL: "kjsckn", Name: "GitHub" }
        ],
        Achievements: [],
        Icon: assets.Projects.portal
    },

    {
        Name: "A2SV Chrome Extension",
        Completed: true,
        Bullets: [
            "Built an extension for 450+ students to submit Leetcode and Codeforces solutions to A2SV site from the platforms.",
            "Automated submission of 50,500+ solutions, saving hours and allowing them to focus solely on problem-solving."
        ],
        Picture: [
            assets.Projects.portal,
            assets.Projects.portal,
            assets.Projects.portal,
        ],
        TechStack: [
            { Stack: "TypeScript", Icon: assets.Icons.TypeScript },
            { Stack: "WebPack", Icon: assets.Icons.WebPack },
        ],
        Links: [
            { Icon: assets.Icons.Github, URL: "kjsckn", Name: "GitHub" },
            { Icon: assets.Icons.Github, URL: "kjsckn", Name: "GitHub" }
        ],
        Achievements: [],
        Icon: assets.Projects.portal
    },

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