import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import { useState } from 'react'
import Axios from 'axios'
import Navbar from '../Components/Navbar'

const ChangePassword = () => {
const[adminPassword,setAdminPassword]=useState({
      oldPassword:"", 
      newPassword:"" ,

    })
  const handleSubmit=(e)=>{
  

  }
  const handleChange=(e)=>{
    setadminPassword((prev)=>({
      ...prev,[e.target.name]:e.target.value
    })
    )
    
    
  }
  return (
    <>
    <Header/>
    <Navbar/>
    <div className='container mt-5'style={{"width":"50%"}}>
        <h2 className='text-center mb-5  py-2'>Change password</h2>
        <form onSubmit={handleSubmit}>
            <div className='my-3'>
                <input type="text" name="old_password" className='form-control' required onChange={handleChange} value={adminPassword.oldpass} placeholder='old_password'/>
            </div>
            <div className='my-3'>
                <input type="text" name="new_password" className='form-control' required onChange={handleChange} value={adminPassword.oldpass} placeholder='new_password'/>
            </div>
            <div className='my-3'>
                <input type="text" name="confirm_password" className='form-control' required onChange={handleChange} placeholder='confirm_password'/>
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

export default ChangePassword

