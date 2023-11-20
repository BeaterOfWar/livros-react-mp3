import React from 'react'
import ControleLivro from "./control/ControleLivros";
import ControleEditora from "./control/ControleEditora";
import { useNavigate } from "react-router-dom";
import './App.css';


var controleLivro = new ControleLivro();
var controleEditora = new ControleEditora();


function LivroDados() {

  const opcoes = controleEditora
    .getEditoras()
    .map((e) => ({ value: e.codEditora, text: e.nome }));

  const [titulo, setTitulo] = React.useState('');
  const [resumo, setResumo] = React.useState('');
  const [autores, setAutores] = React.useState(''); 
  const [codEditora, setCodEditora] = React.useState(opcoes[0].value);

  const navigate = useNavigate();


  const tratarCombo = (event) => {
    setCodEditora(Number(event.target.value));
  };

  const incluir = (event) => {
    event.preventDefault();
    var livro = {
      codigo: 0,
      codEditora: codEditora,
      titulo: titulo,
      resumo: resumo,
      autores: autores.split('\n'),
    };
    controleLivro.incluir(livro);
    navigate('/');
  };

  return (
    <main>
      <h1>Inclusão de Livro</h1>
      <form onSubmit={incluir}>
        <div className="mb-3">
          <label htmlFor="titulo" className="form-label">
            Título
          </label>
          <input
            type="text"
            className="form-control"
            id="titulo"
            value={titulo}
            onChange={(event) => setTitulo(event.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="resumo" className="form-label">
            Resumo
          </label>
          <textarea
            className="form-control"
            id="resumo"
            rows="3"
            value={resumo}
            onChange={(event) => setResumo(event.target.value)}
          ></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="autores" className="form-label">
            Autores
          </label>
          <textarea
            className="form-control"
            id="autores"
            rows="3"
            value={autores}
            onChange={(event) => setAutores(event.target.value)}
          ></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="editora" className="form-label">
            Editora
          </label>
          <select
            className="form-select"
            id="editora"
            value={codEditora}
            onChange={tratarCombo}
          >
            {opcoes.map((opcao) => (
              <option key={opcao.value} value={opcao.value}>
                {opcao.text}
              </option>
            ))}
          </select>
        </div>
        <button type="submit" className="btn btn-primary">
          Incluir
        </button>
      </form>
    </main>
  );
}

export default LivroDados; 
