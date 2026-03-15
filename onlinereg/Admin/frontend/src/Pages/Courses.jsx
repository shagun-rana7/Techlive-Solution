import React, { useEffect, useState } from 'react'
import Header from '../Components/Header'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import {useNavigate } from 'react-router-dom'
import Axios from 'axios'
import { NavLink } from 'react-router-dom'
const Courses = () => {
  const[courses,setcourses]= useState("")
  const Navigate=useNavigate()
  const [coursesData, setcoursesData] = useState([])

  useEffect(()=>{
    Axios.get('http://localhost:5050/courseget')
    .then(res=>{
       setcoursesData (res.data)
    }

    )
  },[coursesData])
  
  
  const handleSubmit=(e)=>{
    e.preventDefault()
    Axios.post('http://localhost:5050/createcourses',{courses})
    .then(() => {
      Navigate("/welcome")
   })
}
const deletedepartment=(id)=>{
  Axios.delete(`http://localhost:5050/deletecourses/${id}`)
}

  return (
    <>
    <Header/>
    <Navbar/>
    <div className="container" style={{ width: "50%" }}>
                <h2 className="text-center mb-5 py-2">Courses</h2>
                <form onSubmit={handleSubmit}>
                    <div className="my-3">
                        <input  type="text"name="courses"className="form-control"placeholder="courses"   onChange={(e)=>setcourses(e.target.value)}/>
                    </div>
                    <div className="my-3">
                        <button type="submit" className="btn btn-success">Submit</button>
                        <button type="reset" className="btn btn-danger ms-3">Cancel</button>
                </div>
                </form>
            </div>
             <table className="table  table-dark">
                <thead>
                    <tr >
                   <th>courses</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                {
                    coursesData.map((coursesItem)=>{
                        return(
                            <tr key={coursesItem._id}>
                                <td>{coursesItem.courses}</td>
                                <td><NavLink to={`/editCourses/${coursesItem._id}`} className="btn btn-info">Edit</NavLink></td>
                                <td><NavLink className="btn btn-danger" onClick={()=>deletedepartment(coursesItem._id)} >Delete</NavLink></td>     
                                    
                                </tr>
                        )
})
}
                
           </tbody>
            </table>
              
    
    <Footer/>
      
    </>
  )
}

export default Courses
