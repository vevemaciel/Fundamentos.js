


/* Transcrição
[00:00] Ju: Neste vídeo, vamos falar sobre algo que é constante na vida: os erros.

[00:06] Ju: Então, eu e o Léo vamos falar um pouco sobre o que são os erros e por que eles aparecem no terminal, além de algumas formas que temos para ler, algumas dicas e a importância de lermos esses erros.

[00:19] Ju: Eu acabei criando o arquivo, no terminal, um pouco antes, mas, está na lista de arquivos o “erros.js” e é nele que vamos brincar para fazer os erros acontecerem.

[00:29] Ju: Um grande problema que temos quando começamos e, na verdade, depois que começamos, também, é justamente interpretar os erros que aparecem no terminal para nós.

[00:39] Ju: Mas, por quê? Porque os erros não vêm do universo. Quem escreve os erros e especifica a forma que os erros vão aparecer para nós é quem desenvolve a ferramenta, quem trabalha na linguagem. Então, os erros são escritos por pessoas, por desenvolvedores que nem eu, que nem o Léo e que nem você, que está nos assistindo.

[00:59] Ju: Então sempre tente ler os erros da melhor forma possível, mesmo que seja usando o tradutor.

[01:05] Ju: Nós vamos fazer um teste usando o Google Tradutor, também. E o Léo vai falar um pouco mais para nós, sobre o que é cada parte do erro, o que é a lista de erros.

[01:17] Leonardo: Vamos começar com um código simples. Cria uma constante e põe o nome de "numero", mas não coloca nenhum valor nela, por enquanto.

[01:24] Ju: Coloquei uma const numero e só salvei, sem passar nenhum valor para ela.

[01:31] Leonardo: E vamos rodar esse código.

[01:34] Ju: Eu vou rodar com o node erros.js e temos o nosso primeiro erro.

[01:44] Leonardo: Vamos ver o que esse erro está nos informando.

[01:48] Leonardo: Esse erro já sublinhou para nós, colocou um indicador que tem algum problema na const numero que acabamos de declarar, então, sabemos que o problema está ali.

[02:00] Leonardo: Um pouco mais abaixo é informado qual é o problema. É um "SyntaxError", ou seja, um erro de sintaxe. Escrevemos alguma coisa errada. Vamos ver, em seguida, o que ele traz.

[02:15] Leonardo: Ele nos avisa que está faltando um inicializador, ou seja, está faltando algum número para podermos declarar uma constante.

[02:22] Ju: Certo. Vamos fazer um teste? Eu vou copiar, no caso, o terminal não entende muito o bem o “Ctrl + C”, você pode dar “Ctrl + Shift + C” ou dar “Copy” com o botão direito do mouse em "Missing initializer in const declaration". Vou jogar esta frase no Google Translate e vamos ver o que acontece se tentarmos traduzir isso com um tradutor automático.

[02:52] Ju: O Google Translate já nos dá um aviso bom. Ele fala que "Falta o inicializador na declaração const". Já ajuda, Léo, essa informação traduzida para o português?

[03:02] Leonardo: Ajuda um pouco se você souber o que é o inicializador.

[03:05] Ju: Certo. Então, vamos lá!

[03:10] Leonardo: No caso da const, o inicializador é o valor que vamos passar para ela. Então, para arrumar isso, coloca para mim o valor no número 0, por exemplo.

[03:19] Ju: Ok!

[03:20] Leonardo: Se tentarmos rodar o nosso código agora, não deve trazer nenhum erro, porque colocamos um inicializador.

[03:26] Ju: Não trouxe nenhum erro. O terminal também não trouxe nenhuma informação, porque não estamos pedindo para exibir nada no console, só declaramos uma const.

[03:36] Ju: Essa const existe, ela está guardada na memória, mas, não pedimos em nenhuma hora para ela ser exibida na tela. Então, tudo bem.

[03:40] Ju: E é uma questão de sabermos (nós sabemos porque vimos, lá atrás nas aulas, alguns detalhes sobre consts) que as consts não podem ser criadas sem valor, não é, Léo?

[03:59] Leonardo: Exatamente. Já que não conseguimos mudar o valor dela, ela tem que ter um valor quando a criamos.

[04:04] Ju: Exato. Então, é o erro que está dando no terminal e ele dá, inclusive, na linha; no arquivo e na linha erros.js: 1, ele está falando que é na linha 1. Ou seja, nós já sabemos, dá para saber com esse aviso. Batemos o olho nele e damos uma traduzida; conseguimos entender qual foi o erro.

[04:23] Ju: O que mais que podemos testar para vermos bastante erro legal?

[04:27] Leonardo: Já que nosso console falou que não está saindo nada, vamos dar um console.log para vermos o valor dessa constante. Só que não fecha os parênteses dele, só um parêntese que abre, console.log(numero.

[04:43] Ju: Eu fui escrever algumas outras coisas e, sem querer, tinha um monte de códigos no terminal e eu acabei apagando, sem querer, o parêntese final. Vou rodar, de novo e deu outro erro.

[04:57] Leonardo: Outro erro. Ele, também, mostra para nós a linha, de novo, que é a linha número 2 agora. Ele sublinhou que tem algum problema no trecho (numero. Ele traz para nós que esse também é um erro de sintaxe. Ele fala "Missing ) after argument list".

[05:23] Leonardo: Vamos copiar esse texto e colocar no Google Tradutor, para ver como ele vai traduzir para nós?

[05:29] Leonardo: Se ele fica mais fácil de entender.

[05:32] Ju: Vou jogar no Google Tradutor. "Faltando ) após lista de argumentos".

[05:44] Ju: Mesmo que nós, nesse momento, não saibamos muito bem o que é uma lista de argumentos, já deu para entender que está faltando fechar o parêntese em algum lugar, não é?

[05:53] Leonardo: Exatamente!

[05:54] Ju: E nós já vamos nos virando "Tem um parêntese sem fechar no código"; o erro deu a linha, então, a primeira coisa é ir na linha e ver ‘Tem um parêntese aqui’. Nós contamos os parênteses que estão abertos, fechados e já vemos que tem um na linha 2.

[06:13] Leonardo: Vamos tentar, agora, dar um console.log numa variável que não declaramos ainda?

[06:21] Ju: Pode ser! Eu vou fazer um novo teste com console.log. Eu vou usar o mesmo console.log que já tínhamos escrito, mas, eu vou chamar uma variável que não existe nesse arquivo. Vou só escrever (minhaVar), por exemplo.

[06:40] Ju: (minhaVar) não foi declarada em lugar nenhum. Vou limpar o console e rodar o programa, de novo. Mais um erro.

[06:49] Leonardo: Mais um erro. Vamos ver o que esse erro está falando.

[06:52] Leonardo: Ele está mostrando para nós, de novo, que é na linha 2 e ele apontou só um ponto, no erro, que é minhaVar. O erro não sublinhou a palavra inteira, só um ponto. Vamos ver qual é o erro, dessa vez.

[07:05] Leonardo: Agora, mudou o erro. Não é mais um erro de sintaxe, agora é um erro de referência. Ou seja, a nossa linguagem de programação não conseguiu achar a variável que estamos pedindo para ela dentro do nosso código.

[07:19] Leonardo: Então, trazemos para nós a descrição do erro, que é "minhaVar is not defined". Vamos copiar essa parte e vamos colocar no Google Tradutor para ver como fica?

[07:29] Ju: Vou substituir a mensagem anterior. Traduziu: "minhaVar não está definida".

[07:34] Ju: Então, sabemos que variáveis nós definimos. Nós definimos, então, uma variável.

[07:43] Ju: E, no caso, é justamente o que ele está avisando?

[07:47] Leonardo: Ele está avisando para nós que não definimos essa variável em lugar nenhum. Ou seja, não a criamos, em momento algum, no nosso código.

[07:57] Ju: Se criarmos a variável, uma const e chamá-la de minhaVar e dar para ela o valor de = “oi”, string ”oi” e tentar rodar de novo. Sem problemas, não é?

[08:16] Leonardo: Funciona perfeitamente.

[08:21] Leonardo: Você tem mais algum exemplo, Ju?

[08:24] Ju: Podíamos falar um pouco dos outros montes de texto que aparecem toda vez que dá um erro, porque eu acho que é isso que nos deixa assustados quando começamos; vemos o erro, no meio daquele monte de texto e nem sabemos onde procurar.

[08:39] Ju: Então, agora que já sabemos onde procurar os erros principais do JavaScript; nessas questões de erro de sintaxe, erro de referência, nós vamos deixar um material extra sobre o que é cada um, para você dar uma conferida.

[08:53] Ju: Léo, vamos criar, forçar mais um erro? Eu vou comentar a minhaVar para forçarmos o erro. Agora, vamos falar um pouco sobre o que é todo o resto de texto que o terminal nos traz no erro. Porque, no final, sempre acabamos parando no começo, nas primeiras linhas e é importante o restante? Por que o JavaScript nos traz isso?

[09:17] Leonardo: O que temos nessa parte de código? Essa parte é muito importante para nós quando estamos trabalhando com vários tipos de módulos ou em bibliotecas, que é uma coisa que vamos ver mais adiante; e, também, quando temos mais de um arquivo trabalhando, quando nosso código faz parte de mais de um arquivo, ele é separado em vários arquivos separados, vários tipos diferentes.

[09:39] Leonardo: Então, conseguimos ver, exatamente, em qual arquivo está dando esse problema e em que parte desse arquivo. Então, se tivermos a primeira linha branca, depois do nosso erro de referência, nós temos “at Object”, que é no objeto e em seguida, temos o caminho do arquivo, que é “(/home/juliana/Documents/alura” aí, a classe em que nós estamos nos nossos códigos e o arquivo “erros.js”, que é o arquivo que criamos.

[10:06] Leonardo: Depois disso a mensagem ainda nos passa a linha e qual caractere, então, é linha 3, caractere número 13.

[10:12] Leonardo: Conseguimos ir bem preciso onde está começando o nosso erro, onde existe o problema. E o resto das linhas, caso tenhamos outros arquivos que fazem referência dentro desse arquivo que temos, nós conseguimos ir seguindo o caminho deles, qual é todo o caminho de execução do nosso arquivo, que está sendo usado.

[10:36] Ju: Costumamos chamar essa lista de arquivos que fazem referência, ou que trabalham juntos para executar o nosso código, de stack. É como se fosse uma pilha de comandos que é executada.

[10:47] No caso, essa lista que está sendo passada para nós, no terminal, é chamada stacktrace, onde o JavaScript nos mostra todo o caminho que nosso código executou e todos os arquivos internos da ferramenta, da biblioteca, da linguagem de programação, que estão sendo usados para fazer com que nosso código funcione. Certo, Léo?

[11:09] Léo: Certo, Ju.

[11:11] Ju: E ele pode nos ajudar a descobrir onde está acontecendo, ou onde está "estourando" um erro, um bug que, às vezes, é mais difícil identificar em um código maior.

[11:23] Leonardo: Então, eu acho que fechou por aqui. Certo?

[11:26] Ju: Certo. Até o próximo vídeo! */


