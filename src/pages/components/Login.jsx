import React, { useState } from 'react'
import { auth } from '../../firebase/initialize'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
function Login({ setLogin }) {
    // const [name, setName] = useState()
    const navigate = useNavigate()
    const [email, setEmail] = useState();
    const [password, setPassword] = useState()
    // const [Loginisloading, setLoginisLoading] = useState(false);
    const [Loginisloading, setLoginisLoading] = useState(false);
    const [helperTextForEmail, setHelperTextForEmail] = useState("");
    const [helperTextPassword, setHelperTextPassword] = useState("");
    const userInfo = JSON.parse(localStorage.getItem("user"))

    function login() {
        setLoginisLoading(true)
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const { user } = userCredential
                setEmail("");
                setPassword("")
                localStorage.setItem("user", JSON.stringify({ email: user.email, uid: user.uid }))
                navigate('/portfolio')
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setHelperTextForEmail("Email or password is wrong")
                setLoginisLoading(false);
            });
        setLoginisLoading(false);

    }

    return (
        <>
            <div id="login-form">
                <h2 class="text-center fs-2 mb-3">Login</h2>
                <form>
                    <div class="form-group">
                        <label for="login-email">Email address</label>
                        <input type="email" class="form-control" id="login-email" placeholder="Enter email" onChange={(e) => { setEmail(e.target.value) }} />
                        <div className='fs-6 text-danger px-1'>{helperTextForEmail}</div>
                    </div>
                    <div class="form-group">
                        <label for="login-password">Password</label>
                        <input type="password" class="form-control" id="login-password" placeholder="Password" onChange={(e) => { setPassword(e.target.value) }} />
                        <div className='fs-6 text-danger px-1'>{helperTextForEmail}</div>
                    </div>
                    {
                        !Loginisloading ? <input type="button" class="btn btn-primary btn-block" value="Login" onClick={() => { login() }} /> : <button class="btn btn-primary" type="button" disabled>
                            <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                            Loading...
                        </button>
                    }
                </form>
                <p class="mt-3 text-center">Don't have an account? <a href="#" onClick={() => { setLogin(false) }}>Sign up</a></p>
            </div>
        </>
    )
}

export default Login
