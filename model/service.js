import PessoaDAO from "./dao.js";

class Service {
  constructor() {}
  pessoaDAO = new PessoaDAO();

  analisePessoa(obj) {
    return `O nome da pessoa é: ${obj.nome} e a sua idade é: ${obj.idade}`;
  }

  salvar(obj) {
    this.pessoaDAO.salvar(obj);
  }

  lerTodos() {
    return this.pessoaDAO.lerTodos();
  }

  lerPessoa(index) {
    return this.pessoaDAO.ler(this.lerTodos(), index);
  }

  removerPessoa(index) {
    if (confirm("Você gostaria de deletar o registro dessa pessoa?")) {
      this.pessoaDAO.removePessoa(index);
    }
  }

  teste() {
    this.pessoaDAO.teste();
  }
}

export default Service;
