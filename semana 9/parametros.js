//paramentros de função

// function soma(num1, num2){
//     return num1 + num2; 
// }
// console.log(soma(2,2))
// console.log(soma(245,20))
// console.log(soma(-500,60))

// paramentros x argumentos

// ordem de parametros

// // function nomeIdade (nome, idade){
// //     return `meu nome é ${nome} e minha idade é $${idade}`
// }
// console.log("ve", 33)

function multiplica (num1, num2){
    return num1 * num2;
}
function soma(num1, num2){
    return num1 + num2; 
}
console.log(multiplica(soma(4,5), soma(5,9)))



/* Transcrição
[00:00] Ju: Continuando sobre funções, vamos revisitar um pouco do código que fizemos anteriormente.

[00:08] Ju: Compartilho a tela, vou criar mais um arquivo, vou chamar este arquivo de “parametros.js”.

[00:24] Ju: E o que são parâmetros? Vamos revisitar o código que fizemos no final da outra aula, um pouco anteriormente.

[00:34] Ju: A função soma é um function soma, nós criamos essa função sem passar nenhuma informação entre parênteses, só passamos a palavra chave função, soma, parênteses vazios e o bloco.

[00:51] Ju: Dentro do bloco, return 2 + 2.

[00:57] Ju: Já falamos sobre o return e, para exibirmos no console essa função, ela tem que ser executada, lembrando que para executar uma função nós passamos o nome dela e os parênteses, mesmo que não tenha nada.

[01:13] Ju: Nesse caso, para executar no console, passamos console.log e dentro dos parênteses do ‘console.log’, executamos a função (soma).

[01:25] Ju: Porém, essa função tem um problema, porque ela só funciona se quisermos somar 2 + 2. Se quisermos somar qualquer outro valor, teria que criar outra função, que é function somaOutroNumero, para somar 50 + 25.

[01:47] Ju: E já comentamos que uma das grandes utilidades da função é que o código é reaproveitável. Ou seja, uma função só nós declaramos de uma forma que ela possa ser reaproveitada com vários tipos de dados equivalentes para fazer uma soma com vários números, etc.

[02:06] Ju: Já que este código tem que ser reaproveitado, como podemos fazer para modificar essa funtion soma?

[02:14] Ju: O ideal é que, se ela funciona com 2 + 2, ela tem que funcionar com qualquer conjunto, neste caso, nessa função que a criamos, qualquer conjunto de dois números. Ou seja, ela tem que funcionar com num1 + num 2.

[02:34] Ju: Como que a função faz para saber de onde vem num1, o que é num1?

[02:40] Ju: Aí que entram os Parâmetros de Função. Os Parâmetros de Função servem para a função receber informações que são necessárias para ela executar corretamente. Ou seja, para uma função, que soma dois números, funcionar corretamente e funcionar com qualquer conjunto de dois números, que é o que está sendo especificado, nós passamos via parâmetro que ela vai receber num1 e num2.

[03:15] Ju: Os nomes que eu estou usando são nomes que nós, como deve, escolhemos, então, eu achei que este nome estava bom, num1 e num2 como segundo número. Vai variar do tipo de informação que vocês vão receber em cada função e você vai escrever muitas funções na sua vida.

[03:36] Ju: Nós queremos receber dois números, por isso que eu coloquei esses nomes. Da mesma forma que a minha função é uma função de soma e por isso ela tem esse nome. O que importa mesmo é a palavra-chave função, nossos parênteses e chaves e a palavra chave retorno, além do operador de soma.

[03:54] Ju: Fiz. Vamos rodar para ver se está funcionando, pra ver o que vai acontecer. Eu vou rodar com node parametros.js. Deu Not a number, por que Not a Number?

[04:09] Ju: Ele não somou, mas, se formos pensar bem, não estamos passando para dentro da função nenhum número e nenhum lugar, então, tiramos aqueles ` 2 + 2´ e agora a função não tem mais número para funcionar.

[04:21] Ju: Precisamos passar esses números para dentro da função, na hora que ela é executada, de forma similar ao que fizemos com nosso primeiro exemplo de função lá atrás; que passamos textos de string.

[04:35] Ju: Agora, nós vamos passar dois parâmetros. Então, console.log(soma), vamos supor que queremos ainda somar 2 + 2. A função soma vai receber dois argumentos.

[04:46] Ju: Ela vai receber (2, 2)), da mesma forma de quando declaramos a função, que ela ia receber como parâmetro numero1, numero 2).

[05:04] Ju: Isso significa que eu posso chamar essa função soma várias vezes e passando para cada uma delas quaisquer conjuntos de números?

[05:13] Ju: Sim. Eu posso somar 2 com 2, somar 245 com 20, somar -500, um número negativo? Sim, com 2, com 60 e por aí vai.

[05:26] Ju: Vamos executar para ver se está tudo funcionando. E agora sim, tudo está funcionando. Agora, nossa função trabalha com qualquer conjunto de dois números, se forem dados do tipo número, que o JavaScript conhece e está totalmente reutilizável.

[05:41] Ju: Esse é o básico de parâmetros. Léo, o que mais que podemos passar para entendermos melhor, neste momento do nosso estudo de JavaScript, sobre o que são Parâmetros de Função, que é uma coisa que vamos trabalhar muito a vida toda?

[06:04] Leonardo: Uma coisa que eu reparei que você falou e é sempre bom tomar um pouco de cuidado, é a distinção entre Parâmetro e Argumento. Podemos trabalhar eles como se fossem a mesma coisa, é o mesmo nome para você colocar, passar um valor para dentro de uma função. Então, podemos usar eles intercambiáveis, não sei se tem uma palavra melhor para isso. Você pode usar um ou outro, eles são a mesma coisa.

[06:36] Leonardo: Outra coisa que é importante especificarmos é que, neste caso aqui, como ele só nos retorna a soma, não vai dar muita diferença. Mas, é importante sabermos que os parâmetros, que vão nas funções, tem uma ordem.

[06:50] Leonardo: Então, se passamos (245, 20), que é o segundo exemplo da soma, nós estamos colocando na variável numero1, dentro da função, o número 245 e numero2 estamos colocando o número 20. Então, é importante ter esta distinção, porque se fosse uma divisão ou uma subtração vai dar resultados diferentes se você inverter a ordem dos parâmetros.

[07:23] Ju: Talvez, funcione melhor essa questão da ordem dos parâmetros se mostrarmos com texto né? Fica mais fácil de ver, de repente.

[07:29] Leonardo: É uma boa, concatenar dois textos e retornar essa concatenação. Quer fazer isso para nós, Ju?

[07:36] Ju: Vamos, vamos fazer um teste.

[07:36] Ju: Vamos fazer assim, vou criar uma function, uma nova função, eu vou chamar de nomeIdade, para mostrar um nome e uma idade. E ela vai receber dois parâmetros, o primeiro eu estou chamando de (nome,e o segundo eu estou chamando deidade)`, que é o nome que estou dando para os dois dados que eu espero receber. São dois dados do tipo string, não precisamos dizer isso para o JavaScript.

[07:54] Ju: Vou pedir para ela retornar uma template string, para nós praticarmos o que já vimos sobre essa forma de declarar, de concatenar strings. E o texto vai ser "meu nome é ${nome} e minha idade é ${idade}".

[08:30] Ju: Ou seja, agora já criamos a função, ela deve retornar uma string. O que acontece? Um nome, normalmente, é uma string e idade podemos passar como um número.

[08:47] Ju: O que acontece, então, se quando pedirmos para exibir no console o resultado dessa função?

[08:56] Ju: Eu vou chamar console.log(nomeIdade()) e na hora de passar eu inverto a ordem. Ao invés de passar ”Juliana” primeiro e idade depois, eu passo idade primeiro e ”Juliana” depois. Vamos ver o que acontece.

[09:10] Ju: Eu vou passar na ordem invertida, primeiro (40, e depois ”Juliana”)’, vamos rodar. Agora, deu que meu nome é 40 e minha idade é Juliana.

[09:27] Leonardo: Exatamente, como você passou ao contrário, então, ele acabou preenchendo de forma ao contrário. Tem sempre que ter bastante cuidado com a ordem que você está passando os parâmetros ou os argumentos para a sua função.

[09:39] Ju: Certo, para o JavaScript, na verdade, ele não sabe o que é nome e o que é idade, para ele é simplesmente um dado, então, passamos para ele e ele preenche.

[09:51] Leonardo: Exatamente.

[09:53] Ju: O que mais podemos falar sobre parâmetros de função, Léo?

[10:02] Leonardo: Ju, vamos criar uma nova função, uma de multiplicação dessa vez?

[10:09] Ju: Vou criar uma function, e vou chamar de multiplica. Ela continua recebendo dois números?

[10:19] Leo: Continua recebendo dois números.

[10:20] Ju: Vou passar numero1, numero 2 como parâmetro e ela vai retornar numero1. Vou usar o operador de multiplicação, que é o asterisco, numero2 mais um console.log. O que você quer que eu passe para esta função? Vou chamar para ela ser executada, abro um parêntese, que valores você quer que eu passe aqui pra elas, Léo?

[10:50] Leonardo: Eu quero que você passe o valor da soma de 2 e 3 e o valor da soma de 4 e 5.

[11:00] Ju: Ao invés de eu passar dois números, ou seja, (4, 5), chamamos outras funções no lugar disso?

[11:09] Leonardo: Exatamente!

[11:11] Ju: Então, nós temos a function soma (vamos puxar a function soma para a linha 21, só para lembrarmos do que ela faz e ficar as duas um pouco mais perto) que recebe dois números e a function multiplica, que recebe dois números.

[11:39] Ju: Eu vou tirar ela de dentro do console.log, só para não fazermos muita confusão com a quantidade de parênteses. Então, eu preciso passar dois números para a function multiplica.

[11:51] Ju: O primeiro vai ser o resultado de function soma mais o resultado de function soma. É o (soma(4, 5),. O resultado de multiplica(soma se refere ao parâmetro numero1. Depois da vírgula passa o parâmetro de numero2, que vai ser novamente soma(3, 3)).

[12:30] Ju: Será que funciona?

[12:32] Leonardo: Começou a ficar um pouco grande a nossa chamada para multiplicação.

[12:37] Ju: Começou. Eu vou comentar tudo que tinha lá para cima, para o nosso terminal não ficar cheio de coisa e rodar node parametros.js para ver o que sai para nós.

[12:49] Ju: Não saiu nada porque a Juliana apagou o console.log. Isso é uma coisa interessante, inclusive, foi um erro bom. Às vezes, acontecem uns erros bons conosco. Não existir console.log não significa que a função não foi executada, não é Leo?

[13:05] Leonardo: Exatamente! Essa função foi executada, chamou a function soma, somou o (4, 5), chamou de novo a function soma, somou o (3, 3) e multiplicou o resultado dessas duas. Nos retornou qual é o valor, só que não mandamos, em momento, nenhum nos mostrar qual é este valor.

[13:31] Ju: Exato! Então, aconteceu um erro clássico de quando estamos começando, tudo executou mais em nenhum momento pedimos para o JavaScript passar para o console.log o resultado de multiplica(soma(4, 5), soma(3, 3)).

[13:47] Ju: Lembrando que tudo tem que estar dentro dos parênteses do console.log. Mas, se você durante a sua vida de desenvolvimento não vai trabalhar com console.log sempre. Os pedaços de código estão disponíveis para outras funções e isso é normal.

[14:06] Ju: Então, isso significa, no final, que esperamos que o resultado seja 9*6? Porque é o resultado da soma de 4 e 5 com a soma de 3 e 3. É isso?

[14:19] Leonardo: Exatamente!

[14:21] Ju: Ou seja, vamos ver se nosso console vai exibir 54. Perfeito, 54!

[14:28] Leonardo: Então, ele fez exatamente o que queríamos, somou os números e depois multiplicou os números que mandamos ele somar.

[14:32] Leonardo: Ju, eu tenho uma dúvida agora e quero ver o que vai acontecer. O que acontece se passarmos só um parâmetro para a function multiplica?

[14:46] Ju: Boa pergunta! Vamos fazer o seguinte, eu vou apagar o segundo parâmetro, ou seja, eu vou apagar a segunda chamada que estamos fazendo para a function soma. Ou seja, agora, a function multiplica, que espera receber dois parâmetros, vai receber só um, que é o resultado dessa soma; que é o número 9, afinal. Vamos rodar novamente e ver o que acontece.

[15:20] Leonardo: Deu um erro, acho que faltou fechar os parênteses.

[15:22] Ju: Nessa de brincar de abrir e fechar parênteses eu esqueci de fechar o do console.log.

[15:28] Leonardo: É uma coisa que pode acontecer, não fiquem com medo quando ver os erros, nós já explicamos sobre os erros. Basta ler e ver o que está acontecendo nos erros e resolver o problema.

[15:42] Ju: Inclusive, é o mesmo erro que fizemos antes. Vimos que é um erro bem possível de acontecer, eu vou até rodar ele de novo, que é o parêntese faltando depois da lista de argumento, exatamente o mesmo erro. Então, eu vou recolocar ali no lugar, que eu apaguei sem querer, rodar o nosso código. Deu Not a Number, Leo.

[16:06] Leonardo: Not a Number, por quê?

[16:07] Leonardo: O que aconteceu, nós não passamos um parâmetro, então, ele ficou como não definido undefined, e um número X undefined não é um número. Então, Ju, como podemos fazer para resolver isso?

[16:21] Leonardo: Sem ter que confiar que nunca iremos errar e nunca iremos esquecer de passar, podemos definir um valor padrão para um argumento.

[16:34] Leonardo: E como fazemos isso? Na nossa função, por exemplo, a function multiplica, temos a declaração da função e temos os parâmetros. O que podemos fazer para definir o valor padrão para esses parâmetros?

[16:48] Leonardo: Colocamos o nome do parâmetro igual a um valor, no caso da multiplicação fica igual a 1, que é o valor neutro da multiplicação, então, qualquer número x 1 dá ele mesmo. Vamos fazer isso para os dois parâmetros, tudo bem?

[17:06] Ju: Ok! Então, o primeiro parâmetro numero1 = 1 e numero2 = igual a 1, não passe zero no caso de multiplicação, que não vai dar certo. Ou seja, então, agora podemos passar um só parâmetro que, pelo menos, erro não vai dar, não vai dar Not a Number.

[17:30] Leonardo: Essa é a ideia, vamos testar?

[17:32] Ju: Vamos! Agora, o resultado é 9, porque só recebemos 9. Lembrando que tem a ordem dos parâmetros, então, se recebeu apenas um parâmetro ele ocupa o lugar do primeiro da lista, ou seja, numero1.

[17:46] Ju: Nesse caso, o JavaScript vai desconsiderar o que veio como padrão porque ele vai ser substituído pelo que foi recebido na execução da função, e como não recebeu mais nenhum assume o valor passado como padrão que é 1, então aí 9x1. É o que o Léo falou, valor neutro, ele nos retornou o 9 mas não deu o erro de Not a Number.

[18:11] Leonardo: Exatamente! Outra coisa muito importante que temos, que acabou acontecendo, é que os parâmetros da function soma tem o mesmo nome dos parâmetros da function multiplicacao.

[18:23] Leonardo: Ou seja, podemos colocar o nome que quisermos nos parâmetros e eles só vão ser válidos dentro do escopo da função, ou seja, só enquanto a função estiver em execução. Assim que ela acabar a execução estes nomes estão livres para usarmos em qualquer outro lugar. Você pode ter várias funções com os mesmos nomes de parâmetros.

[18:46] Ju: É verdade! É bom que se temos várias funções, não precisamos ficar pensando em mil nomes diferentes, se for tudo número pode passar tudo número. Só o nome da função, neste caso, como elas estão todas no mesmo escopo, elas estão todas funcionando no mesmo ambiente, cada função tem que ter o nome do que ela faz.

[19:11] Leonardo: Isso, o nome da função é exclusivo da função. O argumento nós podemos escolher.

[19:17] Leonardo: Uma dica importante, é boa prática (não é obrigatória, as funções podem ter quantos parâmetros quisermos, de nenhum até 999, 9999, você escolhe), passar poucos argumentos para a função.

[19:34] Leonardo: Então, se a sua função estiver recebendo muitos argumentos, provavelmente, você consegue quebrar ela em várias funções e fazer várias chamadas menores, várias funções pequenas que vão ficar mais fáceis de entender e vai ficar mais fácil na manutenção deste código depois.

[19:54] Ju: Perfeito!

[19:57] Leonardo: Então, acho que isso, certo, Ju? Tem alguma coisa mais para adicionar?

[19:59] Ju: Eu acho que já vimos bastante coisa, então, por mim, nos vemos no próximo vídeo! */


