import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'; 
import Container from 'react-bootstrap/esm/Container';
import { assests, instructors } from '../assets/assets';

const Instructors = () => {
  return (
    <div className='mt-5'>
        <Container>
            <Row >
            <h1 className=' box mt-5 text-center'>INSTRUCTORS</h1>
            <h3 className='text-center'>Exampert instructors</h3>
                <Col lg={3} className='mt-5'>
                <img src={assests.RM} alt=''style={{ width: "100%", height:"200px" }}/>
{
    instructors.map((data,index) =>(
        <div key={index} className='text-center'>
        <h4>{data.stitle}</h4>
         <h6>{data.scontent}</h6>
        </div>
    ))
}
                </Col>
                <Col lg={3}className='mt-5'>
                <img src={assests.RM2} alt=''style={{ width: "100%" , height:"200px"}}/>
                {
    instructors.map((data,index) =>(
        <div key={index}className='text-center'>
        <h4>{data.stitle1}</h4>
         <h6>{data.scontent1}</h6>
        </div>
    ))
}
                </Col>
                <Col lg={3}className='mt-5'>
                <img src={assests.RM3} alt=''style={{ width: "100%" , height:"200px"}}/>
                {
    instructors.map((data,index) =>(
        <div key={index}className='text-center'>
        <h4>{data.stitle2}</h4>
         <h6>{data.scontent2}</h6>
        </div>
    ))
}
                </Col>
                <Col lg={3}className='mt-5'>
                <img src={assests.RM4} alt=''style={{ width: "100%", height:"200px" }}/>
                {
    instructors.map((data,index) =>(
        <div key={index}className='text-center'>
        <h4>{data.stitle3}</h4>
         <h6>{data.scontent3}</h6>
        </div>
    ))
}
                </Col>
            </Row>
        </Container>
      
    </div>
  )
}

export default Instructors
