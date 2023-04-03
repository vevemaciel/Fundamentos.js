// //let x = "";
// console.log(x);
// x="oi"

// 1º MODELO DECLARAÇÃO DE FUNÇÃO
// 1º declara a funçaõ
                          //2 -> valor de soma()
   function imprimeTexto(texto){
      console.log(texto)
    }           

// 2º executa  a função (1 ou + vezes)

imprimeTexto(soma());
//imprimeTexto (`outro texto`);

// tres formas de escreves funções:

function soma(){
    //pode ter outros codigos
    //varios console.log
    return 2+2; // porém o returno deve ser o ultimo da função, senão não será executado
}
// console.log(soma())
            


/*Transcrição
[00:00] Ju: Nos vídeos anteriores, eu e o Léo fomos mostrando algumas partes que são essenciais, partes fundamentais para nós começarmos a trabalhar com uma linguagem de programação, pelo menos, uma linguagem de programação mais moderna, mais comercial, das mais utilizadas.

[00:15] Ju: Começamos, então, com tipos. Falamos de tipo booleano, tipo número, tipo string, deixamos material extra sobre outros tipos. Como criar variáveis, o que são variáveis, como trabalhamos com elas. Trabalhamos, também, com operadores; operador de conversão, operador de concatenação, soma, operações matemáticas, entre outras coisas.

[00:39] Ju: Agora, vamos juntar tudo num bloco que é muito importante estudarmos com calma, que são as funções.

[00:49] Ju: Eu vou criar; antes de tudo eu vou compartilhar a minha tela; vamos trabalhar um pouco para entender o que são as tais das funções. “funcoes.js”, estou criando já o arquivo.

[01:04] Ju: As funções, nós trabalhamos com elas, basicamente, em toda a linguagem de programação que trabalhamos, hoje em dia. Não consigo pensar em nenhuma que não utilize, se tiver alguma o Léo me fala.

[01:15] Ju: Mas, por que precisamos de funções? Por que elas são tão importantes?

[01:22] Ju: Vamos pensar num pedaço de código, num trecho de código. Eu vou criar uma let, lembrando que let é um tipo de variável que conseguimos reatribuir, trocar o valor dela. Vou chamar de let x, a letra “X”, e eu vou passar para ela uma string vazia, ou seja, só vou abrir e fechar aspas.

[01:48] Ju: Depois disso, console.log(x), e logo em seguida, na terceira linha, eu vou reatribuir ao valor dessa let uma outra string, só que, agora, invés de uma string vazia eu vou passar ”oi”, uma string só com o texto oi.

[02:08] Ju: Se nós rodarmos esse pequeno trecho de código, eu vou rodar com o node funcoes.js; ele não exibiu, estou na pasta errada. Vou rodar esse código com onode funcoes.js` e ele deu espaço porque ele tentou exibir o valor da string “x”, mas, é uma string vazia.

[02:35] Ju: Ou seja, o que aconteceu? Eu reatribuí na linha 3, depois da linha do console, eu estou reatribuindo “oi” à essa variável x. Só que o JavaScript executou uma linha depois da outra. Então, ele executou a primeira linha, criou a variável, executou a segunda que eu chamei o console e reatribuiu; só depois que exibiu no terminal, ele reatribuiu para a variável x o valor de ”oi”.

[03:01] Ju: O que acontece? Se vamos escrevendo o código numa linha embaixo da outra, nós não temos como avisar ao JavaScript, ou qualquer linguagem de programação, que horas queremos que determinado trecho de código aconteça.

[03:14] Ju: Isso é um problema, porque o código é um programa. Ele precisa de informações vindas de várias partes e não podemos deixar um pedaço de código, que depende de uma parte, rodar antes que ela chegue.

[03:26] Ju: Ou seja, eu não posso pedir para um programa rodar uma informação que depende do usuário, se o usuário, por exemplo, não preencher a senha dele.

[03:36] Ju: Como resolvemos isso? A função, ela isola e permite que fechemos um bloco de código (vamos ver como isso acontece) e podemos dizer, exatamente, quando queremos que esse pedaço de código seja executado.

[03:53] Ju: Então, se eu quiser mudar, fazer isso de uma forma diferente, eu uso a palavra-chave function, de função, eu dou à ela um nome (eu vou, por enquanto, comentar o trecho anterior; as três linhas anteriores) eu vou chamar de function x. Eu vou dizer que essa função x, entre parênteses, ela vai receber um nome, essa função x vai receber uma string de texto.

[04:25] Ju: Eu vou colocar que ela recebe um (texto), abre e fecha chaves, e, aí sim, console.log no valor de texto, que é o valor que vai ser recebido.

[04:38] Ju: A estrutura da função é essa. Nós colocamos o nome dela, nós escrevemos a palavra função, na verdade, dá um nome para ela, que eu dei x, mas, eu vou dar um nome melhor; vou dizer que o nome dessa função é imprimeTexto.

[04:54] Ju: E eu vou dizer que para essa função conseguir rodar, ela precisa receber uma informação. Lembra que falamos sobre as funções poderem receber informações vindas de outros lugares e, aí sim, serem executadas? Ela vai receber um texto, vai receber uma string.

[05:18] Ju: Entre abre chaves, fecha chaves; lembrando que isso é um bloco de código; nós podemos dizer o que queremos que aconteça, no caso, console.log no valor que essa função vai receber.

[05:36] Ju: Léo, o que você acha que vai acontecer se eu rodar com o node funcoes.js?

[05:41] Leonardo: Se você rodar agora, imagino eu que não vá imprimir nada; você não está passando nada para essa função imprimir na tela.

[05:48] Ju: Exatamente! Se eu rodar, não acontece nada. Não dá erro, também, porque não tem erro no código.

[05:55] Ju: O que acontece é que a função tem dois momentos. O primeiro momento (eu vou deixar a minha string na linha 6) da função é quando declaramos a função. Então, declaramos e dizemos o que ela faz. A minha função só imprime texto, mas, a função, também, tem outro momento, que é quando executamos a função uma ou mais vezes.

[06:27] Ju: Lembrando, que conversamos lá atrás, usamos a função para que um pedaço de código só seja executado no momento em que queremos.

[06:38] Ju: E como passamos para o código ‘Código, quero que isso aconteça nesse momento’? Nós executamos a função; como executamos a função? Chamando ela pelo nome, então, imprimeTexto e entre parênteses dizemos qual é o texto que queremos que seja impresso.

[06:57] Ju: Lembrando que texto é um nome que damos para sabermos (nós humanos, pessoa que está lidando com o código) o que está sendo esperado. Então, essa função espera receber um texto.

[07:08] Ju: Eu vou passar, primeiro, (“oi”). Agora será que funciona?

[07:16] Leonardo: Agora deveria funcionar, deveria imprimir “oi”, correto?

[07:21] Ju: Vamos ver. Eu vou rodar, de novo, e agora assim ele imprimiu oi, porque esse é o momento em que eu pedi para o JavaScript, chamando a função pelo nome e passando para dentro dela, entre parênteses, o texto que eu quero que seja exibido no console.

[07:39] Ju: Então, dessa forma, acontecem duas coisas. Primeiro, eu consigo dizer, exatamente, se e quando eu quero que essa função seja executada. E outra coisa muito importante da função, que a mesma função pode ser escrita, criada para funcionar com diversos tipos de texto.

[08:09] Ju: Então, imprimi com o texto ´”oi”, agora, imprimo com”outro texto”` a mesma função, ou seja, reaproveitamos o código.

[08:10] Ju: Vamos tentar rodar, novamente. Chamei a função com o dado de ”oi” e chamei, de novo, a mesma função, só que passando um ”outro texto”, literalmente uma string escrita ”outro texto”, e exibi os dois resultados.

[08:25] Ju: Esses são os dois momentos da função. Mas, Léo, o que podemos falar, um pouco mais afundo, sobre o que são funções.

[08:37] Leonardo: Sobre o que são funções. As funções nesses trechos de código, que separamos em declaração e quando mandamos chamar, a Ju escreveu as duas partes para nós já. Onde tem a palavra chave função, nessa palavra reservada function, é onde está nossa declaração, que no caso está na linha 7, e nós colocamos o nome nela e, em seguida, colocamos o abre e fecha parênteses e dentro botamos o parâmetro.

[09:06] Leonardo: Vamos ver, mais para frente, como funcionam os parâmetros e algumas coisas relacionadas aos parâmetros.

[09:15] Leonardo: Depois, fazemos a chamada da nossa função. O interessante da função é que podemos reutilizar uma parte de código, ou seja, conseguimos utilizá-la várias vezes durante o nosso código, durante o nosso programa.

[09:27] Leonardo: E fazer com que nós não precisemos ficar repetindo esse bloco de código várias vezes, escrevendo ele de novo e de novo e de novo.

[09:35] Leonardo: O JavaScript também tem três jeitos de escrevermos as funções. Nós vamos ver todos eles com bastante calma, para passar a entender tudo que eles fazem e quais são as diferenças entre eles.

[09:52] Ju: Nós já vimos, um pouco, sobre como nós declaramos, para que elas servem; lidamos melhor com nosso código se ele estiver fechado em pequenas partes, que conseguimos controlar melhor.

[10:14] Ju: Então, como o Léo falou nós vamos passar pelas três formas que o JavaScript tem de se escrever funções. Esta forma que mostramos é a chamada declaração de função. Ela tem a estrutura que você usa a palavra-chave function, coloca nome, coloca parênteses, abre e fecha chaves. Essa é a forma mais clássica e a forma que existe em várias linguagens bem similares.

[10:52] Ju: Mas, existem algumas outras formas, eu e o Léo vamos passar para vocês um pouco mais a frente.

[10:58] Ju: Uma coisa para notarmos é que neste exemplo eu e o Léo usamos texto, usou uma string, mas, a função pode receber outros tipos de dados para trabalharmos com ela. Então, se quiséssemos, por exemplo, somar dois números (pode usar números), pode ser booleano, o que quisermos.

[11:18] Ju: E, também, uma function soma pode ser criada sem nada, sem receber nada; pode ser só abre e fecha parênteses, e resolvemos ela dentro dos blocos.

[11:32] Ju: Nós vamos ver casos melhores, mas, para exemplo, vamos dar uma olhada em como ficaria para fazermos uma função que não recebe parâmetro nenhum.

[11:42] Ju: Criei uma função com a palavra-chave function soma, abre e fecha parênteses sem nada dentro, abre e fecha chaves e dentro eu vou escrever o que eu quero que aconteça.

[11:55] Ju: Dentro da função eu vou criar uma const, vou chamar de resultado e eu vou pedir, por enquanto, para ela me retornar = 2 + 2.

[12:09] Ju: Criei uma const, chamei de resultado e essa const vai guardar o valor dessa soma, dessa operação de 2+2. Então, lembrando que essa primeira parte, quando declaramos função, se eu quiser executar a função eu preciso chamar ela só pelo nome e, mesmo que não tenha nenhuma informação entre parênteses, é óbvio que ainda precisamos passar, informar para o JavaScript.

[12?35] Ju: Vamos rodar esse código, só para ver o que acontece. Então, rodou ‘oi’, ‘outro texto’ (são meus exemplos anteriores). Eu vou comentar esses exemplos, para o nosso terminal ficar um pouco mais limpo e vou rodar, novamente.

[12:51] Ju: Léo, não aconteceu nada, embora eu tenha passado as instruções dentro da minha função. Será que faltou o console.log na soma, de repente?

[13:07] Ju: Vamos tentar?

[13:09] Ju: console.log eu acho que faltou.

[13:14] Ju: Dentro de console.log eu posso executar uma função entre parênteses, do console.log? Podemos! Vamos ver se isso funciona. Deu indefinido, embora tenha passado e resultado.

[13:30] Ju: Léo, fala para nós o que está acontecendo, porque é uma questão bem importante quando trabalhamos com funções.

[13:37] Leonardo: O que está acontecendo é você está chamando a função, a função está sendo executada, só que ela não está te dando nenhuma resposta. Então, ela entra na function soma, declara a nossa constante resultado e põe o valor dela como 2 + 2.

[13:57] Leonardo: E, acaba a nossa função, volta para o console.log, só que não tem o que imprimir, porque nossa função retornou nada, então, nós temos uma palavra chave que chama return, que é retorno.

[14:12] Leonardo: Nós vamos especificar o que queremos que volte da nossa função como uma resposta, nesse caso, para nossa conta.

[14:20] Leonardo: Ju, você pode colocar o return para nós?

[14:24] Ju: Certo. Nesse caso, então, nem precisaríamos dessa const resultado, não é?

[14:30] Leonardo: Nesse caso, não. Não precisamos declarar uma variável para dar o return da variável. Nós podemos retornar direto à nossa conta.

[14:43] Ju: Na função soma eu troquei a variável, lembrando que a variável, como o Léo falou, está sendo criada, está guardando essa informação, mas, não pedimos, em nenhum momento, para essa função retornar o valor, que chamamos; mandar essa informação de 2 + 2 para fora dela, para fora deste bloco de código.

[15:06] Ju: É o que nós falamos em outra aula, a função guarda, restringe blocos de código para ele ficar mais preso no lugar dele, e não sair vazando, fazendo o que não deve.

[15:18] Ju: Será que agora funciona?

[15:21] Leonardo: Vamos testar.

[15:22] Ju: Vamos testar. Então, node funcoes.js, agora funcionou. Está exibindo 4 no console, que é o resultado de 2 + 2.

[15:31] Ju: Isso é bacana prestarmos atenção, porque muitas vezes o código não faz o que queremos, mas, isso não quer dizer que tenha erros no código.

[15:41] Leonardo: Exatamente. Às vezes, você tem algum problema de lógica, mas, o código em si é um código válido e um código que funciona.

[15:51] Ju: Sim, nós temos que aprender a conversar com a linguagem de programação para ela fazer o que queremos que ela faça.

[16:02] Leonardo: Sim, é muito importante.

[16:04] Leonardo: Ju, vamos fazer mais um teste só? Tem aquela primeira função que criamos, ela ainda está funcionando, certo?

[16:11] Ju: Certo.

[16:12] Leonardo: A imprimeTexto?

[16:13] Ju: Sim.

[16:14] Leonardo: Vamos passar o return da soma dentro do imprimeTexto, para ver o que vai acontecer? Fazer uma função dentro de um parâmetro de uma função.

[16:26] Ju: Vamos. Eu vou comentar o nosso console.log(soma). Como podemos fazer isso, então, Léo? Chamar uma função dentro de uma outra função?

[16:38] Leonardo: A nossa imprimeTexto, como fazíamos para chamar ela antes? Nós colocámos o imprimeTexto(nossotexto). Então, podemos só colocar imprimeTexto, abre parênteses e o nome da função que vamos chamar, no caso, soma, e fecha parênteses.

[17:03] Ju: Agora começa a ficar interessante, uma função dentro de outra função. Vamos executar que eu estou curiosa.

[17:12] Ju: Vou limpar o terminal e continua exibindo resultado (vejam que eu comentei o console.log(soma)), então, realmente, o que está acontecendo é que o nosso código está executando a função imprimeTexto.

[17:31] Ju: Só que uma vez que executamos a função soma dentro dos parênteses, o JavaScript vai pegar a função soma (me corrige se eu estiver errada, Léo); ele está executando a função soma, pegando o valor de retorno dela, que é 2 e passando o 2 para dentro de (texto).

[18:01] Ju: Então, o bloco de function deixa de ser string e passa a ser 2, que é o valor de soma.

[18:11] Ju: Nós fizemos uma dancinha das cadeiras, fomos tirando as coisas de um lugar, passando para outro e passando para outro; e isso é comum no dia a dia. Em linguagens de programação chamamos a função, pega o resultado de uma função, passa para outra e assim vamos fazendo com que cada trecho de código faça, exatamente, pequenas tarefas e essas pequenas tarefas viram uma tarefa grande. É isso?

[18:38] Leonardo: É isso. E tem uma vantagem muito importante de quebrarmos o nosso programa em funções relativamente pequenas, que fica mais fácil para nós lermos. Nós sabemos o que, exatamente, aquele trecho de código está fazendo. Conseguimos reaproveitar o trecho do código e fica bem mais fácil darmos manutenção.

[18:56] Leonardo: O que é essa manutenção? É nós tentarmos colocar alguma feature, uma característica nova no nosso programa.

[19:06] Leonardo: Então, conseguimos colocar essa característica, às vezes, reaproveitando coisas que já foram escritas antes.

[19:13] Ju: Perfeito. Lembrando que o console em si não interfere na execução do programa. Então, para o que o programa faz, ele vai exibir no console ou não, mas, o console é uma informação para quem está desenvolvendo, então, não adianta só ter o console.log e não ter retorno, se você quiser que sua função disponibilize os dados dela para outras partes do código.

[19:42] Ju: Uma informação bacana de passar nesse momento é que essa palavra chave, essa cláusula, que chamamos de return ela tem que ser a última linha da função.

[19:55] Ju: Acho que não chegamos a comentar isso, não é, Léo?

[20:00] Leonardo: Não chegou a comentar isso, mas, é bem interessante.

[20:05] Ju: Então, antes da linha do retorno, podemos ter outros códigos, podemos ter várias coisas que acontecem, podemos ter vários console.log; os exemplos vão ficando mais interessantes, à medida que vamos estudando mais.

[20:21] Ju: Mas, a linha do retorno tem que ser a última antes de fechar o bloco, porque depois que passou pela palavra chave retorno, ele retornou o que tinha que fazer e meu Script sai da função e não vê mais nada.

[20:38] Leonardo: Exatamente. Não é proibido escrever coisas depois do retorno, porém, essas coisas não serão executadas, tenha isso em mente.

[20:46] Ju: Exatamente. Eu acho que, por enquanto, também já falamos bastante de função. Podemos passar para mais alguns detalhes, no próximo vídeo?

[20:58] Leonardo: Vamos para mais detalhes no próximo vídeo.

[21:02] Ju: Até a próxima.

[21:03] Leonardo: Até */

