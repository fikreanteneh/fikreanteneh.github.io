import styled from "@emotion/styled";
import { NavLink, useLocation } from "react-router-dom";
import { colors } from "../themes";



const HeaderStyle = styled.header`
  display: flex;
  justify-content: space-between;
`;

const Logo = styled.h1`
font-size: 2rem;
font-weight: 700;
color: 	${colors.primary};
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

const Navbar = () => {
    const location = useLocation();
    return (
        <HeaderStyle>
            <div>
                <Logo>Fikremariam</Logo>
            </div>
            <nav>
                <UlStyle>
                    <NavLinkStyle to={"/home"} active={location.pathname == "/home"}>Home</NavLinkStyle>
                    <NavLinkStyle to={"/experience"} active={location.pathname == "/experience"}>Experience</NavLinkStyle>
                    <NavLinkStyle to={"/projects"} active={location.pathname == "/projects"}>Projects</NavLinkStyle>
                    <NavLinkStyle to={"/contact"} active={location.pathname == "/contact"}>Contact</NavLinkStyle>
                </UlStyle>
            </nav>

        </HeaderStyle>
    )
}

export default Navbar