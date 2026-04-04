import axios from "axios";

const API_URL = "http://localhost:8080/api/corsi"; // Cambia con il tuo URL backend

// Config Axios
const axiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true, // utile se usi cookie/sessioni
});

// Ottieni tutti i corsi
export const getAllCorsi = async () => {
  try {
    const response = await axiosInstance.get("/");
    return response.data;
  } catch (err) {
    console.error("Errore getAllCorsi:", err);
    throw err;
  }
};

// Ottieni un corso per ID
export const getCorsoById = async (id) => {
  try {
    const response = await axiosInstance.get(`/${id}`);
    return response.data;
  } catch (err) {
    console.error("Errore getCorsoById:", err);
    throw err;
  }
};

// Crea un nuovo corso
export const creaCorso = async (corso) => {
  try {
    const response = await axiosInstance.post("/", corso);
    return response.data;
  } catch (err) {
    console.error("Errore creaCorso:", err);
    throw err;
  }
};
// Iscrivi uno studente a un corso
export const iscriviStudente = async (corsoId, studenteId) => {
  try {
    const response = await axiosInstance.post(
      `/${corsoId}/iscrivi/${studenteId}`,
    );
    return response.data;
  } catch (err) {
    console.error("Errore iscriviStudente:", err);
    throw err;
  }
};

// Aggiorna corso
export const aggiornaCorso = async (id, corso) => {
  try {
    const response = await axiosInstance.put(`/${id}`, corso);
    return response.data;
  } catch (err) {
    console.error("Errore aggiornaCorso:", err);
    throw err;
  }
};

// Cancella corso
export const eliminaCorso = async (id) => {
  try {
    const response = await axiosInstance.delete(`/${id}`);
    return response.data;
  } catch (err) {
    console.error("Errore eliminaCorso:", err);
    throw err;
  }
};
