//import React from "react"
import axios from "axios"
import React, { useEffect, useState } from "react"
//import { useNavigate, Link } from "react-router-dom"
import {useLocation, useNavigate, Link} from 'react-router-dom';

function Home (){
    const location=useLocation()
    const email = location.state.id
    const [age,setAge]=useState('')
    const [dob,setDob]=useState('')
    const [gender,setGender]=useState('')
    const [pno,setPno]=useState('')
    
    async function submit(e){
        e.preventDefault();
        
        try{
            //alert("1")
            await axios.post("http://localhost:8000/home",{
                email,age,dob,gender,pno
            })
            //alert("2")
            .then(res=>{
                if(res.data=="updated"){
                    alert("User dertails successfully updated!")
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

            <h1>Welcome to the homepage</h1>
            <h1>Update your details here!</h1>

            <form action="POST">
                <input type="email" value = {email} placeholder="Email"  /><br></br>
                <input type="age" onChange={(e) => { setAge(e.target.value) }} placeholder="Age" /><br></br>
                <input type="dob" onChange={(e) => { setDob(e.target.value) }} placeholder="dob" /><br></br>
                <input type="gender" onChange={(e) => { setGender(e.target.value) }} placeholder="Gender" /><br></br>
                <input type="pno" onChange={(e) => { setPno(e.target.value) }} placeholder="Mobile" /><br></br>
                
                
                <input type="submit" onClick={submit} />

            </form>
            <Link to="/">Log Out!</Link>

        </div>

        
    )
}

export default Home