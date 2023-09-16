import React,{useState,useEffect} from 'react'
import axios from "axios"
import { Link, useNavigate } from 'react-router-dom'
import "./Login.css"

function Login() {
  const navigate = useNavigate()
  const [inputs,setInputs] = useState({
    email:"",
    password:""
  })
  const [serverRes,setServerRes] = useState();
    const changeHandle = (e) =>{
      const name = e.target.name
      const value = e.target.value
      setInputs({...inputs,[name]:value})
    }
    const submitForm = (e) =>{
      e.preventDefault()
      console.log(inputs)

      axios
      .post(`http://localhost:5000/api/category/login`, inputs)
      .then((res) =>{
        console.log(res.data)
        setServerRes(res.data)
    })
      .catch((error)=>{
        console.log(error)
    })
    }
  useEffect(() =>{
    if(serverRes){
      localStorage.setItem("token",serverRes.token)
      if(serverRes.msg === "User is login continue"){
        navigate("/dashboad")
      }
    }
  },[serverRes,navigate])
  return (
    <div className='page_login'>
      <div className='message-for-log'>
        <p className='welcome'>Welcome</p>
        <p>If you haven't register yet.</p>
        <Link to="/register">Register here</Link>
      </div>
      <form className='formdesign2'>
        <div className='email2'>
        <label htmlFor='email'>Email:</label>
        <input type="email" id="email" name="email" onChange={changeHandle} placeholder="Enter e-mail" required/>
        </div>
        <div className='password2'>
        <label htmlFor='password'>Password:</label>
        <input type="password" id="password" name="password" onChange={changeHandle} placeholder="Enter Password" required/>
        </div>
        <button onClick={submitForm} className='buttonlogin'>Login</button>
        {serverRes === undefined ? "":<div>{serverRes.mes}</div>}
      </form>
    </div>
  )
}

export default Login
