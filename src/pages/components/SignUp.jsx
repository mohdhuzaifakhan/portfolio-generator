import React from 'react'

function SignUp({ setLogin }) {
    return (
        <>
            <div id="signup-form" style={{ display: 'inline' }}>
                <h2 class="text-center mb-3 fs-2">Sign Up</h2>
                <form>
                    <div class="form-group">
                        <label for="signup-name">Full Name</label>
                        <input type="text" class="form-control" id="signup-name" placeholder="Enter your full name" />
                    </div>
                    <div class="form-group">
                        <label for="signup-email">Email address</label>
                        <input type="email" class="form-control" id="signup-email" placeholder="Enter email" />
                    </div>
                    <div class="form-group">
                        <label for="signup-password">Password</label>
                        <input type="password" class="form-control" id="signup-password" placeholder="Password" />
                    </div>
                    <button type="submit" class="btn btn-primary btn-block">Sign Up</button>
                </form>
                <p class="mt-3 text-center">Already have an account? <a href="#" onClick={() => { setLogin(true) }}>Login</a></p>
            </div>

        </>
    )
}

export default SignUp
