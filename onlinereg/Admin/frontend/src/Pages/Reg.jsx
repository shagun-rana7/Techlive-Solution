import React, { useEffect, useState } from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import { useNavigate } from 'react-router-dom'
import Axios from 'axios'

const Reg = () => {
  const [sessionData, setSessionData] = useState([]);
  const [deptData, setDeptData] = useState([]);
  const [semesterData, setSemData] = useState([]);
  const [coursesData, setCourseData] = useState([]);

  const [regno, setRegno] = useState('');
  const [fullname, setFullname] = useState('');
  const [password, setPassword] = useState('');
  const [session, setSession] = useState('');
  const [semester, setSemester] = useState('');
  const [department, setDepartment] = useState('');
  const [course, setCourse] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    Axios.get('http://localhost:5050/courseget')
      .then(res => {
        setCourseData(res.data)
      })
    Axios.get('http://localhost:5050/getsession')
      .then(res => {
        setSessionData(res.data)
      })
    Axios.get('http://localhost:5050/getdepartment')
      .then(res => {
        setDeptData(res.data)
      })
    Axios.get('http://localhost:5050/getsemester')
      .then(res => {
        setSemData(res.data);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    Axios.post('http://localhost:5050/createreg', { regno, fullname, password, session, semester, department, course })
    navigate("/Welcome")
  };
  

  return (
    <>
      <Header />
      <Navbar />
      <div className="container" style={{ width: '50%' }}>
        <h2 className="text-center mb-5 py-2">Add Student Details</h2>
        <form onSubmit={handleSubmit}>
          <div className="my-3">
            <input type="text" name="Registration Number" className="form-control" onChange={(e) => setRegno(e.target.value)} placeholder="Registration Number " />
          </div>
          <div className="my-3">
            <input type="text" name="Full Name" className="form-control" placeholder="Full Name" onChange={(e) => setFullname(e.target.value)} />
          </div>
          <div className="my-3">
            <input type="password" name="Password" className="form-control" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
          </div>
          <div className="my-3">
            <label className='form-label'>Select Session</label>
            <select name='session' className='form-select' onChange={(e) => setSession(e.target.value)}>
            <option value='/'>Select Session</option>
              {sessionData.map(session => (
                <option value={session.session} key={session._id}>{session.session}</option>
              ))}
            </select>
          </div>
          <div className="my-3">
            <label className='form-label'>Select Semester</label>
            <select name='semester' className='form-select' onChange={(e) => setSemester(e.target.value)}>
              <option value='/'>Select Semester</option>
              {semesterData.map(sem => (
                <option value={sem.semester} key={sem._id}>{sem.semester}</option>
              ))}
            </select>
          </div>
          <div className="my-3">
            <label className='form-label'>Select Department</label>
            <select name='department' className='form-select' onChange={(e) => setDepartment(e.target.value)}>
            <option value='/'>Select Department</option>
              {deptData.map(dept => (
                <option value={dept.department} key={dept._id}>{dept.department}</option>
              ))}
            </select>
          </div>
          <div className="my-3">
            <label className='form-label'>Select Course</label>
            <select name='course' className='form-select' onChange={(e) => setCourse(e.target.value)}>
            <option value='/'>Select Course</option>
              {coursesData.map(courses => (
                <option value={courses.courses} key={courses._id}>{courses.courses}</option>
              ))}
            </select>
          </div>
          <div>
            <button type='submit' className='btn btn-success'>Register</button>
            <button type='reset' className='btn btn-danger ms-3'>Cancel</button>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default Reg;
