
function cliente (nome,cpf,email,saldo){
  this.nome =nome
  this.cpf = cpf
  this.email = email
  this.saldo=saldo
  this.depositar= function(valor) {
    this.saldo += valor

  }
}
   function clientePoupanca(nome,cpf,email,saldo, saldoPoup)
   {
    cliente.call(this,nome,cpf,email,saldo)
    this.saldoPoup=saldoPoup
   }
   const ju = new clientePoupanca("ju","4234325225","ju@email",100,200)

   clientePoupanca.prototype.depositarPoup = function(valor)
   {
    this.saldoPoup += valor
   }
   ju.depositarPoup (30)

   console.log( ju)
   console.log( ju.saldoPoup)


/* Transcrição
[00:00] Juliana: Continuando então com os nossos estudos com objetos em JavaScript, agora protótipos, é o Prototype, vamos dar uma olhada em qual que é o desafio desse vídeo, então o cliente poupança, aproveitar o cliente que já existe, que já criamos um cliente genérico anteriormente e criar a partir dele um novo tipo de cliente para contas poupança.

[00:23] Então temos um cliente genérico, mas normalmente os bancos ele tem mais de um tipo, cliente vip, cliente poupança, cliente universitário e por aí vai, já criei um arquivo “cliente-poupanca.js”, e ai André como é que fazemos para continuar com o nosso reaproveitamento de propriedades de objeto.

[00:41] André: Então Ju vamos definir aqui o objeto cliente, vamos trazer para esse arquivo também? Ele está lá em “cliente-generico.js”.

[00:50] Juliana: Eu vou copiar aqui nosso “cliente-generico.js” então, copiar a função inteira cliente, e trazer para “cliente-poupanca.js”.

[01:02] André: Então agora vamos definir um objeto, um novo construtor, baseando-se nesse objeto cliente, então vou definir o cliente poupança. Então vamos definir também uma function chamada cliente poupança, function ClientePoupanca() vamos definir aqui algumas informações, nome, cpf, e-mail, saldo e saldoPoup.

[01:41] André: Essas informações eu vou passar aqui para construir nosso objeto ClientePoupanca algumas informações que definimos lá em cliente, como parâmetro (nome, cpf, email, saldo) e o que vai ter a mais aqui vai ser o saldoPoup o saldo da poupança, então como último parâmetro, saldoPoup, certo até aí, Ju?

[02:16] Juliana: Certo.

[02:17] André: Então agora eu tenho que de alguma maneira relacionar o cliente poupança com o cliente, então eu vou fazer da seguinte maneira, então {Cliente.call} que eu vou chamar ai o construtor do cliente para dentro do meu construtor de ClientePoupanca que esse ClientePoupanca ele vai herdar todas as propriedades e os comportamentos do cliente, correto Ju?

[02:49] Juliana: Correto, então esse call “c a l l”, é literalmente de chamar, estamos indo no construtor cliente e chamando as propriedades de dentro dele para dentro de ClientePoupanca e agora precisamos passar nos parâmetros de call quais são as propriedades que queremos chamar, porque não precisamos necessariamente chamar todas, mas nesse caso vamos querer porque o cliente é o cliente base, então precisamos de todas as informações do cliente base e aí sim adicionar o que é de ClientePoupanca a mais.

[03:19] André: Então o call() o primeiro parâmetro que ele recebe aqui é o this que ele é referente a este objeto que eu estou criando, eu vou passar as informações do cliente, (this, nome, cpf, email, saldo) o construtor do cliente ele espera essas informações de parâmetro, e vou falar, nesse objeto this o this desse objeto, a informação que eu tenho para o ClientePoupanca que diferencia ele do cliente é a adição do saldoPoup, então this. de novo o operador de ponto para acessar as propriedades no objeto, this.saldoPoup = saldoPoup recebe o saldoPoup que eu passei por parâmetro.

[04:14] Então aqui agora eu tenho um novo construtor que eu só utilizo o construtor Cliente para definir ClientePoupanca, então vamos testar aqui, vamos criar um objeto no objeto que vai ser do tipo ClientePoupanca e vamos rodar no console essas informações.

[04:39] André: Então vamos lá, vai ser Ju agora, const ju = new ClientePoupanca() vai receber como parâmetro, um ”Ju”, “55588844477711”, “ju@email.com”, 100, 200 então definido o ClientePoupanca que vai ser Ju agora, vamos logar as informações para vermos no console, as informações da Ju, do ClientePoupanca, coloco console.log(ju), você executa Ju para vermos a saída?

[05:43] Juliana: Claro, vamos lá, já salvei aqui, node cliente-poupanca.js e ele criou uma nova instância de ClientePoupanca com os dados que o André passou, e agora a diferença é que nosso ClientePoupanca além das outras propriedades que o cliente normal tem, nome, cpf, etc., saldo, tem também saldo poupança, aqui criado com o valor de 200, então está tudo certo por enquanto, mas tem uma coisa André que agora que temos o saldo poupança, o nosso método depositar do cliente, ele só deposita no saldo normal.

[06:24] André: É isso ai, então vamos definir agora em um protótipo uma função para depositar na poupança, então vamos continuar aqui, então ClientePoupanca vou acessar a propriedade prototype, eu estou acessando o protótipo do meu ClientePoupanca e vou definir a função depositar, ClientePoupanca.prototype.depositarPoup, ela vai receber uma function = function(valor) que vai receber também o valor como parâmetro, e esse valor ele vai definir para nós aqui, a alteração do saldo da poupança, então para esse objeto ClientePoupanca, eu vou definir que o objeto ClientePoupanca então this. eu vou acessar a propriedade this.saldoPoup += valor saldo da poupança, e vou mais igual ao valor passado.

[07:38] Então dessa maneira o que que ela está definindo, está definindo no protótipo, uma nova função, um novo comportamento para esse ClientePoupanca.

[07:53] Juliana: Certo então podemos chamar esse método depositarPoup para fazer um teste?

[07:58] André: Vamos sim, então ju que é o objeto do tipo poupança que criamos, ju.depositarPoup(), já apareceu para nós aqui, vou passar mais 30 reais aqui como parâmetro de depósito, e vou dar um console agora na propriedade saldoPoup do objeto ju que é um ClientePoupanca, então console.log(ju.saldoPoup) e a propriedade que eu quero exibir que é o saldoPoup. Dar um espaço aqui na plataforma só para, Ju executa ele para vermos o resultado.

[08:53] Juliana: Vamos executar, rodar novamente, node cliente-poupanca.js ele criou novamente nossa instância de ClientePoupanca com os meus dados, iniciou o saldoPoup com 200 que era o que tínhamos feito, e o console que foi feito logo abaixo já mostrar 230, ou seja, está tudo funcionando.

[09:12] O que André foi adicionar ao protótipo do objeto ClientePoupanca, lembrando aqui que estamos usando tudo notação de ponto como temos feito anteriormente, então pedimos para o JavaScript acessar o objeto ClientePoupanca entrar dentro de prototype, dentro da propriedade prototype e adicionar um novo método a essa propriedade que é uma função.

[09:40] Da mesma forma que anteriormente quando estávamos começando com objetos, vimos que se quiséssemos criar uma nova propriedade dentro de cada objeto, precisaríamos somente passar obj.propriedade = “valor” e fizemos isso lá atrás no início do curso, é exatamente o mesmo principio que estamos utilizando aqui para acessar a propriedade prototype que é essa propriedade que ela é criada pelo JavaScript junto com todos os objetos, os arrays, as funções que criamos, todas as instâncias que criamos, e que usamos ali o underline underline proto dar uma passeada ali por trás dos panos desse protótipo.

[10:29] Ele acessou prototype de ClientePoupanca e adicionou a ele um novo método, depositarPoup e na linha 25 que o André fez foi chamar a instância de ClientePoupanca que criamos e nome dessa instância dessa cópia digamos assim de ClientePoupanca que fizemos através de um modelo, colocamos o nome de ju que sou eu, com os meus dados, e ele chamou a instância de ju, a instância de ClientePoupanca, chamou o método que já está associado a todas as instâncias, todos os clientes criados a partir do objeto ClientePoupanca

[11:10] E passou aqui o método com o valor que ele espera receber, ele espera receber um valor para incrementar o que? Incrementar o valor da propriedade saldoPoup, a propriedade saldoPoup definiu aqui quando criamos um construtor de ClientePoupanca, então todos ClientePoupanca tem essa propriedade saldoPoup e é por isso que conseguimos acessar.

[11:35] Se tentássemos acessar por exemplo, criasse aqui, eu vou copiar a nossa criação aqui da const ju vou colar e refazer o nosso cliente andre = passando somente o new Cliente eu posso deixar os dados aqui e tirar aqui o valor de poupança, mesmo se criássemos um new Cliente andre, e tentasse acessar no final aqui do nosso código console.log(andre.saldoPoup), vamos ver o que acontece.

[12:19] Ele veio como indefinido, porque saldoPoup é uma propriedade que existe somente para instâncias de ClientePoupanca não existem para instância de Cliente, apesar de termos chamado as propriedades de Cliente não incluímos aqui saldoPoup, certo André?

[12:40] André: Certo Ju.

[12:42] Juliana: Então essa aqui que apresentamos é uma introdução a questão dos protótipos em JavaScript que falamos que é uma linguagem baseada em protótipo, tem muito mais sobre prototypes para aprendemos como criar, como alterar propriedades dele, então, tem bastante coisa nesse mundo aqui.

[13:03] Mas a partir de agora já conseguimos, você nos seus estudos evoluir para ir praticando como que utiliza prototype para não só acessarmos o que tem dentro do prototype, entrar na cadeia de protótipo para ver ali quem herda de quem e também criar seus próprios métodos de prototype, os seus próprios métodos base dos objetos que você vai criando enquanto você estiver praticando com JavaScript.

[13:32] André: Só para fechar Ju, tem mais informações de protótipo, prototype nos materiais extras, correto?

[13:39] Juliana: Correto, sempre fazemos bastante material extra, então não deixe de conferir que tem bastante coisa legal para complementar o assunto. */