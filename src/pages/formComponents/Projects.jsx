import React, { useState, useEffect } from 'react'
export default function Projects({ setProjectDetails }) {
    const [projectTitle, setProjectTitle] = useState("")
    const [projectDescription, setProjectDescription] = useState("")
    const [year, setYear] = useState(2024)
    const [githubLink, setGithubLink] = useState()
    const [liveLink, setLiveLink] = useState()

    useEffect(() => {
        setProjectDetails({
            projectTitle, projectDescription, year, githubLink, liveLink
        })
    }, [projectTitle, projectDescription, year, githubLink, liveLink])
    return (
        <fieldset class="mt-4">
            <legend>Projects</legend>
            <div className="row">
                <div class="form-group col-6">
                    <label for="project-title">Project Title</label>
                    <input type="text" class="form-control" id="project-title" onChange={(e) => { setProjectTitle(e.target.value) }} placeholder="Enter your project title" />
                </div>
                <div class="form-group col-6">
                    <label for="date">Date</label>
                    <input type="date" class="form-control" id="date" onChange={(e) => { setYear(e.target.value) }} placeholder="Date" />
                </div>
                <div class="form-group col-6">
                    <label for="project-description">Project Description</label>
                    <textarea class="form-control" id="project-description" rows="3" onChange={(e) => { setProjectDescription(e.target.value) }} placeholder="Enter your project description"></textarea>
                </div>
                <div class="form-group col-6">
                    <label for="project-github-link">Source code link</label>
                    <input type="text" class="form-control" id="project-github-link" onChange={(e) => { setGithubLink(e.target.value) }} placeholder="Github link" />
                </div>
                <div class="form-group col-6">
                    <label for="project-live-link">Live link</label>
                    <input type="text" class="form-control" id="project-live-link" onChange={(e) => { setLiveLink(e.target.value) }} placeholder="Live link" />
                </div>
            </div>
        </fieldset>
    )
}
