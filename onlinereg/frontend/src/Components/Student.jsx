import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { assests } from '../assets/assets'
import{student} from '../assets/assets'
const Student = () => {
  return (
    <div>
<Container>
            <Row className='gy-3 mt-5 '>
            <h1 className=' box mt-5 text-center'>CATEGORIES</h1>
            <h4 className='text-center'>Course Categories</h4>
                <Col lg={4}>
                <img src={assests.RM} alt="" className='text img-fluid mt-5'/>
                {
                    student.map((data,index)=>(
                        <div key={index}className='text-center pt-5'>
                            <h3>{data.stitle}</h3>
                            <p>{data.scontent}</p>
                        </div>
                    ))
                }
                </Col>
                <Col lg={4}>
                <img src={assests.SM1} alt="" className='text img-fluid mt-5'/>
                {
                    student.map((data,index)=>(
                        <div key={index}className='text-center'>
                            <h3>{data.stitle1}</h3>
                            <p>{data.scontent1}</p>
                        </div>
                    ))
                }
                </Col>
                <Col lg={4}>
                <img src={assests.SM3} alt="" className='text img-fluid mt-5'/>
                {
                    student.map((data,index)=>(
                        <div key={index}className='text-center'>
                            <h3>{data.stitle2}</h3>
                            <p>{data.scontent2}</p>
                        </div>
                    ))
                }
                </Col>
            
      </Row>
      </Container>
    </div>
  )
}

export default Student