/* Para saber mais: Mais sobre funções
PRÓXIMA ATIVIDADE

As funções ajudam muito no desenvolvimento de um código, pois colaboram para a separação de trechos de código com funções específicas, tornando-o menor e mais legível, o JavaScript nos oferece algumas funções prontas, como é o caso de funções matemáticas (Math em inglês), alguns exemplos são:

Math.round(): Faz o arredondamento (round em inglês) de um número de ponto flutuante para o inteiro mais próximo.

Math.round(4.3) retorna 4
Math.round(3.85) retorna 4
Math.round(2.5) retorna 3, quando o número termina com 0.5 a função arredonda para cima
Math.ceil(): Faz o arredondamento para o valor mais alto, também conhecido como teto (ceil em inglês).

Math.ceil(5.2) retorna 6
Math.floor(): Faz o arredondamento para o valor mais baixo, também conhecido como piso (floor em inglês).

Math.floor(5.2) retorna 5
Math.trunc() : Desconsidera os números decimais, o que é conhecido como truncamento.

Math.trunc(4.3) retorna 4
Math.trunc(4.8) retorna 4
Math.pow() : Faz a exponenciação de 2 números, quando for simples, como ao quadrado(2) ou cubo(3). Recomenda-se usar a multiplicação por ser mais rápido.

Math.pow(4 , 2) retorna 4^2 = 16
Math.pow(2.5 , 1.5) retorna 2.5^(3/2) = 3.9528 ...
Math.sqrt() : Retorna a raiz quadrada de um número.

Math.sqrt(64) retorna 8
Math.min(): Retorna o menor valor entre os argumentos.

Math.min(0, 150, 30, 20, -8, -200) retorna -200
Math.max(): Retorna o maior valor entre os argumentos.

Math.max(0, 150, 30, 20, -8, -200) retorna 150
Math.random(): Retorna um valor randômico (random em inglês) entre 0 e 1, então não teremos um valor esperado para receber.

Math.random() retorna 0.7456916270759015
Math.random() retorna 0.15449802102729304
Math.random() retorna 0.4214269561951203
Para ver mais funções matemáticas, basta acessar a documentação do Math. */