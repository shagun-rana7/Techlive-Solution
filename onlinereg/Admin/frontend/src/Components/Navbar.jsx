import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse bg-secondary" id="navbarNav" >    
      <div className='navbar-nav ms-auto' >
        
        {/* <NavLink className="nav-link active" aria-current="page" to="/changepassword">change password</NavLink> */}
          <NavLink className="nav-link text-white" to='/AddSession'>Session</NavLink>
          <NavLink className="nav-link text-white" to='/Addsemester'>semester</NavLink>
          <NavLink className="nav-link text-white" to='/AddDepartment'>Department</NavLink>
          <NavLink className="nav-link text-white" to='/Courses'>Courses</NavLink>
          <NavLink className="nav-link text-white" to='/Reg'> Registration </NavLink>
          <NavLink className='nav-link text-white' to='/Manage'>Manage</NavLink>
          <NavLink className='nav-link text-white' to='/'>Log out</NavLink>
          </div>
    </div>
  </div>
</nav>
    
    </>
  )
}

export default Navbar
