import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../firebase/initialize'
function SignUp({ setLogin }) {
    const [name, setName] = useState()
    const navigate = useNavigate()
    const [email, setEmail] = useState();
    const [password, setPassword] = useState()
    // const [Loginisloading, setLoginisLoading] = useState(false);
    const [SignUpisloading, setSignUpisLoading] = useState(false);
    const [helperTextForEmail, setHelperTextForEmail] = useState("");
    const [helperTextPassword, setHelperTextPassword] = useState("");
    const userInfo = JSON.parse(localStorage.getItem("user"))
    function signUp() {
        setSignUpisLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
            .then((user) => {
                // console.log(user.user.email)
                // console.log(user.user.id)
                setEmail("");
                setPassword("")
                // setHelperTextForEmail("");
                // setHelperTextPassword("")
                localStorage.setItem("user", JSON.stringify({ email: user.user.email, uid: user.user.uid }))
                navigate('/user')
            })
            .catch((error) => {
                const errorCode = error.code;
                if (errorCode === "auth/email-already-in-use") {
                    setHelperTextForEmail("This Email is already exist")
                    setSignUpisLoading(false)
                } else if (errorCode === "auth/weak-password") {
                    setHelperTextPassword("Weak password, password should be atleast 6 characters")
                    setSignUpisLoading(false)
                }
            });
        setSignUpisLoading(false)
    }
    return (
        <>
            <div id="signup-form" style={{ display: 'inline' }}>
                <h2 class="text-center mb-3 fs-2">Sign Up</h2>
                <form>
                    {/* <div class="form-group">
                        <label for="signup-name">Full Name</label>
                        <input type="text" class="form-control" id="signup-name" placeholder="Enter your full name" onChange={(e)=>{setName(e.target.value)}} />
                    </div> */}
                    <div class="form-group">
                        <label for="signup-email">Email address</label>
                        <input type="email" class="form-control" id="signup-email" placeholder="Enter email" onChange={(e) => { setEmail(e.target.value) }} />
                        <div className='fs-6 text-danger px-1'>{helperTextForEmail}</div>
                    </div>
                    <div class="form-group">
                        <label for="signup-password">Password</label>
                        <input type="password" class="form-control" id="signup-password" placeholder="Password" onChange={(e) => { setPassword(e.target.value) }} />
                        <div className='fs-6 text-danger px-1'> {helperTextPassword}</div>
                    </div>
                    {
                        !SignUpisloading ? <input type="button" class="btn btn-primary btn-block" value="Sign Up" onClick={() => { signUp() }} /> : <button class="btn btn-primary" type="button" disabled>
                            <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                            Loading...
                        </button>
                    }
                </form>
                <p class="mt-3 text-center">Already have an account? <a href="#" onClick={() => { setLogin(true) }}>Login</a></p>
            </div>

        </>
    )
}

export default SignUp
