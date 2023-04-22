class Cliente{
  constructor(nome,email,cpf,saldo){
    this.nome= nome
    this.email =email
    this.cpf =cpf
    this.saldo =saldo
    }

    depositar (valor){
        this.saldo +=valor
    }  
    exibirSaldo(){
        console.log(this.saldo)
    }
}
class ClientePoupanca extends Cliente{
  constructor(nome,email,cpf,saldo, saldoPoupanca){
    super(nome,email,cpf,saldo)
    this.saldoPoupanca=saldoPoupanca
  }

  depositarPoupanca(valor){
    this.saldoPoupanca += valor
  }
}

const andre = new ClientePoupanca ("Andre","Andre@email","214322322",100,200)

console.log(andre)

andre.depositar(50)
andre.depositarPoupanca(50)
console.log(andre)

/* Transcrição
[00:00] Juliana: Continuando com o nosso curso de objetos em JavaScript, já vimos objetos literais, agora estamos vendo classes com orientação a objeto, vamos voltar para o nosso último desafio que é o de cliente poupança, que tínhamos que aproveitar um cliente que já existia para criar a partir dele um novo tipo de cliente para contas poupança.

[00:19] A partir do momento que já tínhamos criado uma classe cliente, anteriormente, podemos aproveitar a nossa classe cliente para resolver esse problema de cliente poupança, perto André?

[00:32] André: Certo Ju.

[00:33] Juliana: Eu já criei um arquivo chamado “classe-clientepoup.js”, já copiei a nossa classe cliente para dentro dele, então vamos lá resolver esse último desafio.

[00:44] André: Então já tenho a classe cliente definido, e nem toda classe, nem toda conta, é uma conta qualquer, então pode ter conta poupança, conta de investimento, dentro de um cenário de um banco, então para resolver o desafio vamos usar herança, que vai permitir eu herdar os atributos e os métodos de uma classe, dessa nova classe que eu estou criando, querendo criar.

[01:17] Então eu defini aqui class palavra reservada class, ClientePoupanca, que nem a Ju falou, a classe precisa ter um nome com letra maiúscula no início dela, então ela vai extends, ela vai estender, ela vai herdar de Cliente, class ClientePoupanca extends Cliente{} então defini que a classe ClientePoupanca ela herda de cliente, então agora eu vou fazer aquela questão do construtor.

[01:51] Então no construtor da classe ClientePoupanca além das informações do cliente, eu tenho que colocar as informações que são específicas da poupança, então dentro das chaves, constructor() palavra reservada, eu vou passar aqui por parâmetro, nome, email, cpf, saldo, saldoPoupanca que é a informação específica de uma classe, de um objeto que é do tipo cliente poupança, então saldoPoupanca.

[02:38] E como eu estou herdando da classe Cliente, eu vou usar o super(), então eu estou indo lá no construtor da classe Cliente, puxando para a classe ClientePoupanca, e passando para o super() as informações que são para construir o cliente e depois adicionar a informação da poupança, então constructor, super(nome, email, cpf, saldo) e adiciono agora o this para essa classe ClientePoupanca, cliente poupança, o this.saldoPoupanca = que vai receber do construtor o saldoPoupanca, certo Ju?

[03:38] Juliana: Certo. E agora para o nosso cliente poupança conseguir fazer depósitos na conta poupança, ele também tem que ter um comportamento, tem que ter um método para isso, porque o saldo da poupança é diferente do saldo da conta normal.

[03:57] André: Exatamente, então vou definir aqui dentro da classe ClientePoupanca esse comportamento, esse método, então depositar, está vendo que está vindo o depositar, mas é o depositar da classe Cliente, então depositar comportamento depositar na poupança, que é um comportamento que só tem na classe ClientePoupanca, então depositarPoupanca(valor), que vai receber o valor por parâmetro, e vou fazer o seguinte, this.saldoPoupanca desse ClientePoupanca na propriedade saldoPoupanca vai receber += valor, certo Ju?

[04:45] Juliana: Certo.

[04:47] André: Então vamos agora exibir no console, só para nós, vamos criar um objeto da class ClientePoupanca, passar as informações, e fazer aquela, e printar no console algumas informações.

[05:05] Então vamos lá, const andre = new ClientePoupanca() , então ele recebe, tem que passar no construtor, nome, a@email.com, “2255887744”, vou passar agora as informações referente ao saldo, que é o saldo da conta do cliente e o saldo ClientePoupanca, então vou passar o 100, 200, então aqui eu estou criando, ou instanciando, um novo objeto do tipo ClientePoupanca e agora vou logar, vou mandar printar esse objeto, console.log(andre) você executa ai Ju só para vermos a saída.

[06:21] Juliana: Vamos lá, então node classe-clientepoup.js e está aqui instanciado o nosso ClientePoupanca que é o André e agora ele tem as duas propriedades, os dois atributos, primeiro os 100 reais que está no saldo, na propriedade saldo, e 200 em saldo poupança.

[06:48] Ou seja, então nosso cliente poupança herdou através da palavra-chave extends com Cliente, ele herdou de Cliente alguns atributos que foi o que passamos no super(), aqui no super() passamos quais são as propriedades que queremos herdar, porque não necessariamente você precisa herdar todas, então, mas como todos os clientes poupança eles também têm as mesmas informações do cliente, mandamos o super() trazer tudo e trazemos através dos parâmetros de super()

[07:20] E além disso criamos um outro atributo aqui que é o saldoPoupanca para guardar o valor de poupança, e criamos um método específico para ClientePoupanca que é depositarPoupanca().

[07:33] André: Então Ju vamos fazer o seguinte, vamos mexer no saldo do André, então vou invocar direto do objeto o método andre.depositar(50) vou depositar 50 reais, no valor de 50 reais, e vou colocar no objeto andre também o depositar na poupança, .depositarPoupanca(50), recebi 100 reais, 50 na poupança, 50 no cliente, depositarPoupanca(50) 50 reais, vou dar um log agora do objeto, console.log(andre).

[08:33] Juliana: Então eu vou salvar, rodar novamente, limpar o console e nosso cliente poupança agora, antes do André chamar, os invocar, executar os métodos depositar, o André tinha 100 reais de saldo normal, e 200 de poupança e depois que executamos os métodos ele tem mais 50 em cada um, então ficou saldo 150 e saldo poupança 250, então tudo funcionou perfeitamente.

[09:02] Então as classes servem para nós fazermos essa abstração, então todo o ClientePoupanca também é um cliente, todo programador também é uma pessoa, então o programador herda de pessoa um nome, cpf, etc., o cliente de poupança herda do cliente o nome, o e-mail, número da conta se tiver.

[09:23] E aí vamos conseguindo também reaproveitar código sem precisar ter como André falou, ter que ficar reinventando roda, ter que ficar para cada classe específica que temos, termos que ficar refazendo método, refazendo propriedade, etc.

[09:39] Lembrando que estamos dando aqui só uma introdução a esse mundo, tanto dos protótipos que são específicos do JavaScript quanto à orientação e objeto, ainda tem bastante coisa para estudar, mas por enquanto, eu acho que podemos ficar por aqui André.

[09:55] Juliana: Isso aí Ju.

[09:56] Juliana: Então prática bastante, cria os seus clientes, herda de cliente, crie seus clientes Vip, seus clientes estudantes, para praticar bastante e pegar bem direito essa sintaxe de classe e também a sintaxe das funções que é interessante também praticar, ficamos por aqui, até mais! */