/* Para saber mais: Tipos de erro
PRÓXIMA ATIVIDADE

Enquanto trabalhamos com programação, passamos uma boa parte do tempo lidando com os erros que aparecem em nosso código. Isso é totalmente normal, pois eles nos ajudam a resolver problemas. Já imaginou como seria muito mais difícil programar sem um recurso para dizer onde estamos errando e como corrigir?

Como vimos, as pessoas que desenvolvem os programas e linguagens são as responsáveis pelo chamado “tratamento de erros”, ou seja, permitir a comunicação de quais foram os problemas, e nem sempre isso acontece da melhor forma - embora já tenha melhorado muito nas últimas décadas.

Cada linguagem de programação tem sua própria forma de lidar com erros. O JavaScript começa dividindo cada tipo de erro possível em algumas categorias:

RangeError: Quando o código recebe um dado do tipo certo, porém não dentro do formato aceitável. Por exemplo, um processamento que só pode ser feito com números inteiros maiores ou iguais a zero, mas recebe -1.

ReferenceError: Normalmente ocorre quando o código tenta acessar algo que não existe, como uma variável que não foi definida; muitas vezes é causado por erros de digitação ou confusão nos nomes utilizados, mas também pode indicar um erro no programa.

SyntaxError: Na maior parte dos casos ocorre quando há erros no programa e o JavaScript não consegue executá-lo. Os erros podem ser métodos ou propriedades escritos ou utilizados de forma incorreta, por exemplo, operadores ou sinais gráficos com elementos a menos, como esquecer de fechar chaves ou colchetes.

TypeError: Indica que o código esperava receber um dado de um determinado tipo, tal qual uma string de texto, mas recebeu outro, como um número, booleano ou null.

O NodeJS trabalha com outros tipos específicos de erro que não vamos abordar neste momento, mas que você pode sempre consultar na documentação oficial.

Além do tipo de erro, o terminal também vai dar outras informações, como o nome do arquivo e linha onde foi detectado o erro. Muitas vezes isso já basta para identificar e corrigir, mas existem também casos onde o erro não é detectado pelo JavaScript na linha onde o código é declarado, por exemplo, mas onde ele é executado. Por isso é importante praticar sempre a leitura dos erros e da stacktrace e nunca pular esta etapa.

No futuro, ao trabalhar em suas aplicações, você também deverá criar seus próprios avisos de erro para ajudar os usuários. */