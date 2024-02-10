import { useState, useEffect } from "react"

export default function Internships({ setInternshipDetails }) {
    const [internshipTitle, setInternshipTitle] = useState("")
    const [companyName, setCompanyName] = useState("")
    const [intershipDescription, setInternshipDescription] = useState("")
    const [year, setYear] = useState(2024)

    useEffect(() => {

        setInternshipDetails({
            internshipTitle, intershipDescription, companyName, year
        })

    }, [internshipTitle, intershipDescription, companyName, year])
    return (
        <fieldset class="mt-4">
            <legend>Internships</legend>
            <div className="row">
                <div class="form-group col-4">
                    <label for="internship-title">Internship Title</label>
                    <input type="text" class="form-control" id="internship-title" onChange={(e) => { setInternshipTitle(e.target.value) }} placeholder="Enter your internship title" />
                </div>
                <div class="form-group col-4">
                    <label for="internship-company">Company Name</label>
                    <input type="text" class="form-control" id="internship-company" onChange={(e) => { setCompanyName(e.target.value) }} placeholder="Enter your internship company name" />
                </div>
                <div class="form-group col-4">
                    <label for="internship-description">Internship Description</label>
                    <textarea class="form-control" id="internship-description" rows="3" onChange={(e) => { setInternshipDescription(e.target.value) }} placeholder="Enter your internship description"></textarea>
                </div>
                <div class="form-group col-4">
                    <label for="year">Year</label>
                    <input type="date" class="form-control" id="year" onChange={(e) => { setYear(e.target.value) }} placeholder="Year" />
                </div>
            </div>
        </fieldset>
    )
}
