import React, { useEffect } from 'react'
import { useState } from 'react';
import SkillsForm from './SkillsForm';
import AchievementForm from './AchievementForm';
import { collection, addDoc, setDoc, doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from '../../firebase/initialize';
import AddQualification from '../formComponents/AddQualification';
import Expriences from '../formComponents/Expriences';
import Internships from '../formComponents/Internships'
import Projects from '../formComponents/Projects'
import { useNavigate } from 'react-router-dom';


function PortfolioDetailForm() {
    const navigate = useNavigate()
    const [projectsDetail, setProjectDetails] = useState({})
    const [exprienceDetail, setExprienceDetails] = useState({})
    const [qualificationDetail, setQualificationDetails] = useState({})
    // console.log(exprienceDetail)
    const [skills, setSkillsDetails] = useState([])
    const [internshipDetails, setInternshipDetails] = useState({})
    const [achievementDetails, setAchievementDetails] = useState([])
    // console.log(achievementDetails)
    // console.log(skills)
    const [aboutUser, setAbout] = useState("Web developer")
    const [name, setName] = useState()
    const [emailId, setEmailId] = useState()
    const [phone, setPhone] = useState()
    const [githubLink, setGithhubLink] = useState()
    const [linkedin, setLinkedInLink] = useState()
    const [otherLinks, setOtherLinks] = useState()
    const { email, uid } = JSON.parse(localStorage.getItem("user"));
    const [sections, setSections] = useState([<AddQualification setQualificationDetails={setQualificationDetails} key={0} />]);
    const [exprience, setExprience] = useState([<Expriences setExprienceDetails={setExprienceDetails} key={0} />]);
    const [internship, setIntership] = useState([<Internships setInternshipDetails={setInternshipDetails} key={0} />]);
    const [project, setProject] = useState([<Projects setProjectDetails={setProjectDetails} key={0} />]);
    const addSection = () => {
        const newSections = [...sections, <AddQualification setQualificationDetails={setQualificationDetails} key={sections.length} />];
        setSections(newSections);
    };
    const addProject = () => {
        const newProjects = [...project, <Projects setProjectDetails={setProjectDetails} key={project.length} />];
        setProject(newProjects);
    };
    const addExprience = () => {
        const newExprience = [...exprience, <Expriences setExprienceDetails={setExprienceDetails} key={exprience.length} />];
        setExprience(newExprience);
    };
    const addIntership = () => {
        const newInternship = [...internship, <Internships setInternshipDetails={setInternshipDetails} key={internship.length} />];
        setIntership(newInternship);
    };
    const deleteSection = () => {
        if (sections.length > 1) {
            sections.pop()
            setSections([...sections])
        }
    }
    const deleteExprience = () => {
        if (exprience.length > 1) {
            exprience.pop()
            setExprience([...exprience])
        }
    }
    const deleteIntership = () => {
        if (internship.length > 1) {
            internship.pop()
            setIntership([...internship])
        }
    }
    const deleteProject = () => {
        if (project.length > 1) {
            project.pop()
            setProject([...project])
        }
    }

    async function addUserData() {
        const userDocRef = doc(db, "users", uid);
        await setDoc(userDocRef, {
            "Personal_Info": {
                name, phone, emailId, githubLink, linkedin, otherLinks, aboutUser
            },
            "Projects": projectsDetail,
            "Qualifications": qualificationDetail,
            "Expriences": exprienceDetail,
            "Internships": internshipDetails,
            "Skills": skills,
            "Achievements": achievementDetails
        })
        console.log("Data saved succeffully")
        navigate('/user')
    }


    return (
        <div className='bg-white'>
            <div class="container-fluid bg-white">
                <div className="container mt-4 p-2"><h2 class="text-center mb-4 fs-2">Provide Your Details</h2></div>
                <form>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-10">
                                <fieldset>
                                    <legend>Personal Information</legend>
                                    <div className="row">
                                        <div class="form-group col-4">
                                            <label for="full-name">Full Name</label>
                                            <input type="text" class="form-control" id="full-name" onChange={(e) => { setName(e.target.value) }} placeholder="Enter your full name" required />
                                        </div>
                                        <div class="form-group col-4">
                                            <label for="email">Email address</label>
                                            <input type="email" class="form-control" id="email" onChange={(e) => { setEmailId(e.target.value) }} placeholder="Enter your email" required />
                                        </div>
                                        <div class="form-group col-4">
                                            <label for="phone">Phone Number</label>
                                            <input type="tel" class="form-control" id="phone" onChange={(e) => { setPhone(e.target.value) }} placeholder="Enter your phone number" />
                                        </div>
                                        <div class="form-group col-4">
                                            <label for="about_yourself">Describe yourself</label>
                                            <input type="text" class="form-control" id="about_yourself" onChange={(e) => { setAbout(e.target.value) }} placeholder="Describe yourself" />
                                        </div>
                                        <div class="form-group col-4">
                                            <label for="github">Github Url</label>
                                            <input type="tel" class="form-control" id="github" onChange={(e) => { setGithhubLink(e.target.value) }} placeholder="Enter your github url" />
                                        </div>
                                        <div class="form-group col-4">
                                            <label for="linkedin">LinkedIn Url</label>
                                            <input type="tel" class="form-control" id="linkedin" onChange={(e) => { setLinkedInLink(e.target.value) }} placeholder="Enter your linkedin url" />
                                        </div>
                                        <div class="form-group col-4">
                                            <label for="other scial media link">Other link</label>
                                            <input type="tel" class="form-control" id="other scial media link" onChange={(e) => { setOtherLinks(e.target.value) }} placeholder="Enter your other link" />
                                        </div>
                                    </div>
                                </fieldset>
                            </div>
                            {/* <AddQualification /> */}

                            <div className="col-10">
                                {sections}
                                <div className="row justify-content-end">
                                    <div className="col-3 d-flex justify-content-end">
                                        <button type='button' className='btn mr-1 btn-danger btn-sm' onClick={deleteSection}>Delete</button>
                                        <button type='button' className='btn btn-primary btn-sm' onClick={addSection}>Add degree</button>
                                    </div>
                                </div>
                            </div>
                            {/* < button className="btn btn-primary" onClick={addSection}>Add Section</button> */}
                        </div>
                    </div>

                    <div className="container">
                        <div className="row justify-content-center">
                            {/* <div className="col-10">
                                <Expriences />
                            </div> */}
                            <div className="col-10">
                                {exprience}
                                <div className="row justify-content-end">
                                    <div className="col-3 d-flex justify-content-end">
                                        <button type='button' className='btn mr-1 btn-danger btn-sm' onClick={deleteExprience}>Delete</button>
                                        <button type='button' className='btn btn-primary btn-sm' onClick={addExprience}>Add exprience</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-10">
                                {internship}
                                <div className="row justify-content-end">
                                    <div className="col-3 d-flex justify-content-end">
                                        <button type='button' className='btn mr-1 btn-danger btn-sm' onClick={deleteIntership}>Delete</button>
                                        <button type='button' className='btn btn-primary btn-sm' onClick={addIntership}>Add intership</button>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-10">
                                {/* <Projects /> */}
                                {project}
                                <div className="row justify-content-end">
                                    <div className="col-3 d-flex justify-content-end">
                                        <button type='button' className='btn mr-1 btn-danger btn-sm' onClick={deleteProject}>Delete</button>
                                        <button type='button' className='btn btn-primary btn-sm' onClick={addProject}>Add project</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-10">
                                <SkillsForm setSkillsDetails={setSkillsDetails} />
                            </div>
                            <div className="col-10">
                                {/* <fieldset class="mt-4">
                                    <legend>Achievements</legend>
                                    <div class="form-group">
                                        <label for="achievement-title">Achievement Title</label>
                                        <input type="text" class="form-control" id="achievement-title" placeholder="Enter your achievement title" />
                                    </div>
                                    <div class="form-group">
                                        <label for="achievement-description">Achievement Description</label>
                                        <textarea class="form-control" id="achievement-description" rows="3" placeholder="Enter your achievement description"></textarea>
                                    </div>
                                </fieldset> */}
                                <AchievementForm setAchievementDetails={setAchievementDetails} />
                            </div>
                        </div>
                    </div>

                    <div class="text-center mt-4 mb-4">
                        <button type="button" class="btn btn-primary btn-sm" onClick={() => { addUserData() }}>Generate Portfolio</button>
                        <button type="button" class="btn btn-primary btn-sm ml-1"><a href="/user" className='text-white text-decoration-none'> Go to Portfolio</a></button>
                    </div>
                    {/* <div class="text-center mt-4 mb-4">
                        <button type="button" class="btn btn-primary btn-sm"><a href="/user" className='text-white text-decoration-none'> Go to Portfolio</a></button>
                    </div> */}
                </form>
            </div>
        </div>
    )
}

export default PortfolioDetailForm
