import { IconType } from "react-icons";
import { GoProjectRoadmap } from "react-icons/go";
import { IoHome } from "react-icons/io5";
import { MdContacts, MdDarkMode, MdLightMode, MdOutlineWorkHistory } from "react-icons/md";
import { NavLink } from "react-router-dom";
import UseTheme, { darkTheme, lightTheme, ThemeContextType } from "../ThemeProvider";






type NavComponentType = {
    to: string;
    icon: IconType;
    text: string;
}

const NavComponent: React.FC<NavComponentType> = (prop) => {
    return (
        <li className="px-1 rounded-md hover:bg-hover">
            <NavLink to={prop.to}>
                <prop.icon className="inline" />
                <span className="hidden pl-1 md:inline">{prop.text}</span>
            </NavLink>
        </li>
    )
}

const Navbar = () => {
    const theme = UseTheme() as ThemeContextType;
    return (
        <header className="flex items-center justify-between">

            <div className="">
                <h1 className="hidden text-3xl font-bold md:block">Fikremariam</h1>
            </div>

            {/* TODO: Truly Middling This */}
            <nav className="font-medium">
                {/* TODO: Link TO Id instead routes and Fix Icons */}
                <ul className="flex items-center gap-3 text-md">
                    <NavComponent to={"/home"} icon={IoHome} text={"Profile"} />
                    <NavComponent to={"/skills"} icon={MdOutlineWorkHistory} text={"Skills"} />
                    <NavComponent to={"/education"} icon={MdOutlineWorkHistory} text={"Education"} />
                    <NavComponent to={"/experience"} icon={MdOutlineWorkHistory} text={"Experience"} />
                    <NavComponent to={"/projects"} icon={GoProjectRoadmap} text={"Projects"} />
                    <NavComponent to={"/contact"} icon={MdContacts} text={"Contact"} />
                </ul>
            </nav>

            <div className="">
                <div className="mx-auto my-auto text-2xl border-2 border-transparent rounded-full hover:bg-hover">
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


//TODO: Accent Color
{/* <select id="theme-selector"
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
                </select> */}