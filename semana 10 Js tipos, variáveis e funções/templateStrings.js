
const nome = "ju  ";
const idade = 2021-1989;
const cidadeDeNascimento= 'rio de janeiro';

/* const apresentacao =" eu nome é " + nome + " minha idade é " + idade + " sou da cidade de " + cidadeDeNascimento;
console.log(apresentacao); */

const apresentacao =`Meu nome é ${nome},  minha idade é ${idade} e sou da cidade de ${cidadeDeNascimento} `;
console.log(apresentacao)



/* Transcrição
[00:00] Ju: E vamos nós para mais um vídeo sobre coisas particulares, ou quase particulares, do JavaScript.

[00:07] Ju: Dessa vez, nós vamos voltar, um pouco, onde trabalhamos com tipos string e vamos ver mais uma forma de se trabalhar com tipos string no JavaScript.

[00:20] Ju: Compartilhando a tela, abrindo mais um arquivo, que eu vou chamar de “template-strings.js”, que é o nome da ferramenta que vamos trabalhar agora.

[00:40] Ju: O que é uma template string? Template é uma tradução de modelo, então, é uma string modelo.

[00:49] Ju: Você não precisa se atentar muito à tradução do nome; vamos ver como funciona.

[00:54] Ju: Vimos em outra aula que conseguimos concatenar string, ou seja, se eu tiver uma const nome e disser que, por exemplo, é = “Ju”, que é meu nome, eu posso criar textos utilizando variáveis e inserir essas variáveis umas com as outras.

[01:14] Ju: Ou seja, eu posso criar uma outra const e chamar de const apresentacao e dizer que = “meu nome é”, entre strings, e adicionar o valor dessa variável onde eu guardei meu nome, utilizando o operador de adição, utilizando o mais. Então, o mais, ao invés de somar números, ele também pode concatenar (que é a expressão que usamos) strings.

[01:42] Ju: Então, eu concateno a string = “meu nome é” com o valor da variável nome. E se eu pedir para o console.log amigo imprimir na tela o valor de const apresentacao; vamos rodar com o node template-strings e resulta em meu nome é Ju.

[02:05] Ju: O mesmo operador que faz soma de número também concatena strings; uma forma que já vimos um pouco anteriormente.

[02:17] Ju: Já vimos concatenação de strings, normal. Então, o que é a template string?

[02:25] Ju: Ela surgiu para facilitar a questão de concatenação, porque, dependendo da quantidade de variáveis que você quer juntar, tudo começa a ficar muito embolado.

[02:35] Ju: Vamos ler um exemplo um pouco mais complexo.

[02:39] Ju: Eu tenho minha const nome = “Ju” e vou adicionar mais algumas.

[02:43] Ju: Vamos adicionar minha const idade; lembrando que as variáveis também podem salvar resultados de operação, então, a const idade pode salvar um número com uma idade ou o valor de uma operação, por exemplo, 2021, que é o ano que estamos gravando este curso, com 1981, que é a minha data de nascimento. Então, o resultado será guardado numa variável chamada idade.

[03:09] Ju: E uma outra const, que eu vou chamar de cidadeDeNascimento e eu vou escrever uma string ”São Paulo”.

[03:17] Ju: E como ficaria, agora, a minha apresentação?

[03:22] Ju: A minha const apresentacao, agora, ficaria: = ”meu nome é” + nome e para eu adicionar as outras informações, eu tenho que ir adicionando mais strings e adicionando mais concatenações com operadores.

[03:40] Ju: Então, + nome +, abro mais uma string e eu quero uma vírgula, então, tenho que colocar uma vírgula dentro da string e ”,minha idade é”, espaço, concateno, novamente, com o valor da variável + idade mais o restante da string, então, abro aspas, de novo, “e nasci na cidade de”.

[04:13] Ju: E concateno, novamente, para adicionarmos o valor da variável + cidadeDeNascimento e, aí sim, console.log no valor da variável nascimento, que agora está guardando uma string bem grande.

[04:26] Ju: Vamos rodar, novamente, node template-strings.js e apareceu meu nome é Ju, minha idade é 40 e nasci na cidade de São Paulo é a string enorme, que fizemos juntando todos esses pedações de string com pedaços de variáveis diversas.

[04:41] Ju: Só que isso é muito complicado, porque temos que tomar muito cuidado com todos os espaços, as vírgulas e de colocar os mais entre variável, etc. Então, fica bem mais complexo de ler, de encontrar as variáveis no meio e faz nos perder.

[05:01] Ju: Léo, o que fazemos? Como a template string veio para nos ajudar a resolver essa questão, porque com o JavaScript quando surgiu, trabalhava com muitos textos para web, então, como resolvemos essa questão?

[05:19] Leonardo: Vamos resolver essa questão com a template string.

[05:21] Leonardo: Na template string nós vamos escrever nossa string normal, só que invés de ficarmos concatenando, todos esses mais, na hora que formos colocar o valor da nossa variável, nós vamos colocar o símbolo do cifrão, do símbolo de dólar e abre e fecha chaves.

[05:50] Leonardo: Então, Ju, vamos recriar essa apresentação, só que agora usando template string para ver como ela fica mais organizada. Pode ser?

[05:56] Ju: Pode ser. Eu vou recriar a nossa const apresentacao. As variáveis que definimos com as informações permanecem; elas que vamos usar para colocar as informações variáveis.

[06:09] Ju: Então, const apresentacao=; vamos fazer o seguinte, eu vou só criar string, vamos criar string, normalmente, colocando um “X” no lugar onde vai entrar as variáveis, só para definirmos. Acho que vai ficar mais fácil de entendermos.

[06:24] Ju: ”meu nome é XXX, minha idade é XXX e nasci na cidade de XXX”. É isso que queremos escrever no final, não é?

[06:42] Leonardo: Exatamente.

[06:43] Ju: E como que transformamos essa string normal, que por enquanto, se rodarmos no terminal, ela vai escrever como está (“XXX”). Como transformamos ela?

[06:57] Leonardo: Então, Ju, a primeira coisa que precisamos fazer para transformar essa string numa template string é trocar as aspas duplas pelo acento grave.

[07:08] Ju: Certo. Lembrando, acento grave é o que usamos para escrever crase, não é? É um acento inclinado para a esquerda.

[07:18] Ju: Troquei as aspas do começo e do final da string por acento grave. Por enquanto, não mudou nada.

[07:24] Leonardo: Por enquanto, ela ainda é uma string. Vamos começar, agora, a colocar os valores das variáveis dentro dessa string.

[07:34] Ju: Certo. Então, a primeira variável que temos que trocar é nome, que está XXX.

[07:40] Leonardo: Exatamente. Vamos trocar pelo símbolo do dólar e depois abre e fecha chaves e a nossa variável dentro dela.

[07:51] Ju: meu nome é ${nome}; certo.

[07:52] Leonardo: É só repetirmos esse processo em todas as variáveis. Então, minha idade é ${idade}` e `nasci na cidade de`, tiramos os três “X” `${cidadeDeNascimento}.

[08:13] Ju: Vou rodar o console, novamente, e ver se deu tudo certo. Rodar o console não, rodar no terminal o node template-strings.js. meu nome é Ju, minha idade é 40 e nasci na cidade de São Paulo. Perfeito.

[08:27] Ju: Bacana que agora nós podemos ver que além de ser mais fácil de escrever, mais fácil de encontrar as variáveis e a leitura fica mais fluida, também, porque conseguimos ler o que está acontecendo. Onde estão as vírgulas, onde estão os espaços e conseguimos, também, nesse caso, quebrar linhas. Ele aceita quebra de linha.

[08:49] Leonardo: Aceita quebra de linha nesses casos.

[08:53] Ju: Essa é a tal da template string. É a terceira forma de escrevermos string, que é aspas simples, aspas duplas e, agora, no final, a terceira forma com acento grave, que utilizamos para fazer esse tipo de concatenação, que é novo. Esse tipo de concatenação é relativamente novo, ele vem a partir do ES6 e facilitou bastante a vida de quem tem que trabalhar com vários trechos de textos de strings e juntar eles, concatenar.

[09:27] Leonardo: É muito importante lembrarmos que, não obrigatoriamente, todas as strings com acento grave são template strings; elas ainda podem ser tratadas só como strings.

[09:40] Ju: Certo. Eu não tenho mais, por enquanto, nenhuma dúvida sobre template string, agora é praticar, não é?

[09:47] Leonardo: Muito importante.

[09:50] Ju: Então, ficamos por aqui e até o próximo vídeo. */