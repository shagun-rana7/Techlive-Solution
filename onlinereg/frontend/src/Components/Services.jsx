import React from 'react';
import { servicesList } from '../assets/assets';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'; 
import Container from 'react-bootstrap/esm/Container';

const Services = () => {
  return (
    <div className='services'>
      <Container>
        <Row>
          {
            servicesList.map((data, index) => {
              return (
                <Col lg={3} className='services' key={index}>
                  <p className='service-icon mt-5 bg-success'>{data.sicon}</p>
                  <p className='service-title ps-5 ms-5'>{data.stitle}</p>
                  <p className='service-content'>{data.scontent}</p>
                  
                </Col>
              );
            })
          }
        </Row>
      </Container>
    </div>
    
  );
}

export default Services;
