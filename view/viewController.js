class HtmlElements {
  constructor() {
    this.getBtnAnalisaPessoa();
    this.getResult();
    this.getBtnlerTodos();
    this.getIndexToSearch();
  }

  getBtnAnalisaPessoa() {
    return document.getElementById("btnSalvarPessoa");
  }

  getBtnlerTodos() {
    return document.getElementById("btnlerTodos");
  }

  getBtnPessoa() {
    return document.getElementById("btnPessoa");
  }

  getBtnRemoverPessoa() {
    return document.getElementById("btnRemoverPessoa");
  }

  getTeste() {
    return document.getElementById("teste");
  }

  getResult() {
    return document.getElementById("result");
  }

  setResult(value) {
    document.getElementById("result").innerHTML = value;
  }

  getNome() {
    return document.getElementById("nome").value;
  }

  getIdade() {
    return document.getElementById("idade").value;
  }

  getIndexToSearch() {
    return document.getElementById("indexToSearch").value;
  }
}

// const htmlElements = {
//   btnAnalisaPessoa: document.getElementById("btnSalvarPessoa"),
//   result: document.getElementById("result"),
// };

export default HtmlElements;
