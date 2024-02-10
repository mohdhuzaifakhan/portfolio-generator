import React, { useEffect, useState } from 'react';

const SkillsForm = ({ setSkillsDetails }) => {
    const [skills, setSkills] = useState([]);
    const [newSkill, setNewSkill] = useState('');

    const addSkill = () => {
        if (newSkill.trim() !== '') {
            setSkills([...skills, newSkill.trim()]);
            setNewSkill('');
        }
    };

    useEffect(() => {
        setSkillsDetails(skills)
    }, [skills])

    const removeSkill = (index) => {
        const updatedSkills = skills.filter((_, i) => i !== index);
        setSkills(updatedSkills);
    };

    return (
        <fieldset className='mt-4'>
            <legend>Skills</legend>
            <div className="row">
                <div className="col-12">
                    <ul className="list-group mt-1 mb-1">
                        {skills.map((skill, index) => (
                            <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                                {skill}
                                <button type="button" className="btn btn-danger btn-sm" onClick={() => removeSkill(index)}>Remove</button>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="col-12">
                    <label for="text">Enter a skill</label>
                    <input
                        id="text"
                        type="text"
                        className="form-control"
                        placeholder="Enter a skill"
                        value={newSkill}
                        onChange={(e) => setNewSkill(e.target.value)}
                    />
                    <button className="btn btn-primary mt-2 btn-sm" type='button' onClick={addSkill}>Add Skill</button>
                </div>
            </div>
        </fieldset>
    );
};

export default SkillsForm;
