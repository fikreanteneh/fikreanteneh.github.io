import { MdDarkMode, MdLightMode } from "react-icons/md";
import UseTheme, { darkTheme, lightTheme, ThemeContextType } from "../ThemeProvider";






// type NavComponentType = {
//     to: string;
//     icon: IconType;
//     text: string;
// }

// const NavComponent: React.FC<NavComponentType> = (prop) => {
//     return (
//         <li className="px-1 rounded-md hover:bg-main-8">
//             <NavLink to={prop.to}>
//                 <prop.icon className="inline" />
//                 <span className="hidden pl-1 md:inline">{prop.text}</span>
//             </NavLink>
//         </li>
//     )
// }

const Navbar = () => {
    const theme = UseTheme() as ThemeContextType;
    return (
        <header className="fixed top-0 left-0 right-0 flex items-center justify-between px-6">
            <div className="">
                <h1 className="hidden text-3xl font-bold md:block">Fikremariam</h1>
            </div>
            <div className="">
                <div className="mx-auto my-auto text-2xl border-2 border-transparent rounded-full hover:bg-main-8">
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


{/* <nav className="font-medium">
                <ul className="flex items-center gap-3 text-md">
                    <NavComponent to={"/home"} icon={IoHome} text={"Profile"} />
                    <NavComponent to={"/skills"} icon={MdOutlineWorkHistory} text={"Skills"} />
                    <NavComponent to={"/education"} icon={MdOutlineWorkHistory} text={"Education"} />
                    <NavComponent to={"/experience"} icon={MdOutlineWorkHistory} text={"Experience"} />
                    <NavComponent to={"/projects"} icon={GoProjectRoadmap} text={"Projects"} />
                    <NavComponent to={"/contact"} icon={MdContacts} text={"Contact"} />
                </ul>
            </nav> */}

//TODO: Accent Color
{/* <select id="theme-selector"
                    className="text-3xl"
                    value={theme.currentAccentColor}
                    onChange={(e) => { theme.changeAccentColor(e.target.value) }}>
                    {
                        accentColors.map((color) => {
                            return (
                                <option value={color} className={`${color} bg-accent`}>
                                    <FaCircle className="p-1 rounded-full" />
                                </option>
                            )
                        })
                    }
                </select> */}