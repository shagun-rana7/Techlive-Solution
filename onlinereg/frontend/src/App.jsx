import React from 'react'
import{Route,Routes} from 'react-router-dom'
import Home from './Page/Home'
import Header from"./Components/Header"
import Services from './Components/Services'
import About from './Components/About'
import Course from './Components/Course'
import Coursespopular from './Components/Coursespopular'
import Instructors from './Components/Instructors'
import Student from './Components/Student'
import Login from './Page/Login '
import Registration from './Page/Registration'
import Logout from './Page/Logout'
const App = () => {
  return (
    <div>
      <Header/>
     <Routes>
      <Route path='/'element={<Home/>}/>
      <Route path='/Services' element={<Services/>}/>
      <Route path='/About' element={<About/>}/>
      <Route path='/Course' element={<Course/>}/>
      <Route path='/coursepopular'element={<Coursespopular/>}/>
      <Route path='/instructors' element={<Instructors/>}/>
      <Route path='/student' element={<Student/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/registration' element={<Registration/>}/>
      <Route path='/Logout' element={<Logout/>}/>
      

      </Routes> 
    </div>
  )
}

export default App
