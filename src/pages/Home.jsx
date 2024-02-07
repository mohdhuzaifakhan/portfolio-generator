
import { useState } from "react"
import Login from "./components/Login"
import SignUp from "./components/SignUp"
export default function Home() {
    const [isLogin, setLogin] = useState(true)
    return (

        <>
            <div className="container-fluid vh-100 justify-content-center align-items-center">
                <div className="home-container mt-4 p-1">
                    <h2 class="text-center mt-4 fs-2 fst-normal">Welcome to Portfolio Generator</h2>
                </div>
                <div class="home-container mt-0">
                    {
                        isLogin ? <Login setLogin={setLogin} /> : <SignUp setLogin={setLogin} />
                    }
                </div>
            </div>
        </>
    )
}
