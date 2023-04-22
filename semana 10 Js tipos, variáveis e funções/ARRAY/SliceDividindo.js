const nomes = ['joao', 'juliana','Ana','Caio','lara','Marjorie', 'guilherme', 'Aline', 'Fabiana', 'Andre', 'carlos', 'paulo',   'bia', 'vivian', 'Isabelsa', 'Vinicius', 'Renan' , 'Renata', 'Daisy', 'Camilo']

console.log('tamanho da Array', nome.length);
                        //0  //10
const sala1 = nomes.slice(0, nomes.length/2);
        // como se tivesse pedindo para o slice comecar apartir do 10º aluno    
const sala2 = nomes.slice(nomes.length/2); 
console.log(`Lista de Alunos da Sala 1: ${sala1}`); 
console.log(`Lista de Alunos da Sala 2: ${sala2}`);
/* Transcrição
[00:00] Juliana: Nesta aula, vamos continuar trabalhando com arrays nessa estrutura de dados super importante, tanto no Java script como praticamente qualquer linguagem de programação. Léo, vamos então ver qual o próximo desafio para nós vermos como manipular arrays durante nosso dia a dia de desenvolvimento.

[00:20] Juliana: Nosso desafio para este vídeo chama-se sala dividida, lembrando que estamos trabalhando com o contexto de uma escola, então temos notas, tirar as médias de notas entre alunos, listas de alunos, etc. Temos uma lista com vários alunos, a sala ficou muito grande, vai ser dividido em turma A e turma B, e nós vamos dividir essa quantidade de alunos em duas turmas iguais.

[00:46] Juliana: Como fazemos isso utilizando arrays? Vou primeiro antes de tudo abrir um novo arquivo, chamar de dividindo arrays, e, então, Léo? Como resolvemos esse desafio?

[01:06] Leonardo: Para começar, vamos criar nossa lista. Vou começar criando uma const nomes, porque ela vai armazenar os nomes e não as notas. E para adiantar um pouco já vou colocar direto todos os nomes que temos disponíveis para nós. Então João, Juliana, Ana, e assim por diante.

[01:30] Leonardo: Uma vez com a nossa lista feita, podemos começar a pensar em dividir. Como vamos fazer isso? No caso, vamos dividir em duas salas, e elas têm que ter o mesmo tamanho. Vamos precisar guardar essas duas salas em algum lugar, e como vamos dividir uma lista em duas vamos ter que criar duas listas, então vou fazer isso agora. Então const sala1 e const sala2.

[02:10] Leonardo: Vamos agora colocar o que elas têm que guardar. A sala1 vai guardar os nomes dos alunos, e vamos usar o método slice, que vai dividir para nós essa lista de nomes em duas partes. Então, o slice pede alguns parâmetros, vamos ver o que ele pede. Ele pede um número, que é onde vamos começar a fazer o corte, e outro número, que é onde vamos terminar de fazer esse corte.

[02:50] Leonardo: No caso aqui vamos começar a fazer o corte no índice 0, então vou colocar 0 para começar nele. E até onde queremos ir? Até a metade. Então vou usar o nomes.length, para dar o tamanho. Mas não queremos inteiro, queremos metade, então vou colocar sobre 2. Ele vai partir do 0 e vai chegar até metade do nosso array de nomes.

[03:15] Leonardo: Agora vamos preparar a segunda sala, porque no momento só preparamos a primeira. E nossa lista de nomes não foi alterada, nós salvamos essa informação na sala1. Então agora temos que fazer a mesma coisa para sala2, então nome.slice, vamos começar onde paramos no outro, então nomes.length/2, para pegar de novo da metade da sala.

[03:46] Leonardo: Não vou colocar nada onde nós terminamos, porque quando não colocamos nada ele vai até o final do array, não temos que nos preocupar com isso. É legal lembrar também que onde ele termina é exclusivo, ou seja, ele não vai pegar o nome que no caso para nós vai estar nessa posição do tamanho sobre 2.

[04:11] Leonardo: E por fim vamos mostrar isso para poder ver o que está acontecendo realmente. Então console.log(‘Alunos da sala 1: ${sala1}’), vou fazer a mesma coisa para a sala2, então vou copiar e colar e trocar os nomes. Isso deve resolver para nós, Ju.

[04:54] Juliana: Certo, então eu vou salvar e no terminal, já estou dentro da pasta onde estamos trabalhando, vou usar novamente o comando node para rodar o arquivo dividindo arrays, e ele exibiu para nós alunos da sala 1 e alunos da sala 2. Vamos só conferir se está tudo certo.

[05:22] Juliana: Os alunos da sala 1 são João, Juliana, Ana, Caio, Lara, Marjorie, Guilherme, Aline, Fabiana e André. E a sala dois foi do Carlos em diante até Camilo. Aparentemente está certo. Ele fez o que pedimos, dividiu os alunos em dois grupos, duas arrays diferentes.

[05:50] Juliana: Vamos dar uma olhada então com um pouco mais de calma o que o slice fez para nós e o que trabalhamos nesses parâmetros que o Léo passou para cada um dos slices, na linha 3 e na linha 4.

[06:04] Juliana: Como o Léo disse anteriormente, o método slice aceita alguns parâmetros, lembrando que quando trabalhamos com métodos, eles são funções e todas as funções podem aceitar parâmetros de acordo com o que elas precisam fazer. No caso do slice, o Léo passou dois parâmetros, dois números.

[06:28] Juliana: O primeiro número é 0, lembrando que vimos anteriormente que as arrays sempre começam do índice 0, então o João, que é o primeiro elemento da nossa array, para conseguir pegar este valor tem que lembrar que ele está localizado no índice 0, e Juliana no índice 1. Lembrando isso que vimos nos vídeos passados.

[06:55] Juliana: Na linha da sala 1 o Léo passou para nosso slice, que é cortar em inglês, então esse método vai cortar a array começando no índice 0, e onde ele termina é o segundo parâmetro que está sendo dado no slice. Nós passamos nomes.length/2. Embora isso seja um pedaço de código, no final ele é um número, porque o resultado de nomes.length é um número que representa a quantidade de elementos que tem na array.

[07:30] Juliana: Não sabemos. Vamos fazer o seguinte, vamos dar um console.log só para ver quantos elementos tem nessa array. Vou dar só em nomes.length, sem fazer mais nada. Vou colocar na frente para sabermos tamanho da array.

[07:55] Juliana: Se rodarmos isso novamente vai trazer para nós quantas pessoas tem, então tem vinte alunos nessa sala e passou a ser duas arrays de dez. O que nós entendemos a partir disso? Sempre que usamos a propriedade length em um array o resultado vai ser o número, então o que no final o Léo passou aqui para a sala 1? Dois números como parâmetro. O primeiro é 0, que é onde estamos começando a cortar nossa array, e o segundo é outro número que é 20 dividido por 2, ou seja, 10.

[08:35] Juliana: No final quais são os dois parâmetros que foram passados? 0 e em seguida 10, ou seja, vai começar no índice 0 e parar antes do 10, lembrando que o Léo falou que não inclui o índice 10, ele vai parar no 9. Está certo isso, né?

[08:55] Leonardo: Certinho, vai parar no 9.

[08:58] Juliana: E o segundo caso que nós não estamos usando o 0, lembrando também o que o Léo falou, se nós passamos somente um parâmetro, ou seja, somente um número, aqui no caso estamos passando 10, é onde o slice vai começar e ir até o final. Então estamos dizendo para ele começar a partir do 10 e ir até o final da array. Dessa forma vamos de 1 a 9, no primeiro slice, onde estamos salvando na constante sala1, e a constante sala2 salva os elementos de 10 para frente, ou seja, de 10 a 20. Novamente, sempre pratique, faça, pense em outros casos para praticar bastante se tiver dúvida, e até o próximo vídeo. */