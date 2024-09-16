export default interface ExperienceModel {
  Image: string;
  Title: string;
  Company: string;
  Location: string;
  StartDate: string;
  EndDate: string;
  Bullets: string[];
  TechStack: { Stack: string; Icon: string }[];
  Links: {
    Name: string;
    URL: string;
    Icon: string;
  }[];
}


