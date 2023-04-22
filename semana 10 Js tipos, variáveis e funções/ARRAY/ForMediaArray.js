const notas =[10 , 6.5, 8 , 7.5];

let somaDasNotas = 0

for (let i=0 ; i < notas.length; i++ ){
    somaDasNotas+= notas[i];
}

let media = somaDasNotas/notas.length;
console.log(media)

/*Transcrição
[00:00] Juliana: Continuando nossos estudos de estruturas de dados com arrays, vamos dar uma olhada em qual o desafio deste vídeo. Para este desafio temos que calcular a média entre as seguintes notas, lembrando que são notas de alunos da nossa escola usando o for. O for foi a estrutura que estudamos anteriormente, a estrutura que usamos para percorrer uma lista, um array de números de 100 a 600.

[00:30] Juliana: Vamos dar uma olhada então agora como utilizamos o for em outro contexto para conseguirmos mais do que só fazer um console.log. Vou inclusive consertar uma endentação. Como utilizamos no contexto de fazer operações, cálculos com cada um dos itens de uma array?

[00:52] Juliana: Vou criar um novo arquivo, vou chamar de média for, e o Léo vai conversar conosco sobre como resolvemos esse desafio usando o for.

[01:05] Leonardo: Nesse desafio vamos precisar calcular a média, certo? Então vamos começar criando nosso array com nossas notas. Então const notas = [10, 6.5, 8, 7.5]. Vamos precisar de algum lugar para salvar essa média, então vou criar uma nova variável, um let dessa vez, e vou chamar de somaDasNotas. Temos a variável soma das notas, e vou começar o valor dela em 0, que é um valor padrão para não interferir com nossa média depois.

[01:52] Leonardo: Vamos agora usar o for para poder somar todas essas notas. Então for (let i = 0; i < notas.length; i++), vou abrir e fechar os bigodes para poder escrever dentro desse bloco de código. O que vamos fazer agora é somar todas as notas do nosso array dentro desse for. A soma das notas vai ser igual o próprio valor que está nela mais alguma coisa, que é o valor da nota que vamos estar no momento.

[02:48] Leonardo: então ao invés de usar soma das notas é igual a soma das notas mais um valor, vou usar o soma das notas mais igual, que ele vai fazer essa parte do somar ela própria sozinho, vou colocar que queremos somar as notas com índice i, então ele vai percorrer do índice 0 até o índice 3, ou seja, o 10, o 6.5, o 8 e o 7.5. E vai fazer essa soma e vai guardando para nós a soma das notas.

[03:15] Leonardo: Depois disso vamos calcular a média. Vou criar uma nova variável com let, let media = somaDasNotas/notas.length, por que isso? Quando formos somar as notas, só somando elas, não chegamos na média, porque 10 mais 6.5 dá 16.5, mais 8.5 esse número vai só crescendo, depois temos que dividir pela quantidade de números para ter a média.

[03:58] Leonardo: Por fim vamos mostrar isso no console para podermos ver se deu tudo certo. Vou dar um console.log e mandar ele imprimir para nós a média.

[04:11] Juliana: Então vamos rodar, como fizemos nas vezes anteriores, com node na pasta certa, nome do arquivo que criamos foi média, vamos rodar e ver o que acontece. Ele trouxe-nos a média 8.

[04:26] Leonardo: Está certo essa média 8, Ju.

[04:30] Juliana: Então repassando o que fizemos aqui, temos um array com uma quantidade x de elementos de número, lembrando que arrays pode ser de string, etc., e o que queremos fazer é somar todos esses elementos e depois tirar uma média. O que acontece? Quando temos um array o Java script, a linguagem de programação que estivermos usando, precisa de um método, no caso for, para percorrer cada um dos índices dessa array e conseguir trabalhar com cada um dos elementos que estão nos índices.

[05:05] Juliana: O que o for está fazendo nesse contexto? Estamos pedindo para cada uma das iterações do loop acessar a variável soma das notas que nós declaramos com um valor inicial de 0 fora do loop. Isso é muito importante quando trabalhamos com for, com loops de repetição, entender que tudo que nós colocamos dentro do bloco do for é feito todas as vezes que é passado pelo loop, então não poderíamos, por exemplo, criar essa variável soma das notas dentro do for.

[05:44] Leonardo: Exatamente, Ju. Se criarmos dentro do for, toda vez que nós passarmos por ele vamos criar uma nova variável e descartar o valor da variável antiga.

[05:55] Juliana: Exato. Por isso que o Léo declarou a let soma das notas do lado de fora do bloco de for, agora sim, o for consegue acessar a variável soma das notas que está fora do bloco e nós usamos o operador mais igual que já soma o valor que está na direita na variável que está à esquerda. Cada vez que passa no for vai somar um valor. E o que é esse valor?

[06:25] Juliana: O Java script está acessando a array notas no índice i. Lembra quando fizemos anteriormente nosso primeiro exercício com for e nós vimos que essa notação colchetes e o i dentro, que, na verdade, se refere a um número, ele começa com 0 e no final de cada loop ele é incrementado de 1 em 1. Então de 0 no primeiro loop, no segundo ele é 1 e por aí vai.

[06:55] Juliana: A condição de parada que é muito importante, ele vai parar de fazer o loop quando atingir o i menor que o valor de notas.length. Nós estamos trabalhando com uma array de quatro elementos, então aqui é 4. Enquanto i for menor que 4 vai executar esse loop e vai passar por cada um dos índices dessa array e a cada índice que é passado nós somamos o valor na let soma das notas. E só depois disso, lembrando sempre, que acaba tudo isso, o Java script consegue sair do for e executar o restante do código, que é calcular a média, com soma das notas dividido pelo tamanho da array que está representando o mesmo valor de 4, que, na verdade, é a quantidade de notas que nós temos.

[07:55] Juliana: E no final temos um console.log, só para exibir o resultado. Uma coisa muito importante também a notar quando trabalhamos com o for que a condição de parada, que é notas.length pode não estar diretamente relacionada ao que estamos fazendo dentro do bloco.

[08:15] Juliana: O que estamos fazendo dentro do bloco, tudo que é executado pode ser outro código qualquer. Aqui somente a condição de parada. Podemos inclusive dar um número 10, ele vai parar em 10, não é o que queremos no momento, mas tudo que nós queremos que seja executado de fato tem que estar dentro do bloco, lembrando que se queremos acrescentar alguma coisa, ou diminuir alguma coisa a variável tem que estar declarada do lado de fora, senão a cada loop tudo isso é executado novamente do zero.

[08:48] Juliana: Pratique bastante com o for que é super importante, nos vemos no próximo vídeo.  */