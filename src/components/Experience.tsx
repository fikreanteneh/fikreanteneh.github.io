
import React from 'react'

const Experience = (props) => {
    const experience: ExperienceModel = props.experience
    return (
        <div>
            <p>{experience.StartDate} - {experience.EndDate}</p>
            <div>
                <img src={experience.Image} alt={experience.Company} />
            </div>
            <h3>{experience.Company}</h3>
            <h4>{experience.Title}</h4>
        </div>
    )
}

export default Experience