import { IconType } from "react-icons";
import { FaCircle } from "react-icons/fa6";
import { GoProjectRoadmap } from "react-icons/go";
import { IoHome } from "react-icons/io5";
import { MdContacts, MdDarkMode, MdLightMode, MdOutlineWorkHistory } from "react-icons/md";
import { NavLink, useLocation } from "react-router-dom";
import UseTheme, { accentColors, darkTheme, lightTheme, ThemeContextType } from "../ThemeProvider";






type NavComponentType = {
    to: string;
    icon: IconType;
    text: string;
}

const NavComponent: React.FC<NavComponentType> = (prop) => {
    const location = useLocation();
    return (
        <NavLink
            className={`px-1 hover:text-main hover:bg-primary rounded-lg ${location.pathname == prop.to ? "text-primary" : "text-main"}`}
            to={prop.to}>
            <prop.icon className="inline" />
            <span className="hidden pl-2 md:inline">{prop.text}</span>
        </NavLink>
    )
}

const Navbar = () => {
    const theme = UseTheme() as ThemeContextType;
    return (
        <header className="flex justify-between md:items-center">
            <div>
                <h1 className="hidden text-3xl font-bold text-primary md:block">Fikremariam</h1>
            </div>
            <nav>
                <ul className="flex items-center justify-between gap-6 text-lg">
                    <NavComponent to={"/home"} icon={IoHome} text={"Home"} />
                    <NavComponent to={"/experience"} icon={MdOutlineWorkHistory} text={"Experience"} />
                    <NavComponent to={"/projects"} icon={GoProjectRoadmap} text={"Projects"} />
                    <NavComponent to={"/contact"} icon={MdContacts} text={"Contact"} />
                </ul>
            </nav>
            <div className="flex">

                <select id="theme-selector"
                    className="text-3xl"
                    value={theme.currentAccentColor}
                    onChange={(e) => { theme.changeAccentColor(e.target.value) }}>
                    {
                        accentColors.map((color) => {
                            return (
                                <option value={color} className={`${color} bg-primary`}>
                                    <FaCircle className="p-1 rounded-full" />
                                </option>
                            )
                        })
                    }
                </select>

                <div className="p-1 mx-auto my-auto text-3xl border-2 border-transparent rounded-full text-main hover:text-primary">
                    {
                        theme.currentThemeColor === darkTheme
                            ? <MdDarkMode onClick={() => theme.changeThemeColor(lightTheme)} />
                            : <MdLightMode onClick={() => theme.changeThemeColor(darkTheme)} />
                    }
                </div>
            </div>

        </header>
    )
}

export default Navbar