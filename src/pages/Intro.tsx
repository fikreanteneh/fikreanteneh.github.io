import { HiDownload } from "react-icons/hi";
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
    <div className="flex flex-col items-center justify-center w-full h-full gap-10 mx-auto">
      <div>
        <h1>In Construction</h1>
        <h1 className="text-3xl font-extrabold text-main-1">Hi! I am&nbsp;
          <span className="text-accent">
            Fikremariam A.Asegie
          </span>
        </h1>
        <h2 className="my-2 text-3xl font-extrabold text-main-1">
          <img src={Assets.Icons.Rocket} className="inline-block h-8" alt="Rocket" />
          <span className="flex-grow-0 text-main-1">A Software Engineer</span>
        </h2>
        <div>
          <ul className="my-2 space-y-1">
            <li onClick={() => scrollToSection("about")} className="transition-all duration-300 cursor-pointer hover:text-accent hover:translate-x-2">&rarr; Profile</li>
            <li onClick={() => scrollToSection("experience")} className="transition-all duration-300 cursor-pointer hover:text-accent hover:translate-x-2">&rarr; Experiences</li>
            <li onClick={() => scrollToSection("projects")} className="transition-all duration-300 cursor-pointer hover:text-accent hover:translate-x-2">&rarr; Projects</li>
            <li onClick={() => scrollToSection("education")} className="transition-all duration-300 cursor-pointer hover:text-accent hover:translate-x-2">&rarr; Education</li>
            <li onClick={() => scrollToSection("skills")} className="transition-all duration-300 cursor-pointer hover:text-accent hover:translate-x-2">&rarr; Skills</li>
          </ul>
          <br />
          <div className="flex gap-2 my-5">
            {/* TODO: Resume Filtration */}
            <button className="px-2 py-1 space-x-1 transition-all duration-300 rounded-lg cursor-pointer text-main-9 bg-main-1 hover:bg-main-4">Resume</button>
            <button className="px-2 py-1 space-x-1 transition-all duration-300 rounded-full cursor-pointer text-main-9 bg-main-1 hover:bg-main-4">
              <HiDownload />
            </button>
          </div>
          <div className="border rounded-lg border-main-6 w-fit">
            <table className="w-fit">
              <tbody>
                <tr className="transition-all border-b hover:cursor-pointer hover:text-accent border-main-6" onClick={() => openLink(content.Links["Email"].URL)}>
                  <td className="px-3 py-1 text-main-1">Email</td>
                  <td className="px-3 py-1">{content.Links["Email"].Description}</td>
                </tr>
                <tr className="transition-all border-b hover:cursor-pointer hover:text-accent border-main-6" onClick={() => openLink(content.Links["Phone"].URL)}>
                  <td className="px-3 py-1 text-main-1">Phone</td>
                  <td className="px-3 py-1">{content.Links["Phone"].Description}</td>
                </tr>
                <tr className="transition-all hover:cursor-pointer hover:text-accent" onClick={() => openLink(content.Links["Location"].URL)}>
                  <td className="px-3 py-1 text-main-1">Address</td>
                  <td className="px-3 py-1">{content.Links["Location"].Description}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="flex gap-4 my-5">
            {Object.values(content.Links).map((link) => {
              if (["Email", "Location", "Phone", "Resume"].includes(link.Name)) return null;
              return <LinkIcon icon={link.Icon} scale={1.5} href={link.URL} />
            })}
          </div>

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



{/* <h2 className="my-2 text-3xl font-extrabold text-main-1">
        <img src={Assets.Icons.Rocket} className="inline-block h-8" alt="Rocket" />
        <span className="flex-grow-0 text-accent">
          <TypeAnimation
            sequence={content.About.Titles.flatMap((title) => ["A " + title, 100])}
            repeat={Infinity}
          />
        </span>
      </h2> */}

{/* <ul>
          <li className="flex items-center gap-1 hover:text-accent hover:cursor-pointer" onClick={() => openLink(content.Links["Email"].URL)}>
            <MdEmail />
            <span>{content.Links["Email"].Description}</span>
          </li>
          <li className="flex items-center gap-1 hover:text-accent hover:cursor-pointer" onClick={() => openLink(content.Links["Phone"].URL)}>
            <FaPhone />
            <span>{content.Links["Phone"].Description}</span>
          </li>
          <li className="flex items-center gap-1 hover:text-accent hover:cursor-pointer" onClick={() => openLink(content.Links["Location"].URL)}>
            <IoLocation />
            <span>{content.Links["Location"].Description}</span>
          </li>
        </ul> */}