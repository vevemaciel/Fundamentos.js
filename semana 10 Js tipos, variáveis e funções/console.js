// log -> registro

const minhaVar = true;

console.log(245)
console.log("txtx")
console.log(minhaVar)


/* Transcrição

[00:00] Ju: Desde o começo do curso, nós viemos utilizando uma palavra chave, duas palavras chave, na verdade, e elas estão passando batidas, não é, Léo? Que é o “console.log”, o tal do “console.log”.

[00:14] Ju: Mas, o que é essa ferramenta? Quando começamos a aprender código, é normal que nós façamos algumas coisas sem focar no que ela significa, só usando. Mas, essa curiosidade de descobrir, entender, realmente, o que faz por baixo dos panos é crucial para que nós aprendamos, cada vez mais, em programação.

[00:36] Ju: O Léo vai nos guiar para entendermos um pouco melhor o que é o console e o que é o log e porque as coisas aparecem na tela para nós.

[00:46] Ju: Eu vou criar um novo arquivo, vou chamar de “console.js”.

[00:59] Leonardo: Vamos começar entendendo um pouco o que é um “console”, porque colocamos isso no “console.log”.

[01:04] Leonardo: O console é uma ferramenta que tem tanto no Node, que estamos usando, quanto nos navegadores e usamos ele para colocar frases para fora, os dados, de uma forma geral, para fora da nossa aplicação. De uma forma que não apareça, diretamente, para o nosso usuário, mas, ele tem acesso, caso ele precise.

[01:28] Leonardo: No caso, estamos usando sempre o console.log. O que é esse “log”, no final? É um registro. Estamos criando um registro no nosso console e podemos colocar qualquer informação dentro desse registro, podendo ser um número, uma string, uma variável, o que quisermos.

[01:53] Ju: Eu vou criar três consoles.log, um com um número, o outro com uma string ”Eu sou um texto”, entre aspas, e uma variável, que eu vou chamar de minhaVar, mas, que para isso funcionar, a minhaVar precisa existir. Então, vou criar uma const, vou chamar de minhaVar e vou atribuir a ela o valor de = true.

[02:21] Ju: Uma vez que fazemos isso, esperamos que no console.log seja exibido o valor da variável, que é true. Então, lembrando que começou um registro e o terminal vai só exibir o que ele encontra de valor dentro dos parênteses.

[02:42] Ju: Eu vou rodar node console.js. É isso, Léo?

[02:52] Leonardo: É isso mesmo.

[02:53] Leonardo: Nós estamos sempre usando o log, mas, tem algumas outras opções. Nós podemos ver; Ju, você pode abrir para nós a documentação do Node, em relação ao console?

[03:03] Ju: Ok. Deixa eu encontrar a documentação do Node.

[03:07] Ju: Essa documentação do Node, com tudo que precisamos saber de console, está listada. Então, tem “console.log”, mas, além disso, console tem mais um monte de outras coisas.

[03:24] Leonardo: Tem bastante coisa a mais. Nós vamos focar na aula, principalmente, no “console.log”, que é o que estamos usando há bastante tempo. E também vamos falar, um pouco, sobre o “console.error”, que usamos, principalmente, quando queremos descrever algum erro que nossa aplicação pode ter encontrado.

[03:43] Leonardo: Vamos colocar alguma frase, alguma coisa e depois nosso código de erro. Ou seja, queremos colocar algum erro pré-definido na nossa aplicação. Nós sabemos que se o usuário colocar algum dado, isso pode gerar algum erro.

[03:55] Ju: Certo. Então, quer dizer que os erros que aparecem para nós, quando erramos alguma coisa no nosso programa, foi outra pessoa lá no time de desenvolvimento da linguagem que fez o que chamamos de tratamento de erro?

[04:15] Ju: Ou seja, quando estamos desenvolvendo uma solução, uma aplicação, um programa ou uma nova linguagem de programação, somos nós que fazemos essa parte. Nós que decidimos qual de todos esses métodos vamos utilizar: console.error, console.warn, console.clear, tem vários, é uma lista grande.

[04:45] Ju: Quando que vamos utilizar, para passarmos para quem está utilizando a ferramenta, se algo acontece como a mensagem vem, se a mensagem é um erro, como esse erro vai ser passado (inclusive o texto), para a pessoa entender bem qual é o erro que ela está recebendo, que é o que fazemos.

[05:01] Ju: E como nós mostramos um erro para entendermos melhor? Porque você, quando estiver desenvolvendo as suas aplicações, vai ter que lembrar do tratamento de erro e você também vai ter que avisar seus usuários se eles fizerem alguma coisa que não está de acordo com o que você espera, com o que o programa está esperando.

[05:22] Ju: Então, como faz, Léo?

[05:24] Leonardo: No caso, vamos usar o console.error e dentro dele nós vamos colocar o nosso erro, em si. Ju, você pode criar esse erro para nós? Essa mensagem de erro para nós?

[05:39] Ju: É só criar uma mensagem dizendo que deu erro e funciona?

[05:45] Leonardo: Funcionar, funciona. No caso do Node, como estamos usando o terminal para a saída dele, então, não vamos ter diferença de cor, nada do gênero, porque o nosso terminal não suporta isso.

[05:58] Leonardo: Porém, nós depois vamos entrar mais a fundo para vermos como conseguimos criar erros mais elaborados, de forma mais difícil, que fique mais explicativo o que está acontecendo de erro.

[06:09] Ju: Certo. Por enquanto eu deixo assim? Só console.error e eu posso rodar?

[06:15] Leonardo: Por enquanto, você pode deixar assim e pode rodar.

[06:17] Ju: Eu vou comentar os consoles.log anteriores e vou rodar. ”deu erro”. Eles exibiram no nosso terminal o que passamos, uma string só escrita (”deu erro”), que passamos entre parênteses.

[06:33] Leonardo: Nesse caso, nós mandamos ele, simplesmente, exibir para nós essa mensagem de erro, então, era esperado que aparecesse só isso. Mas, nós depois podemos complementar com stacktrace, com algumas outras opções que vamos ver um pouco mais para frente. Ou melhor, que já vimos no curso.

[06:57] Ju: Por enquanto, nós já sabemos o que é o console.log, que ele é só um registro do que passamos entre os parênteses. Pode ser tanto um dado quanto uma variável.

[07:10] Ju: E tem console.error, que já vimos console.error em funcionamento. Já vimos a stacktrace, que é resultado de um erro quando ele é chamado do jeito certo, que vamos ver mais para frente. O que mais? Tem mais alguma coisa que podemos falar de erros, nesse momento, Léo? Sobre erros não, desculpa, sobre console.

[07:35] Leonardo: É sempre uma boa prática nós utilizarmos o console, tanto quanto log quanto error, para sair da nossa aplicação, para sempre sabermos o que está acontecendo dentro dela. Já que se ela, simplesmente, entra, executa e sai, nós não sabemos se teve algum problema no meio. Ás vezes, uma conta entra um dado errado, então, é sempre bom termos esse feedback da aplicação, para sabermos o que está acontecendo.

[08:06] Ju: Certo.

[08:07] Leonardo: É sempre bom nós colocarmos na nossa aplicação e nós sempre esperamos que isso esteja nos módulos e bibliotecas que vamos utilizar, que vamos usar um pouco mais para frente na aula.

[08:19] Ju: Essa questão não vamos abordar neste curso mais afundo, a questão do tratamento de erro, mas, é um daqueles termos que você anota no seu caderno que vai ser muito importante você ter em mente na sua carreira, quando estiver estudando, para conseguir criar as suas aplicações. Certo?

[08:39] Leonardo: Certo, Ju.

[08:41] Ju: Eu não tenho mais nada a acrescentar, por enquanto. Léo?

[08:47] Leonardo: Por enquanto, eu acho que é isso.

[08:49] Ju: Então, ficamos por aqui e até o próximo vídeo.

[08:52] Leonardo: Até! */

