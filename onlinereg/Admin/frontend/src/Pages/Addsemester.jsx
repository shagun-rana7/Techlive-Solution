import React, { useState } from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import Axios from 'axios'
import { useNavigate } from 'react-router-dom'
const Addsemester = () => {
    const[semester,setsemester]=useState("")
  const Navigate=useNavigate()
  const handleSubmit=(e)=>{
    e.preventDefault()
     Axios.post('http://localhost:5050/createSemester',{semester})
     Navigate("/welcome")
  }
    
  return (
    <>
    <Header/>
    <Navbar/>
    <div className='container'style={{"width":"50%"}}>
        <h2 className='text-center mb-5  py-2'> Add Semester</h2>
        <form onSubmit={handleSubmit}>
            <div className='my-3'>
                <input type="text"
                 name=" Addsemester"
                  className='form-control'
                   onChange={(e)=>setsemester(e.target.value)} placeholder='Add Semester' />
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

export default Addsemester

