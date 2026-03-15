
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { assests } from '../assets/assets';
import Services from '../Components/Services';
import About from '../Components/About';
import Course from '../Components/Course';
import Coursespopular from '../Components/Coursespopular';
import Instructors from '../Components/Instructors';
import Student from '../Components/Student';
import Footer from '../Components/Footer';
import { NavLink } from 'react-router-dom';



const Home = () => {
  
  return (
    <>
    <div className='banner'>
     <Container>
      <Row className='banner-spacing'>
        <Col lg={6}>
        <p className='banner-text'>Best Online Course</p>
        <p className='banner-text'>Best Online Learning Platform</p>
                 </Col>
                 <Col lg={6}>
                 <img src={assests.banner_2} alt='' className='img-fluid'/>
                 </Col>
                 <NavLink to="/login" className="btn btn-primary" style={{width:"70px"}}>Login</NavLink>                      
      </Row>
    </Container> 
    </div>
    <Services/>
    <About/>
    <Course/>
    <Coursespopular/>
    <Instructors/>
    <Student/>
    <Footer/>
    <NavLink/>
    
    
    
  

    </>
  )
}

export default Home

