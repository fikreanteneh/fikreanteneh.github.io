import icons from "../assets/icons";
import images from "../assets/images";
import ExperienceModel from "../types/experience.model";

const ExperienceData: ExperienceModel[] = [
  {
    Icon: images.A2SV,
    Title: "Head Of Education",
    Company: "A2SV",
    Location: "Addis Ababa, Ethiopia",
    StartDate: "November 2023",
    EndDate: "Present",
    Bullets: [
      "Managing remote learning sessions on DSA for 16 students from 5 African countries, dedicating 15 hours a week.",
      "Prepared and delivered 17 + DSA lectures and assisted students in solving 6000 + DSA problems so far.",
    ],
    TechStack: [
      { Stack: "DSA", Icon: icons.Leetcode },
      { Stack: "Python", Icon: icons.Python },
      { Stack: "Google Sheet", Icon: icons.GoogleSheet },
      { Stack: "Google AppScript", Icon: icons.AppScript },
    ],
    Links: [
      {
        Name: "Website",
        URL: "https://a2sv.org/",
        Icon: icons.Website
      },
    ],
  },

  {
    Icon: images.Superstars,
    Title: "Software Engineering Intern",
    Company: "Superstars",
    Location: "Remote, United States",
    StartDate: "June 2024",
    EndDate: "Present",
    Bullets: [
      "Implemented 12+ screens from Figma designs with state management and API integration using Flutter and BLoC.",
      "Mentored 2 interns, guiding them through the codebase, Flutter development, and state management practices."
    ],
    TechStack: [
      { Stack: "Flutter", Icon: icons.Flutter },
      { Stack: "Dart", Icon: icons.Dart },
      { Stack: "Bit Bucket", Icon: icons.BitBucket },
      { Stack: "Postman", Icon: icons.Postman },
    ],
    Links: [
      {
        Name: "Website",
        URL: "https://www.superstars.co/",
        Icon: icons.Website
      },
    ],
  },

  {
    Icon: images.Eskalate,
    Title: "Software Engineering Intern",
    Company: "Eskalate",
    Location: "Addis Ababa, Ethiopia",
    StartDate: "March 2024",
    EndDate: "June 2024",
    Bullets: [
      "Worked on dime a payment integration system for Ethiopia.",
      "Developed a Authentication and Authorization system for Dime with OTP and JWT.",
      "Developed a GraphQL API for Dime.",
    ],
    TechStack: [
      { Stack: "Go", Icon: icons.Go },
      { Stack: "PostgreSQL", Icon: icons.Postgresql },
      { Stack: "GraphQL", Icon: icons.GraphQL },
      { Stack: "Git", Icon: icons.Git },
    ],
    Links: [
      {
        Name: "Website",
        URL: "https://dime-web-landing-page.vercel.app/",
        Icon: icons.Website
      },
    ],
  },

  {
    Icon: images.Eskalate,
    Title: "Backend Development Intern",
    Company: "Eskalate",
    Location: "Addis Ababa, Ethiopia",
    StartDate: "July 2023",
    EndDate: "September 2023",
    Bullets: [
      "Led a team of 5 to develop an API for a social media app using ASP.NET Core and PostgreSQL in one month.",
      "Applied Clean Architecture principles and Dependency Injection to improve code maintainability and testability.",
      "Conducted testing with 87% coverage of API's features to ensure reliability and performance",
    ],
    TechStack: [
      { Stack: "ASP.NET Core", Icon: icons.cs },
      { Stack: "PostgreSQL", Icon: icons.Postgresql },
      { Stack: "Swagger", Icon: icons.Swagger },
      { Stack: "Git", Icon: icons.Git },
    ],
    Links: [
      {
        Name: "See Company",
        URL: "https://eskalate.io/",
        Icon: icons.Website
      },
    ],
  },
];

export default ExperienceData;
