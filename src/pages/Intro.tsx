import { TypeAnimation } from "react-type-animation";
import Assets, { default as Asset } from "../assets";
import { AddressLink, AddressTable, CustomButton } from "../common/QuickLinks";
import content from "../content";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";


const Intro = () => {

  const linkButtons = Object.values(content.Links).filter(link =>
    link.Name !== "Email" && link.Name !== "Phone" && link.Name !== "Location"
  );

  return (
    <>
      <div className="grid items-center justify-center grid-cols-2 gap-8 m-auto">
        <div className="p-8 mx-auto max-w">

          <h1 className="text-3xl font-medium text-center text-main">Hi there! I am&nbsp;
            <span className="font-bold text-primary">
              Firemariam A.Asegie
            </span>
          </h1>

          <h1 className="text-3xl text-center text-main">
            <img src={Assets.Icons.Rocket} className="inline-block h-7" alt="Rocket" />
            <span className="font-bold text-primary">
              <TypeAnimation
                sequence={content.About.Titles.flatMap((title) => ["A " + title, 100])}
                repeat={Infinity}
              />
            </span>
          </h1>

          <p className="text-justify text-main">{content.About.AboutMe}</p>
          <br />
          {/* TODO: Fix resume Link
          TODO: Fix How we layout */}
          <div className="flex flex-col flex-wrap justify-center">
            <AddressLink icon={MdEmail} text={content.Links["Email"].Description} link={content.Links["Email"].URL} />
            <AddressLink icon={FaPhone} text={content.Links["Phone"].Description} link={content.Links["Phone"].URL} />
            <AddressLink icon={IoLocation} text={content.Links["Location"].Description} link={content.Links["Location"].URL} />
          </div>
          {/* <AddressTable email={content.Links["Email"]} phone={content.Links["Phone"]} location={content.Links["Location"]} /> */}
          <div className="grid grid-cols-1 gap-4 mx-auto my-16 font-semibold md:grid-cols-3 max-w-7xl">
            {linkButtons.map((link) => (
              (<CustomButton key={link.Name} icon={link.Icon} link={link.URL} text={link.Name} />)
            ))}
          </div>
        </div>
        <div style={{ margin: "auto" }}>
          <img className="w-auto h-auto max-h-[60vh] object-cover rounded-[10%] relative" src={Asset.Images.Profile} alt="Fikremariam Anteneh Asegie" />
        </div>
      </div>

    </>
  )
}

export default Intro