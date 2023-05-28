import Editora from "../modelo/Editora";

const editoras: Array<Editora> = [
  new Editora(1, "Editora A"),
  new Editora(2, "Editora B"),
  new Editora(3, "Editora C"),
];

class ControleEditora {
  getEditoras(): Array<Editora> {
    return editoras;
  }

  getNomeEditora(codEditora: number): string {
    const editora = editoras.find((e) => e.codEditora === codEditora);
    return editora ? editora.nome : "Editora não encontrada";
  }
}

export default ControleEditora;
