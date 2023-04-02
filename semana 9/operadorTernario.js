const idadeMinima = 18;
const idadeCliente=16;

/* if (idadeCliente>= idadeMinima){
    console.log("cerveja")
}else{
    console.log("suco")
} */
            //condição                    //true    // false
console.log(idadeCliente>= idadeMinima ? 'cerveja' : "suco")

/* Transcrição
[00:00] Ju: Continuando com algumas particularidades do JavaScript, nós vamos ver, agora, um tipo de operador de comparação, ou seja, ele também vai retornar o verdadeiro ou falso, mas, ele é um pouco diferente.

[00:13] Ju: Ele é chamado de operador ternário. Ele não existe em muitas linguagens de programação; nós vemos ele bastante em JavaScript a partir das versões mais atuais, como a ES6.

[00:24] Ju: Léo, fala para nós o que é o operador ternário, porque ele tem uma cara um pouco diferente do normal, do que costumamos ver.

[00:33] Leonardo: Isso, a cara dele é um pouco diferente.

[00:36] Leonardo: O operador ternário é, basicamente, um if. Ele faz uma comparação, só que ele tem uma maneira especial de ser feita, de ser escrita. Então, ele faz a comparação em uma única linha, temos a comparação e as duas respostas do verdadeiro e do falso, deixando bem mais curto o nosso código. Mas, tem que tomar um pouco de cuidado, porque, às vezes, ele pode pregar um kit peça em nós, por ter a escrita reduzida.

[01:08] Ju: Vamos fazer o seguinte, vamos fazer o que sempre temos feito, escrever um pouco de código (vou compartilhar minha tela) e criar um arquivo para guardarmos o que estamos fazendo.

[01:21] Ju: Criei um novo editor, deixa eu fechar. Vou criar um novo arquivo e vou chamar esse arquivo de “ternario.js”.

[01:37] Ju: Já que o Léo acabou de falar que o ternário funciona como um if (um if, else), nós vamos descobrir se uma condição é verdadeira, se uma condição é falsa, vai agir de acordo.

[01:49] Ju: Então, vamos pensar num exemplo. Por exemplo, nós só podemos liberar; nós temos um programa e ele só vai liberar bebida se o usuário for maior de 18 anos, ou o acesso ao sistema que fornece as bebidas, a um usuário maior de 18 anos.

[02:04] Ju: Então, podemos ter o seguinte caso, nós temos uma const, que eu vou chamar de idadeMinima e eu vou passar para ela um número, 18, que é a idade mínima para se beber no Brasil.

[02:18] Ju: E eu vou criar uma outra const chamada idadeCliente; e o cliente passa essa informação. Então, vamos supor que; apesar de nesse caso podemos colocar um número direto, também. Suponhamos que nosso cliente tenha 16 anos, e está abaixo de 18.

[02:34] Ju: Se fôssemos comparar a idade do cliente que quer beber com a idade mínima, nós podemos utilizar o if, que foi o que o Léo falou que usamos para fazer condicionais. Se a condição é o que ela passa, acontece um pedaço de código, se não, não.

[02:58] Ju: if (idadeCliente >= (lembrando dos operadores, nós temos igual para comparar, maior igual, menor igual); nesse exemplo a idade tem que ser 18 ou mais, então, se a idade do cliente o valor for maior ou igual à idade mínima idadeMinima) para beber, nós dizemos o que nosso programa vai fazer.

[03:23] Ju: Ele pode fazer qualquer coisa que esteja entre as chaves, no bloco de código. No nosso caso, vamos só exibir no console.log a opção dele, que é (“cerveja”). Se, else, é outra condição que não for idade mínima, qualquer outra condição que não for idade mínima, ou seja, não importa se ele tem de 17 para baixo, o resultado vai ser o mesmo. Vamos exibir no console.log a opção (“suco”). Ou seja, ele não está liberado para beber.

[03:50] Ju: Esse é um if clássico. Nós o vemos na maior parte das linguagens de programação que trabalhamos comercialmente na web.

[03:58] Ju: Então, vamos testar esse código? Eu vou no terminal rodar com o node ternário.js. No caso, a opção é suco, porque eu determinei que o valor da minha variável idadeCliente é 16. Ou seja, ela não é maior ou igual a idade mínima.

[04:20] Ju: O código não entrou no bloco do console.log(“cerveja”), ele foi direto para as outras condições, para o else, que é quando você não passa no if, a condição não vai.

[04:34] Ju: Esse é um if clássico, sem nada a acrescentar. Então, como funcionaria essa estrutura que você falou que dá para fazer tudo. Dá para fazer estrutura com o ternário e ficar um código de uma linha só, é isso?

[04:54] Leonardo: Exatamente, Ju. Essas cinco linhas nós vamos colocar tudo em uma linha só, agora.

[04:57] Leonardo: Ju, vamos começar direto com o console.log, que vai ser nossa saída.

[05:04] Ju: Certo. Então, as constantes ficam nas primeiras linhas, porque são elas que vamos usar para comparar. Vamos fazer o seguinte, eu vou comentar o trecho de código inteiro da linha 4 à linha 8, usando o “CTRL+BARRA”, que é o atalho. E vamos lá, vamos começar pelo console.log, que é onde vai dar a saída, abre e fecha parênteses.

[05:31] Leonardo: E agora, nós fazemos a nossa comparação, igual fizemos em tudo if, (idadeCliente >= idadeMinima).

[05:40] Ju: Certo. Então, eu já passo a comparação direto console.log(idadeCliente >= idadeMinima).

[05:55] Leonardo: Temos a nossa comparação. Agora, damos um espaço o coloca um ponto de interrogação.

[06:02] Ju: Ponto de interrogação, certo.

[06:07] Leonardo: Agora, temos a base do nosso operador ternário. Em seguida, vamos colocar na mesma ordem do if, o que vai ser executado, caso seja verdadeiro; então, no nosso caso queremos incluir cerveja, e colocamos dois pontos, caso seja falso.

[06:28] Ju: Caso dê falso, é suco. Só isso?

[06:33] Leonardo: Só isso.

[06:35] Ju: É uma estrutura bem diferente. Vamos rodar para ver se continua tudo certo?

[06:42] Ju: Vou limpar o meu terminal e rodar o meu programa, de novo. Continua dando suco, continua dando certo.

[06:49] Ju: Vamos fazer mais um teste? Eu vou passar idadeCliente para = “19”, só para testarmos o outro lado. Agora, tem que mudar para cerveja, porque o nosso cliente tem mais de 18 anos. Deu cerveja! Certo.

[07:07] Leonardo: O operador ternário agora está funcionando igual ao if, no mesmo esquema do if.

[07:15] Leonardo: Nós temos que tomar um pouco de cuidado com ele, porque é possível você achar o operador ternário, dentro de um operador ternário, e acaba sendo muito difícil de ler este tipo de código.

[07:27] Leonardo: Vamos acabar demonstrando na aula, porque ele é realmente bem difícil de ler e não é recomendado você fazer isso.

[07:33] Leonardo: Quando for colocar várias condições dentro de condições, faça com if, que é mais fácil de você conseguir ler e da manutenção desse código depois. Essa é uma dica de boa prática.

[07:45] Ju: Nós podemos dizer que uma boa prática é quando você vai fazer comparações que são mais curtas, não exigem, não tem, por exemplo, tanta instrução para ser feito em cada caso. Se for só para retornar uma coisa, retornar outra coisa, aí para encurtamos o código é uma boa prática usar o ternário, embora ele tenha uma estrutura um pouco diferente, fica um pouco mais conciso, mais curto.

[08:13] Leonardo: Exatamente. Agora já vimos o operador ternário funcionando, vamos entender um pouco melhor como funciona. Antes do nosso ponto de interrogação nós temos a nossa condição. Nesse caso, é a idadeCliente >= idadeMinima. Depois disso, vamos ter nossas saídas, que são: primeira saída se for verdadeiro, se for true e depois, a saída se for false, separadas pelos dois pontos.

[08:41] Leonardo: Não é difícil de ser lido ou desconstruído, mas, tem que tomar um pouco de cuidado.

[08:46] Ju: Certo. Todo o trecho antes da interrogação é a comparação que vai ser feita. Na hora de construirmos essa comparação, temos que ter cuidado com a syntax, para que o JavaScript não fique confuso com o que está acontecendo nessa parte do código.

[09:07] Leonardo: Exatamente. É sempre muito importante tomar esse cuidado.

[09:12] Ju: E por que chama operador ternário e não if?

[09:18] Leonardo: Por que chama operador ternário? Vamos dar uma olhada no nosso código e vamos ver quantos operadores temos em cada linha, executando algum comando.

[09:27] Leonardo: De início, temos nossa constante com um operador de igual, que é para defender o valor. Na linha 2 também temos uma constante com um operador de igual. O nosso if tem um operador de comparação.

[09:41] Ju: Certo, maior ou igual, não é?

[09:42] Leonardo: Nossos consoles não tem nenhum operador. Agora, damos uma olhada no nosso operador ternário e temos três operadores na mesma linha, que é o operador de comparação.

[09:56] Leonardo: O operador que é para separar as duas partes da nossa comparação, que é o nosso código a ser executado e a nossa comparação. E os dois pontos que separa as duas partes dos nossos resultados, que são o true e o nosso false.

[10:14] Leonardo: Então, como temos três operadores, nós temos o nome de ternário.

[10:20] Ju: Certo. Então, definimos de acordo com a quantidade de operadores que está sendo utilizado, no caso. Tudo para juntar e no final; combinam todas essas expressões, no caso 3 em uma só, que vai ser o resultado final disso, no caso é o true ou o false; true ou false não, no caso, é ou cerveja ou suco, que é o que estamos pedindo que seja a saída no nosso console.

[10:48] Leonardo: Tem alguma coisa para adicionar, Ju?

[10:50] Ju: Por enquanto, não. Nós vamos, provavelmente, ver mais sobre ternários e você vai encontrar eles muitas vezes durante a sua vida, desenvolvendo o JavaScript. Mas, por enquanto, eu acho que está bom.

[11:06] Leonardo: Então, até a próxima!

[11:08] Ju: Então, até o próximo vídeo! */