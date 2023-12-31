import styled from "@emotion/styled";
import Profile from "../assets/images/profile.jpg";
import { colors } from './../themes';



const HomeDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  align-items: center;
  justify-content: center;
`

const AboutDiv = styled.div`
  max-width: 720x;
  margin: 0 auto;
  padding: 2rem;
`



const HomeImg = styled.img`
  width: auto;
  height: auto;
  max-height: 60vh;
  object-fit: cover;
  border-radius: 10%;
`

const HomeSpan = styled.span`
  color: ${colors.primary}
`




const Home = () => {
  return (
    <>
      <HomeDiv>
        <AboutDiv>
          <h1 style={{ textAlign: "center", fontSize: "2.8rem" }}>Hi there! I am <HomeSpan>Firemariam A.Asegie</HomeSpan></h1>
          <p style={{ textAlign: "justify" }}>
            A fourth year software engineering student at AAU whose is interested in CS, mathematics and engineering. I am always working to improve of myself and society . My future goal is to solve problems ravaging our country using science and technology.

            I am a enthusiastic and motivated full stack developer, competetive programmer and problem solver. I have an experience developing website and designning databases. Currently I am looking for opportunities to apply my technical skills on real world project. I am always responsible for I do and I am up for any challenge.
          </p>
        </AboutDiv>
        <div style={{ margin: "auto" }}>
          <HomeImg src={Profile} alt="Fikremariam Anteneh Asegie" />
        </div>

      </HomeDiv>
    </>
  )
}

export default Home