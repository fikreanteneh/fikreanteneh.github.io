import content from "../data"


const Skills = () => {
    const categories = ["All", "Frontend", "Backend", "Mobile", "Database", "DevOps", "Tools", "Programming Language", "Framework", "Scripting", "System Programming"]
    return (
        <div>
            <div className="flex flex-col items-center justify-center min-h-screen">
                <div>
                    <h1 className="text-3xl font-bold">Technologies</h1>
                    <select className="p-2 mt-4 border rounded">
                        {categories.map((category) => (
                            <option key={category} value={category}>
                                {category}
                            </option>
                        ))}
                    </select>
                </div>
                <ul className="flex flex-wrap justify-center w-10/12 my-8">
                    {
                        content.Skill.map((skill) => {
                            return (
                                <li className="flex flex-col items-center justify-center m-2">
                                    <div className="p-1 w-12 h-12 rounded-[50%] bg-white">
                                        <img className="" src={skill.Icon} alt={skill.Name} />
                                    </div>
                                    {/* <p className="mt-2 text-sm font-semibold text-center">{skill.Name}</p> */}
                                    {/* TODO: On Hover */}
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
}

export default Skills