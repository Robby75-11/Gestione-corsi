import axios from "axios";

const BASE_URL = "http://localhost:8080/api/corsi"; // Cambia con il tuo URL backend

// Recupera tutti i corsi
export const getCorsi = async () => {
  try {
    const response = await axios.get(BASE_URL);
    return response.data;
  } catch (err) {
    console.error("Errore getCorsi:", err);
    throw err;
  }
};

// Iscrivi uno studente a un corso
export const iscriviStudente = async (studenteId, corsoId) => {
  try {
    const response = await axios.post(`${BASE_URL}/${corsoId}/iscrizioni`, {
      studenteId,
    });
    return response.data;
  } catch (err) {
    console.error("Errore iscriviStudente:", err);
    throw err;
  }
};
