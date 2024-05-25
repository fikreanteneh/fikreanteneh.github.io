import { FaPhone } from "react-icons/fa6";
import { IoLocation } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { TypeAnimation } from "react-type-animation";
import Assets, { default as Asset } from "../assets";
import Education from "../components/Education";
import { AddressLink, LinkButton } from "../components/common/QuickLinks";
import Content from "../contents";

const links = [
  { icon: Assets.Icons.Resume, link: Content.Links.QuickLinks.Resume.URL, text: Content.Links.QuickLinks.Resume.Name },
  { icon: Assets.Icons.Github, link: Content.Links.QuickLinks.Github.URL, text: Content.Links.QuickLinks.Github.Name },
  { icon: Assets.Icons.Linkedin, link: Content.Links.QuickLinks.Linkedin.URL, text: Content.Links.QuickLinks.Linkedin.Name },
  { icon: Assets.Icons.Leetcode, link: Content.Links.QuickLinks.Leetcode.URL, text: Content.Links.QuickLinks.Leetcode.Name },
  { icon: Assets.Icons.Codeforces, link: Content.Links.QuickLinks.Codeforces.URL, text: Content.Links.QuickLinks.Codeforces.Name },
  { icon: Assets.Icons.Telegram, link: Content.Links.QuickLinks.Telegram.URL, text: Content.Links.QuickLinks.Telegram.Name },
];

const educations = [
  { ...Content.Education.AAU, image: Assets.Images.AAU },
  { ...Content.Education.A2SV, image: Assets.Images.A2SV },
  { ...Content.Education.ALX, image: Assets.Images.ALX }
]

const Home = () => {

  console.log(educations)

  return (
    <>
      <div className="grid items-center justify-center grid-cols-2 gap-8 m-auto">

        <div className="p-8 mx-auto max-w">

          <h1 className="my-8 text-5xl text-center text-main">Hi there! I am&nbsp;
            <span className="font-bold text-primary">
              Firemariam A.Asegie
            </span>
          </h1>
          {/* <p className="my-8 text-5xl text-center text-main">Welcome to My Portfolio</p> */}

          <h1 className="my-8 text-5xl text-center text-main">
            <img src={Assets.Icons.Rocket} className="inline-block h-12" alt="Rocket" />
            <span className="font-bold text-primary">
              <TypeAnimation
                sequence={Content.About.Titles.flatMap((title) => ["A " + title, 100])}
                repeat={Infinity}
              />
            </span>
          </h1>
          <p className="text-xl text-justify text-main">{Content.About.AboutMe}</p>
          <br />
          <div className="flex flex-col flex-wrap justify-center p-0 m-0">
            <AddressLink icon={FaPhone} text={Content.About.Addresses.Phone} link={Content.About.AddressLinks.Phone.URL} />
            <AddressLink icon={MdEmail} text={Content.About.Addresses.Email} link={Content.About.AddressLinks.Email.URL} />
            <AddressLink icon={IoLocation} text={Content.About.Addresses.Location} link={Content.About.AddressLinks.Location.URL} />
          </div>
        </div>
        <div style={{ margin: "auto" }}>
          <img className="w-auto h-auto max-h-[60vh] object-cover rounded-[10%] relative" src={Asset.Images.Profile} alt="Fikremariam Anteneh Asegie" />
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4 mx-auto my-16 md:grid-cols-3 max-w-7xl">
        {links.map((link) => (
          <LinkButton key={link.text} icon={link.icon} link={link.link} text={link.text} />
        ))}
      </div>
      <div>
        <p className="my-8 text-5xl text-center text-main">Education</p>
        {educations.map(education => {
          return <Education key={education.Name} education={education} />
        })}

      </div>
    </>
  )
}

export default Home