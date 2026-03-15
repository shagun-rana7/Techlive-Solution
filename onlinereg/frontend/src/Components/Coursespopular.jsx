import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { assests } from '../assets/assets';
import {popular} from'../assets/assets'
const Coursespopular = () => {
  return (
    <div className='course'>
    <Container>
          <Row>
            <h1 className=' box mt-5 text-center'>Courses</h1>
            <h3 className='text-center'>Popular courses</h3>
                <Col lg={4} className='mt-5'>
                <img src={assests.images} alt=""style={{ width: "100%" }}/>
                {
                popular.map((data,index)=>(
                    <div key={index}className='text-center'>
                        <p>{data.scontent}</p>
                    </div>
                ))
                }
                 </Col>
                 <Col lg='4'className='mt-5'>
                 <img src={assests.img2} alt=""style={{ width: "100%" }}/>
                 {
                popular.map((data,index)=>(
                    <div key={index} className='text-center'>
                        <p>{data.scontent1}</p>
                    </div>
                ))
                }
                 </Col>
                 <Col lg='4'className='mt-5'>
                 <img src={assests.study} alt=''style={{ width: "100%" }}/>
                 {
                popular.map((data,index)=>(
                    <div key={index} className='text-center'>
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

export default Coursespopular
