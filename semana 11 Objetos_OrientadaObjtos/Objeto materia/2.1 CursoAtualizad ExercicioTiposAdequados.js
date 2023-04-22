/*Digamos que você precise criar a estrutura de um novo objeto para representar uma pessoa estudante no sistema de uma universidade com os seguintes campos:  */

/* Nome: um campo de texto com o nome completo do estudante;
Matrícula: um número inteiro;
Curso: um campo de texto contendo o curso atual do estudante;
Matérias: um conjunto de textos contendo apenas os nomes das matérias que o estudante está cursando. */

/* Seguindo as práticas vistas até aqui e a lista de campos acima, marque a alternativa contendo a implementação de um objeto que mais se aproxima do objeto de um determinado estudante: */

const dadosCliente = {
    Nome:"jose das couves",
    Matrícula: 10,
    Curso: "artes Cenicas",
    Matérias: [
        "teatro",
        "palhaçaria"
    ],
}; console.log(dadosCliente.Matérias)

const estudante = {
    nome: "Adilson Josué de Freitas",
    matricula: 201542290,
    curso: "Engenharia eletrônica",
    materias: [
      "Cálculo 1",
      "Álgebra Linear",
      "Práticas de Laboratório",
      "Metodologia",
    ],
  }; 

  console.log(estudante.materias)
  /* A alternativa segue fielmente o que foi definido nos requisitos. */