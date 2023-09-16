import React,{useEffect} from 'react'
import axios from 'axios'

function DashBoard() {
  // const token = localStorage.getItem("token")
  useEffect(()=>{
    axios
          .get(`https://logandsign.onrender.com/api/category/Dashboard`)
          .then((res)=>{
            console.log(res.data)
          })
          .catch((error)=>{
            console.log(error)
          })
  })
  return (
    <div>
      <h1>DashBoard here.</h1>
    </div>
  )
}

export default DashBoard
