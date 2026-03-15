import React, { useEffect, useState } from 'react'
import Header from '../Components/Header'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Axios  from 'axios'
import { NavLink } from 'react-router-dom'
const manage = () => {
   const[Students,setStudents]=useState([])
    useEffect(()=>{
        Axios.get("http://localhost:5050/getReg").then((response)=>{
            setStudents(response.data)
        })
    },[Students])
    const deleteregistration=(id)=>{
        Axios.delete(`http://localhost:5050/deleteregistration/${id}`)
      }
  return (
    <>
    <Header/>
    <Navbar/>
    <table className="table  table-dark">
                <thead>
                    <tr >
                    
                        <th>Registration</th>
                        <th>Full Name</th>
                        <th>course</th>
                        <th>Department</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                      {
                        Students.map((data)=>(
                            <tr key={data._id}>
                                <td>{data.regno}</td>
                                <td>{data.fullname}</td>
                                <td>{data.course}</td>
                                <td>{data.department}</td>
                              <td><NavLink to={`/edit/${data._id}`}>edit</NavLink>  </td>
                              <td><NavLink className="btn-btn-danger" onClick={()=>deleteregistration(data._id)} >Delete</NavLink></td>
                                

                            </tr>
                        ))
                      }             
                </tbody>
             </table>
      <Footer/>
    </>
  )
}

export default manage

