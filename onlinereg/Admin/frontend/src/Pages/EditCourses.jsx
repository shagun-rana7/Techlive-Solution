import React, { useEffect, useState } from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import Axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'

const EditCourses = () => {
  const[courses,setCours]=useState("")
        const navigate=useNavigate()
       const prms=useParams()
    
       useEffect(()=>{
        Axios.get(`http://localhost:5050/getcoursesId/${prms.id}`)
        .then(res=>{
         const coursData= res.data
            setCours(coursData.courses)        
        })
    },[])
    const handleSubmit = (e) => {   
      e.preventDefault()
          Axios.patch(`http://localhost:5050/updatecourses/${prms.id}`,{courses} )
      navigate("/courses")
  }
  return (
    <>
    <Header/>
    <div className="container my-5" style={{ width: "50%" }}>
                <h2 className="text-center mb-5 py-2">update Courses</h2>
                <form onSubmit={handleSubmit}>
                    <div className="my-3">
                        <input type="text" name="courses" className="form-control" onChange ={(e)=>setCours(e.target.value)}
                            placeholder=" cours" value={courses}/>
                    </div>
                    <div className="my-3">
                        <button type="submit" className="btn btn-success">update</button>
                        <button type="reset" className="btn btn-danger ms-3">Cancel</button>
                    </div>
                </form>
            </div>
    <Footer/>
    </>
  )
}

export default EditCourses
