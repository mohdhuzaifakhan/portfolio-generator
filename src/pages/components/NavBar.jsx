import React, { useState } from 'react'
import { signOut } from "firebase/auth";
import { auth } from '../../firebase/initialize';
import { useNavigate } from 'react-router-dom';

function NavBar({ user, id }) {

    const navigate = useNavigate()
    function logout() {
        signOut(auth).then(() => {
            console.log("Logout successfully")
            navigate('/')
        }).catch((error) => {
            console.log('Some error during logout')
        });

    }

    function updateProfile() {
        navigate('/portfolio')
    }

    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <a class="navbar-brand" href="#intro">{user?.email}</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item active">
                            <a class="nav-link" href="#intro"> About <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#edu">Qualification</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#exp">Experience</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#pro">Projects</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#achiev">Achievements</a>
                        </li>
                        <li class="nav-item">
                            {user?.uid === id ? <button class="btn btn-primary btn-sm nav-link text-white shadow-sm"
                                onClick={() => {
                                updateProfile()
                            }}>Update Profile</button> : null}
                        </li>
                        <li class="nav-item">
                            {user?.uid === id ? <button class="btn btn-primary nav-link text-white btn-sm shadow-sm d-flex align-items-center ml-1"
                                onClick={() => {
                                    logout()
                                }}
                            >Logout</button> : null}
                        </li>
                    </ul>
                </div>
            </nav>

        </div>
    )
}

export default NavBar
