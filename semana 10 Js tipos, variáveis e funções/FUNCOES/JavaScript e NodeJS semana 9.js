
//tipagem dinamica não precisa qual o tipo de dados 
// é um tipo untype

let minhaVar = 876; //nuemro 
minhaVar = "texto"; //string 
minhaVar = true; //boolendo 

/*Transcrição
[00:00] Ju: Agora que já vimos um pouco dos fundamentos do JavaScript, como declarar variáveis, o que são tipos, o que são operadores, vamos voltar um pouco para entender um pouco mais por trás de como funciona a linguagem e o que são algumas ferramentas que já viemos utilizando.

[00:19] Ju: O que podemos falar do JavaScript? O JavaScript é uma linguagem de programação e ela tem algumas características que vemos por aí.

[00:26] Ju: A primeira característica do JavaScript, que pode ser diferente de algumas outras linguagens que você já deu uma olhada quando estava decidindo para qual caminho ia, por exemplo, é que o JavaScript é uma linguagem que chamamos de tipagem dinâmica.

[00:45] Ju: Normalmente, falamos de tipagem fraca, ou tipagem forte, ou tipagem dinâmica e estática.

[00:52] Ju: Nós vamos falar de tipagem forte ou fraca um pouco mais para frente. Vamos voltar nesse assunto, vamos puxando os assuntos aos poucos. Mas, uma linguagem nós dizemos que é dinamicamente tipada quando não precisamos declarar o tipo.

[01:11] Ju: Eu vou abrir o Visual Studio Code para nós termos uma ideia melhor. Eu abri um novo arquivo, “script.js”.

[01:19] Ju: Quando falamos de tipagem dinâmica, o que queremos dizer?

[01:27] Ju: Quer dizer que o JavaScript aceita que nós, por exemplo, criemos uma let, vou chamar de minhaVar e dê um valor para ela de número, por exemplo 567.

[01:40] Ju: E mais para frente, nós reatribuimos essa variável; por exemplo minhaVar, pode deixar um valor numérico para ter um valor de string, então, agora minhaVar = “texto”.

[01:57] Ju: Ou seja, quando criamos uma variável não precisamos dizer para o JavaScript qual é o tipo de dado, então, não preciso dizer que minhaVar é do tipo number. O JavaScript não aceita isso. Ele vê qual é o tipo e infere essa informação.

[02:15] Ju: Então, ele vê que 567 é uma sequência de algarismos sem string, sem as aspas, e diz “Isso é um número, eu vou identificar e vou considerar um número”.

[02:25] Ju: A mesma coisa com string, a mesma coisa com booleano.

[02:28] Ju: Então, posso dizer que a minhaVar deixou de ser texto, deixou de ser um valor de string e agora vai ser um valor de booleano, ela vai ser true.

[02:37] Ju: O fato do JavaScript aceitar a troca do tipo de dado, ou seja, não estou trocando apenas 567 por 876, eu estou trocando o tipo de dado de número para string, para booleano ou para alguns outros.

[02:56] Ju: O fato do JavaScript aceitar isso faz com que ele seja uma linguagem de programação de tipagem dinâmica.

[03:05] Ju: Nós, também, podemos dizer (tem em algumas documentações), é referido que o JavaScript é uma linguagem do tipo untyped.

[03:15] Ju: Ou seja, nós não precisamos nunca declarar os tipos da variável, basicamente. Vamos voltar a falar mais disso, mas, o que mais podemos, Léo, falar sobre características do JavaScript, nesse momento?

[03:32] Leonardo: Do JavaScript podemos falar, também, que ele é uma linguagem de programação multiparadigma. O que isso quer dizer?

[03:38] Leonardo: Quer dizer que conseguimos resolver o mesmo problema de várias formas diferentes. E isso não é só dele, muitas linguagens são assim e ele é uma delas.

[03:48] Leonardo: O interessante do JavaScript é que, apesar dele ser multiparadigma, nós também conseguimos usar ele como um paradigma só, resolvendo de maneira mais simples os nossos problemas, para termos soluções mais simples e programas mais simples.

[04:01] Ju: Então, uma tipagem dinâmica e multiparadigma faz com que o JavaScript tenha uma curva de aprendizado um pouco mais suave, em relação à outras linguagens? Nós podemos falar isso?

[04:13] Leonardo: Para um iniciante ele chama mais atenção. Ele acaba sendo mais simples para você se familiarizar com a linguagem.

[04:21] Ju: Certo! Ele tem algumas flexibilidades que faz com que o aprendizado seja um pouco mais tranquilo. Isso não quer dizer que, por exemplo, a tipagem dinâmica seja algo que nós incentivemos. Na verdade, é o contrário. Não costumamos incentivar que fique trocando o tipo de variável, não é, Léo? No dia a dia de programação.

[04:43] Leonardo: Sim, tem que tomar um pouco de cuidado com isso, para você não causar erros no meio do código.

[04:48] Ju: Quando estamos esperando uma string e recebemos um número, etc, não é?

[04:52] Leonardo: Exatamente.

[04:55] Ju: Então, já sabemos dois detalhes do JavaScript. Mas, afinal, por que ele chama JavaScript, sendo que já existe outra linguagem chamada Java e isso causa uma confusão?

[05:09] Ju: Apesar do nome, o JavaScript é só um pouco, levemente, baseada no Java. E não precisa saber nada de Java para começar no JavaScript. Então, inclusive, se formos ver como funciona para colocarmos no console, colocar num terminal o “Olá, Mundo”, “Hello World” nas duas linguagens, dá para ver que é muito diferente.

[05:36] Ju: No caso do Java, tem bastante código, bastante termos que temos que utilizar. Temos que abrir chave, fechar chaves, fazer um monte de declarações, só para imprimir o “Olá, Mundo” na tela. Enquanto no JavaScript só precisamos do console.log, que viemos utilizando desde o começo do curso. Então, elas são bem diferentes.

[06:00] Ju: O nome mesmo da linguagem JavaScript é ECMAScript.

[06:04] Ju: ECMA é o nome da fundação que cuida dos padrões e dos standarts para a linguagem, então, o que vai ser desenvolvido, as features que vão ser desenvolvidas, o que a linguagem precisa melhorar, atualizações, etc.

[06:21] Ju: Mas, o nome certo acabou não pegando. Não vamos entrar em detalhes do porque ficou JavaScript ou não, mas, é importante saber que Java e JavaScript são bem diferentes. Não precisa saber uma para aprender a outra.

[06:35] Ju: Você sabe trabalhar com Java, Léo? Eu sou muito ruim de Java, não sei quase nada.

[06:40] Leonardo: Eu trabalhei um pouco com Java, mas, pouco. Então, JavaScript eu conheço um pouco mais do que Java e eu posso afirmar que as duas não são tão parecidas assim.

[06:51] Ju: Sim! Então, vamos para a próxima.

[06:55] Ju: Léo, o que o ES6 ou ES2015? Que vemos, também, sempre que procuramos, fazemos pesquisa, para descobrir como fazer as coisas em JavaScript; nós batemos nessas duas palavras. Você sabe o que são? Fala um pouco para nós sobre o que é o ES6.

[07:19] Leonardo: O ES6 ou ES2015 é a versão do JavaScript que saiu em 2015. Ela acabou sendo uma versão muito marcante, porque a partir desse ano começamos a ter versões anuais, com algumas atualizações anuais.

[07:33] Leonardo: E essa, também, acabou sendo a versão mais famosa que teve do JavaScript e trouxe muitas funcionalidades importantes, o que levou o JavaScript para um outro nível, uma coisa um pouco mais séria, que conseguimos utilizar, sem problemas, no dia a dia.

[07:52] Ju: Certo! Nós vamos ver bastante dessas funcionalidades novas no JavaScript nesse curso. Nós, já vimos alguns, inclusive, porque let e const são duas features que vieram com essa versão nova, versão ES6 ou 2015.

[08:09] Leonardo: Sim, é uma feature muito importante, que traz duas descrições novas para nossas variáveis e que acabaram corrigindo um erro que tinha no JavaScript, que causava muitos bugs antigamente. E tende a acabar com esses bugs agora, mais para frente.

[08:27] Ju: Perfeito. Então, vamos para o nosso último tópico que é: o JavaScript é uma linguagem interpretada.

[08:35] Ju: Nós vamos ver um pouco mais sobre o que é uma linguagem interpretada logo em seguida. Um pouco mais para frente vamos conversar um pouco sobre o que é o Node.

[08:47] Ju: Léo, fala para nós um pouco sobre o que são linguagens interpretadas e por quê o JavaScript é uma delas.

[08:56] Leonardo: Vamos primeiro falar que tem dois tipos de linguagens, as interpretadas e as compiladas.

[09:04] Leonardo: Na linguagem interpretada, nós vamos escrever o nosso código e o nosso código vai ser executado. Então, nós vamos ter um programa por trás, que vai ler a linha do nosso código e executar o que está escrito nessa linha na hora em que estivermos rodando.

[09:20] Leonardo: Já linguagens compiladas, nosso código vai passar primeiro por um programa chamado compilador, que vai transformar o nosso código em código de máquina, linguagem de máquina. É um tipo especial de linguagem que o computador entende.

[09:34] Leonardo: E quando falamos em executar, nós vamos executar diretamente essa linguagem de máquina, o que facilita para o computador, mas, que é muito difícil para nós conseguirmos ler.

[09:45] Ju: Sim, é um sistema de trocas que fazemos. As linguagens compiladas rodam mais rápido, mas, precisam passar por um compilador. Já as linguagens interpretadas não precisam passar por esse intermediador, não precisam ser compiladas para rodarem, mas, elas são um pouco mais lentas.

[10:07] Ju: Não é questão de ser super, hiper lenta. Mas, quando precisamos, às vezes, de muita performance acabamos optando pelas compiladas.

[10:18] Ju: Na hora de escolher linguagem tem um monte de variante, de variável, e colocar na balança se é linguagem compilada ou interpretada é uma delas.

[10:27] Ju: Mas, por enquanto, acho que podemos manter por aí. Nós voltamos depois para falar mais sobre isso.

[10:33] Ju: O que é, chegando ao final da aula, o que é o tal do NodeJS? Que ouvimos também “Você programa em Node?”. Na verdade, ninguém programa em Node, não é, Léo? Porque o Node nada mais é que o JavaScript, o Node não é uma linguagem.

[10:53] Ju: Se o Node não é uma linguagem, mas, sempre que ouvimos falar de JavaScript, que não é no navegador, nós ouvimos falar de Node, o que, afinal, é o NodeJS?

[11:05] Ju: Léo, fala para nós um pouco?

[11:09] Leonardo: O JavaScript, como é uma linguagem interpretada, ele precisa de um interpretador. Nós podemos usar um navegador como interpretador ou podemos usar o Node como interpretador. Se usamos o Node, nós, geralmente, vamos usar o JavaScript no backend, ou seja, no nosso lado do servidor. Para ele executar os códigos que queremos no servidor.

[11:30] Leonardo: Ele também traz umas funções interessantes, que o navegador nos traz, como, por exemplo, o console; que vamos entrar um pouco mais a fundo a seguir, nos próximos vídeos e nas próximas aulas.

[11:46] Ju: Então, podemos dizer que quando o JavaScript surgiu, o Node não existia. O Node é uma ferramenta que foi desenvolvida em 2010 (eu acho), bem depois do JavaScript já existir, para nós conseguirmos usar o JavaScript fora do interpretador padrão dele, que é o navegador (que é o que está aparecendo na tela).

[12:10] Ju: O console do navegador é o terminal (de muitas aspas), onde vemos as mensagens do JavaScript, quando trabalhamos com ele no front. Mas, para conseguir trabalhar com ele fora do navegador e rodar em outro ambiente, surgiu o Node.

[12:30] Ju: Então, o Node é um ambiente para gerar códigos JavaScript fora do navegador.

[12:38] Ju: E o navegador tem algumas ferramentas do JavaScript que o Node não tem. Então, por exemplo, tudo que precisamos que o JavaScript faça para se conectar com a interface, com a tela do navegador, não está presente no Node. Mas, o Node tem suas próprias ferramentas, que servem, justamente, para trabalhar no backend.

[13:03] Ju: Mas, o Node, ao contrário do navegador que já vem com o computador, o Node precisa ser instalado para que consigamos rodar e fazer tudo que precisamos fazer com ele; subir todas as nossas aplicações, etc.

[13:20] Ju: Léo, o que mais que podemos falar de JavaScript nesse momento? Mais alguma coisa?

[13:28] Leonardo: De forma geral, eu acho que não. Acho que podemos finalizar, o que você acha, Ju?

[13:34] Ju: Nós vamos voltar a falar mais, bastante, sobre Node e toda essa parte de como trabalhar com o JavaScript, trabalhar com o Node no terminal; ela vai ficando um pouco mais clara, na medida que vamos praticando.

[13:47] Ju: E vamos adicionar mais coisas, mais conteúdos para irmos pegando, aos poucos, o que significa trabalhar com JavaScript utilizando esse ambiente. E também o que é o ambiente vai ficando mais claro, o que é o NodeJS.

[14:01] Ju: E tem outros, tem o Deno. Você já viu o Deno? Eu não cheguei a trabalhar com ele.

[14:06] Ju: Não, eu não conhecia.

[14:09] Ju: É, tem o Deno. Ele é uma alternativa ao Node, outro ambiente para se rodar o JavaScript fora do navegador. Da mesma forma que temos vários navegadores.

[14:18] Ju: Mas, a linguagem é uma. É só o JavaScript e cada um usa as ferramentas que precisa para usar o navegador ou para subir aplicações no backend. Certo, Léo?

[14:30] Leonardo: Certo!

[14:32] Ju: Então, até o próximo vídeo!

  */