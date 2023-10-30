import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Footer = () => {
  return (
    <footer className="bg-dark text-light">
      <Container>
        <Row>
          <Col >
            <p className="text-center">©2023 Dennis Matheuwezen</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
