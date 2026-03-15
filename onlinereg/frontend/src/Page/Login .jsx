import React, { useState } from 'react'
import Axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import { NavLink } from 'react-router-dom';
import Footer from '../Components/Footer';
const Login = () => {
  const [loginData, setLoginData] = useState({
    fullname: "",
    password: "",
  })

  const navigate = useNavigate() 

  const handleSubmit = (e) => {
    e.preventDefault()
    Axios.post('http://localhost:5050/loginAdmin', loginData)
      .then((result) => {
        console.log(result.data)

        if (result.data === 'success') {
          navigate("/welcome")  
        } else {
          navigate("/")  
        }
      })
      .catch((error) => {
        console.error('Login error:', error)
      })
  }

  const handleChange = (e) => {
    setLoginData((prevData) => ({
      ...prevData, [e.target.name]: e.target.value
    }))
  }

  return (
    <Container>
      <div className='container mt-5' style={{ width: "50%" }}>
        <h2 className='text-center mb-5 py-2'>Admin Login</h2>
        <form onSubmit={handleSubmit}>
          <div className='my-3'>
            <input
              type="text"
              name="fullname"
              className='form-control'
              required
              onChange={handleChange}
              value={loginData.fullname}
              placeholder='Full Name'
            />
          </div>
          <div className='my-3'>
            <input
              type="password"
              name="password"
              className='form-control'
              required
              onChange={handleChange}
              value={loginData.password}
              placeholder='Password'
            />
          </div>
          <div className='my-3'>
            {/* The login button should trigger the submit, not a NavLink */}
            <NavLink to="/Registration" className="btn btn-primary" style={{width:"70px"}}>Login</NavLink>                
            <button type='reset' className='btn btn-danger ms-3'>Cancel</button>
          </div>
        </form>
      </div>
    </Container>

  )
}

export default Login
