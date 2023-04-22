//media 10,6.5,8 , 7.5

//let nota1= 10 
//let nota2 = 6.5
//let nota3= 8
//let nota4= 7.5

const notas = [10, 6.5, 8, 7.5];

// let media = (nota1+nota2+nota3+nota4)/4

let media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length;

console.log(media);







/* Transcrição
[00:00] Juliana: Neste curso vamos começar a abordar estruturas de dados em Java script, especificamente o que chamamos de listas, ou arrays em inglês, chamamos de array também aportuguesando. Neste curso nós vamos então trabalhar com alguns desafios voltados especificamente para trabalharmos com um sistema de uma escola. Essa escola tem que calcular a média, tem que trabalhar com listas de alunos, etc.

[00:26] Juliana: Para este primeiro vídeo, esta primeira aula, essa primeira imersão neste assunto de listas ou arrays, vamos fazer nosso primeiro desafio, botar a mão na massa, que é calcular a média entre algumas notas de alunos. Vamos supor que temos um aluno e nos quatro bimestres do ano ele tirou algumas notas, 10, 6.5, 8, 7.5, nós temos que calcular a média entre essas notas e ver a média final do aluno.

[00:55] Juliana: Então, Leo, como poderíamos trabalhar com Java script para tirar essa média?

[01:02] Leonardo: Bom, Ju, primeiro vamos lembrar quais são as médias para mim. Temos as notas, que são 10, 6.5, 8, 7.5. Vamos criar uma variável então para ser a primeira nota. Vamos falar que essa nota é 10. A segunda então nota número 2 6.5. A terceira nota vai ser o 8. E a quarta nota o 7.5. Também queremos calcular a média. Então vamos criar uma variável let media = (nota1 + nota2 + nota3 + nota4)/4, vamos somar todas as notas e por fim dividimos pelo número de notas.

[02:25] Leonardo: Vamos mostrar isso em algum lugar, então console.log(media).

[02:33] Juliana: Agora nós podemos vir no terminal, entrar dentro da pasta. No caso tenho dentro da minha pasta com o nome do curso, você pode salvar onde você quiser no seu computador, tenho meu index.js onde estamos trabalhando em conjunto eu e o Leo, e vou rodar este arquivo com o comando node index.js.

[03:00] Juliana: Exibi o resultado, que é 8, que é a média das notas, aparentemente está tudo certo.

[03:05] Leonardo: Beleza, Ju, mas estamos falando de um único aluno de uma sala, e se essa sala tiver 20 alunos? Vamos ter que criar 80 variáveis? É bastante coisa para manejarmos.

[03:15] Juliana: Sim, então pensamos que tem um jeito de trabalhar com código mais estruturado, ou seja, com uma estrutura. Por exemplo, podemos criar uma lista com todas essas notas, ou com todos os alunos. Uma lista, quando falamos nesse caso é uma coleção ordenada de valores, ou seja, cada valor, no caso 10, 6.5, 8, são valores que entrariam nessa lista, nós chamamos de elemento de uma lista, só que cada um desses valores vai ter sua própria posição.

[03:58] Juliana: Leo, mostra para nós como é a cara dessa estrutura de dados para ficar mais fácil entender o que são elementos, o que falamos de posição.

[04:05] Leonardo: Tudo bem, Ju, vamos lá. Vou comentar nosso código anterior para não atrapalhar. Então, vou usar uma const, podemos usar let ou const, como já vimos em outros cursos, e agora vou colocar que vamos ter uma única variável chamada notas. E ela vai ser igual a, eu vou abrir e fechar colchetes. Vamos colocar a nota 10 e vamos colocar uma vírgula para separar. A próxima 6.5, 8 e 7.5.

[05:06] Leonardo: Coloquei um espaço, mas é só para ficar fácil de poder ler, não precisa ter esse espaço, ele não é obrigatório. E agora vamos também mudar nosso esquema de como fazemos a média para acessar somente a variável notas. Vou comentar também por enquanto, e vou colocar aqui também a média e nós vamos colocar dentro notas.

[05:36] Leonardo: Agora vamos acessar os elementos dessa lista que nós temos. É importante lembrar que a lista sempre começa com o elemento 0, então temos nosso elemento 0, que é o que vale nosso 10. E vamos continuar somando as coisas. Então, (notas[0] + notas[1] + notas[2] + notas[3]).

[06:06] Leonardo: Aqui acessamos nossos quatro elementos, igual tínhamos feito antes, mas usando uma única variável dessa vez. E por fim temos que dividir pela quantidade de elementos. No caso das listas elas trazem alguns métodos interessantes para podermos usar, algumas informações legais.

[06:25] Leonardo: Uma delas é que podemos colocar o nome da nossa lista ponto length, que é o tamanho. Agora ele vai trazer para nós o tamanho da nossa lista, ou seja, nossa lista tem quatro elementos, ele vai trazer para nós o tamanho quatro. Não temos que ficar nos preocupando com quantos elementos estamos fazendo a média das nossas notas.

[06:55] Juliana: Então podemos salvar e rodar de novo, vamos esperar que dê o mesmo resultado. Voltando ao terminal, vou apertar minha seta para cima para repetir o comando de rodar o arquivo index.js. 8, perfeito, está funcionando, mas vamos dar uma revisada no que o Leo fez para entendermos um pouco melhor o que está acontecendo.

[07:16] Juliana: O que chamamos de notação de colchete na linha 12, onde o Leo fez o cálculo das médias é como fazemos para acessar cada posição. Estávamos falando de posição de cada elemento na lista, então na const notas, que está na linha 9, cada elemento, ou seja, o 10, o 6.5, o 8, o 7.5 estão em lugares fixos, e nós chamamos esse lugar fixo de índice, cada posição é o índice, e as arrays começam no índice 0, o primeiro número do índice é 0.

[08:00] Juliana: Normalmente quando listamos algo na vida real, o primeiro item é 1, meu primeiro, meu segundo, meu terceiro, uma lista de compras, uma lista de pessoas, porém quando trabalhamos com arrays normalmente, exceto em algumas linguagens de programação muito específicas o primeiro índice tem número 0.

[08:20] Juliana: Por isso que na linha 13, o Leo, para puxar, digamos assim, o elemento com valor de 10, usou a notação de colchetes e passou o número 0. O 10 é o elemento de índice 0, o 6.5 é o elemento que está no índice 1, o 8 é o elemento que está no índice 2 e o 7.5 é o elemento que está no índice 3. Quando usamos notação de colchete o elemento que está em notas, na variável notas, entre colchetes, número 1, se refere a 6.5, que é o que está na posição 1, no índice 1 da nossa array, nossa lista chamada notas.

[09:08] Juliana: Completando, um termo que usamos muito é o ponto length, palavra difícil de falar em inglês, mas se refere ao comprimento da array, usando isso nós não precisamos saber exatamente qual o tamanho do array, não precisamos contar, nós deixamos para o Java script ver qual o tamanho, ele vai dizer para nós que são 4 aqui, porque são 4 posições, de número 0 a 3, nós vamos nos acostumando com esse 0 à medida que vamos praticando com ele, e o Java script fez todo o cálculo para nós.

[09:52] Juliana: Para começar então você pode praticar com outras arrays, outras mais quantidades de valores de números, para ir vendo o comportamento, e nos vemos no próximo vídeo.

 */

