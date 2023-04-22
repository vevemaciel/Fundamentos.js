const cliente= {
    nome: "andre",
    idade: 32,
    cpf:"12312331233",
    email: "andre@email.com",

};
console.log(`o nome do cliente é ${cliente.nome} e essa pessoa tem ${cliente.idade} anos`)
console.log(cliente.cpf.substring (0 ,3))

// console.log(`o cpf desse cliente tem como os 3 primeiros digitos ${cliente.cpf.substring (0 ,3)}`)
/* 
Transcrição
[00:00] Juliana: Olá, então continuando com o nosso curso de JavaScript focado em objetos, já vimos a estrutura do objeto como funciona, agora vamos ver, continuar, vendo como manipula cada uma das partes do objeto.

[00:13] Aqui neste curso vamos trabalhar com desafios, então cada aula, cada vídeo, vamos ter um desafio diferente que vai nos ajudar a entender como trabalhamos com objetos no dia a dia.

[00:24] Para este primeiro desafio vamos ter que acessar um objeto com informações de um cliente, e exibir essas informações no console, aqui durante esse curso, vamos trabalhar com o contexto de banco, então o banco tem clientes, os clientes têm conta corrente, e por aí vai, então o que temos que fazer aqui, o nosso desafio é criar aqui um objeto, ter um objeto com informações de um cliente, e conseguir acessar, vamos printar, como dizemos, essa informações do cliente no console.

[00:55] Então eu vou criar um novo arquivo, eu vou chamar de “print-infos.js”, e o André que está aqui comigo vai nos dizer como podemos resolver esse desafio.

[01:11] André: Então pessoal, vamos acessar agora os valores de um objeto, já vimos na última aula como criar um objeto no JavaScript, e eu vou acessar ele usando notação de ponto, vamos criar um objeto, vou escrever agora com vocês, e vamos printar na tela as informações desse objeto, posso começar?

[01:33] Juliana: Pode, se você quiser André, podemos usar o mesmo objeto cliente que usou no vídeo passado, o nosso cliente aqui, o próprio André.

[01:42] André: Beleza, vamos lá.

[01:43] Juliana: Então eu vou dar um “Ctrl + C” no nosso arquivo do vídeo anterior, e eu vou colar, então nós temos aqui um cliente André, então como é que fazemos André para printar na tela o que precisamos.

[01:55] André: Então pessoal, olha só, já temos o objeto aqui, o objeto cliente, de novo, o objeto é formado por par, chave e valor, então tem a chave nome, e o valor André, e agora para printar a informação no nosso console, eu uso aquela função console.log() e eu vou mostrar para vocês como fazer isso, de maneira bem simples.

[02:17] Vamos lá, console.log() e dentro do console.log vamos colocar o valor que queremos exibir no nosso console, nesse caso eu quero receber informações de um cliente, de um objeto cliente, e como eu falei, já mencionei, vamos usar a noção de ponto, então eu vou mostrar aqui bem rápido aqui, a ideia só.

[02:47] Eu já tenho um objeto criado, coloco dentro do console cliente, para acessar a informação que eu quero exibir, eu tenho que saber a chave que eu quero, então a chave que eu quero agora vai ser um nome, simples, então, console.log(cliente.nome). Então agora eu vou dizer para você o valor que está nessa chave aqui, chave nome, correto Ju?

[03:11] Juliana: Correto, vamos fazer o seguinte, eu vou salvar e antes de continuarmos, vamos rodar esse arquivo, e ver se tudo funcionou certo, então no terminal eu acesso, eu rodo esse arquivo utilizando a palavra node para entrarmos no ambiente do node, e o nome do arquivo que é node print-infos.js.

[03:34] Então apareceu aqui no nosso terminal, André, ou seja, console.log aqui acessou o nosso objeto cliente, e acessou o valor da chave nome, então usamos o que o André falou de notação de ponto, ou seja, acessamos a variável cliente, e através da notação de ponto conseguimos entrar na chave nome e exibir o valor dessa chave que é uma string com o valor de André, certo André?

[04:05] André: Certo, isso mesmo Ju, vou melhorar um pouco essa escrita de código aqui, escrever um pouco mais, vamos usar aquele template, a string literal.

[04:16] Juliana: Isso, podemos chamar de string literal, ou de template string.

[04:20] André: Isso, vamos lá, então agora eu vou continuar exibindo informação do cliente, só que dessa maneira, console.log('Meu nome é'), aqui eu vou usar aquela notação de template.

[04:46] Juliana: Template string, ou literal também pode usar as duas formas.

[04:51] André: Então agora eu vou colocar, ${cliente.nome} e tenho, opa, cifrão.

[05:04] Juliana: Cifrão e chaves.

[05:06] André: Cifrão e chaves, e a chave que eu quero exibir, do objeto que eu quero exibir, então continuando o código, ${cliente.idade} anos.') então a string vai ser montada, meu nome é o valor da chave, nome do cliente, e tenho o valor da chave idade do objeto cliente, anos, então isso que vai ser exibido, correto? Ju, você coloca no console para vermos o resultado da saída?

[05:44] Juliana: Vou rodar de novo aqui node print-infos.js, meu nome é André e tenho 36 anos, perfeito, lembrando então essa notação que usamos para escrever, para interpolar, é strings com variáveis, que é a chamada template string que utilizamos o acento agudo que usamos para fazer crase no lugar das aspas e o cifrão com a chave onde queremos inserir valores de variáveis, e aqui conseguimos chamar tanto o nome da variável cliente quanto já acessar o valor das chaves que estão dentro desse objeto, do objeto cliente, certo André?

[06:28] André: Isso aí Ju.

[06:29] Juliana: O que mais então podemos fazer aqui?

[06:32] André: Olha só, trabalhando com objeto, e criamos um objeto cliente com chaves do tipo string, o nome é string, cpf, e-mail, tem idade que é um number, então aqui também tem algumas propriedades de string para essas propriedades que colocamos nesse cliente, por exemplo, vou dar um console de novo aqui, console.log() e vou usar uma função de string para o cpf, então console.log(cliente.cpf) qual método podemos usar aqui Ju, para exibir aqui?

[07:13] Juliana: Podemos dizer que para a segurança, vamos só exibir os 3 primeiros números do cpf, lembrando que os números estão dentro de aspas então seriam os 3 primeiros caracteres dessa string, onde está o nosso cpf.

[07:33] André: Isso, então vamos fazer o seguinte, vamos usar a função aqui, substring(), que é uma função do JavaScript para trabalhar com strings em JavaScript e vou passar aqui para essa função a faixa que eu quero exibir, que eu quero apanhar da string, então os 3 primeiros dígitos, ficando o código console.log(cliente.cpf.substring(0,3)), então de 0 até o 3, é isso mesmo Ju?

[07:53] Juliana: Isso, que começamos no índice zero, da nossa array de caracteres, que é uma string, lembrando que uma string podemos dizer que é um array de caracteres, então estamos começando no índice zero, que é o número 1 e está indo até o índice 3 e parando antes dele, ou seja, vai exibir o índice zero, o índice um e o índice dois, ou seja, os 3 primeiros números, os 3 primeiros algarismos, caracteres dessa string.

[08:23] André: Isso, vamos rodar então ele aqui no console.

[08:25] Juliana: Vamos, então node print-infos.js, meu nome é André e tenho 36 anos, e a segunda informação que pedimos 125 que são exatamente os 3 primeiros dígitos aqui do cpf, ou seja, conseguimos, acessar o valor, aqui no segundo console.log() que o André fez, acessamos a chave cpf, dentro do objeto cliente, e a partir do momento que você acessa essa chave você consegue utilizar qualquer método do JavaScript que seja de acordo com o tipo de dado.

[09:08] Ou seja, o tipo de dado do valor aqui da chave cpf, é uma string, então conseguimos utilizar um método de string próprio do JavaScript, que é o método substring() e trabalhar com ele normalmente, da mesma forma que se acessássemos a chave idade, conseguiríamos utilizar com 36, qualquer método que fosse um método de número, por exemplo, o parseFloat() que transforma de inteiro de int em float. Certo André?

[09:37] André: Certo, Ju.

[09:40] Juliana: Então eu acho que passamos pelo desafio, já acessamos um objeto aqui e imprimimos algumas informações no nosso terminal e acho que já estamos prontos para seguir para o próximo. */

