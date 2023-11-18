import { ControleLivro } from './ControleLivro.js';
import { ControleEditora } from './ControleEditora.js';
import React from 'react';

const controleLivro = new ControleLivro(); 
const controleEditora = new ControleEditora(); 


function LinhaLivro(props) {
  var nomeEditora = controleEditora.getNomeEditora(props.livro.codEditora);

  return (
    <tr>
      <td>
        {props.livro.titulo}
        <button onClick={() => props.excluir(props.livro.codigo)}>
          Excluir
        </button>
      </td>
      <td>{nomeEditora}</td>
      <td>{props.livro.resumo}</td>
      <td>
        <ul>
          {props.livro.autores.map((autor, index) => (
            <li key={index}>{autor}</li>
          ))}
        </ul>
      </td>
    </tr>
  );
}


export default function LivroLista() {
  
  const [livros, setLivros] = React.useState([]); 
  const [carregado, setCarregado] = React.useState(false); 


  React.useEffect(() => {
    if (!carregado) {
      setLivros(controleLivro.obterLivros()); 
      setCarregado(true); 
    }
  }, [carregado]); 

 
  const excluir = (codigo) => {
    controleLivro.excluir(codigo); 
    setCarregado(false); 
  };

  return (
    <main>
      <h1>Lista de Livros</h1>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Editora</th>
            <th>Resumo</th>
            <th>Autores</th>
          </tr>
        </thead>
        <tbody>
          {livros.map((livro) => (
            <LinhaLivro
              livro={livro}
              excluir={excluir}
              key={livro.codigo}
            />
          ))}
        </tbody>
      </table>
    </main>
  );
}
