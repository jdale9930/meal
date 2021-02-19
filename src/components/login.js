import React, { useState } from "react";
import './Login.css';
import { useHistory } from "react-router-dom";

const Login = (props) => {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory;
    function login() {
        console.log(userName, password);
        if (userName.length > 3 && password.length > 3) {
          history.push("/search");
        }
      }
    return (
        <>
            <section>
            <h3>Enter your log-in information to plan your meals</h3>
                <div>
                    <label htmlFor="userName">User Name: </label>
                    <input
                        value={userName}
                        onChange= {(e)=> setUserName(e.target.value)}
                        type="text"
                        id="userName">
                    </input>
                    <label htmlFor="password">Password: </label>
                    <input
                        value={password}
                        onChange= {(e)=> setPassword(e.target.value)}
                        type="text"
                        id="password">
                    </input>
                <button onClick ={() => login()}>Submit</button>
                </div>
            </section>
        </>
    )
}
export default Login;
