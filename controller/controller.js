import Service from "../model/service.js";
import HtmlElements from "../view/viewController.js";

class Controller {
  constructor() {
    const htmlElements = new HtmlElements();
    const service = new Service();

    htmlElements.getBtnAnalisaPessoa().addEventListener("click", function () {
      console.log("teste");

      const objPessoa = {
        nome: htmlElements.getNome(),
        idade: htmlElements.getIdade(),
      };
      const resultString = service.analisePessoa(objPessoa);
      console.log(resultString);
      htmlElements.setResult(resultString);
      service.salvar(objPessoa);
    });

    htmlElements.getBtnlerTodos().addEventListener("click", function () {
      console.log(service.lerTodos());
    });

    htmlElements.getBtnPessoa().addEventListener("click", function () {
      console.log(service.lerPessoa(htmlElements.getIndexToSearch()));
    });

    htmlElements.getBtnRemoverPessoa().addEventListener("click", function () {
      service.removerPessoa(htmlElements.getIndexToSearch());
    });

    htmlElements.getTeste().addEventListener("click", function () {
      service.teste();
    });
  }
}

export default Controller;
