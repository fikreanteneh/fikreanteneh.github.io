import styled from "@emotion/styled";
import React from "react";
import { IconType } from "react-icons";
import { FaPhone } from "react-icons/fa6";
import { IoCopy, IoLocation } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { toast } from "react-toastify";
import { default as Asset } from "../assets";
import about from "../contents/about.json";
import { colors } from "../themes";


const HomeDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  align-items: center;
  justify-content: center;
  margin: 4rem auto;
  @media (max-width: 840px) {
    grid-template-columns: 1fr;
      & > :nth-child(2) {
    order: -1;
  }
  }
`

const AboutDiv = styled.div`
  max-width: 720x;
  margin: 0 auto;
  padding: 2rem;
  border: 3px solid white;
`



const HomeImg = styled.img`
  width: auto;
  height: auto;
  max-height: 60vh;
  object-fit: cover;
  border-radius: 10%;
  position: relative;
  // animation: moveImage 5s infinite;
  // @keyframes moveImage {
  //   0% { 
  //     transform: translateX(0); 
  //     opacity: 1;
  //   }
  //   50% { 
  //     transform: translateX(calc(100%)); 
  //     opacity: 1;
  //   }
  //   100% { 
  //     transform: translateX(0); 
  //     opacity: 0;
  //   }
  // }
`

const QuickLinks = styled.p`
  text-decoration: none;
  color: white;
  font-size: 1.2rem;
  cursor: pointer;
  &:hover {
    color: ${colors.primary};
  }
  
`

const QuickLinkComponent: React.FC<{ icon: IconType, text: string, link: string }> = (prop) => {
  return (
    <p className="w-auto py-1 text-base text-lg no-underline cursor-pointer" >
      <prop.icon className="inline-block" />
      <a href={prop.link} className="inline-block px-1 hover:text-primary">{prop.text}</a>
      <IoCopy className="inline-block hover:text-primary" onClick={() => { navigator.clipboard.writeText(prop.text); toast.success("Copied to Clipboard!") }} />
    </p>

  )
}

const Links: React.FC<{ icon: string, text: string, link: string }> = (prop) => {
  return (
    <button className="p-5 text-lg cursor-pointer text-primary" onClick={() => { window.open(prop.link, '_blank'); }}>
      <prop.icon className="inline-block" />
      <p className="inline-block px-1 hover:text-primary">{prop.text}</p>
    </button>

  )

}

const Home = () => {
  return (
    <>
      <div className="grid items-center justify-center grid-cols-2 gap-8 m-auto my-8">
        <div className="p-8 mx-auto border-4 border-white max-w">
          <h1 className="my-4 text-5xl text-center">Hi there! I am&nbsp;<span className="font-bold text-primary">Firemariam A.Asegie</span></h1>
          <p className="text-xl text-justify">{about.intro}</p>
          <br />
          <div className="flex flex-col flex-wrap justify-center p-0 m-0">
            <QuickLinkComponent icon={FaPhone} text={about.address.phone} link={about.quicklinks.phone.url} />
            <QuickLinkComponent icon={MdEmail} text={about.address.email1} link={about.quicklinks.email.url} />
            <QuickLinkComponent icon={IoLocation} text={about.address.address} link={about.quicklinks.location.url} />
          </div>
        </div>
        <div style={{ margin: "auto" }}>
          <HomeImg src={Asset.Images.Profile} alt="Fikremariam Anteneh Asegie" />
        </div>
      </div>
      <div className="flex flex-wrap justify-between">

        {/* <Links icon={assets.Icons.Resume} link={about.links[0].url} text={about.links[0].name}></Links>
        <Links icon={assets.Icons.Github} link={about.links[1].url} text={about.links[1].name}></Links>
        <Links icon={assets.Icons.Linkedin} link={about.links[2].url} text={about.links[2].name}></Links>
        <Links icon={assets.Icons.Leetcode} link={about.links[3].url} text={about.links[3].name}></Links>
        <Links icon={assets.Icons.Codeforces} link={about.links[4].url} text={about.links[4].name}></Links>
        <Links icon={assets.Icons.Telegram} link={about.links[5].url} text={about.links[5].name}></Links> */}
      </div>
    </>
  )
}

export default Home