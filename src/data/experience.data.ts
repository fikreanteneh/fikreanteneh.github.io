import icons from "../assets/icons";
import images from "../assets/images";
import ExperienceModel from "../types/experience.model";

const ExperienceData: ExperienceModel[] = [
  {
    Image: images.A2SV,
    Title: "Head Of Education",
    Company: "A2SV",
    Location: "Addis Ababa, Ethiopia",
    StartDate: "November 2023",
    EndDate: "Present",
    Bullets: [
      "Managing remote learning sessions for 20 students from different African countries, facilitating 15 hours of weekly sessions.",
      "Give lectures on Data Structure&algorithms,Help students solve 350+ problems weekly, and prepare weekly Internal contests.",
    ],
    TechStack: [],
    Links: [
      {
        Name: "Website",
        URL: "https://a2sv.org/",
        Icon: icons.Website
      },
    ],
  },

  {
    Image: images.Superstars,
    Title: "Software Engineering Intern",
    Company: "Superstars",
    Location: "Remote, United States",
    StartDate: "June 2024",
    EndDate: "Present",
    Bullets: [],
    TechStack: [],
    Links: [],
  },

  {
    Image: images.Eskalate,
    Title: "Software Engineering Intern Intern",
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
      { Stack: "Go", Icon: icons.go },
      { Stack: "PostgreSQL", Icon: icons.postgresql },
      { Stack: "GraphQL", Icon: icons.graphql },
      { Stack: "Git", Icon: icons.git },
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
    Image: images.Eskalate,
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
      { Stack: "PostgreSQL", Icon: icons.postgresql },
      { Stack: "Swagger", Icon: icons.swagger },
      { Stack: "Git", Icon: icons.git },
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