/* Faça como eu fiz: Usando o console.error()
PRÓXIMA ATIVIDADE

Se você já tiver feito algum teste de console.log() utilizando o navegador, possivelmente já viu os métodos console.error() e console.warn() em ação, pois nos navegadores esses métodos são identificados com as cores vermelho e amarelo e emojis.

Quando trabalhamos com NodeJS a “saída padrão” é o terminal e não o console do navegador, o que limita um pouco o uso de recursos gráficos. Vamos fazer um teste com o método console.error().

Crie um arquivo .js em seu computador, escreva o seguinte código:

console.log("deu erro");
console.error("deu erro");COPIAR CÓDIGO
Se executarmos este código com node script.js (não esqueça de conferir se está executando o comando dentro da pasta/diretório certo), o resultado é o mesmo para os dois comandos:

deu erro
deu erroCOPIAR CÓDIGO
Então não faz diferença usar um ou outro?

Faz, sim. Porém, como em qualquer linguagem de programação, é normal que alguns métodos só funcionem da forma que esperamos se fornecermos os dados necessários da forma correta.

Vamos tentar novamente, passando uma informação um pouco diferente para console.error():

console.log("deu erro");
console.error(new Error("deu erro"));COPIAR CÓDIGO
Se executarmos este código, o resultado agora é diferente:

deu erro
Error: deu erro
    at Object.<anonymous> (/home/juliana/Documents/alura/2206-fundamentosjs/comparacoes.js:21:15)
    at Module._compile (internal/modules/cjs/loader.js:1076:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1097:10)
    at Module.load (internal/modules/cjs/loader.js:941:32)
    at Function.Module._load (internal/modules/cjs/loader.js:782:14)
    at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:72:12)
    at internal/main/run_main_module.js:17:47COPIAR CÓDIGO
O que vimos acima - a palavra-chave new seguida de Error com inicial maiúscula - é um gostinho de como trabalhamos com classes em JavaScript. */

/* O que aprendemos?
PRÓXIMA ATIVIDADE

Nesta aula vimos:
As características principais do  JavaScript, como ser uma linguagem interpretada e dinamicamente tipada.
Que o NodeJS é um interpretador de JavaScript para backend, ou seja, não executa no navegador, mas sim no servidor.
Como ler os erros que aparecem no console da aplicação, podendo usar um tradutor, como o Google Tradutor, para entender o que o erro está avisando.
O que é stacktrace, também chamado de pilha, que nos auxilia a saber o que está acontecendo quando temos um erro, e onde ele se localiza.
O que é o Console API e como podemos utilizá-lo usando o console.log() e console.error().
Onde as mensagem do console devem aparecer dependendo do interpretador que estamos usando, sendo que para o NodeJS as mensagens são mostradas no terminal */ */