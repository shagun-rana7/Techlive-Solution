import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { assests } from '../assets/assets';
import {cours} from '../assets/assets'

const Course = () => {
  return (
    <div className='about'>
        <Container>
            <Row className='gy-3 mt-5 '>
            <h1 className=' box mt-5 text-center'>CATEGORIES</h1>
            <h4 className='text-center'>Course Categories</h4>
                <Col lg={6}>
                <img src={assests.course} alt="" className='img-fluid mt-5'/>
                {cours.map((course, index) => (
              <div key={index}className="course">
                <p>{course.scontent}</p>
                <h5>{course.stitle}</h5>
              </div>
            ))}
                </Col>
                <Col lg={6}>
                <img src={assests.web} alt="" className='mt-5' style={{ width: "100%" }}/>
                {cours.map((course, index) => (
              <div key={index} className="course">
                <p>{course.scontent1}</p>
                <h5>{course.stitle1}</h5>
              </div>
            ))}
                </Col>
                </Row>
                </Container>
                </div>
  )
}

export default Course
