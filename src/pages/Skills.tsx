import { FaArrowRight, FaTools } from "react-icons/fa";
import { Chip } from "../common/Buttons";
import { HeadlineLarge } from "../common/Text";
import content from "../data";


const Skills = () => {
    const categories = ["Programming Language", "Framework", "Tools"]
    return (
        <div id="skills" className="w-[95%]">
            <HeadlineLarge text={"Skills"} Icon={FaTools} />
            <div>
                <ul>
                    {
                        categories.map((category) => {
                            return <li className="flex py-2">
                                <div className="flex items-start">
                                    <FaArrowRight className="mt-1 mr-2" />
                                </div>
                                <ul className="flex flex-wrap gap-1">
                                    {content.Skill.filter(skill => skill.Category.includes(category)).map((skill, skillIndex) => (
                                        <li key={skillIndex}>
                                            <Chip name={skill.Name} icon={skill.Icon} scale={0.75} />
                                        </li>
                                    ))}
                                </ul>
                            </li>

                        })}
                </ul>
            </div>
            {/* <div className="border rounded-lg border-main-6">
                <table>
                    <tbody>
                        {categories.map((category, index) => (
                            <tr key={index}>
                                <td className="px-1 py-1 align-top">{category}</td>
                                <td className="px-1 py-1">
                                    <ul className="flex flex-wrap gap-1">
                                        {content.Skill.filter(skill => skill.Category.includes(category)).map((skill, skillIndex) => (
                                            <li key={skillIndex}>
                                                <NormalButton name={skill.Name} icon={skill.Icon} scale={0.75} />
                                            </li>
                                        ))}
                                    </ul>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div> */}

            {/* <ul className="flex flex-wrap justify-center w-10/12 my-8">
                {content.Skill.map((skill) => {
                    return (
                        <li className="flex flex-col rounded-[50%]">
                            <NormalButton name={skill.Name} icon={skill.Icon} scale={1} />
                        </li>
                    )
                })
                }
            </ul> */}
        </div>
    )
}

export default Skills



// const [selected, setSelected] = useState<string[]>([]);
// const changeSelected = (marked: string) => {
//     setSelected(prev => {
//         return prev.includes(marked)
//             ? prev.filter(c => c != marked)
//             : [...prev, marked]
//     })
// }

{/* <div>
                <Chip
                    label="All"
                    isSelected={selected.length == 0}
                    onClick={() => { setSelected([]) }}
                />
                {categories.map((category) => <Chip
                    label={category}
                    isSelected={selected.includes(category)}
                    onClick={() => changeSelected(category)}
                />
                )}
            </div> */}