import React from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./ActiveUsers.css";

const ActiveUsers = ({ activeUsers }) => {
  return (
    <Container fluid className="active-users text-center">
      <h3 className="head-active-users">ACTIVE USERS</h3>
      <Row sm={6} className="g-4">
        {activeUsers.map((user, index) => (
          <Col key={index}>
            <Card className="card-small">
              <i class="fa-solid fa-user fa-2xl"></i>
              <Card.Body>
                <Card.Title className="card-title">{user.username}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ActiveUsers;
