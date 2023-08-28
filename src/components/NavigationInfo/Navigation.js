import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import "./Navigation.css";

export default function Navigation() {
  return (
    <Navbar>
      <Container className="new-room-container">
        <a className="new-room-btn" href="#home" target="_blank">
          {" "}
          Join New Room
        </a>
      </Container>
    </Navbar>
  );
}
