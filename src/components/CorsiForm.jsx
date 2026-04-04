import { useState } from "react";

export default function CorsiForm() {
  const [corso, setCorso] = useState({
    nome: "",
    descrizione: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCorso((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("http://localhost:8080/api/corsi", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(corso),
      });

      if (!response.ok) {
        throw new Error("Errore creazione corso");
      }

      const data = await response.json();
      console.log("Corso creato:", data);

      alert("✅ Corso creato con successo!");

      // reset form
      setCorso({
        nome: "",
        descrizione: "",
      });
    } catch (error) {
      console.error(error);
      alert("❌ Errore durante la creazione");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mt-4">
      <h2>Crea Corso</h2>

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Nome</label>
          <input
            type="text"
            name="nome"
            className="form-control"
            value={corso.nome}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label>Descrizione</label>
          <textarea
            name="descrizione"
            className="form-control"
            value={corso.descrizione}
            onChange={handleChange}
            required
          />
        </div>

        <button className="btn btn-success" disabled={loading}>
          {loading ? "Creazione..." : "Crea Corso"}
        </button>
      </form>
    </div>
  );
}
