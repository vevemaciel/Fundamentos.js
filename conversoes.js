// tipo de dado
// bollean
//cconversão implicita

const numero = 456;
const numeroString = "456";

//number();
//string();

console.log (numero + Number(numeroString))

//cconversão explicita

//const numeroString = Number("456");

/* [00:00] Ju: Nesse vídeo, nós vamos trazer, de novo, um pouco do que foi falado anteriormente sobre tipos; tem tipo string, tipo número, etc; e, também, sobre o booleano, o true ou false, lembrando que o Léo já nos lembrou que o booleano é muito utilizado em programação, trabalhamos com ele sempre.

[00:23] Ju: Eu vou abrir um novo arquivo no terminal e chamar ele de “conversoes.js”. O porquê desse nome em alguns minutos já vai ficar claro.

[00:31] Ju: Mas, o que vamos fazer nessa aula é trazer um pouco mais sobre a importância de sabermos qual é o tipo de dado que estamos trabalhando e como que trabalhamos isso junto com os booleanos, para evitar um comportamento, que um deles é muito característico do JavaScript, que é, justamente, um tipo de conversão.

[00:56] Ju: Léo, fala para nós o que o JavaScript aprontou dessa vez, que vamos precisar explicar com mais carinho para o pessoal.

[01:02] Leonardo: O que o JavaScript aprontou é a Conversão Implícita. Eu quero falar de dois tipos, a Implícita e a Explícita.

[01:10] Leonardo: Mas, vamos começar pelo o que o JavaScript aprontou. A Conversão Implícita permite que nós convertamos um tipo de dado em outro.

[01:17] Leonardo: Como assim? Podemos converter um number ou um número em uma string, uma string em um número, entre outras possibilidades. Nós vamos trabalhar, principalmente, com esses dois nessa aula; que são os dois principais.

[01:29] Leonardo: Ju, cria para mim duas variáveis, uma contendo número e a outra contendo esse número, só que em forma de string.

[01:37] Ju: Eu criei uma const numero e eu vou passar um número, 456, por exemplo. Eu vou criar uma outra embaixo const numeroString e vou passar o mesmo valor, só que entre aspas, que é o que já vimos que transforma qualquer conjunto de caracteres ou algarismos numa string. Vamos lá!

[02:00] Leonardo: Vamos lá, então. Vamos testar, agora, para ver se esses dois são iguais. Faz um console.log, para mim, e compara os dois iguais estávamos fazendo antes, com os três iguais.

[02:10] Ju: console.log(numero === numeroString). Lembrando que com o que vimos sobre booleanos anteriormente, quando fazemos uma comparação, o resultado dessa comparação ou é verdadeiro ou é falso. Então, é um dos resultados que esperamos que venha quando fazemos qualquer comparação utilizando dois ou três iguais com o JavaScript.

[02:31] Ju: Eu estou dentro da minha pasta Alura, eu vou entrar na pasta do projeto. Nós já estamos trabalhando e eu vou rodar o meu arquivo, que eu chamei de “conversoes.js”, como comando node conversoes.js.

[02:45] Ju: E o resultado é false. Ou seja, ele comparou as duas variáveis, as duas tem 456, e me retornou que elas não correspondem, elas não são a mesma coisa.

[02:57] Ju: O que aconteceu aqui, então, Léo?

[03:01] Leonardo: O que aconteceu foi o seguinte, nós estamos comparando um número com um texto. Um número é diferente de um texto para o JavaScript. Nós temos que tomar um pouco de cuidado com essas coisas.

[03:12] Leonardo: O JavaScript nos ajuda, também, nesse ponto com a Conversão Implícita. Como a fazemos? Nós usamos, invés dos três iguais, vamos usar dois iguais só.

[03:24] Ju: Então, o mesmo console.log, a mesma comparação, só que invés de três iguais, vou usar só dois iguais nessa comparação. Vou limpar o terminal.

[03:33] Ju: Agora mudou! Agora ele diz que 456 como número e 456 como string, o JavaScript está reconhecendo como se fosse equivalente, como se fosse a mesma coisa.

[03:45] Leonardo: Isso. O que o JavaScript fez?

[03:48] Leonardo: Ele pegou o nosso número 456 e converteu numa string e comparou os dois. Nesse ponto, agora os dois são uma string com o valor 456. Eles são iguais, porém, nós temos que tomar alguns cuidados.

[04:02] Leonardo: Por que? Porque essa Comparação Implícita, às vezes, pode trazer alguns bugs para o nosso código.

[04:07] Leonardo: Nós vamos deixar essa parte dos bugs do código um pouco mais para frente, porque eles são bem peculiares e temos que tomar um pouco de cuidado com eles.

[04:17] Ju: Certo! Esse é um comportamento que, normalmente, não esperamos que uma linguagem de programação faça.

[04:24] Ju: Por isso que quando começamos a estudar uma linguagem de programação, é importante nós sabermos esses detalhes sobre ela, porque não é normal termos esses dois tipos de comparação, na maior parte das linguagens.

[04:38] Ju: No caso, o JavaScript tem um igual para nós atribuirmos um valor à uma variável (nós não podemos confundir), dois iguais para fazer uma comparação, digamos assim, pelo valor, só o que está dentro (então, ele está comparando só o 456), porém, os três iguais compararam não só o valor, mas, também o tipo; se é string, se é número, ou os dois têm que ser número para dar true ou os dois têm que ser string para dar true, etc.

[05:07] Ju: Mas, tem que sempre lembrar que esse não é um comportamento que a maior parte das linguagens de programação acompanhe.

[05:14] Ju: E ele é propenso, como o Léo falou, a dar bugs. Então, como vamos trabalhar ainda mais? Vamos dar alguns exemplos de como isso pode aparecer no nosso código.

[05:26] Leonardo: Isso pode aparecer no nosso código, também, se tentarmos somar esses dois valores. Vamos fazer isso?

[05:34] Ju: Vamos! Eu posso somar direto no console.log, não é? Para já exibirmos.

[05:38] Leonardo: Pode!

[05:40] Ju: Eu vou, inclusive, apagar a nossa comparação e vou só trocar pelo operador de adição, que é o que usamos para fazer a soma.

[05:48] Ju: console.log(numero + numeroString) (vou limpar o terminal), e o que ele fez? Agora, o terminal está exibindo 456456.

[06:01] Leonardo: O que aconteceu? Ele pegou o nosso número e transformou numa string, então, na hora que colocamos o operador de soma, que é o mais, na verdade ele vira uma concatenação. Você tem uma string 456 com outra string 456. E, aí, você só colocou uma atrás da outra.

[06:19] Leonardo: Você não somou os valores dela, então, temos que tomar um pouco de cuidado, porque isso é uma coisa que pode acontecer no nosso código.

[06:27] Ju: Então, o ideal é sempre reforçarmos. Daí vem a importância de entender as diferenças entre os tipos, que falamos em outra aula, sempre confirmar, reforçar, que a variável guarde a informação no tipo de dado que nós esperamos.

[06:42] Ju: Tudo bem que nós, às vezes, utilizemos um número dentro de strings. Por exemplo, um CPF, normalmente, é uma sequência de números que está dentro de uma *string, números de telefone. Porém, quando precisamos fazer operações matemáticas nós, normalmente, vamos querer garantir que um número realmente seja um número. Não é, Léo?

[07:00] Leonardo: Seria muito importante. Agora que vimos isso, vamos ver como podemos impedir que isso ocorra e transformar tudo, realmente, em um número para fazermos nossa conta. Certo, Ju?

[07:11] Ju: Certo!

[07:12] Leonardo: Agora, vamos fazer a Conversão Explícita, tudo bem?

[07:18] Ju: Tudo bem!

[07:18] Leonardo: A Conversão Explícita nós vamos utilizar duas funções do JavaScript, nesse caso. A função number, com “N” maiúsculo no início, e a função string.

[07:29] Ju: Ok!

[07:33] Ju: Eu posso assumir que usamos number quando queremos transformar uma string em número e nós usamos o string para transformar um número numa string?

[07:43] Leonardo: Sim, exatamente.

[07:45] Ju: Ok. Se quisermos fazer uma conta, imagino que a variável numeroString é a que tem que ser convertida, para conseguirmos fazer essa soma.

[07:55] Leonardo: Sim.

[07:57] Ju: Nós podemos fazer isso direto no console, não é? Para exibirmos o resultado, não, Léo?

[08:06] Leonardo: Podemos! Podemos fazer diretamente no console.

[08:09] Ju: Se eu passar number e, entre as aspas (deixa eu puxar o terminal um pouco mais para a direito) de number eu passar só a referência da variável, que é numeroString, o que esperamos que aconteça?

[08:28] Ju: Que o JavaScript transforme o valor que, atualmente, é uma string, em um número e, aí sim, consiga, ao invés de concatenar (lembra que quando falamos de tipo string, mostramos a concatenação de strings com o mesmo operador de adição), ao invés dele transformar 456456 e colocar um do lado do outro, ele vai realmente somar e vai dar um número que agora eu não lembro qual é. Se o Léo lembrar, me fala.

[08:54] Ju: É isso que nós esperamos que aconteça.

[08:57] Leonardo: Isso!

[08:59] Ju: Eu vou limpar o terminal e rodar de novo o console. E, agora sim, “912” é a soma dessa conta. Isso significa que funcionou. Nós conseguimos converter o valor que está dentro da string, antes que o JavaScript tentasse fazer alguma coisa com essa string no lugar de número.

[09:22] Ju: Ou, poderíamos também, eu acho, passar number dentro da variável.

[09:29] Leonardo: É possível.

[09:30] Ju: É possível e também funciona. Nós garantimos que, embora agora o nome da variável não esteja tão de acordo, nós garantimos que isso vai ser convertido, porque a parte da direita é resolvida antes de ser passada para a parte esquerda do igual.

[09:52] Ju: Então, vai ser salvo o valor em número nessa variável e, provavelmente, a nossa conta também vai dar certo. Vamos fazer de novo. Deu 912.

[10:02] Ju: Essa é a Conversão Explícita.

[10:06] Leonardo: Sim, essa é a Conversão Explícita.

[10:08] Leonardo: É importante salientar só um ponto. Se eu tentar converter uma string que não contém só número, contém, por exemplo, algarismo, ele vai dar um Not a Number. Como tivemos antes quando estávamos tentando multiplicar duas strings.

[10:24] Ju: Certo. Nós podemos fazer um teste. Vamos tentar converter um number que tenha 456a; vou colocar um “a” junto com o nosso número 456 que está dentro da string. Vamos ver o que vamos aprontar. Deu Not a Number.

[10:43] Ju: Além de nós garantirmos o tipo, também temos que garantir que, quando o tipo é número, não tenha nenhum caractere que não seja número solto no meio do seu valor.

[10:56] Leonardo: É, essa é uma parte bem importante, já que se você estragar uma parte da sua informação, toda a sua conta acaba sendo errada.

[11:05] Ju: Está certo.

[11:07] Leonardo: Ok, Ju. Eu acho que é isso que tínhamos para falar das conversões. Vamos subir todos esses códigos para o Git?

[11:15] Ju: Vamos sim!

[11:16] Ju: Nós já tínhamos, anteriormente, criado um repositório no GitHub e subido alguns arquivos. Agora, nós só temos que continuar o processo com a teia de comandos que é add, commit e push.

[11:28] Ju: Eu vou dar um git status para vermos o que está acontecendo.

[11:32] Ju: Os três códigos dessa aula, os três arquivos que trabalhamos estão listados e eles ainda não estão colocados na caixa para serem mandados para a nuvem, para serem indexados.

[11:45] Ju: Próximo comando é git add ., que ele vai adicionar tudo. Se dermos um git status novamente, agora o Git reconheceu esses novos arquivos e estamos prontos para dar os dois comandos finais, que é git commit -m desta aula.

[12:10] Leonardo: Passa o codigos var e conversoes.

[12:18] Ju: codigos var e conversoes. E o último comando que vai sincronizar o que temos localmente com o que nós temos remotamente no GitHub, que é git push origin master.

[12:37] Ju: é possível que ele peça a sua senha, normal. É só você colocar a sua senha. No meu caso não pediu.

[12:43] Ju: Eu vou trazer o meu repositório, que estava aberto, vou recarregar a página e acabou de aparecer há 28 segundos atrás. O código já está salvo no GitHub, no repositório que abrimos para essa aula. Certo, Léo?

[13:00] Leonardo: Certo!

[13:02] Ju: Então, podemos fechar por aqui?

[13:05] Leonardo: Creio eu que sim.

[13:06] Ju: Então, nos vemos no próximo vídeo. */

