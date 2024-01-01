import styled from "@emotion/styled";
import { IconType } from "react-icons";
import { FaPhone } from "react-icons/fa6";
import { IoLocation } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import Asset from "../assets";
import about from "../contents/about.json";
import { colors } from "../themes";
import { toast } from "react-toastify";


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
    <QuickLinks onClick={() => { navigator.clipboard.writeText(prop.text); toast.success("Copied to Clipboard!") }}>
      <prop.icon />
      <span style={{ padding: "0 5px" }}>
        {prop.text}
      </span>
    </QuickLinks>

  )
}

// const ImportantLink = 

const Home = () => {
  return (
    <>
      <HomeDiv>
        <AboutDiv>
          <h1 style={{ textAlign: "center", fontSize: "2.8rem" }}>Hi there! I am <span style={{
            color: colors.primary,
            fontWeight: 700
          }}>Firemariam A.Asegie</span></h1>
          <p style={{ textAlign: "justify", fontSize: "1.2rem" }}>{about.intro}</p>
          <br />
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <QuickLinkComponent icon={FaPhone} text={about.address.phone} link={about.quicklinks.phone.url} />
            <QuickLinkComponent icon={MdEmail} text={about.address.email1} link={about.quicklinks.email.url} />
            <QuickLinkComponent icon={IoLocation} text={about.address.address} link={about.quicklinks.location.url} />
          </div>
        </AboutDiv>
        <div style={{ margin: "auto" }}>
          <HomeImg src={Asset.Images.Profile} alt="Fikremariam Anteneh Asegie" />
        </div>
      </HomeDiv>
      <div>


      </div>
    </>
  )
}

export default Home