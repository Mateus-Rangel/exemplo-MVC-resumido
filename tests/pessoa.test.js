import Service from "../model/service.js";
import PessoaDAO from "../model/dao.js";

test("Analisar pessoa", () => {
  const service = new Service();
  const mock = {
    nome: "Mateus Rangel",
    idade: 30,
  };

  expect(service.analisePessoa(mock)).toBe(
    "O nome da pessoa é: Mateus Rangel e a sua idade é: 30"
  );
});

test("Ler pessoa", () => {
  const pessoaDao = new PessoaDAO();
  const mock = [
    "O nome da pessoa é: Mateus Rangel e a sua idade é: 30",
    "O nome da pessoa é: Caroline Rangel e a sua idade é: 30",
    "O nome da pessoa é: Fátima Rangel e a sua idade é: 30",
    "O nome da pessoa é: Guilherme Rangel e a sua idade é: 30",
  ];

  expect(pessoaDao.ler(mock, 0)).toBe(
    "O nome da pessoa é: Mateus Rangel e a sua idade é: 30"
  );
});

test("salvar pessoa", () => {
  const pessoaDao = new PessoaDAO();
  const mock = {
    nome: "Mateus Rangel",
    idade: 30,
  };

  pessoaDao.salvar(mock);
  expect(localStorage.__STORE__[0]).toBe(
    "O nome da pessoa é: Mateus Rangel e a sua idade é: 30"
  );
});

test("ler Todos", () => {
  const pessoaDao = new PessoaDAO();
  localStorage.clear();

  const mock = [
    { nome: "Mateus Rangel", idade: 30 },
    { nome: "Caroline Rangel", idade: 30 },
    { nome: "Fátima Rangel", idade: 30 },
    { nome: "Guilherme Rangel", idade: 30 },
  ];
  for (let i = 0; i < mock.length; i++) {
    const element = mock[i];
    pessoaDao.salvar(element);
  }
  expect(pessoaDao.lerTodos()).toStrictEqual([
    "O nome da pessoa é: Mateus Rangel e a sua idade é: 30",
    "O nome da pessoa é: Caroline Rangel e a sua idade é: 30",
    "O nome da pessoa é: Fátima Rangel e a sua idade é: 30",
    "O nome da pessoa é: Guilherme Rangel e a sua idade é: 30",
  ]);
});

test("remover pessoa", () => {
  const pessoaDao = new PessoaDAO();
  localStorage.clear();

  const mock = [
    { nome: "Mateus Rangel", idade: 30 },
    { nome: "Caroline Rangel", idade: 30 },
    { nome: "Fátima Rangel", idade: 30 },
    { nome: "Guilherme Rangel", idade: 30 },
  ];
  for (let i = 0; i < mock.length; i++) {
    const element = mock[i];
    pessoaDao.salvar(element);
  }
  pessoaDao.removePessoa(0);
  // for (let i = 0; i < 3; i++) {
  //   expect(localStorage.__STORE__[i]).toBe(
  //     "O nome da pessoa é: Mateus Rangel e a sua idade é: 30"
  //   );
  // }
  expect(localStorage.__STORE__[0]).toBe(undefined);
  // expect(pessoaDao.lerTodos()).toStrictEqual([
  //   "O nome da pessoa é: Caroline Rangel e a sua idade é: 30",
  //   "O nome da pessoa é: Fátima Rangel e a sua idade é: 30",
  //   "O nome da pessoa é: Guilherme Rangel e a sua idade é: 30",
  // ]);
});
