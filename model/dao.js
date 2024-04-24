import Pessoa from "./entity.js";

class PessoaDAO {
  constructor() {}

  lerTodos() {
    const list = [];
    for (let i = 0; i < localStorage.length; i++) {
      const element = localStorage[i];
      list.push(element);
    }
    return list;
  }

  salvar(objPessoa) {
    const pessoa = new Pessoa(objPessoa.nome, objPessoa.idade);
    const nome = pessoa.getNome();
    const idade = pessoa.getIdade();
    localStorage.setItem(
      localStorage.length,
      `O nome da pessoa é: ${nome} e a sua idade é: ${idade}`
    );
  }

  ler(listOfObjects, index) {
    for (let i = 0; i < listOfObjects.length; i++) {
      const element = listOfObjects[i];
      if (index == i) {
        return element;
      }
    }
  }

  removePessoa(index) {
    localStorage.removeItem(index);
  }
}

export default PessoaDAO;
