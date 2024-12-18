import assets from "../assets";
import { ProjectModel } from "../types/projects.model";



const ProjectsData: ProjectModel[] = [
    {
        Name: "Track Mingle",
        Completed: false,
        Bullets: [
            "Developing a real-time friend tracking app inspired by System Design Interview Book and Facebook’s Nearby Friends.",
            "Building a Go WebSocket server for real-time friend location updates, using Redis pub/sub for message distribution.",
            "Creating an Express.js API server for authentication and CRUD oper ations, using PostgreSQL as the database.",
        ],
        Picture: [
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
            { Icon: assets.Icons.Github, URL: "https://github.com/fikreanteneh/TrackMingle", Name: "GitHub" },
        ],
        Achievements: [],
        Icon: assets.Projects.TrackMingle
    },
    {
        Name: "A2SV Chrome Extension",
        Completed: true,
        Bullets: [
            "Built an extension for 450+ students to submit Leetcode and Codeforces solutions to A2SV site from the platforms.",
            "Automated submission of 50,500+ solutions, saving hours and allowing them to focus solely on problem-solving."
        ],
        Picture: [
        ],
        TechStack: [
            { Stack: "TypeScript", Icon: assets.Icons.TypeScript },
            { Stack: "WebPack", Icon: assets.Icons.WebPack },
        ],
        Links: [
            { Icon: assets.Icons.Github, URL: "https://github.com/fikreanteneh/A2SVCompanion", Name: "GitHub" },
            { Icon: assets.Icons.Github, URL: "https://chromewebstore.google.com/detail/a2sv-companion/gjkcocfkdcjndniapjeclihmlelkgoil", Name: "Web Store" }
        ],
        Achievements: [],
        Icon: assets.Projects.ChromeExtension
    },
    {
        Name: "Mini Distributed File System",
        Completed: true,
        Bullets: [
            "Designed and developed a Distributed File System inspired by Google's GFS using Go.",
            "Implemented le chunking, replication, and distribution across servers to ensure data integrity and availability.",
            "Used a master server for handling le metadata and chunk server status, while chunk server is used for data storage."
        ],
        Picture: [
        ],
        TechStack: [
            { Stack: "Go", Icon: assets.Icons.Go },
        ],
        Links: [
            { Icon: assets.Icons.Github, URL: "https://github.com/fikreanteneh/DistributedFileSystem", Name: "GitHub" },
        ],
        Achievements: [],
        Icon: assets.Projects.DFS
    },

    {
        Name: "Student Portal System",
        Completed: true,
        Bullets: [
            "Co-built a high school portal website to streamline paperwork and ensure easy access to consistent data.",
            "Developed a database and API for handling grade submissions, registrations, announcements, and resource sharing."
        ],
        Picture: [
        ],
        TechStack: [
            { Stack: "JavaScript", Icon: assets.Icons.JavaScript },
            { Stack: "React", Icon: assets.Icons.React },
            { Stack: "Express", Icon: assets.Icons.Express },
            { Stack: "MySQL", Icon: assets.Icons.MySQL },
        ],
        Links: [
            { Icon: assets.Icons.Github, URL: "https://github.com/fikreanteneh/Fidel", Name: "GitHub" },
        ],
        Achievements: [],
        Icon: assets.Projects.Portal
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