export default interface ExperienceModel {
  Image: string;
  Title: string;
  Company: string;
  Location: string;
  StartDate: string;
  EndDate: string;
  Description: string[];
  Technologies: { Name: string; Link: string }[];
  Links: {
    Name: string;
    Link: string;
  }[];
}


