import { useState } from "react";
import { registraStudente } from "../services/studentiService";
import { useNavigate } from "react-router-dom";
import { Form, Button } from "react-bootstrap";

export default function StudentiForm() {
  const [studente, setStudente] = useState({
    nome: "",
    cognome: "",
    email: "",
    dataNascita: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setStudente({ ...studente, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const nuovoStudente = await registraStudente(studente);
      alert("Registrazione avvenuta!");
      navigate("/corsi", { state: { studente: nuovoStudente } });
    } catch (err) {
      console.error(err);
      alert("Errore nella registrazione.");
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>Nome</Form.Label>
        <Form.Control
          name="nome"
          value={studente.nome}
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Cognome</Form.Label>
        <Form.Control
          name="cognome"
          value={studente.cognome}
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          name="email"
          value={studente.email}
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Data di nascita</Form.Label>
        <Form.Control
          type="date"
          name="dataNascita"
          value={studente.dataNascita}
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Button type="submit" variant="primary">
        Registrati
      </Button>
    </Form>
  );
}
