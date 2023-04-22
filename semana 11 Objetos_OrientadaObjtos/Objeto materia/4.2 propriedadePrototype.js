
function cliente (nome,cpf,email,saldo){
  this.nome =nome
  this.cpf = cpf
  this.email = email
  this.saldo=saldo
  this.depositar= function(valor) {
    this.saldo += valor

  }
}
    const andre = new cliente('Andre', " 123123435345","andre@emial.com", 100)

    console.log(andre)
/* cliente {
  nome: 'Andre',
  cpf: ' 123123435345',
  email: 'andre@emial.com',
  saldo: 100,
  depositar: [Function (anonymous)]
} */




/* Transcrição
[00:00] Juliana: Continuando então com o nosso curso de objetos com JavaScript, agora que já tivemos uma introdução ao que são protótipos, o que é herança, podemos passar para o nosso próximo desafio, que chama cliente genérico, temos que gerar uma função que permita a criação de novos clientes a partir de um modelo.

[00:19] Sim, porque até agora temos trabalhado com objeto, vou mostrar o primeiro objeto que criamos, que é o objeto cliente, e ele só tem um, ele é um objeto literal, ele já tem o dado aqui dentro que é o nome André, então temos trabalhado agora só com cliente André.

[00:36] Eu já criei um arquivo aqui chamado “cliente-generico.js”, e André como é que fazemos então para possamos a partir de um modelo, puxando o gancho do que falamos sobre protótipos e a partir desse modelo criarmos quantos clientes quisermos, com as mesmas propriedades.

[00:56] André: Então Ju, vamos começar definindo um cliente, para vermos no código como vamos herdar essas propriedades e funções em um protótipo. Então eu vou começar aqui, em “cliente-generico.js”, vou criar uma function Cliente() e vamos definir algumas informações desse cliente, nome, cpf, e-mail e saldo, passando como parâmetro, (nome, cpf, email, saldo).

[01:45] E vamos definir agora essas propriedades entre as chaves {this.nome = nome this.cpf = cpf this.email = e-mail this.saldo = saldo}, vamos definir também uma função depositar, deixa esse objeto cliente aqui, essa função que vai criar um objeto para nós já bonito, então this.depositar = function(valor){this.saldo += valor}, recebe um parâmetro valor e volta nosso saldo, certo Ju?

[03:31] Juliana: Certo, então o que criamos aqui foi uma função do JavaScript da mesma forma que temos feito muito, não da mesma forma, mas similar às funções que criamos anteriormente, temos algumas propriedades aqui, algumas variáveis, que vão receber os parâmetros de nome, cpf, de e-mail e de saldo, e também criamos um método depositar, que é o nosso comportamento digamos assim, ele vai receber um valor e vai incrementar o valor de saldo com o que tivermos passando aqui por parâmetro

[04:09] Então André, qual que é a diferença entre por exemplo, criarmos const nome que vai receber nome e o this.nome = nome, e a mesma coisa aí para o this.depositar.

[04:27] André: Então Ju, nessa função function Cliente() ela vai servir para nós aqui como uma função construtora, então criei um objeto agora cliente com base nessa função, então essa função vai sempre possuir para mim um objeto cliente, e eu vou usar ela aqui agora como uma função construtora.

[04:48] Então vou fazer aqui const andre = new Cliente(). Essa palavra reservada new você pode falar para nós um pouco o que esse new significa?

[05:07] Juliana: Sim, o new é uma palavra reservada como o André disse, existem algumas em todas as linguagens de programação, isso quando é uma palavra reservada, não podemos, por exemplo, criar uma variável chamada variável new porque new é uma palavra reservada da linguagem, o JavaScript ele vai ficar confuso.

[05:26] Então usamos essa palavra new, a palavra-chave, para dizer que justamente estamos utilizando a partir da nossa função cliente, estamos criando um new, criando um novo cliente, chamamos isso de instância, então a nossa const andre é uma nova instância de cliente criado a partir da nossa função construtora.

[05:50] E o André quando criou o nosso new Cliente() ele passou entre parâmetros os dados reais desse cliente, então new Cliente() abre e fecha parênteses e dentro dele os quatro parâmetros da nossa função cliente, ou seja, o nome que ele colocou uma string André, o cpf ele colocou uma string com o cpf fictício, 12543 o número que você quiser, uma outra com o e-mail dele e no final um número com um saldo, const andre = new Cliente(“André”, “1254359542”, “andre@email.com”, 100) agora se quisermos dar um console.log() para testar vemos se esse cliente realmente foi criado.

[06:25] André: Então vou fazer aqui, console.log(andre).

[06:35] Juliana: Certo, então eu vou salvar.

[06:38] André: Você executa aí?

[06:39] Juliana: Executo, node cliente-generico.js e olha só o que apareceu no terminal, foi um novo objeto cliente com as nossas chaves, os nossos parâmetros, e os valores que o André passou quando ele criou essa nova instância de cliente, utilizando a palavra-chave new, de novo. Inclusive nos trouxe a função de depositar aqui como uma função.

[07:11] Então, para entendermos um pouco melhor como funciona essa parte de herança, começar entrar um pouco nesse lance de herança que estávamos falando, eu vou fazer o seguinte, eu vou copiar aqui o que criamos, aqui nossa função cliente e a nossa const andre e eu vou passar isso novamente para o console do navegador onde estávamos trabalhando.

[07:42] Então eu vou colar tudo que fizemos aqui, a função e a nossa const andre, vou dar “Enter”, tem uma redeclaração aqui, eu vou recarregar a página e fazer isso novamente, então uma redeclaração de const ele me avisou desse problema.

[08:02] Então agora se tentarmos acessar cliente ele vai nos trazer aqui a função que foi criada, mas o que eu quero mostrar para vocês não é cliente, eu quero mostrar para vocês andre, que agora conseguimos acessar andre.__proto__ e através disso se trouxermos o resultado, vemos aqui no construtor de andre cliente, ou seja, andre é um objeto que foi construído a partir de cliente, então a partir de um cliente genérico.

[08:37] E por sua vez, eu vou limpar o console aqui e fazer novamente andre.__proto__.__proto__ por que ponto ponto? Lembrando que ponto é nossa notação para entrar em objetos e acessar as propriedades dele, então eu entrei dentro do nosso objeto Object e agora eu entrei entrando mais um nível, vamos ver o que ele vai nos trazer.

[09:06] Então entrando em andre.__proto__.__proto__ ele trouxe um construtor de objeto, ou seja, o nosso cliente, a nossa função cliente, utilizou o construtor objeto, e a nossa instância andre utilizou o construtor cliente, chamamos isso de cadeia de protótipo.

[09:33] Cadeia de protótipo vamos encadeando a partir do primeiro nível, no caso aqui o primeiro nível é o objeto, a partir do objeto criamos um cliente genérico e partir do cliente genérico criamos um outro objeto que é o nosso cliente realmente que é o andre.

[09:48] Eu só vou relembrar para vocês duas coisas que essa propriedade underline underline proto só estamos usando aqui para dar os exemplos, para conseguirmos visualizar o que acontece dentro dos protótipos do JavaScript, não utilizamos essa propriedade em código, ela é só, estamos usando ela mesmo como exemplo.

[10:06] E no caso aqui só conseguimos trazer ela através do console do navegador porque o console do por exemplo, se fizermos console.log() aqui com o terminal, ele acessa as propriedades de uma forma um pouco diferente e ele não traz quando utilizamos aqui o console.log() no terminal, ele não nos traz isso que chamamos de propriedades não enumeráveis, que são essas propriedades aqui automáticas, que fazem parte do objeto genérico, do objeto proto.

[10:38] Então como elas são propriedades que não foram definidas por nós quando criamos o objeto, por padrão o node ele não traz essas propriedades quando chamamos, por isso temos que acessar pelo console do navegador mas pode ficar tranquilo que elas estão bem guardadas e conseguimos utilizá-las normalmente, certo André?

[10:57] André: Certo Ju.

[11:00] Juliana: É normal trabalharmos com herança de propriedades e métodos, mais para frente vamos ver outras formas de fazer isso com JavaScript e o André vai dominar essa parte de objetos que é bem a praia dele.

[11:12] André: Isso ai Ju.

[11:13] Juliana: Então nos vemos no próximo vídeo.

[11:15] André: Até o próximo vídeo.   */