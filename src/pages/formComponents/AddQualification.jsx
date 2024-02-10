import { useState, useEffect } from "react"



export default function AddQualification({ setQualificationDetails }) {
    const [collegeName, setCollegeName] = useState("")
    const [degree, setDegree] = useState("")
    const [year, setYear] = useState(2024)

    useEffect(() => {
        setQualificationDetails({ collegeName, degree, year })
    }, [collegeName, degree, year])

    return (
        // <div className="col-10">

        <fieldset>
            <legend>Educational Qualifications</legend>
            <div className="row">
                <div class="form-group col-4">
                    <label for="education-degree">Degree</label>
                    <input type="text" class="form-control" id="education-degree" placeholder="Enter your degree" required onChange={(e) => { setDegree(e.target.value) }} />
                </div>
                <div class="form-group col-4">
                    <label for="education-institution">Institution</label>
                    <input type="text" class="form-control" id="education-institution" placeholder="Enter your institution" required onChange={(e) => { setCollegeName(e.target.value) }} />
                </div>
                <div class="form-group col-4">
                    <label for="education-year">Year of Graduation</label>
                    <input type="date" class="form-control" id="education-year" placeholder="Enter your year of graduation" onChange={(e) => { setYear(e.target.value) }} />
                </div>
            </div>
        </fieldset>

        // </div>
    )
}
