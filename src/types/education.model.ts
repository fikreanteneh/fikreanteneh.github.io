export default interface EducationModel {
  Name: string;
  ImageLink: string;
  Link: string;
  Description: string;
  Location: string;
  Degree: string;
  StartDate: string;
  EndDate: string;
  MainInformation: [string, string][];
  Information: string[];
}
