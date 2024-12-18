import images from "../assets/images";
import EducationModel from "../types/education.model";

const EducationData: EducationModel[] = [
  {
    Name: "Addis Ababa University",
    Icon: images.AAU,
    Link: "http://www.aait.edu.et/",
    Description: "13th Best University in Africa",
    Location: "Addis Ababa, Ethiopia",
    Degree: "BSc in Software Engineering",
    StartDate: "June 2021",
    EndDate: "June 2025",
    Information: [
      "CGPA: 3.84",
      "Relevant Coursework: Calculus, Data Structures and Algorithms, OOP, Database Systems, Operating Systems, Computer Architecture and Organization, Web Development, Mobile Development, Fundamentals of AI, Distributed Systems, Machine Learning, Enterprise Application Development, Project Management, Requirement Engineering, NLP",
    ],
  },
  {
    Name: "Africa to Silicon Valley (A2SV)",
    Icon: images.A2SV,
    Link: "https://a2sv.org/",
    Description: "Backed by Google",
    Location: "Addis Ababa, Ethiopia",
    Degree: "DSA and Software Engineering",
    StartDate: "November 2022",
    EndDate: "October 2023",
    Information: [
      "A2SV is a non-profit organization that up skills African students & connects them with top tech companies. Learned and implemented different Data Structures and Algorithms. Solved 700+ problems on LeetCode and 200+ problems on Codeforces consistently throughout the year.",
    ],
  },
  {
    Name: "ALX Africa",
    Icon: images.ALX,
    Link: "https://www.alxafrica.com/",
    Description: "Africa's Biggest Online Education",
    Location: "Online",
    Degree: "Software Engineering",
    StartDate: "May 2022",
    EndDate: "June 2023",
    Information: [
      "ALX is a 1 year online Software Engineering project based intensive program. Specialized in the backend. Completed over 60 mini projects and 2 portfolio projecs. All projects can be found on github."
    ],
  },
];

export default EducationData;
