
import { FaExternalLinkAlt } from "react-icons/fa";

type EducationProps = {
  Name: string,
  Link: string,
  Description: string,
  Location: string,
  Degree: string,
  StartDate: string,
  EndDate: string,
  MainInformation: string[][],
  Information: string[][],
}


const Education = (props: { education: EducationProps }) => {
  const education = props.education
  return (
    <div className="flex flex-wrap text-main" >
      {/* <img src={education.image} alt={education.Name} /> */}
      <div>
        <h2> {education.Name} <FaExternalLinkAlt className="inline" href={education.Link} /> ( {education.Description})</h2>
        <h3>{education.StartDate} - {education.EndDate} | {education.Location} </h3>
        <h3>{education.Degree}</h3>
      </div>


    </div>
  )
}

export default Education