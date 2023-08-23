import React from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const ActiveUsers = ({ activeUsers }) => {
  return (
    <Container
      style={{ borderRadius: "5px", color: "white" }}
      fluid
      className="active-users text-center"
    >
      <h3
        style={{
          position: "relative",
          left: "-500px",
          top: "-130px",
        }}
      >
        ACTIVE USERS
      </h3>
      <Row sm={6} className="g-4">
        {activeUsers.map((user, index) => (
          <Col key={index}>
            <Card
              style={{
                backgroundColor: "#0474ab",
                borderRadius: "5px",
                padding: "25px",
                position: "relative",
                top: "-80px",
              }}
              className="card-small text-center"
            >
              <i
                class="fa-solid fa-user fa-2xl"
                style={{
                  color: "white",
                }}
              ></i>
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
