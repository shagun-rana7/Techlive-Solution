import React from 'react'
import{Routes,Route} from 'react-router-dom'
import Login from './Pages/Login'
import ChangePassword from './Pages/ChangePassword'
import Welcome from './Pages/Welcome'
import AddSession from './Pages/AddSession'
import Addsemester from './Pages/Addsemester'
import AddDepartment from './Pages/AddDepartment'
import EditDepartment from './Pages/EditDepartment'
import Courses from './Pages/Courses'
import EditCourses from './Pages/EditCourses'
import Reg from './Pages/Reg'
import Manage from './Pages/manage'
import Edit from './Pages/Edit'


const App = () => {
  return (
    <div>
      <Routes>
        <Route path ='/' element={<Login/>}/>
        {/* <Route path='/changepassword' element={<ChangePassword/>}/> */}
        <Route path='/welcome' element={<Welcome/>}/>
        <Route path='/AddSession' element={<AddSession/>}/>
        <Route path='/Addsemester' element={<Addsemester/>}/>
        <Route path='/Adddepartment' element={<AddDepartment/>}/>
        <Route path='/Editdepartment/:id' element={<EditDepartment/>}/>
        <Route path='/courses' element={<Courses/>}/>
        <Route path='/editCourses/:id' element={<EditCourses/>}/>
        <Route path='/reg' element={<Reg/>}/>
        <Route path='/manage' element={<Manage/>}/>
        <Route path='/edit/:id'element={<Edit/>}/>
        
        
      </Routes>
    </div>
  )
}

export default App

