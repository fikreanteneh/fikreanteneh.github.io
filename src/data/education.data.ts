import images from "../assets/images";
import EducationModel from "../types/education.model";

const EducationData: EducationModel[] = [
  {
    Name: "Addis Ababa University",
    ImageLink: images.AAU,
    Link: "http://www.aait.edu.et/",
    Description: "13th Best University in Africa",
    Location: "Addis Ababa, Ethiopia",
    Degree: "BSc in Software Engineering",
    StartDate: "June 2021",
    EndDate: "June 2025",
    MainInformation: [
      ["CGPA", "3.84"],
      [
        "Relevant Coursework",
        "Calculus, Data Structures and Algorithms, OOP, Database Systems, Operating Systems, Computer Architecture and Organization, Web Development, Mobile Development, Fundamentals of AI, Distributed Systems, Machine Learning, Enterprise Application Development, Project Management, Requirement Engineering",
      ],
    ],
    Information: [],
  },
  {
    Name: "Africa to Silicon Valley (A2SV)",
    ImageLink: images.A2SV,
    Link: "https://a2sv.org/",
    Description: "Backed by Google",
    Location: "Addis Ababa, Ethiopia",
    Degree: "DSA and Competitive Programming",
    StartDate: "November 2022",
    EndDate: "October 2023",
    MainInformation: [],
    Information: [
      "A2SV is a non-profit organization that up skills African students & connects them with top tech companies.",
      "A2SV students have achieved a 70% interview success rate and 50+ placements at Google, Bloomberg, Amazon, Databricks, Palantir & Linkedin.",
      "Solved 600+ problems on LeetCode and 150+ problems on Codeforces consistently throughout the year.",
    ],
  },
  {
    Name: "ALX Africa",
    ImageLink: images.ALX,
    Link: "https://www.alxafrica.com/",
    Description: "Africa's Biggest Online Education",
    Location: "Online",
    Degree: "Software Engineering",
    StartDate: "May 2022",
    EndDate: "June 2023",
    MainInformation: [],
    Information: [],
  },
];

export default EducationData;
