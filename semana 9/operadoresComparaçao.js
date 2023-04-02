
// == comparação implicita

const numero = 5;
const texto = "5";

console.log (numero === texto)

// typeof
console.log(typeof numero)
console.log(typeof texto)

// == só compara o valor 
// === compara o valor e o tipo de dados

// conversão explicita

Number()
String?()

/* Transcrição
[00:00] Ju: Nesse vídeo, nós vamos ver mais uma característica que é do JavaScript e é diferente da maior parte das linguagens que trabalhamos comercialmente, que é os dois iguais, os três iguais, que já pincelamos nos vídeos anteriores, que são operadores de comparação.

[00:17] Ju: Léo, fala um pouco para nós do que é essa questão de dois iguais, três iguais, que, às vezes, causa confusão para quem está começando e como trabalhamos com esses dois casos.

[00:29] Leonardo: Ju, o JavaScript tem essa diferença entre o dois iguais e o três iguais. O dois iguais faz a comparação e faz aquela conversão implícita, que já demos uma olhada antes, antes de fazer essa comparação. O três iguais é mais específico, ele sempre compara os valores sem fazer essa comparação antes.

[00:50] Leonardo: Então, um número e uma string não são iguais quando usamos o três iguais. Vamos testar agora?

[00:59] Ju: Vamos. Eu vou compartilhar a minha tela, vou fazer o que temos feito anteriormente, que é criar mais um arquivo que eu vou chamar de “comparacoes.js” e vamos lá.

[01:16] Ju: Nós temos a questão do igual igual. Nós chamamos de dois iguais, mas, é igual igual, que é a comparação implícita. Vamos lá, Léo, vamos fazer alguns exemplos?

[01:30] Leonardo: Vamos, Ju. Vamos começar declarando algumas variáveis, uma de tipo número e uma de tipo string.

[01:40] Ju: Então, crio uma const numero, pode colocar qualquer número?

[01:47] Leonardo: Qualquer número.

[01:48] Ju: Vou colocar 5 e uma const texto que eu vou colocar entre aspas Alura ou tem que ser a mesma coisa? Ou pode ser um texto qualquer?

[01:57] Leonardo: Pode ser um número. Coloca o mesmo número, por enquanto.

[01:59] Ju: O mesmo número. Então, ”5”, entre aspas para virar uma string.

[02:08] Leonardo: Ok. Vamos fazer, agora, o nosso console.log com a nossa comparação dentro dele e usar os dois iguais, o que já fazíamos antes.

[02:16] Ju: Ok. Então, console.log(numero == texto). O que esperamos é, lembrando que o resultado de uma comparação é ou não é, ela é verdadeira ou falsa, ela é true ou false, então, para rodar nós entramos na pasta (como temos feito com os vídeos anteriores) cd 2206, que é o nome da minha pasta, e vou rodar o comando com o node e o nome do arquivo, que é comparacoes.js.

[02:45] Ju: O resultado é true.

[02:49] Leonardo: True. Então, como já vimos antes, o JavaScript fez a conversão do nosso texto para um número e fez a comparação entre o número 5 e, agora, o texto que virou número “5”. Então, 5 é igual á “5”, então, é true.

[03:03] Leonardo: Vamos fazer agora a comparação explícita, usando os três iguais.

[3:09] Ju: Ok. Eu vou usar o mesmo console.log e agora vou colocar (numero === texto). Vou limpar o terminal e rodar o mesmo comando, e agora ele não aceita, deu false.

[03:22] Leonardo: Deu false. Por que? Porque ele não faz essa conversão automaticamente para nós. Nesse caso, nós ficamos para fazer essa conversão de forma manual.

[03:35] Leonardo: Um outro jeito que podemos fazer isso, que podemos ver esses três iguais, é quando ele está comparando os valores das nossas variáveis e os tipos das nossas variáveis. Então, Ju, vamos dar uma olhada nos tipos delas, também, com o type of?

[03:51] Ju: Certo. Nós usamos uma palavra-chave, que chama, inclusive, typeof, tudo junto, tudo minúsculo, que é muito útil para descobrirmos qual o tipo de dado que está sendo salvo na variável. Vamos tentar colocar console.log e pedir para ele nos dizer qual que é o type of de cada uma?

[04:20] Leonardo: Isso.

[04:21] Ju: Eu vou escrever dois consoles. Um console.log(typeof numero) e um console.log(typeof texto). Nós limpamos o console e rodamos, novamente.

[04:36] Ju: Agora, ele nos dá duas informações: um number e uma string. O que são, o que ele está dando para nós, exatamente? Qual é o tipo de dado?

[04:45] Leonardo: Ele está nos dando qual o tipo de dado essa variável está armazenando.

[04:49] Leonardo: Como o três igual está comparando o valor das nossas variáveis, então, 5 é igual à “5”, mas, número não é igual à string, então, ele dá como falso.

[05:02] Ju: Ok. Então, podemos concluir que dois iguais compara só o valor e três iguais compara o valor e o tipo de dado, não é?

[05:11] Leonardo: Exatamente.

[05:12] Ju: E se não bater tudo, ele não vai dar true. Perfeito.

[05:18] Ju: Léo, é indicado nós utilizarmos, hoje em dia; eu sei que o JavaScript surgiu com essa questão do dois iguais, do três iguais; mas, hoje em dia o dois iguais ainda é utilizado ou as boas práticas falam mais para usarmos só o três iguais?

[06:36] Leonardo: Ainda tem códigos que utilizam o dois iguais, mas, as boas práticas pedem para utilizamos o três iguais e quando for fazer conversão, fazer de modo explícito. Então, usar string ou usar o number, usar essas funções dentro de conversão.

[05:53] Ju: Certo. Aqueles que já vimos nos vídeos anteriores, usando o number e o string.

[06:00] Leonardo: Exatamente.

[06:02] Ju: Acho que agora já ficou um pouco mais claro o que é o dois iguais e o três iguais. Eu não tenho mais nada para acrescentar, ficou faltando algum detalhe?

[06:14] Leonardo: Creio que seja isso para esse vídeo, Ju.

[06:16] Ju: Então, ficamos por aqui com essa questão. Lembrando que várias coisas que começamos, nós voltamos nelas mais para frente, pode ser que volte.

[06:25] Ju: Mas, por enquanto é isso e nos vemos no próximo vídeo */

/* Para saber mais: Mais sobre operadores
PRÓXIMA ATIVIDADE

Até agora praticamos com alguns dos operadores do JavaScript, especialmente alguns dos utilizados em operações matemáticas:

nome	operador
Operador de adição	x + y
Operador de subtração	x - y
Operador de multiplicação	x * y
Operador de divisão	x / y
Começamos com os operadores mais utilizados, pois sempre que aprendemos uma linguagem de programação nova, o melhor é absorvermos mais conhecimentos aos poucos sobre cada assunto, em vez de tentar dominar tudo de uma vez.

Porém, a lista de operadores é extensa e há muitas formas de utilizá-los. Além das operações matemáticas básicas, do = para atribuição de valor em uma variável e das comparações com == e ===, utilizamos operadores para diversas outras tarefas de código, por exemplo:

||: Operador “ou”, retorna true caso uma condição seja válida;
&&: Operador “e”, retorna true somente se todas as condições forem válidas;
!= e !==: Operadores “não igual” e “estritamente não igual”, utilizados para comparação, da mesma forma que == e === retornam true ou false.
A documentação do MDN sobre operadores tem a lista completa, com vários exemplos. Invista um tempo para se familiarizar com cada um deles e tente pensar em exemplos de uso para cada um. */