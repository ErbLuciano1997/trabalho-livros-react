import Livro from "../modelo/Livro";

const livros: Array<Livro> = [
  new Livro(1, 1, "Livro A", "Resumo A", ["Autor 1"]),
  new Livro(2, 2, "Livro B", "Resumo B", ["Autor 2"]),
  new Livro(3, 1, "Livro C", "Resumo C", ["Autor 3"]),
];

class ControleLivro {
  obterLivros(): Array<Livro> {
    return livros;
  }

  incluir(livro: Livro): void {
    const codigoMaisAlto = livros.reduce((max, livro) => Math.max(max, livro.codigo), 0);
    livro.codigo = codigoMaisAlto + 1;
    livros.push(livro);
  }

  excluir(codigo: number): void {
    const index = livros.findIndex((livro) => livro.codigo === codigo);
    if (index !== -1) {
      livros.splice(index, 1);
    }
  }
}

export default ControleLivro;
