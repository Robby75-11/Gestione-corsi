import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import StudentiForm from "./components/StudentiForm";
import CorsiList from "./components/CorsiList";
import IscrizioniCorsi from "./components/IscrizioniCorsi";

function App() {
  return (
    <div>
      <Navbar />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<StudentiForm />} />
          <Route path="/corsi" element={<CorsiList />} />
          <Route path="/iscritti" element={<IscrizioniCorsi />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
