
import React from 'react'
import { ExperienceModel } from '../types/experience.model'


const Experience = ({ experience: ExperienceModel }) => {
    return (
        <div>
            <p>{experience.StartDate} - {experience.EndDate}</p>
        </div>
    )
}

export default Experience