/* Para saber mais: Tipos de funções
PRÓXIMA ATIVIDADE

Os parâmetros e o retorno das funções são utilizados de acordo com cada caso específico. Isso significa que nem sempre todas as funções que escrevemos vão precisar de um ou de outro para fazer o que precisam. Abaixo temos mais exemplos para entender melhor algumas situações.

Função sem retorno e sem parâmetro: A função abaixo apenas executa uma instrução, sem a necessidade de disponibilizar o resultado para o restante do código. Neste exemplo escolhemos usar uma string fixa, então não há necessidade de parâmetros.

function cumprimentar(){
 console.log('oi gente!')
}

cumprimentar()COPIAR CÓDIGO
Função sem retorno, com parâmetro: similar à anterior, porém agora a função recebe, via parâmetro, o nome da pessoa a ser cumprimentada. Dessa forma é possível reaproveitar a função para que funcione de maneira parecida com o nome de qualquer pessoa (desde que esteja no formato de dado string.

function cumprimentaPessoa(pessoa){
 console.log(`oi, ${pessoa}!`)
}

cumprimentaPessoa('Helena')COPIAR CÓDIGO
Função com retorno, sem parâmetro: É possível combinar funções para que cada uma controle apenas uma parte do código e elas trabalhem juntas.

No caso abaixo, a função cumprimentar() não precisa receber nenhum parâmetro. Mas logo abaixo vemos que ela está sendo utilizada para montar uma string na função cumprimentaPessoa(nomePessoa). Isso significa que a string ”Oi gente!” deve estar disponível para outras partes do programa - ou seja, deve ser retornada com o uso da palavra-chave return.

function cumprimentar(){
 return 'Oi gente!'
}

function cumprimentaPessoa(nomePessoa) {
 console.log(`${cumprimentar()} Meu nome é ${nomePessoa}`)
}

cumprimentaPessoa('Paula') // “Oi gente! Meu nome é Paula”COPIAR CÓDIGO
A função cumprimentaPessoa(nomePessoa) recebe como parâmetro uma string onde podemos passar qualquer nome no momento em que executamos (ou chamamos) a função. Quando isso acontecer, a função cumprimentar() será executada também, e seu valor de retorno - a string Oi gente! - vai ocupar o lugar do ${} onde a função está sendo chamada.

Função com return e mais de um parâmetro: Lembrando que as funções podem receber a quantidade de parâmetros necessária, e que o JavaScript identifica os parâmetros pela ordem! Ou seja, no exemplo abaixo o parâmetro numero1 se refere a 15, o parâmetro numero2 se refere a 30 e o parâmetro numero3 se refere a 45. Somos nós, que estamos desenvolvendo o código, que damos os nomes aos parâmetros de acordo com o dado que a função espera receber - no caso, números.

function operacaoMatematica(numero1, numero2, numero3) {
 return numero1 + numero2 + numero3
}

operacaoMatematica(15, 30, 45) // 90COPIAR CÓDIGO
Parâmetros x argumentos: Na prática se referem ao mesmo tipo de dado; algumas documentações se referem a parâmetros no momento em que a função é definida (no caso, numero1, numero2, etc) e argumentos como os dados que utilizamos para executar a função (ou seja, 30, 45, etc).

Ainda há muito o que estudar no tema de funções, então pratique bastante pois parâmetros e retorno são conceitos essenciais. */