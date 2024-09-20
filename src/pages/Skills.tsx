import { useState } from "react";
import { FaTools } from "react-icons/fa";
import { NormalIcon } from "../common/Icons";
import { HeadlineLarge } from "../common/Text";
import content from "../data";
import { Chip } from './../common/Chips';


const Skills = () => {
    const [selected, setSelected] = useState<string[]>([]);
    const changeSelected = (marked: string) => {
        setSelected(prev => {
            return prev.includes(marked)
                ? prev.filter(c => c != marked)
                : [...prev, marked]
        })
    }
    const categories = ["Frontend", "Backend", "Mobile", "Database", "DevOps", "Tools", "Programming Language", "Framework", "Scripting", "System Programming"]
    return (
        <div id="skills">
            <HeadlineLarge text={"Technologies"} Icon={FaTools} />
            <div>
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
            </div>
            <ul className="flex flex-wrap justify-center w-10/12 my-8">
                {content.Skill.map((skill) => {
                    if (selected.length > 0 && !skill.Category.some(category => selected.includes(category))) return null;
                    return (
                        <li className="flex flex-col justify-center rounded-[50%]">
                            <NormalIcon icon={skill.Icon} scale={2} />
                        </li>
                    )
                })
                }
            </ul>
        </div>
    )
}

export default Skills