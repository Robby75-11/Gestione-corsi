import axios from "axios";

// URL base del backend
const API_URL = "http://localhost:8080/api/studenti";

// Config Axios per includere credenziali se necessario
const axiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true, // utile se vuoi cookie/sessioni
});

// Funzione per registrare uno studente
export const registraStudente = async (studente) => {
  try {
    const response = await axiosInstance.post("/", studente);
    return response.data;
  } catch (err) {
    console.error("Errore registraStudente:", err);
    throw err;
  }
};

// Funzione per ottenere tutti gli studenti
export const getAllStudenti = async () => {
  try {
    const response = await axiosInstance.get("/");
    return response.data;
  } catch (err) {
    console.error("Errore getAllStudenti:", err);
    throw err;
  }
};

// Funzione per ottenere i corsi di uno studente
export const getCorsiStudente = async (studenteId) => {
  try {
    const response = await axiosInstance.get(`/${studenteId}/corsi`);
    return response.data;
  } catch (err) {
    console.error("Errore getCorsiStudente:", err);
    throw err;
  }
};
