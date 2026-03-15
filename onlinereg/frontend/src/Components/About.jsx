import React from 'react'
import { assests } from '../assets/assets';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
const About = () => {
  return (
    <div className='about'>
        <Container>
            <Row className='gy-3 '>
                <Col lg={6}>
                <img src={assests.imgAbout} alt="" className='img-fluid mt-5'/>
                </Col>
                <Col lg={6}>
                <h2 className='box mt-5'>About us</h2>
                <h3>Welcome to Techlive Solution</h3>
                <p>Techlive is an advanced Software Technology Training and Development Company that prepares students and freshers for successful career paths in the software development field. Established in 2013, we are a profound custom development and software outsourcing company. Our company focuses on the development of customized software applications and offshore software outsourcing facilities. Techlive is also an excellent Training agency in Chandigarh and Mohali offering International Certifications.

Techlive Solutions takes pride in introducing itself as an HPE Business Partner. HPE has various customized programs to improve the IT skills of the trainees, delivered by HPE partners. They have conducted such programs at many colleges and universities till now.

We offer Global certifications from MICROSOFT, HPE, ORACLE, GOOGLE, etc., for courses like JAVA, ANDROID, PYTHON, PHP, KOTLIN. The cutting-edge technologies, together with the certifications and expert guidance, makes us one of the best choices for Industrial training in the region.Hands-on 100% practical experience on latest technologies and in-depth knowledge are ensured by internship; it would comprise theoretical and practical sessions with apt opportunity of exposure to live projects. Industry-specific job oriented programme are provided.</p>
                
                </Col>
            </Row>
        </Container>
      
    </div>
  )
}

export default About
