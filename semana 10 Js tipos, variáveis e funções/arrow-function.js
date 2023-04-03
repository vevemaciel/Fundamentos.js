
function apresentar(nome){
    return `meu nome é ${nome}`;
}
//Arrow function
const apresentarArrow =  nome => `meu nome é ${nome}`;
const soma = (num1, num2) => num1 + num2;

//Arrow function com + de 1 linha de instrução
const somaNumerosPequenos = (num1, num2) =>{
    if (num1 > 10 || num2 > 10){
        return "somente numeros de 1 a 9"
    }else {
        return num1 + num2
    }
}

// hoisting: arrow function se comporta como expressão

// operador maior ou igual que
// >=


/* Transcrição
[00:00] Ju: Ainda sobre funções. Léo, funções é um assunto vasto no JavaScript. Estamos começando a raspar o começo de função, mas, tem bastante coisa para se falar.

[00:12] Ju: Nós vamos concluir com outro, um terceiro tipo de função, uma terceira forma de escrever função. Então, antes de qualquer coisa, antes que eu esqueça, eu vou compartilhar a minha tela.

[00:24] Ju: Vou escrever mais códigos, vou criar um novo arquivo e vou chamar de “arrow-function.js”. Um nome um pouco estranho, mas já vamos entender.

[00:39] Ju: Qual é esse terceiro tipo de se escrever funções e para que ele serve?

[00:45] Ju: A arrow function é de seta, de flecha, porque essa função utiliza uma flecha na sintaxe dela.

[00:56] Ju: Ela é uma grande novidade no ES6, e vamos escrever, vamos ver a cara dela e o Léo vai falar para nós os detalhes e para que ela serve.

[01:06] Ju: Antes criávamos as nossas functions, por exemplo, uma function apresentar, e aí eu não preciso passar parâmetro, ou eu posso passar um nome como parâmetro (nome), abro e fecho chaves, e aí, return uma string, um template string, que já vimos anteriormente, ”meu nome é”, abre cifrão e chaves, passa a variável ${nome} dentro dele.

[01:45] Ju: É a forma clássica e vimos expressão de função, também. Agora, arrow function.

[01:51] Ju: Vamos supor que eu queira fazer dessa terceira forma, seria parecida com a função de expressão. Primeiro eu crio uma const, eu vou chamar de apresentarArrow (só para sabermos o que estamos falando). A diferença é: eu coloco um igual (lembrando que criamos uma const, passamos um identificador, um nome para ela, um igual e atribuímos do lado direito do igual), então, o que vamos atribuir?

[02:18] Ju: Primeiro, vamos passar o parâmetro, então, temos um parâmetro para passar nessa função, que é = nome. Em seguida, o que vem? Vem a arrow, a flecha, então, vamos passar a flecha =>. E abro e fecho chaves? Não, não preciso passar chaves, nesse caso, para essa função, porque tudo que essa função tem que fazer é uma linha só de código.

[02:47] Ju: Então, como ficaria? Ficaria const apresentarArrow = nome =>, eu preciso passar, nesse caso, somente o que a função vai retornar, ou seja, uma string com a variável ${nome}. Então, a key é uma função, uma arrow function clássica.

[03:07] Ju: Eu tenho só um parâmetro. Eu não tenho, nem parênteses para fechar os parâmetros e nem chaves para fechar o bloco de código do que a função tem que fazer.

[03:20] Ju: Eu vou só dar mais um exemplo, antes do que o Léo debulhar o que é nessa função, para que ela funcione.

[03:27] Ju: Eu vou criar mais uma const, vou chamar de const soma (vou enviar a função soma), de novo. Passamos o igual e vamos atribuir.

[03:36] Ju: Como eu tenho dois parâmetros, nesse caso, aí sim eu preciso abrir e fechar parênteses, senão o JavaScript fica meio perdido.

[03:47] Ju: Então, const soma = (num1, num2). Entro com a flecha, a arrow, a seta. E preciso do return? Nesse caso, também não preciso do return, porque eu só estou passando uma instrução de uma linha. Qual é a instrução que eu vou passar? É a mesma que já vimos anteriormente, que é só => num1 + num2.

[04:12] Ju: Essa é a cara da arrow function. Léo, fala para nós um pouco sobre as características desse jeito curioso, e um pouco diferente, de se escrever funções no JavaScript.

[04:23] Leonardo: Essa arrow function veio junto com o ES6, que foi o de 2015. Foi uma grande novidade, como a Ju disse, e ela deixou nosso código bem melhor. Conseguimos, agora, declarar tudo numa linha só, não precisa de chaves, não precisa de return, não precisa de nada disso.

[04:42] Leonardo: Ela, também, não pode ser nomeada. Ela não tem nem essa possibilidade para podemos usar, então, fiquem um pouco atentos com isso. E ela sempre vem com uma const e o nome da nossa variável, que vamos usar antes.

[04:58] Leonardo: Ela tem alguns casos especiais, Ju, que vamos ver mais para frente, que é com objeto, com outras coisas; não é o tema desse curso, vamos ver em outros cursos. E, eu acho que é isso, por enquanto, que eu posso debulhar para nós da arrow function.

[05:15] Ju: Mas, Léo, não precisamos usar o return, ele faz tudo sozinho, mas eu tenho uma linha de código.

[05:26] Leonardo: Bom ponto, Ju. Se você tiver mais de uma linha, então, você vai precisar usar as chaves e usar o return. É sempre bom ter isso em mente.

[05:33] Leonardo: Você pode fazer uma dessa para nós, Ju?

[05:35] Ju: Vou fazer sim. Vou criar uma arrow function com mais de uma linha de instrução.

[05:48] Ju: Deixa eu pensar. Vamos fazer uma soma, vamos fazer um código um pouco mais extenso. Então, vou criar uma const e vou dizer que essa const, a minha função vai somar números, mas, tem que ser números pequenos; só vai somar números que sejam de 1 a 9.

[06:02] Ju: Minha const eu vou chamar de somaNumerosPequenos, só para sabermos bem o que essa função faz. Ela vai somar 2 números, como as outras, no caso, como são dois parâmetros, eu vou passar (abro parênteses), (num1, num2).

[06:26] Ju: E depois da minha seta (a seta é composta pelo sinal de igual e o sinal de maior que, juntos, sem espaço. Ela forma esse sinal de seta); cuidado na hora de fazer para não confundir o sinal de igual com hífen, não é hífen com mais igual, é um sinal de igual seguido pelo mais igual, que é diferente do operador (eu vou deixar marcado) de maior ou igual que, que é primeiro o maior e depois o igual. Só para não nos confundirmos.

[07:11] Ju: Então é um operador. Quando queremos a seta, primeiro escrevemos igual e depois escrevemos maior que.

[07:18] Ju: Como uma é uma soma de números pequenos, eu não posso só sair somando, ‘1 = 1 = 2’, eu tenho que passar uma condição para isso. Então, meu código vai ter algumas coisas, algumas instruções a mais e como o Léo disse, não dá para fazer isso sem retorno, sem chaves.

[07:35] Ju: Então, o começo da nossa arrow function fica igual. Criamos uma const, passamos parâmetros, passam a seta e abro chaves, normalmente, como nós trabalhamos com as funções que vimos anteriormente.

[07:47] Ju: E eu posso passar os meus ifs, se if (num1 ou, (o operador de ou) || num2 > 10), dou o return e aqui sim, precisamos do return, porque quando trabalhamos com condicionais ou o if ou o else vai retornar.

[08:11] Ju: Então, ele vai, a partir do momento (lembrando o que conversamos anteriormente), o return é a última coisa da função, então, ele bateu no retorno ele não vê mais nada.

[08:22] Ju: Essa é uma função que tem duas possibilidades de retorno. Ou um dos dois números vai ser maior do que 10, e aí, vamos retornar ”somente números de 1 a 9”, por exemplo. Porque queremos somar números pequenos.

[08:40] Ju: Qualquer outro caso daria para fazer outras condicionais, mas, vamos manter por essa. Aí sim, retornamos return num1 + num2.

[08:51] Ju: Esse é um caso bem bacana, que inclui não só arrow function com o bloco de código e com o retorno, mas, também, um caso que temos uma função que ela pode ter mais de um retorno, dependendo da condicional que cair.

[09:11] Ju: Se entrar no bloco de if, vamos retornar uma coisa, se não, vamos retornar outra coisa.

[09:16] Ju: Certo, Léo?

[09:19] Leonardo: Exatamente.

[09:21] Ju: Então, agora que vimos declaração de função, expressão de função e arrow function, como que sabemos quando utilizamos cada um desses três tipos?

[09:37] Leonardo: Ju, em cima disso temos: arrow function é um jeito rápido e curto de você escrever a função, então, nosso código acaba ficando mais curto e isso é uma coisa boa.

[09:49] Leonardo: Porém, se você achar que ela não é muito fácil de entender o que está acontecendo dentro dela, você pode dar declaração de função, sem problema, para fazer isso.

[09:59] Leonardo: A arrow function também tem algumas vantagens, quando estamos mexendo com objetos, que não vamos ver nesse curso, vamos tratar isso em outro curso. Mas, de forma geral, podemos utilizar as três funções, só lembrando da questão do hoisting de quando fazemos declaração da função completa.

[10:21] Ju: Então, a arrow function se comporta nessa questão de hoisting, exatamente, da mesma forma que a expressão de função, não é?

[10:29] Leonardo: Exatamente.

[10:30] Ju: Então, /Hoistinhg: arrow function se comportam como expressão.

[10:41] Ju: Como já falamos no começo, a função vai ter muito mais coisas para vermos na vida, inclusive, quando vocês estiverem estudando a questão de objetos, que não vamos lidar neste curso.

[10:57] Ju: Mas, existe muita coisa de função que é ligado ao estudo de objetos, fica no seu dicionário de JavaScript mental. E, Léo, se não tivermos mais nada para falar sobre arrow function, neste momento, podemos subir todo esse código que fizemos de algumas aulas para cá, para o GitHub, não é? Para ele ficar salvo.

[11:22] Leonardo: Exatamente. É sempre bom salvar o código em GitHub.

[11:26] Ju: Certo. Lembrando o processo, eu já estou no terminal, dentro da pasta certa. Como já tínhamos feito um commit anterior, na minha pasta “2206-fundamentos-js”, que é o nome do curso (você pode criar o seu), nós só precisamos continuar com o processo de três passos básicos do GitHub, que é de commit push.

[11:53] Ju: Eu vou, antes, dar um comando git status, só para ver se todos os meus arquivos novos estão listados. Então, os arquivos listados são os que ainda não subimos, não passamos para o GitHub, ainda. E o próximo comando é git add; eu vou dar git add . porque o Git já se encarrega de pegar tudo que não está listado ainda, e colocar dentro da caixa do commit, criando para nós.

[12:22] Ju: Vou dar git status, de novo, para ver se foi tudo indexado. Agora sim, o GitHub enxerga como um novo arquivo, um new file, esses arquivos novos e estamos prontos para os dois passos finais, que é git commit –m (-m de mensagem), e eu vou passar como mensagem; o que eu passo como mensagem, Léo? Sempre tenho problemas em criar mensagens para o GitHub.

[12:49] Leonardo: Podemos colocar operadores e funções.

[12:55] Ju: Operadores e funções. E o último, final, git push origin master e não deu nenhuma mensagem de erro. E eu, sem querer, apaguei a mensagem.

[13:16] Leonardo: Ju, agora já subiu tudo. Não temos mais nada para falar de função, por enquanto, certo?

[13:22] Ju: Certo.

[13:23] Leonardo: Então, nos vemos no próximo vídeo.

[13:25] Ju: Até lá! */