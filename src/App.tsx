import React from 'react';
import LivroLista from './LivrosLista';
import LivroDados from './LivrosDados';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css'


function App() {
return (
  <div className="container mt-4">
    <BrowserRouter>
  <nav className="navbar fixed-top navbar-expand navbar-dark bg-dark">
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    Livros
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/dados">
                    Novo Cadastro
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<LivroLista />} />
          <Route path="/dados" element={<LivroDados />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}


export default App;
