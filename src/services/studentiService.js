import axios from "axios";

const BASE_URL = "http://localhost:8080/api/studenti"; // Cambia con il tuo URL backend

// Recupera tutti gli studenti (opzionale)
export const getStudenti = async () => {
  try {
    const response = await axios.get(BASE_URL);
    return response.data;
  } catch (err) {
    console.error("Errore getStudenti:", err);
    throw err;
  }
};
// REGISTRA UN NUOVO STUDENTE
export const registraStudente = async (studente) => {
  try {
    const response = await axios.post(BASE_URL, studente);
    return response.data; // ritorna lo studente appena creato
  } catch (err) {
    console.error("Errore registraStudente:", err);
    throw err;
  }
};

// Recupera i corsi a cui uno studente è iscritto
export const getCorsiStudente = async (studenteId) => {
  try {
    const response = await axios.get(`${BASE_URL}/${studenteId}/corsi`);
    return response.data;
  } catch (err) {
    console.error("Errore getCorsiStudente:", err);
    throw err;
  }
};
