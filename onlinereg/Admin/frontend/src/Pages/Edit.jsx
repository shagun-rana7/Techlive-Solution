import React, { useState,useEffect } from 'react'
import Header from '../Components/Header'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { useNavigate, useParams } from 'react-router-dom'
import Axios from 'axios'

const Edit = () => {
const [course, setCourse] = useState('');
const [regno, setRegno] = useState('');
const[fullname,setFullname]=useState("")
const [department, setDepartment] = useState('');
    
const [coursesData, setCourseData] = useState([]);
const [deptData, setDeptData] = useState([]);
      
    
       const navigate=useNavigate()
       const prms=useParams()
       useEffect(()=>{
        Axios.get(`http://localhost:5050/getregId/${prms.id}`)
        .then(res=>{
         const editData= res.data
         setCourse(editData.course) 
         setRegno(editData.regno) 
         setFullname(editData.fullname)
         setDepartment(editData.department)

        })
        Axios.get('http://localhost:5050/getdepartment')
      .then(res => {
        setDeptData(res.data)
      })
      Axios.get('http://localhost:5050/courseget')
      .then(res => {
        setCourseData(res.data)
      })
    },[prms])

    const handleSubmit=(e)=>{
        e.preventDefault()
        Axios.patch(`http://localhost:5050/updateData/${prms.id}`,{
            regno,
            fullname,
            course,
            department,
        
        })
        .then((response)=>{
          console.log(response.data)  
        })
.catch((error)=>{
    console.log(error)
})
navigate("/manage")
    }
    
  return (
    <>
    <Header/>
    <Navbar/>
    <div className='container'style={{"width":"50%"}}>
        <h2 className='text-center mb-5  py-2'> Edit</h2>
        <form onSubmit={handleSubmit}>
            <div className='my-3'>
                <input type="text" name="regno" className='form-control' value={regno} onChange={(e)=>setRegno(e.target.value)} placeholder='regno' />   
            </div>
            <div className='my-3'>
            <input type="text" name=" Full Name" className='form-control' value={fullname} onChange={(e)=>setFullname(e.target.value)} placeholder='Full Name' />
            </div>
            <div className="my-3">
            <label className='form-label'>Select Department</label>
            <select name='department' className='form-select' value={department} onChange={(e) => setDepartment(e.target.value)}>
            <option value='/'>Select Department</option>
              {deptData.map(dept => (
                <option value={dept.department} key={dept._id}>{dept.department}</option>
              ))}
            </select>
          </div>
          <div className="my-3">
            <label className='form-label'>Select Course</label>
            <select name='course' className='form-select'  value={course}onChange={(e) => setCourse(e.target.value)}>
            <option value=''>Select Course</option>
              {coursesData.map(courses => (
                <option value={courses.courses} key={courses._id}>{courses.courses}</option>
              ))}
            </select>
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

export default Edit


