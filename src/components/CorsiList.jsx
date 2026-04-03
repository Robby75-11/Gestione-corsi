import { useEffect, useState } from "react";
import { Card, Button, Row, Col, Spinner } from "react-bootstrap";
import { getAllCorsi, iscriviStudente } from "../services/corsiService";
import { useLocation } from "react-router-dom";

export default function CorsiList() {
  const [corsi, setCorsi] = useState([]);
  const [loading, setLoading] = useState(true);
  const [iscrivendo, setIscrivendo] = useState(null);

  // Recuperiamo lo studente dalla route (StudentiForm)
  const location = useLocation();
  const studente = location.state?.studente;

  useEffect(() => {
    const fetchCorsi = async () => {
      try {
        const dati = await getAllCorsi();
        setCorsi(dati);
      } catch (err) {
        console.error("Errore nel recupero corsi:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchCorsi();
  }, []);

  const handleIscrizione = async (corsoId) => {
    if (!studente) {
      alert("Studente non trovato!");
      return;
    }

    setIscrivendo(corsoId);

    try {
      await iscriviStudente(studente.id, corsoId);
      alert("Iscrizione avvenuta!");
    } catch (err) {
      console.error(err);
      alert("Errore durante l’iscrizione.");
    } finally {
      setIscrivendo(null);
    }
  };

  if (loading) return <Spinner animation="border" />;

  return (
    <Row className="g-3">
      {corsi.map((corso) => (
        <Col key={corso.id} md={4}>
          <Card>
            <Card.Body>
              <Card.Title>{corso.nome}</Card.Title>
              <Card.Text>{corso.descrizione}</Card.Text>
              <Button
                onClick={() => handleIscrizione(corso.id)}
                disabled={iscrivendo === corso.id}
              >
                {iscrivendo === corso.id ? "Iscrivendo..." : "Iscriviti"}
              </Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}
