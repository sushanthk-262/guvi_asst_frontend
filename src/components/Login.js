import React, { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"


function Login() {
    const history=useNavigate();

    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [name,setName]=useState('')

    async function submit(e){
        e.preventDefault();

        try{

            await axios.post("http://localhost:8000/",{
                email,password
            })
            .then(res=>{
                if(res.data=="exist"){
                    history("/home",{state:{id:email}})
                }
                else if(res.data=="notexist"){
                    alert("Check your password or email")
                }
            })
            .catch(e=>{
                alert("wrong details")
                console.log(e);
            })

        }
        catch(e){
            console.log(e);

        }

    }


    return (
        
        <div className="login">

            <h1>Login</h1>

            <form action="POST">
                <input type="email" onChange={(e) => { setEmail(e.target.value) }} placeholder="Email"  /><br></br>
                <input type="password" onChange={(e) => { setPassword(e.target.value) }} placeholder="Password"  /><br></br>
                <input type="name" onChange={(e) => { setName(e.target.value) }} placeholder="Name"  /><br></br>
                <input type="submit" onClick={submit} />

            </form>

            <br />
            <p>OR</p>
            <br />

            <Link to="/signup">Signup Page</Link>

        </div>
    )
}

export default Login