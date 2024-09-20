export default interface ExperienceModel {
  Icon: string;
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


