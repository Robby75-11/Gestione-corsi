import { Link } from "react-router-dom";
import { Navbar as NavB, Nav, Container } from "react-bootstrap";

export default function NavbarComponent() {
  return (
    <NavB bg="dark" variant="dark" expand="lg">
      <Container>
        <NavB.Brand href="/">Gestione Corsi</NavB.Brand>
        <Nav className="me-auto">
          <Link className="nav-link" to="/">
            Registrazione
          </Link>
          <Link className="nav-link" to="/corsi">
            Corsi
          </Link>
          <Link className="nav-link" to="/crea-corsi">
            Crea Corso
          </Link>
          <Link className="nav-link" to="/iscritti">
            I miei corsi
          </Link>
        </Nav>
      </Container>
    </NavB>
  );
}
