import { useEffect, useState } from "react";
import { Card, Row, Col, Spinner } from "react-bootstrap";

import { useLocation } from "react-router-dom";

export default function IscrizioniCorsi() {
  const [corsi, setCorsi] = useState([]);
  const [loading, setLoading] = useState(true);

  const location = useLocation();
  const studente = location.state?.studente;

  useEffect(() => {
    const fetchCorsi = async () => {
      if (!studente) return;
      try {
        const dati = await getCorsiStudente(studente.id);
        setCorsi(dati);
      } catch (err) {
        console.error("Errore nel recupero corsi iscritti:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchCorsi();
  }, [studente]);

  if (!studente) return <p>Studente non trovato.</p>;
  if (loading) return <Spinner animation="border" />;

  if (corsi.length === 0) return <p>Non sei iscritto a nessun corso.</p>;

  return (
    <Row className="g-3">
      {corsi.map((corso) => (
        <Col key={corso.id} md={4}>
          <Card>
            <Card.Body>
              <Card.Title>{corso.nome}</Card.Title>
              <Card.Text>{corso.descrizione}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}
