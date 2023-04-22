const nomes = ['ana','marcos', 'maria','mauro']
const notas =[7,4.5,8,7.5]

const reprovados = nomes.filter((_, indice) => notas[indice]< 5 )
console.log(`Reprovados : ${reprovados}`)


/*Transcrição
[00:00] Juliana: Continuando então com os nossos estudos de array já vimos bastante coisa, bastante formas de trabalhar com esse tipo de estrutura de dados, vamos ver o que nosso desafio traz para esse vídeo.

[00:11] Juliana: Depois que já calculamos média dos alunos, usando inclusive mais de um método, vamos mostrar quem está reprovado entre uma lista de alunos. Então vamos filtrar por nota. Vamos ter aqui uma lista com alguns alunos e outra lista e corresponde às médias de cada um deles.

[00:30] Juliana: Indo para o nosso editor de código, já criei um arquivo que chama reprovados.js e o Léo já está pronto para mostrar para nós como vamos resolver. Vamos lá, Léo.

[00:42] Leonardo: Vamos lá então, Ju. Primeiro vou colocar nossas informações aqui. Vou transformá-las em um array, os nomes e as notas. E agora vamos dar um nome para esses arrays. Começando por uma const nomes, e definimos ela. Também uma const notas.

[01:12] Leonardo: Agora temos o array na linha 1 com os nomes, e um array na linha 2 com as notas. Vamos ver agora como vamos fazer para filtrar esses reprovados. Para fazer isso vamos utilizar um novo método que chama filter, que é de filtragem, filtrar. Ele vai retornar para nós uma lista, então temos que armazenar essa lista em algum lugar. Vou criar para podemos armazenar ela, const reprovados =, e agora vamos realmente usar esse método.

[01:46] Leonardo: Nós vamos usar esse método em qual array, nome ou nota? Queremos retornar o nome dos reprovados, então vamos usar o filter no nome deles, então nomes.filter e vamos abrir os parênteses para poder chamar nossa função, nosso método.

[02:06] Leonardo: Esse método é um método que precisa de uma função, de um call-back, então vamos escrever ela aqui. Vou escrever em forma de arrow function para ficar curto para podermos usar. Então nosso parâmetro que vamos usar é o aluno, e aqui também vou usar um segundo parâmetro, que é o índice. E aí vou colocar a seta do arrow function.

[02:30] Leonardo: Como é uma arrow function, como tem mais de um parâmetro, tenho que colocar os parênteses em volta do parâmetro. E agora o que vamos precisar calcular aqui dentro, que função vamos precisar fazer aqui, o que essa função vai ter que retornar?

[02:48] Leonardo: O filter precisa que nós retornemos booleanos, ou seja, true, false, verdadeiro ou falso. Se for verdadeiro o elemento que vamos trabalhar, no caso o aluno, ele vai ser incluído nessa lista que estamos montando. Se for falso vai ser descartado.

[03:11] Leonardo: Vamos começar a escrever aqui. O que vamos precisar? Queremos saber se a nota do aluno é suficiente para aprovar ou reprovar ele. No caso é uma const reprovados, então vamos ver se ela não é suficiente para ser aprovado. Como as notas estão com os mesmos índices dos nomes, a Ana tem nota 7, o Marcos 4.5, Maria 8, e assim por diante, podemos usar esse mesmo índice.

[03:42] Leonardo: Vou chamar notas[indice] < 5, isso deve trazer para nós todos os nomes dos reprovados. E só para ter certeza vou mostrar no console.log para poder ver o que está acontecendo. Vou chamar template string reprovados, vou colocar o sinal do cifrão, abrir os bigodes e vamos colocar aqui dentro que quero nossa lista de reprovados. Isso deve resolver para nós, Ju.

[04:33] Juliana: Beleza. Vou salvar, vamos rodar com nosso comando de sempre, que é node reprovados.js, o terminal retornou para nós reprovados Marcos, nesse array que estamos utilizando dá para ver que Marcos realmente é o segundo elemento do array, ou seja, índice 1, e ele bate com o segundo elemento do array notas, que é 4.5, ou seja, o filter funcionou.

[05:06] Juliana: Vamos dar uma olhada então um pouco melhor como o filter fez, como o Léo chegou nesse resultado. O que queremos, o que o desafio pedia, no caso, é que retornasse um nome de quem foi reprovado, mas nós temos dois arrays, um de nomes e um de notas. Como queríamos que retornasse o nome, foi o array nome que associamos ao método filter, tudo que vai dentro dos parênteses são parâmetros do método filter e o filter é um método que exige, que pede que o primeiro parâmetro seja uma função, aquilo que chamamos de função call-back.

[05:48] Juliana: O que então temos passado nas outras funções call-back que temos utilizado? Utilizamos map, foreach, usamos sempre o primeiro índice. Normalmente o primeiro índice se refere a cada um dos elementos do array que estamos filtrando. Então, se quiséssemos dar um console.log em aluno só utilizaríamos esse parâmetro aluno e faríamos um console.log de cada um dos alunos, e daria certo.

[06:25] Juliana: Só que qual a questão aqui? Não queremos fazer console.log, queremos realmente filtrar, e para filtrar qual a informação que vamos usar? É a nota, um outro array, mas como associamos? Precisamos passar outra informação. Precisamos associar o índice do array de nomes com o índice do array de notas, ou seja, cada vez que o filter faz uma iteração, cada vez que faz um loop no array de nomes e passa por cada um dos nomes precisamos fazer com que pegue alguma informação relativa ao índice correspondente no array de notas.

[07:06] Juliana: E o que descobrimos? Que o método filter pode receber outro parâmetro que não é obrigatório, que é o parâmetro de índice, ou seja, toda vez que filter iterar no array, ou seja, fizer o loop pelo array de nomes, podemos trabalhar tanto com a informação do elemento, que seria o aluno, quanto com a informação do índice, índice 0, índice 1, índice 2. , etc.

[07:36] Juliana: E aí como fazemos essa informação? Lembrando que todos os parâmetros, as variáveis representam dados, então se usarmos aquela notação de colchete que aprendemos anteriormente para localizar um elemento dentro de um array, conseguimos para cada loop checar se o valor do array notas no índice do loop, no índice da vez, que é o mesmo número de índice onde está passando o nome do aluno, é menor que 5, o número que consideramos como média.

[08:15] Juliana: Lembrando, muito importante o que o Léo disse, o filter é um método que funciona na base de true or false, verdadeiro ou falso, ou seja, todos os elementos que baterem com a condição que nós vamos dar, lembrando que uma comparação sempre retorna true ou false, o dado, o valor vai ser incluído na nova array que o Léo chamou de reprovados.

[08:41] Juliana: Mas aí uma última coisa interessante que podemos notar é que nosso editor de texto, o visual studio code, reclama que o parâmetro aluno foi declarado, mas o valor dele nunca foi lido, porque declaramos a primeira variável, mas não está utilizando ela no bloco da função, não está sendo utilizado.

[09:05] Juliana: Nesse caso o Java script tem um padrão para identificarmos quando um parâmetro não está sendo usado, que é colocar um underline. Se colocamos um underline o Java script sabe que aquele parâmetro existe, mas ele não vai ser declarado, não vai ser utilizado no corpo da função.

[09:25] Juliana: Mas aí como aparece então, se não estamos utilizando o parâmetro aluno na função, como aparece o nome reprovados Marcos? Como apareceu aqui? Como ele veio para cá? Porque o filter, apesar de não estarmos utilizando o valor de Marcos, o valor desse primeiro parâmetro para fazer nossa comparação, ainda é o dado que o filter retorna, que passa aqui para nossa const de reprovados caso o valor da comparação seja true, por isso que deu tudo certo, porque filter estava associado a nomes.

[10:05] Juliana: Ele salva o valor no loop se a condição do bloco for atendida, por isso aparecem os reprovados: Marcos. Não deu bom para o Marcos dessa vez, precisa estudar um pouco mais para compensar a reprovação. Mesma coisa de sempre, estude bastante, faz seus próprios exemplos para pegar bem como funciona o loop, a iteração nesse método e nos vemos no próximo vídeo.  */

/*  Retorno do filter
PRÓXIMA ATIVIDADE

Vimos como utilizar o método filter para retornar um array com apenas alguns elementos do array principal através de uma função callback.

Selecione a alternativa que representa o que deve ser retornado da função callback para que o método filter funcione:

Alternativa correta
A função callback não precisa de um retorno.


Alternativa correta
Um elemento.


Alternativa correta
Um booleano.


Alternativa correta! Certo! Quando a função callback retorna verdadeiro, ou true, o elemento é adicionado no array de retorno, e quando ela retorna falso, ou false, o elemento é descartado. */