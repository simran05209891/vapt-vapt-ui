import { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import Loader from "./Loader";
import { useNavigate } from "react-router-dom";

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [msg, setMsg] = useState("Enter the both feilds");
    const [color, setColor] = useState("black");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();


    const handleLogin = (e) => {

         e.preventDefault();
        

        if (email === "") {

            setMsg("please enter email");
            setColor("red");
            return;
        }


        if(!email.includes("@") || !email.includes(".")) {

            setMsg("Please enter valid email");
            setColor("red");
            return;
        }

        if (password === "") {

            setMsg("Please enter password");
            setColor("red");
            return;
        }

        if (password.length<8) {

            setMsg("Password must be at least 8 characters");
            setColor("red");
            return;
        }

        setMsg("Login successful ✅ ");
        setColor("green");

         setLoading(true);
        

        setTimeout(() => {

            navigate("/employees");
           },3000);
        
    };


    return (

        <div className = "login-container">

            <form className="login-form">

                <h2>LogIn</h2>

                <input type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)} />

                {loading ? <Loader /> : <button type="button" onClick={handleLogin}>Login</button>}

                <p className="msg" style={{ color }}>{msg}</p>

                <p className="lastpara">
                    Don't have an account?Click <Link to="/"> Signup</Link>
                </p>


            </form>


        </div>

    );
}

export default Login;