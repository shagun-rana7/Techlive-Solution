import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/'); 
  };

  return (
    <Container className="text-center mt-5">
      <h2>Registration Successful</h2>
      <p>Your registration has been completed successfully!</p>
      <Button variant="primary" onClick={handleLogout}>Go to Home</Button>
    </Container>
  );
};

export default Logout;
