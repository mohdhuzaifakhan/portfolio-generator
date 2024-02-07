import React from 'react'

function PortfolioDetailForm() {
    return (
        <div>
            <div class="container-fluid">
                <div className="container mt-4 p-2"><h2 class="text-center mb-4 fs-2">Provide Your Details</h2></div>
                <form>
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <fieldset>
                                    <legend>Personal Information</legend>
                                    <div class="form-group">
                                        <label for="full-name">Full Name</label>
                                        <input type="text" class="form-control" id="full-name" placeholder="Enter your full name" required />
                                    </div>
                                    <div class="form-group">
                                        <label for="email">Email address</label>
                                        <input type="email" class="form-control" id="email" placeholder="Enter your email" required />
                                    </div>
                                    <div class="form-group">
                                        <label for="phone">Phone Number</label>
                                        <input type="tel" class="form-control" id="phone" placeholder="Enter your phone number" />
                                    </div>
                                </fieldset>
                            </div>
                            <div className="col">

                                <fieldset>
                                    <legend>Educational Qualifications</legend>
                                    <div class="form-group">
                                        <label for="education-degree">Degree</label>
                                        <input type="text" class="form-control" id="education-degree" placeholder="Enter your degree" required />
                                    </div>
                                    <div class="form-group">
                                        <label for="education-institution">Institution</label>
                                        <input type="text" class="form-control" id="education-institution" placeholder="Enter your institution" required />
                                    </div>
                                    <div class="form-group">
                                        <label for="education-year">Year of Graduation</label>
                                        <input type="text" class="form-control" id="education-year" placeholder="Enter your year of graduation" />
                                    </div>
                                </fieldset>

                            </div>
                        </div>
                    </div>

                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <fieldset class="mt-4">
                                    <legend>Experiences</legend>
                                    <div class="form-group">
                                        <label for="experience-title">Job Title</label>
                                        <input type="text" class="form-control" id="experience-title" placeholder="Enter your job title" />
                                    </div>
                                    <div class="form-group">
                                        <label for="experience-company">Company Name</label>
                                        <input type="text" class="form-control" id="experience-company" placeholder="Enter your company name" />
                                    </div>
                                    <div class="form-group">
                                        <label for="experience-description">Job Description</label>
                                        <textarea class="form-control" id="experience-description" rows="3" placeholder="Enter your job description"></textarea>
                                    </div>
                                </fieldset>

                            </div>
                            <div className="col">
                                <fieldset class="mt-4">
                                    <legend>Internships</legend>
                                    <div class="form-group">
                                        <label for="internship-title">Internship Title</label>
                                        <input type="text" class="form-control" id="internship-title" placeholder="Enter your internship title" />
                                    </div>
                                    <div class="form-group">
                                        <label for="internship-company">Company Name</label>
                                        <input type="text" class="form-control" id="internship-company" placeholder="Enter your internship company name" />
                                    </div>
                                    <div class="form-group">
                                        <label for="internship-description">Internship Description</label>
                                        <textarea class="form-control" id="internship-description" rows="3" placeholder="Enter your internship description"></textarea>
                                    </div>
                                </fieldset>

                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <fieldset class="mt-4">
                                    <legend>Projects</legend>
                                    <div class="form-group">
                                        <label for="project-title">Project Title</label>
                                        <input type="text" class="form-control" id="project-title" placeholder="Enter your project title" />
                                    </div>
                                    <div class="form-group">
                                        <label for="project-description">Project Description</label>
                                        <textarea class="form-control" id="project-description" rows="3" placeholder="Enter your project description"></textarea>
                                    </div>
                                </fieldset>
                            </div>
                            <div className="col">
                                <fieldset class="mt-4">
                                    <legend>Achievements</legend>
                                    <div class="form-group">
                                        <label for="achievement-title">Achievement Title</label>
                                        <input type="text" class="form-control" id="achievement-title" placeholder="Enter your achievement title" />
                                    </div>
                                    <div class="form-group">
                                        <label for="achievement-description">Achievement Description</label>
                                        <textarea class="form-control" id="achievement-description" rows="3" placeholder="Enter your achievement description"></textarea>
                                    </div>
                                </fieldset>
                            </div>
                        </div>
                    </div>

                    <div class="text-center mt-4 mb-4">
                        <button type="submit" class="btn btn-primary btn-sm">Generate Portfolio</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default PortfolioDetailForm
