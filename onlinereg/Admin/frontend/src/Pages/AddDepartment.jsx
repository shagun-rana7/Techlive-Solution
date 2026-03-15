import React, { useEffect, useState } from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import Axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

const AddDepartment = () => {
    const [department, setDepartment] = useState("")
    const navigate = useNavigate();
    const [deptData, setDeptData] = useState([])

    useEffect(() => {
        Axios.get('http://localhost:5050/getdepartment')
            .then(res => {
                setDeptData(res.data)
            })
            // .catch(err => {
            //     console.error(err)
            // })
    }, [deptData])

    const handleSubmit = (e) => {
        e.preventDefault()
        Axios.post('http://localhost:5050/createdepartment', { department })
             .then(() => {
               navigate("/welcome")
            })
            .catch(err => {
                console.error(err)
            })
    }
    const deletedepartment=(id)=>{
        Axios.delete(`http://localhost:5050/deletedepartment/${id}`)
    }
    
    return (
        <>
            <Header />
            <Navbar />
            <div className="container" style={{ width: "50%" }}>
                <h2 className="text-center mb-5 py-2">Add Department</h2>
                <form onSubmit={handleSubmit}>
                    <div className="my-3">
                        <input
                            type="text"
                            name="AddDepartment"
                            className="form-control"
                            onChange={(e) => setDepartment(e.target.value)}
                            placeholder="Add department"
                        />
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
                    
                        <th>Department</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                {
                    deptData.map((department)=>{
                        return(
                            <tr key={department._id}>
                                <td>{department.department}</td>
                                    <td><NavLink to={`/Editdepartment/${department._id}`}>Edit</NavLink></td>
                                    <td><NavLink className="btn-btn-danger" onClick={()=>deletedepartment(department._id)} >Delete</NavLink></td>
                                </tr>
                        )
})
            }
                </tbody>
            </table>
            <Footer />
        </>
    )
}

export default AddDepartment
 