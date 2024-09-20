import { FaPhone } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import Assets from "../assets";
import { LinkIcon } from "../common/Icons";
import content from "../data";


const Intro = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openLink = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer")
  }

  return (
    <div className="flex flex-col justify-center w-full h-full mx-auto">
      <h1 className="text-3xl font-extrabold text-main">Hi! I am&nbsp;
        <span className="text-primary">
          Fikremariam A.Asegie
        </span>
      </h1>
      <h2 className="my-2 text-3xl font-extrabold text-main">
        <img src={Assets.Icons.Rocket} className="inline-block h-8" alt="Rocket" />
        <span className="flex-grow-0 text-main">A Software Engineer</span>
      </h2>
      {/* <h2 className="my-2 text-3xl font-extrabold text-main">
        <img src={Assets.Icons.Rocket} className="inline-block h-8" alt="Rocket" />
        <span className="flex-grow-0 text-primary">
          <TypeAnimation
            sequence={content.About.Titles.flatMap((title) => ["A " + title, 100])}
            repeat={Infinity}
          />
        </span>
      </h2> */}
      <div>
        <ul className="my-2 space-y-1">
          <li onClick={() => scrollToSection("projects")} className="transition-all duration-300 cursor-pointer hover:text-primary hover:translate-x-2">&rarr; See Projects</li>
          <li onClick={() => scrollToSection("experience")} className="transition-all duration-300 cursor-pointer hover:text-primary hover:translate-x-2">&rarr; See Work Experience</li>
          <li onClick={() => scrollToSection("skills")} className="transition-all duration-300 cursor-pointer hover:text-primary hover:translate-x-2">&rarr; See Technologies</li>
          <li onClick={() => scrollToSection("education")} className="transition-all duration-300 cursor-pointer hover:text-primary hover:translate-x-2">&rarr; See My Education</li>
          <li onClick={() => scrollToSection("about")} className="transition-all duration-300 cursor-pointer hover:text-primary hover:translate-x-2">&rarr; More About Me</li>
        </ul>
        <div>
          <button className="flex items-center p-1 space-x-1 transition-all duration-300 border rounded-lg cursor-pointer text-reverse bg-main hover:bg-hover hover:shadow-md">View Resume</button>
        </div>
      </div>
      <div>
        <ul>
          <li className="flex items-center gap-1 hover:text-primary hover:cursor-pointer" onClick={() => openLink(content.Links["Email"].URL)}>
            <MdEmail />
            <span>{content.Links["Email"].Description}</span>
          </li>
          <li className="flex items-center gap-1 hover:text-primary hover:cursor-pointer" onClick={() => openLink(content.Links["Phone"].URL)}>
            <FaPhone />
            <span>{content.Links["Phone"].Description}</span>
          </li>
          <li className="flex items-center gap-1 hover:text-primary hover:cursor-pointer" onClick={() => openLink(content.Links["Location"].URL)}>
            <IoLocation />
            <span>{content.Links["Location"].Description}</span>
          </li>
        </ul>
        <div>
          {Object.values(content.Links).map((link) => {
            if (["Email", "Location", "Phone", "Resume"].includes(link.Name)) return null;
            return <LinkIcon icon={link.Icon} scale={1.5} href={link.URL} />
          })}

        </div>
      </div>
    </div>
  )
}

export default Intro

{/* <div className="grid grid-cols-2 gap-4 max-w-96">
          <CustomButton link={resume.URL} text="Resume" />
          <CustomButton link={resume.URL} text="Get In Touch" />
        </div> */}