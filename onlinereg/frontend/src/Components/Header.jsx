import React from 'react'
import { NavLink } from 'react-router-dom'
const Header = () => {
  return (
    <div className='bg-secondary'>
    <nav className="navbar navbar-expand-lg ">
  <div className="container-fluid bg-secondary">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse bg-secondary" id="navbarNav" >    
      <div className='navbar-nav ms-auto' > 
          <NavLink className="nav-link text-white" to='/'>Home</NavLink>
          <NavLink className="nav-link text-white" to='/Login'>Login</NavLink>          
          <NavLink className='nav-link text-white' to='/'>Logout</NavLink>
        
          </div>
    </div>
  </div>
</nav>
</div> 
  )
}

export default Header
