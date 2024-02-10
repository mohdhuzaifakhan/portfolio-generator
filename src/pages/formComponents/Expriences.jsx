import { useState, useEffect } from "react"

export default function Expriences({ setExprienceDetails }) {
    const [jobTitle, setJobTitle] = useState("")
    const [companyName, setCompanyName] = useState("")
    const [jobDescription, setJobDescription] = useState("")
    const [year, setYear] = useState("present")

    useEffect(() => {
        setExprienceDetails({
            jobTitle, companyName, jobDescription, year
        })
    }, [jobDescription, jobTitle, companyName, year])
    return (
        <fieldset class="mt-4">
            <legend>Experiences</legend>
            <div className="row">
                <div class="form-group col-4">
                    <label for="experience-title">Job Title</label>
                    <input type="text" class="form-control" id="experience-title" placeholder="Enter your job title" onChange={(e) => { setJobTitle(e.target.value) }} />
                </div>
                <div class="form-group col-4">
                    <label for="experience-company">Company Name</label>
                    <input type="text" class="form-control" id="experience-company" onChange={(e) => { setCompanyName(e.target.value) }} placeholder="Enter your company name" />
                </div>
                <div class="form-group col-4">
                    <label for="experience-description">Job Description</label>
                    <textarea class="form-control" id="experience-description" rows="3" onChange={(e) => { setJobDescription(e.target.value) }} placeholder="Enter your job description"></textarea>
                </div>
                <div class="form-group col-4">
                    <label for="date">Year</label>
                    <input type="date" class="form-control" id="date" onChange={(e) => { setYear(e.target.value) }} placeholder="year"></input>
                </div>
            </div>
        </fieldset>

    )
}
