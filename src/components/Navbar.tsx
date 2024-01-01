import styled from "@emotion/styled";
import { IconType } from "react-icons";
import { GoProjectRoadmap } from "react-icons/go";
import { IoHome } from "react-icons/io5";
import { MdContacts, MdOutlineWorkHistory } from "react-icons/md";
import { NavLink, useLocation } from "react-router-dom";
import { colors } from "../themes";


const HeaderStyle = styled.header`
  display: flex;
  justify-content: space-between;
    @media (max-width: 840px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Logo = styled.h1`
font-size: 2rem;
font-weight: 700;
color: 	${colors.primary};
  @media (max-width: 840px) {
    display: none;
  }
`

const UlStyle = styled.ul`
    display: flex;
    list-style: none;
    align-items: center;
    gap: 1.2rem;
    justify-content: space-between;
    font-size: 1.5rem;
`

const NavLinkStyle = styled(NavLink) <{ active: boolean }>`
    text-decoration: none;
    padding: 0.2rem;
    color: ${props => props.active ? colors.primary : "white"};
    cursor: pointer;
     &:hover{
        color: white;
        background-color: ${colors.primary};
        border-radius: 0.5rem;
    }

`

const SpanStyle = styled.span`
  @media (max-width: 840px) {
    display: none;
  }
`;

type NavComponentType = {
    to: string;
    icon: IconType;
    text: string;
}

const NavComponent: React.FC<NavComponentType> = (prop) => {
    const location = useLocation();
    return (
        <NavLinkStyle
            active={location.pathname == prop.to}
            to={prop.to}>
            <prop.icon style={{ padding: "0 6px" }} />
            <SpanStyle>{prop.text}</SpanStyle>
        </NavLinkStyle>
    )
}

const Navbar = () => {
    return (
        <HeaderStyle>
            <div>
                <Logo>Fikremariam</Logo>
            </div>
            <nav>
                <UlStyle>
                    <NavComponent to={"/home"} icon={IoHome} text={"Home"} />
                    <NavComponent to={"/experience"} icon={MdOutlineWorkHistory} text={"Experience"} />
                    <NavComponent to={"/projects"} icon={GoProjectRoadmap} text={"Projects"} />
                    <NavComponent to={"/contact"} icon={MdContacts} text={"Contact"} />
                </UlStyle>
            </nav>

        </HeaderStyle>
    )
}

export default Navbar