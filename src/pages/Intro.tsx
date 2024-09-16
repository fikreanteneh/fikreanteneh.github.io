import { TypeAnimation } from "react-type-animation";
import Assets from "../assets";
import content from "../data";


const Intro = () => {
  return (
    <div className="flex flex-col justify-center w-full h-full mx-auto">
      <h1 className="text-3xl font-extrabold text-main">Hi! I am&nbsp;
        <span className="text-primary">
          Fikremariam A.Asegie
        </span>
      </h1>
      <h1 className="my-2 text-3xl font-extrabold text-main">
        <img src={Assets.Icons.Rocket} className="inline-block h-8" alt="Rocket" />
        <span className="flex-grow-0 text-primary">
          <TypeAnimation
            sequence={content.About.Titles.flatMap((title) => ["A " + title, 100])}
            repeat={Infinity}
          />
        </span>
      </h1>
      <div>
        <p className="my-4 font-medium">Software Engineer | A2SVian | SWE @AAU 2025 | Head of Education @A2SV | Building innovative software</p>

        <ul className="space-y-1">
          <li className="transition-all duration-300 cursor-pointer hover:text-primary hover:translate-x-2">&rarr; See Projects</li>
          <li className="transition-all duration-300 cursor-pointer hover:text-primary hover:translate-x-2">&rarr; See Work Experience</li>
          <li className="transition-all duration-300 cursor-pointer hover:text-primary hover:translate-x-2">&rarr; See Technologies</li>
          <li className="transition-all duration-300 cursor-pointer hover:text-primary hover:translate-x-2">&rarr; See My Education</li>
          <li className="transition-all duration-300 cursor-pointer hover:text-primary hover:translate-x-2">&rarr; Get In Touch</li>
        </ul>
      </div>

    </div>

  )
}

export default Intro

{/* <div className="grid grid-cols-2 gap-4 max-w-96">
          <CustomButton link={resume.URL} text="Resume" />
          <CustomButton link={resume.URL} text="Get In Touch" />
        </div> */}