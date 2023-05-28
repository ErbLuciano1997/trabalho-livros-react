import React from "react";
import logo from "./logo.svg";
import "./App.css";
import LivroLista from "./LivroLista";
import LivroDados from "./LivroDados";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      {/* NavBar */}
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Catálogo
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/dados" className="nav-link">
              Novo
            </Link>
          </li>
        </ul>
      </nav>

      {/* Rotas para mudar de página */}
      <Routes>
        <Route path="/" element={<LivroLista />} />
        <Route path="/dados" element={<LivroDados />} />
      </Routes>
    </Router>
  );
}

export default App;
