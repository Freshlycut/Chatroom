import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

export default function Navigation() {
  return (
    <Navbar>
      <Container>
        <a
          style={{
            backgroundColor: "lightblue",
            borderRadius: "5px",
            padding: "5px",
            textDecoration: "none",
          }}
          href="#home"
        >
          <i
            class="fa-regular fa-message"
            style={{
              margin: "5px",
            }}
          ></i>{" "}
          Chatroom
        </a>
      </Container>
    </Navbar>
  );
}
