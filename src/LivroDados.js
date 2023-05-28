import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ControleEditora from "./controle/ControleEditora";
import ControleLivro from "./controle/ControleLivros";

function LivroDados() {
  const controleLivro = new ControleLivro();
  const controleEditora = new ControleEditora();

  const opcoes = controleEditora
    .getEditoras()
    .map((editora) => ({ value: editora.codEditora, text: editora.nome }));

  const [titulo, setTitulo] = useState("");
  const [resumo, setResumo] = useState("");
  const [autores, setAutores] = useState("");
  const [codEditora, setCodEditora] = useState(opcoes[0].value);

  const navigate = useNavigate();

  const tratarCombo = (event) => {
    const { value } = event.target;
    setCodEditora(Number(value));
  };

  const incluir = (event) => {
    event.preventDefault();
    const livro = {
      codigo: 0,
      titulo,
      resumo,
      autores: autores.split("\n"),
      codEditora,
    };
    controleLivro.incluir(livro);
    navigate("/");
  };

  return (
    <main className="px-5">
      <h1>Dados de Livro</h1>
      <form onSubmit={incluir}>
        <div className="mt-2">
          <label className="form-label" htmlFor="titulo">Título:</label>
          <input
            className="form-control"
            type="text"
            id="titulo"
            value={titulo}
            onChange={(event) => setTitulo(event.target.value)}
          />
        </div>
        <div className="mt-2">
          <label className="form-label" htmlFor="resumo">Resumo:</label>
          <textarea
            className="form-control"
            id="resumo"
            value={resumo}
            onChange={(event) => setResumo(event.target.value)}
          ></textarea>
        </div>
        <div className="mt-2">
          <label className="form-label" htmlFor="autores">Autores (um por linha):</label>
          <textarea
            className="form-control"
            id="autores"
            value={autores}
            onChange={(event) => setAutores(event.target.value)}
          ></textarea>
        </div>
        <div className="mt-2">
          <label className="form-label" htmlFor="codEditora">Editora:</label>
          <select className="form-select" id="codEditora" value={codEditora} onChange={tratarCombo}>
            {opcoes.map((opcao) => (
              <option key={opcao.value} value={opcao.value}>
                {opcao.text}
              </option>
            ))}
          </select>
        </div>
        <button className="btn btn-primary mt-2" type="submit">Salvar Dados</button>
      </form>
    </main>
  );
}

export default LivroDados;
