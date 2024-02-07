import React from 'react'
import NavBar from './components/NavBar'
import { FaCoffee, FaUser, faLinkedin, faGithub, faTwitter, FaEnvelope, FaPhone } from 'react-icons/fa';


function UserPortfolio() {
    return (
        <div>
            <NavBar />
            <div class="container-fluid bg-white">
                <div class="container m-auto d-flex justify-content-center p-4">
                    <div class="card border-0 mb-3">
                        <div class="row g-0">
                            <div class="col-md-4 col p-4 m-auto d-flex justify-content-end">
                                <img src="data:image/jpeg;base64,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" class="img-fluid rounded-circle shadow-sm" alt="..." />
                            </div>
                            <div class="col-md-8 col d-flex align-items-center">
                                <div class="card-body">
                                    <h5 class="card-title">User Name</h5>
                                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div class="card border-0">
                                <div class="card-body">
                                    <h5 class="card-title">Personal Information</h5>
                                    <ul class="list-group list-group-flush">
                                        <li class="list-group-item">
                                            <strong className='mr-1'><FaEnvelope /></strong> example@example.com
                                        </li>
                                        <li class="list-group-item">
                                            <strong className='mr-1'><FaPhone /></strong> +1234567890
                                        </li>
                                        <li class="list-group-item">
                                            <div className="row">
                                                <div className="col"><a href="#">Github</a></div>
                                                <div className="col"><a href="#">Twitter</a></div>
                                                <div className="col"><a href="#">LinkedIn</a></div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div class="card border-0">
                                <div class="card-body">
                                    <h5 class="card-title">Qualification</h5>
                                    <ul class="list-group list-group-flush">
                                        <li class="list-group-item">
                                            <strong className='mr-1'>Degree:</strong> example@example.com
                                        </li>
                                        <li class="list-group-item">
                                            <strong className='mr-1'>Specialization:</strong> Computer science and Engineering
                                        </li>
                                        <li class="list-group-item">
                                            <strong className='mr-1'>Passing year:</strong> 2024
                                        </li>
                                        <li class="list-group-item">
                                            <strong className='mr-1'>College name:</strong> Zakir hussain college of engineering and Technology(Aligarh)
                                        </li>
                                        <li class="list-group-item">
                                            <strong className='mr-1'>Location:</strong> Aligarh
                                        </li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div class="card border-0">
                                <div class="card-body">
                                    <h5 class="card-title">Experience</h5>
                                    <ul class="list-group list-group-flush">
                                        <li class="list-group-item">
                                            <strong className='mr-1'>Company Name:</strong> example@example.com
                                        </li>
                                        <li class="list-group-item">
                                            <strong className='mr-1'>Description:</strong> Computer science and Engineering
                                        </li>
                                        <li class="list-group-item">
                                            <strong className='mr-1'>Year</strong> 2024
                                        </li>
                                        <li class="list-group-item">
                                            <strong className='mr-1'>Location:</strong> Aligarh
                                        </li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                        <div className="col">
                            <div class="card border-0">
                                <div class="card-body">
                                    <h5 class="card-title">Projects</h5>
                                    <ul class="list-group list-group-flush">
                                        <li class="list-group-item">
                                            <strong className='mr-1'>Project Name:</strong> example@example.com
                                        </li>
                                        <li class="list-group-item">
                                            <strong className='mr-1'>Description:</strong> Computer science and Engineering
                                        </li>
                                        <li class="list-group-item">
                                            <strong className='mr-1'>Technology Used</strong> 2024
                                        </li>
                                        <li class="list-group-item">
                                            <strong className='mr-1'>Year:</strong> Aligarh
                                        </li>
                                        <li class="list-group-item">
                                            <strong className='mr-1'>Source Code:</strong> github.com
                                        </li>
                                        <li class="list-group-item">
                                            <strong className='mr-1'>Live Link:</strong> github.com
                                        </li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>


        </div>


    )
}

export default UserPortfolio
