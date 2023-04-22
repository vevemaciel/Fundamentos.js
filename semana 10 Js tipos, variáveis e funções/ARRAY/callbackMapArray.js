const nomes =['ana julia' ,'caio vinicios','bia silva' ];

const nomesAtualizadas = nomes.map(nome => nome.toUpperCase())

console.log(nomesAtualizadas)

/* Transcrição
[00:00] Juliana: Continuando então a trabalhar com arrays e funções call-back, vamos ver qual o desafio deste vídeo. Dessa vez recebemos uma lista de alunos da nossa escola e temos que padronizar a forma com que os nomes estão escritos. Alguns deles foram inseridos no sistema em minúsculo, outros em maiúsculo, outros maiúsculo e minúsculo, vamos ver então como utilizamos esses métodos que estamos trabalhando para resolver isso de uma forma automatizada.

[00:33] Juliana: Vou abrir um novo arquivo, vou chamar de map, já dei um spoiler do que vamos fazer, usar o método map, mas tudo bem. Vamos ver, Léo, então, o map em ação para resolver esse problema para nós.

[00:54] Leonardo: Vamos lá, Ju. A primeira coisa a fazer aqui é passar todos esses nomes em uma array para podermos usar. Então let nomes = [ana Julia,Caio vinicius,BIA silva]. Vamos padronizar tudo isso então, como o desafio pediu para nós. O desafio fala para nós como temos que padronizar?

[01:44] Juliana: O desafio fala para conter apenas letras maiúsculas, achei que não falava.

[01:55] Leonardo: Apenas letras maiúsculas, ok. Temos uma função do Java script que vai nos ajudar nisso, mas vamos nos concentrar primeiro em montar nossas listas para chegar na nossa função. Como a Ju já deu o spoiler vamos usar o map de novo, para isso temos que usar o const e vou colocar os nomes atualizados. Vamos chamar os nomes.map e vamos ver o que vamos precisar fazer.

[02:25] Leonardo: O que precisamos passar para nossa função? Queremos atualizar os nomes, então vou colocar nome, e vou criar uma arrow function. Agora o que queremos fazer com esse nome? Queremos o nome e tudo maiúsculo. Tem uma função que chama toUpperCase que vai pegar todas as letras da nossa string e colocar em maiúsculo.

[02:48] Leonardo: Dessa vez não estamos usando número, estamos usando string, então as funções para mexer com string são um pouco diferentes. Tem que tomar cuidado com isso. Por fim quero mostrar esses nomes atualizados, então console.log(nomesAtualizados).

[03:15] Juliana: Léo, só uma coisa aqui na sua linha 3, o toUpperCase é um método também.

[03:25] Leonardo: Muito bem visto, Ju, esqueci de colocar os parênteses para chamar o método.

[03:30] Juliana: Normal. Agora podemos chamar nosso arquivo, rodar com node, e agora recebemos de volta uma array com todos os nomes em maiúsculo. Então, o que vimos aqui? Estávamos trabalhando com números, agora estamos trabalhando com strings. O importante é que o map vai percorrer os índices da array, não importa se é um array de números, um array de string, e passamos aqui dentro da função o que queremos que seja feito.

[04:15] Juliana: Com números, passamos um cálculo, agora com nomes passamos um método para deixar os nomes em letras maiúsculas, porque são strings de texto, mas sempre lembrando que isso se refere ao parâmetro da função que está sendo chamada dentro do map ou do foreach, e uma vez que isso é um parâmetro podemos utilizar dentro do código para cada um desses nomes ser atualizado pelo uppercase ou cada um dos números fazer uma conta com eles, etc.

[04:44] Juliana: Mais uma prática de map, pratique bastante em casa e nos vemos nos próximos vídeos.z */