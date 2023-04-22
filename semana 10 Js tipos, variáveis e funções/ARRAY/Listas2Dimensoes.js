
         //0     //0    
const alunos = ['Joao','Juliana','caio','Ana']

            //1          //0                   
const mediasDosAlunos = ['10','7','9','6']


//let  listaDeNotasEAlunos [['Joao','Juliana','caio','Ana'], ['10','7','9','6'] ]
                            //0         //1
let listaDeNotasEAlunos = [alunos , mediasDosAlunos]

console.log(`${listaDeNotasEAlunos [0][0]}, sua media é ${listaDeNotasEAlunos[1][0]}`)


/* Transcrição
[00:00] Juliana: Olá, continuando então a manipulas as nossas listas de alunos e alunas, vamos ver qual o desafio que nos aguarda. Desta vez o desafio é criar uma lista com alguns alunos e alunas. João, Juliana, Caio e Ana, e depois criar uma outra lista com as médias, as seguintes médias, e temos que criar uma lista com duas dimensões, os nomes e as médias. Vamos lá.

[00:30] Juliana: Vamos começar do começo, indo para o nosso editor de código, criando um novo arquivo que vou chamar de lista de duas dimensões. Agora, Léo, vamos entender do que se trata essa tal de lista de duas dimensões.

[00:58] Leonardo: Apesar do nome parecer intimidador, não precisa se preocupar, porque não é nada tão intimidador assim. Vamos começar criando nossa lista de alunos, então const alunos = [‘João’, ‘Juliana’, ‘Caio’, ‘Ana’]. E vamos também criar a lista de médias. Então const mediasDosAlunos = [10, 7, 9, 6].

[01:58] Leonardo: Já fizemos metade do desafio, digamos assim. Já temos a lista com os alunos e a lista com as notas. Agora vem a lista de duas dimensões. Vamos criar ela, let listaDeNotasEAlunos =, agora vem o segredo. Nós criamos a lista e vamos passar o que como elemento dessa lista? Vamos passar outra lista. Então começamos com os alunos, e agora passamos também as médias dos alunos.

[02:52] Leonardo: Pronto, criamos uma lista com duas dimensões. Ela é uma lista que contém listas dentro dela. Vamos ver como podemos fazer para acessar essa lista agora. Para isso vou usar o console.log e vamos passar uma template string para poder linkar os nomes dos alunos com as notas para podermos ver.

[03:15] Leonardo: Eu vou abrir uma template string, colocar o dólar e já vou abrir o bigode. Vamos passar a lista de notas e alunos. E como faríamos para acessar normalmente? Acessamos uma lista usando dois colchetes. Porém, se fizermos isso vamos ter como resultado ou a lista de alunos, ou a média dos alunos, e nós queremos pegar uma informação dentro delas, então como fazemos? Passamos outros colchetes.

[04:00] Leonardo: Vamos tentar primeiro pegar informação de quem está no zero zero, ou seja, na primeira lista, ou seja, lista de alunos, e depois dentro da lista de alunos na primeira posição, o João, índice 0. Vou falar que a sua média é e agora vamos passar a média dele. Para isso sinal do dólar, abri e fechei os bigodes, e passar a lista de notas e alunos, e novamente as duas chaves.

[04:44] Leonardo: Agora queremos acessar a média dos alunos. A média dos alunos não é a primeira, não está no índice 0, está no índice 1, então vamos passar 1 e queremos a primeira nota. Dentro dela vamos passar o índice 0. O que devemos conseguir agora aqui? Vamos acessar lista de notas e alunos no índice 0, que é nossa lista de alunos, e na lista de alunos queremos o índice 0, que vai trazer o nome do João, e sua média é lista de notas e alunos no índice 1, que é a média, e dentro dessa lista de médias dos alunos queremos índice 0, que é nota 10. Vamos testar, Ju, para ver se está funcionando?

[05:30] Juliana: vamos, vamos testar. Vamos ver com os resultados o que nós conseguimos entender de tudo isso. Então novamente na pasta, no terminal node, vou dar lista de duas dimensões. João, sua média é 10, então deu tudo certo. Mas vamos ver então com um pouco mais de calma o que está acontecendo dentro da let listaDeNotasEAlunos que o Léo criou.

[06:05] Juliana: Uma lista, um array de duas dimensões é um array que dentro dela tem outras arrays, no caso, lista de notas e alunos é uma array, uma lista, e dentro dela, nós já trabalhamos com arrays de diversas formas, então criamos const numeros = [1, 2, 3], trabalhamos com strings, por exemplo, a const alunos é uma lista composta por strings.

[06:36] Juliana: Porém o que estamos vendo agora é outro tipo de lista, de array, que ao invés de ter o que chamamos de dado primitivo dentro de cada índice, cada um dos índices da nossa lista de notas e alunos é composto de outra array, então o índice 0 da lista de notas e alunos é uma array, array alunos, e o índice 1 é outro array, que é array média dos alunos, mas é a mesma coisa. Vou até copiar os valores, que na verdade nós passarmos o nome da variável e os valores é a mesma coisa.

[07:33] Juliana: Ao invés do Léo ter passado por extenso, por exemplo, ele passou através das variáveis, que já tínhamos salvo, então já tínhamos uma lista de alunos e já tínhamos uma lista de notas. E todas elas dentro de uma única array.

[08:00] Juliana: Agora com essa informação, vou comentar a let listaDeNotasEAlunos e criar ela novamente com os dados das nossas arrays de alunos e arrays de média por extenso, no final o que o Java script vai interpretar é a mesma coisa, mas no nosso exemplo que o Léo utilizou para fazer o exercício ele já passou as variáveis, a variável que chama alunos, que tem o valor de uma array de strings, e a variável média dos alunos que é uma array com uma lista de dados de número.

[08:50] Juliana: E aí o que está acontecendo na linha 8 no console.log onde o Léo chamou a variável listaDeNotasEAlunos, que é nossa tal de lista de duas dimensões, array de duas dimensões, passando dois colchetes em seguida com índice 0 e depois índice 1? O primeiro índice 0 se refere à primeira array, então é a array alunos. Se formos buscar dentro da array alunos qual é o dado que está no índice 0 dessa array, vamos ver que é João. E também é o índice 0 da array alunos.

[09:44] Juliana: A mesma coisa o Léo fez na média. Fomos na nossa lista de notas e alunos, que é nossa array de duas dimensões, o Léo pediu para o Java script acessar o elemento que está no índice 1, o elemento que está no índice 1 é outra array que é a array média dos alunos e pegar o dado que está no índice 0, e o dado que está no índice 0 dessa array é o número 10, por isso conseguimos juntar, por exemplo, os dados de duas arrays dentro de uma só e acessar cada um deles através da posição de cada um deles dentro do array principal.

[10:30] Juliana: Como sempre, praticar, praticar bastante, fazer suas propriedades, exemplos, e nos vemos no próximo vídeo.

 */