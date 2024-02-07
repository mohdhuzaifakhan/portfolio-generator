import React from 'react'

function Login({ setLogin }) {
    return (
        <>
            <div id="login-form">
                <h2 class="text-center fs-2 mb-3">Login</h2>
                <form>
                    <div class="form-group">
                        <label for="login-email">Email address</label>
                        <input type="email" class="form-control" id="login-email" placeholder="Enter email" />
                    </div>
                    <div class="form-group">
                        <label for="login-password">Password</label>
                        <input type="password" class="form-control" id="login-password" placeholder="Password" />
                    </div>
                    <button type="submit" class="btn btn-primary btn-block">Login</button>
                </form>
                <p class="mt-3 text-center">Don't have an account? <a href="#" onClick={() => { setLogin(false) }}>Sign up</a></p>
            </div>
        </>
    )
}

export default Login
