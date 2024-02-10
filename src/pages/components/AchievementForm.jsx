import React, { useEffect, useState } from 'react';

const AchievementForm = ({ setAchievementDetails }) => {
    const [achievements, setAchievements] = useState([]);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [date, setDate] = useState("2024")

    useEffect(() => {
        setAchievementDetails(achievements)
    }, [achievements])

    const addAchievement = () => {
        if (title.trim() !== '' && description.trim() !== '') {
            const newAchievement = { title: title.trim(), description: description.trim(), date: date.trim() };
            setAchievements([...achievements, newAchievement]);
            setTitle('');
            setDescription('');
            setDate("")
        }
    };

    const removeAchievement = (index) => {
        const updatedAchievements = achievements.filter((_, i) => i !== index);
        setAchievements(updatedAchievements);
    };

    return (

        <fieldset className='mt-4'>
            <legend>Achievements</legend>
            <ul className="list-group mt-1">
                {achievements.map((achievement, index) => (
                    <li key={index} className="list-group-item">
                        <h5>{achievement.title}</h5>
                        <p>{achievement.description}</p>
                        <button type="button" className="btn btn-danger btn-sm" onClick={() => removeAchievement(index)}>Remove</button>
                    </li>
                ))}
            </ul>
            <div className="mt-3">
                <label for="text">Enter title</label>
                <input
                    id='text'
                    type="text"
                    className="form-control"
                    placeholder="Enter title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label for="date">Date</label>
                <input
                    id='date'
                    type="date"
                    className="form-control"
                    placeholder="Enter Date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                />
                <label for="description" className='mt-2 mb-0'>Enter description</label>
                <textarea
                    id='description'
                    className="form-control mt-2"
                    rows="3"
                    placeholder="Enter description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                ></textarea>
                <button className="btn btn-primary mt-2 btn-sm" type='button' onClick={addAchievement}>Add Achievement</button>
            </div>
        </fieldset>
    );
};

export default AchievementForm;
