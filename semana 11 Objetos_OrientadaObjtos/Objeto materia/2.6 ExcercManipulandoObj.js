
/*  Manipulando objetos
PRÓXIMA ATIVIDADE

Trabalhar com objetos no Javascript permite que utilizemos diversos tipos de dados, desde primitivos (string, number, bool) até tipos mais elaborados como arrays ou outros objetos. Observe o código abaixo: */

const cliente = {
    nome: "Jose",
    idade:33,
    email: "jose@email.com",
    telefones: ["+550033338888", "+550033334444"]
   }
    cliente.animalEstimacao = [{
    nome: "Kripto",
    raça: "Cão",
    vacinado: true
   }]
    cliente.animalEstimacao.push({
    nome: "Lex",
    raça: "Gato",
    vacinado: false
   })

   const listaAnimais = cliente.animalEstimacao.filter(
    (raça)=>raça.vacinado === true
   )

   console.log(listaAnimais)

   /* O cliente possui uma propriedade chamada animalEstimacao, um array de objetos, o que nos permite usar funções comuns a arrays como filter().


É isso mesmo! Um objeto pode conter um array de objetos, o que nos permite invocar desde funções comuns até arrays como filter(). */