import images from "../assets/images";
import techstack from "../assets/techstack";
import { ExperienceModel } from "../types/experience.model";

const experience: ExperienceModel[] = [
  {
    Image: images.A2SV,
    Title: "Head Of Education",
    Company: "A2SV",
    Location: "Addis Ababa, Ethiopia",
    StartDate: "November 2023",
    EndDate: "Present",
    Description: [
      "Managing remote learning sessions for 20 students from different African countries, facilitating 15 hours of weekly sessions.",
      "Give lectures on Data Structure&algorithms,Help students solve 350+ problems weekly, and prepare weekly Internal contests.",
    ],
    Technologies: [],
    Links: [
      {
        Name: "See Company",
        Link: "https://a2sv.org/",
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
    Description: [],
    Technologies: [],
    Links: [],
  },

  {
    Image: images.Eskalate,
    Title: "Software Engineering Intern Intern",
    Company: "Eskalate",
    Location: "Addis Ababa, Ethiopia",
    StartDate: "March 2024",
    EndDate: "June 2024",
    Description: [
      "Worked on dime a payment integration system for Ethiopia.",
      "Developed a Authentication and Authorization system for Dime with OTP and JWT.",
      "Developed a GraphQL API for Dime.",
    ],
    Technologies: [
      { Name: "Go", Link: techstack.go },
      { Name: "PostgreSQL", Link: techstack.postgresql },
      { Name: "GraphQL", Link: techstack.graphql },
      { Name: "Git", Link: techstack.git },
    ],
    Links: [
      {
        Name: "See Company",
        Link: "https://dime-web-landing-page.vercel.app/",
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
    Description: [
      "Led a team of 5 to develop an API for a social media app using ASP.NET Core and PostgreSQL in one month.",
      "Applied Clean Architecture principles and Dependency Injection to improve code maintainability and testability.",
      "Conducted testing with 87% coverage of API's features to ensure reliability and performance",
    ],
    Technologies: [
      { Name: "ASP.NET Core", Link: techstack.cs },
      { Name: "PostgreSQL", Link: techstack.postgresql },
      { Name: "Swagger", Link: techstack.swagger },
      { Name: "Git", Link: techstack.git },
    ],
    Links: [
      {
        Name: "See Company",
        Link: "https://eskalate.io/",
      },
    ],
  },
];

export default experience;
