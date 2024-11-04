import { FaTools } from "react-icons/fa";
import { NormalButton } from "../common/Buttons";
import { HeadlineLarge } from "../common/Text";
import content from "../data";


const Skills = () => {
    // const [selected, setSelected] = useState<string[]>([]);
    // const changeSelected = (marked: string) => {
    //     setSelected(prev => {
    //         return prev.includes(marked)
    //             ? prev.filter(c => c != marked)
    //             : [...prev, marked]
    //     })
    // }
    // const categories = ["Frontend", "Backend", "Mobile", "Database", "DevOps", "Tools", "Programming Language", "Framework", "Scripting", "System Programming"]
    return (
        <div id="skills">
            <HeadlineLarge text={"Skills"} Icon={FaTools} />
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
            <ul className="flex flex-wrap justify-center w-10/12 my-8">
                {content.Skill.map((skill) => {
                    return (
                        <li className="flex flex-col rounded-[50%]">
                            <NormalButton name={skill.Name} icon={skill.Icon} scale={1} />
                        </li>
                    )
                })
                }
            </ul>
        </div>
    )
}

export default Skills