import React, { useState } from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import Axios from'axios'
import { useNavigate } from 'react-router-dom'
const Login = () => {
    const[loginData,setLoginData]=useState({
        fullname:"",
        password:"",
    })
    const Navigate=useNavigate()
    const handleSubmit=(e)=>{
     e.preventDefault()
     Axios.post('http://localhost:5050/loginAdmin',loginData)
     .then((result)=>{
        console.log(result.data)

        if(result.data=='success')
        {
            Navigate("/welcome")
        }
        else{
            Navigate("/")
        }
     })
    }
    const handlechange=(e)=>{
        setLoginData((prevData)=>({
            ...prevData,[e.target.name]:e.target.value
        }))

    }
  return (
    <>
    <Header/>
    
    <div className='container mt-5'style={{"width":"50%"}}>
        <h2 className='text-center mb-5  py-2'>Admin Login</h2>
        <form onSubmit={handleSubmit}>
            <div className='my-3'>
                <input type="text" name="fullname" className='form-control' required onChange={handlechange} value={loginData.fullname}placeholder='fullname'/>
            </div>
            <div className='my-3'>
                <input type="text" name="password" className='form-control' required onChange={handlechange} value={loginData.password}placeholder='password'/>
            </div>
            <div className='my-3'>
                <button type='submit' className='btn btn-success'>login</button>
                <button type='reset' className='btn btn-danger ms-3'>cancel</button>
            </div>
            
        </form>
        
    </div>
    <Footer/>
    </>
  )
}



export default Login