/* Transcrição
Nesta aula, aprenderemos como acessar as propriedades de um objeto.

Vamos voltar ao VSCode, e dentro da pasta aula1, criaremos um arquivo chamado acesso_ponto.js. Para isso, selecionaremos a pasta aula1, clicaremos no primeiro ícone do lado direito da pasta OBJETOS e digitaremos "acesso_ponto.js".

No arquivo criado, vamos imaginar um trecho simplificado de uma aplicação que temos uma loja, em que temos clientes. Vamos modelar, isto é, traduzir algumas informações físicas ou características em um objeto. Logo, vamos modelar um cliente.

Iniciaremos o código com const cliente que vai receber as propriedades do objeto.

acesso_ponto.js:

const cliente = {

}COPIAR CÓDIGO
Vamos inserir as propriedades e seus respectivos valores dentro das chaves "{}":

const cliente = {
  nome: "Andre",
  idade: 32,
  cpf: "1122233345",
  email: "andre@dominio.com",
};COPIAR CÓDIGO
Digamos que no projeto desejamos acessar qual o nome desse cliente e escrever uma mensagem customizada e exibi-la no terminal. Com esse objetivo, digitaremos console.log(), se colocarmos "cliente" dentro do parêntese, temos o objeto com todos os campos.

const cliente = {
  nome: "Andre",
  idade: 32,
  cpf: "1122233345",
  email: "andre@dominio.com",
};

console.log(cliente)COPIAR CÓDIGO
Após inserir essa linha no código, abriremos o terminal e chamaremos o node para executar esse código.

node aula1/acesso_ponto.jsCOPIAR CÓDIGO
{
  nome: "Andre",
  idade: 32,
  cpf: "1122233345",
  email: "andre@dominio.com",
}COPIAR CÓDIGO
Note que foi exibido o objeto com todos os campos, sendo eles: nome, idade, cpf e e-mail. Mas não é isso que queremos, desejamos exibir somente o nome desse cliente.

Para isso, podemos usar o operador ponto ".". Voltando para o arquivo acesso_ponto.js, após cliente colocaremos ..

console.log(cliente.)COPIAR CÓDIGO
Note que ao inserirmos o ponto, o próprio VSCode sugere as seguintes opções:

cpf
email
idade
nome
abc cliente
abc console
abc log
São os dados separados do cliente, clicaremos em "nome".

const cliente = {
  nome: "Andre",
  idade: 32,
  cpf: "1122233345",
  email: "andre@dominio.com",
};

console.log(cliente.nome)COPIAR CÓDIGO
Salvaremos novamente o arquivo, clicando em "Ctrl + S" e voltaremos ao terminal, para executar o mesmo comando que rodamos anteriormente.

node aula1/acesso_ponto.jsCOPIAR CÓDIGO
Andre

Nos devolveu somente o nome André!

Voltando para o VSCode, vamos escrever uma mensagem customizada para melhorar a visualização. Com esse objetivo, vamos começar removendocliente.nome e escrevendo uma template string utilizando duas crases "":

console.log(``)COPIAR CÓDIGO
Dentro dessas crases, vamos inserir a mensagem que desejamos exibir:

console.log(`O nome do cliente é ${cliente.nome} e essa pessoa tem ${cliente.idade} anos.`);COPIAR CÓDIGO
Lembrando que ${} é a marcação de um valor que será lido. De novo, salvaremos o arquivo e voltaremos ao terminal para executar o comando node.

node aula1/acesso_ponto.jsCOPIAR CÓDIGO
O nome do cliente é Andre e essa pessoa tem 32 anos.

Desse modo, temos uma mensagem customizada com os campos de um objeto. Portanto, podemos usar o operador ponto para retornar o valor de uma propriedade.

Outra coisa que podemos fazer, também, é chamar métodos desse valor recebido. Criaremos outro console.log() no final do arquivo e novamente escrever uma template string:

console.log(`Os 3 primeiros dígitos do CPF são`);COPIAR CÓDIGO
Agora, podemos inserir o valor com a marcação ${} e chamar o cliente.cpf:

console.log(`Os 3 primeiros digitos do CPF são ${cliente.cpf}`);COPIAR CÓDIGO
Dessa forma, será exibido o cpf com todos os dígitos. Mas como estamos operando uma string dentro desse valor, sabemos que as strings possuem alguns métodos.

Podemos acessar cliente.cpf e pedir somente uma substring do valor especificado. Na substring() passaremos os valores 0 e 3.

console.log(`Os 3 primeiros digitos do CPF são ${cliente.cpf.substring(0, 3)}`);COPIAR CÓDIGO
Código completo do arquivo acesso_ponto.js:

const cliente = {
  nome: "Andre",
  idade: 32,
  cpf: "1122233345",
  email: "andre@dominio.com",
};

console.log(
  `O nome do cliente é ${cliente.nome} e essa pessoa tem ${cliente.idade} anos.`
);

console.log(`Os 3 primeiros digitos do CPF são ${cliente.cpf.substring(0, 3)}`);COPIAR CÓDIGO
Após inserirmos esse console.log, voltaremos ao terminal e rodaremos novamente o comando node.

node aula1/acesso_ponto.jsCOPIAR CÓDIGO
O nome do cliente é Andre e essa pessoa tem 32 anos.
Os 3 primeiros dígitos do CPF são 112COPIAR CÓDIGO
Conseguimos exibir somente os três primeiros dígitos do CPF do cliente!

Assim, aprendemos que conseguimos acessar o valor de uma propriedade de um objeto e manipulá-lo.

Na próxima aula, vamos entender outra forma de acessar os dados. Te espero lá!

CONTINUAR LENDO
 */