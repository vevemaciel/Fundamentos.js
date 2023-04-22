
/*  Conceito de objeto
PRÓXIMA ATIVIDADE

Durante esta aula, vimos qual o problema que a programação orientada a objetos se propõe a resolver e também revisamos como funciona um objeto literal.

Sobre as características dos objetos e as motivações da orientação a objetos, podemos afirmar que:

Escolha as alternativas corretas.

Alternativa correta
A programação orientada a objetos busca abstrair conceitos da vida real para estruturas de código que possam ser reaproveitadas e combinadas, visando aproximar a lógica dos problemas que o sistema deve resolver.


Alternativa correta! O conceito central da POO é a criação e manutenção de objetos, conjuntos de chave/valor onde os valores podem ser tanto dados primitivos/estruturados (as propriedades) quanto funções (os métodos). A partir destes “modelos”, chamados de classes, pode-se criar cópias de objetos que têm a mesma estrutura, propriedades e métodos, e as classes refletem partes do negócio como produto, usuario, pedido, carro, etc.




Alternativa correta
Um objeto pode receber como valores dados primitivos e estruturados, como strings, números, booleanos, arrays e até mesmo outros objetos.


Alternativa correta! É possível estruturar um objeto com tipos diversos de dados para cada propriedade:

const objProduto = {
 tipo: "caneca",
 preco: 10,
 tamanho: {
   grande: '300ml',
   pequena: '120ml'
 },
 fragil: true,
 cores: ['preto', 'branco', 'azul']
}COPIAR CÓDIGO
Alternativa correta
Objetos são tipos de dados que procuram corresponder à coisas do mundo real (físicas ou abstratas).


Alternativa correta! Um programa que faça gerenciamento de compras pode ter tanto objetos que se refletem no mundo físico (como produto ou cliente) quanto no abstrato (como oferta e pedido). */


/* Nessa aula, você aprendeu:
Qual é a motivação e a base conceitual da programação orientada a objetos, que é abstrair modelos a partir de conceitos da vida real e estruturar a forma como o programa é desenvolvido a partir destes modelos;
Quais são as características de um objeto literal: um tipo de dado composto de pares de chave/valor, com valores que podem ser tanto dados primitivos quanto arrays e outros objetos (também chamados de propriedades) e funções que dão comportamento ao objeto (também chamados de métodos);
Sobre o princípio de usar modelos (ou classes) para criar cópias (ou instâncias) de um objeto e como isso ajuda a reaproveitar código;
A estrutura e os conceitos por trás do UML (Linguagem de Modelagem Unificada), linguagem que oferece uma série de ferramentas e padrões para definirmos as classes de um sistema, quais métodos serão necessários e quais seus desdobramentos */