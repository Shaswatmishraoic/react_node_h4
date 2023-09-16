import React,{useState} from 'react'
import axios from "axios"
import { Link } from 'react-router-dom'
import "./Register.css"

function Register() {
    const [inputs,setInputs] = useState({
        name:"",
        contact:"",
        email:"",
        password:""
    });

    const[serverRes,setServerRes] = useState();
    const changeHandle = (e) =>{
        const name = e.target.name;
        const value = e.target.value;
        setInputs({...inputs,[name]:value})
    }
    const submitform = (e) =>{
        e.preventDefault()
        console.log(inputs)
    axios 
            .post(`https://logandsign.onrender.com/api/category/register`, inputs)
            .then((res) =>{
                console.log(res.data)
                setServerRes(res.data)
            })
            .catch((error)=>{
                console.log(error)
            })
    }
  return (
    <>
    <div className='fine-reg'>
      <div className='message-for-reg'>
        <p>Welcome</p>
        <p>All ready have an account?</p>
        <Link to="/login">Go to Login page</Link>
      </div>
      <form className='formdesign'>
      <h3 className='head'>Register Form</h3>
        <div className='name'>
        <label htmlFor='name'>Name:</label>
        <input type="text" id="name" name="name" onChange={changeHandle} placeholder="Enter Name" required/>
        </div>
        <div className='phone'>
        <label htmlFor='phone'>Phone no:</label>
        <input type="tel" id="phone" name="phone" onChange={changeHandle} placeholder="Enter Number" maxlangth="10" required/>
        </div>
        <div className='email'>
        <label htmlFor='email'>Email:</label>
        <input type="email" id="email" name="email" onChange={changeHandle} placeholder="Enter e-mail" required/>
        </div>
        <div className='password'>
        <label htmlFor='password'>Password:</label>
        <input type="password" id="password" name="password" onChange={changeHandle} placeholder="Enter Password" required/>
        </div>
        <button onClick={submitform} className='buttonregister'>Register</button>
        {serverRes === undefined ? "":<div>{serverRes.msg}</div>}
      </form>
    </div>
    </>
  )
}

export default Register