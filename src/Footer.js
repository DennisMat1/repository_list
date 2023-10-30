import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Footer = () => {
  return (
    <footer
      className="bg-dark text-light"
      style={{
        position: "fixed",
        left: 0,
        bottom: 0,
        width: "100%",
        height: "50px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Container>
        <Row>
          <Col>
            <p className="text-center">©2023 Dennis Matheuwezen</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
