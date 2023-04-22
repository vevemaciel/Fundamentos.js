/* Transcrição curso atualizado
Entendemos que além de dados primitivos (boolean e string, por exemplo) podemos armazenar listas e outros objetos dentro do nosso objeto.

Neste vídeo, vamos aprender que podemos guardar funções como propriedade de um objeto. Isso nos possibilita alterar o comportamento de um objeto e a deixar descrito junto com ele, como uma propriedade.

Vamos supor que agora implementaremos uma parte do sistema de compra da loja. Deixaremos que o cliente efetue um pagamento.

Para isso, no VSCode, no arquivo listaObjetos.js copiaremos o objeto cliente.

const cliente = {
  nome: "Joao",
  idade: 24,
  email: "joao@firma.com",
  telefone: ["1155555550", "1144444440"],
};COPIAR CÓDIGO
Agora, à esquerda, criaremos um arquivo chamado "funcoes.js" em aula2.

Desse modo, ficamos com as seguintes pastas:

aula2
aninhados.js
funcoes.js
listaObjetos.js
tipos.js
No arquivo funcoes.js, colaremos o objeto cliente.

funcoes.js:

const cliente = {
  nome: "Joao",
  idade: 24,
  email: "joao@firma.com",
  telefone: ["1155555550", "1144444440"],
};COPIAR CÓDIGO
Para simplificar, vamos dizer que o esquema de funcionamento da loja quando a pessoa se torna cliente, ela efetua o cadastro e inicia com determinado saldo.

Para isso, no objeto cliente incluiremos o campo saldo que inicia com duzentos reais.

const cliente = {
  nome: "Joao",
  idade: 24,
  email: "joao@firma.com",
  telefone: ["1155555550", "1144444440"],
    saldo: 200,
};COPIAR CÓDIGO
Mencionei que podemos ter propriedades que guardam funções, seria interessante descrevermos uma função que verifica se o cliente possui saldo suficiente para fazer uma compra.

Isso porque caso contrário, teríamos que fazer essa verificação toda vez que efetuarmos um pagamento e, pode acontecer de errarmos ou fazermos essa verificação de forma inadequada.

Por isso, criaremos uma propriedade chamada efetuaPagamento e o valor passado será uma função. Esta função terá o parâmetro valor, sendo o valor da conta que o cliente irá pagar, por exemplo.

const cliente = {
  nome: "Joao",
  idade: 24,
  email: "joao@firma.com",
  telefone: ["1155555550", "1144444440"],
    saldo: 200,
    efetuaPagamento: function (valor) {

    }
};COPIAR CÓDIGO
No bloco entre chaves "{}", vamos descrever o comportamento da nossa função. Iniciaremos esse comportamento com uma condicional if(), para verificar se o valor da compra foi maior que o saldo armazenado neste objeto.

Para acessarmos o saldo do objeto, usaremos a palavra reservada this ("isso"). Esta palavra representa a instância do objeto atual em que estamos trabalhando, sendo o cliente João com idade de 24 anos. Para acessar o saldo desse cliente, usamos o this.saldo:

const cliente = {
  nome: "Joao",
  idade: 24,
  email: "joao@firma.com",
  telefone: ["1155555550", "1144444440"],
    saldo: 200,
    efetuaPagamento: function (valor) {
        if (valor > this.saldo) 
    }
};COPIAR CÓDIGO
Agora que temos o saldo, se o valor for maior que o saldo atual, exibiremos a mensagem "Saldo insuficiente".

const cliente = {
  nome: "Joao",
  idade: 24,
  email: "joao@firma.com",
  telefone: ["1155555550", "1144444440"],
    saldo: 200,
    efetuaPagamento: function (valor) {
        if (valor > this.saldo) {
            console.log("Saldo insuficiente");
        }
    }
};COPIAR CÓDIGO
Teremos outro cenário, e para incluí-lo no código usaremos o else, em que a pessoa pode efetuar a compra.

const cliente = {
  nome: "Joao",
  idade: 24,
  email: "joao@firma.com",
  telefone: ["1155555550", "1144444440"],
    saldo: 200,
    efetuaPagamento: function (valor) {
        if (valor > this.saldo) {
            console.log("Saldo insuficiente");
        } else {

        }
    }
};COPIAR CÓDIGO
No bloco do else, vamos deduzir o valor da compra do saldo. Vamos dizer que this.saldo será menor e igual ("-=") - isto é, o saldo antigo menos o valor da compra.

//código omitido

else {
this.saldo -= valor;
}COPIAR CÓDIGO
Logo após, vamos exibir uma mensagem informando que pagamento foi realizado, usaremos a template string.

//código omitido

else {
this.saldo -= valor;
console.log(`Pagamento realizado. Novo saldo: ${this.saldo}`);
}COPIAR CÓDIGO
Com isso, descrevemos o comportamento. Porém, precisamos chamar esse comportamento para ele ser executado. Por isso, no final do código incluiremos: cliente.efetuaPagamento(). No parênteses, colocaremos o número 250, pois é um valor acima de 200.

funcoes.js:

const cliente = {
  nome: "Joao",
  idade: 24,
  email: "joao@firma.com",
  telefone: ["1155555550", "1144444440"],
  saldo: 200,
  efetuaPagamento: function (valor) {
    if (valor > this.saldo) {
      console.log("Saldo insuficiente");
    } else {
      this.saldo -= valor;
      console.log(`Pagamento realizado. Novo saldo: ${this.saldo}`);
    }
  },
};

cliente.efetuaPagamento(250);COPIAR CÓDIGO
Após essas alterações, podemos voltar ao terminal e executar o comando node aula2/funcoes.js:

Saldo insuficiente

Obtivemos o retorno esperado, inserimos o valor 250 que é maior que 200 do saldo.

Podemos voltar ao código no VSCode e alterar o valor de 250 para 25:

cliente.efetuaPagamento(25);COPIAR CÓDIGO
Novamente voltaremos ao terminal para rodar a instrução node aula2/funcoes.js:

Pagamento realizado. Novo saldo: 175

Conseguimos incluir um comportamento que já foi estabelecido no objeto, em uma propriedade. Vimos uma propriedade que armazena uma função e mais para frente no curso, daremos um nome para isso: método.

Entenderemos o método em orientação a objetos, que chamamos de paradigma de orientação a objetos, como trabalhamos com métodos e propriedades e como criar objetos mais complexos.

Mas, por enquanto, na próxima aula vamos aprender um pouco mais sobre os objetos, as formas de como podemos percorrer eles.

Te espero na próxima aula! */

const cliente= {
    nome: "andre",
    idade: 32,
    cpf:"12312331233",
    email: "andre@email.com",
    fones: ['4234345464774', '214141413413414'],
    
    dependentes:[
    {
    nome: "sara Silva",
    grauParentesco: "filha",
    dataNascimento:"21/11/1989"},
    {
    nome: "samia maria",
    grauParentesco: "filha",
    dataNascimento:"21/11/2000"},

 ],
    saldo:100,
    depositar:function(valor){ 
        this.saldo +=valor
    }

}
console.log(cliente.saldo)
cliente.depositar(30)
console.log(cliente.saldo)





/* Transcrição
[00:00] Juliana: Continuando então com o nosso curso de objetos em JavaScript, vamos ver qual que é o desafio deste vídeo, então nosso desafio é fazendo depósitos, temos que adicionar uma propriedade que permita ações, para que os clientes que estão cadastrados no sistema do nosso banco, consigam fazer operações bancárias, por exemplo, depositar, sacar, etc.

[00:25] Então eu já criei um arquivo chamado “fazendo-depositos.js” aqui no Visual Studio Code, e transferi para ele, o nosso objeto cliente, accept read and write aqui no pop-up do VS Code que apareceu, deixa eu deixar o André entrar aqui para conseguir editar o meu código.

[00:45] Então o nosso objeto cliente ele está com as últimas alterações que fomos fazendo nos vídeos anteriores, então já tem nosso array de telefones, tem um array de objetos que são os dependentes aqui do cliente André.

[01:00] Então já trabalhamos com vários tipos de dados nos valores aqui das nossas chaves, então strings, números, arrays de dados, arrays de strings, arrays de objetos, porém um objeto ele não tem só propriedades que as chaves estão representando, a pessoa não tem só nome, a pessoa tem idade, etc., a pessoa tem que poder fazer coisas.

[01:26] E como é que fazemos então André para dar para o objeto além de propriedade, para dar comportamento para ele, e aí conseguirmos fazer com que a pessoa saque dinheiro, deposite, etc.

[01:36] André: Então Ju, aí segue a mesma ideia que utilizamos para adicionar uma propriedade nova, ao objeto cliente, então vamos fazer aqui?

[01:47] Juliana: Vamos.

[01:50] André: Então primeiramente vou fazer umas alterações aqui no cliente, vou adicionar uma propriedade saldo, só para entendermos, que vamos fazer um esquema de depósito, então saldo: 100 reais.

[02:06] Juliana: Essa é só por enquanto uma propriedade com um valor de número que diz o saldo do cliente, certo?

[02:11] André: Isso ai, agora eu vou adicionar uma nova função, um comportamento a esse cliente, então da primeira forma, eu vou adicionar dentro do próprio objeto cliente, então depositar: function() ela vai receber como parâmetro um valor para alterarmos o saldo ali quando eu invocar essa função, então (valor){} e aqui dentro eu vou usar aquela palavra reservada, this que faz referência ao próprio objeto, correto Ju?

[03:00] Juliana: Correto.

[03:01] André: this.saldo += saldo vai ser o que tem lá no saldo mais o valor que eu vou passar aqui agora, salvar aqui.

[03:20] Juliana: E se colocar uma vírgula ai, entre uma propriedade e outra, sempre esquecemos essa vírgula, é normal.

[03:28] André: Então, vamos executar então agora, fazer dois consoles aqui para ver o saldo antes e depois de invocar o método, invocar a função, então console.log(cliente.saldo) usando a notação de ponto que vimos nas aulas anteriores, e vou invocar agora o método, a função depositar, vou depositar 30 reais para esse cliente, cliente.depositar(30) ele recebe por parâmetro um valor que vai ser o 30, e o console.log(cliente.saldo) de novo.

[04:23] Então a saída esperada é exibir 100 reais que é o saldo, depois vou invocar o comportamento de fazer depósito, depositar, vou passar 30 reais de valor para esse depósito e a saída esperada é que o cliente.saldo seja 130.

[04:42] Juliana: Podemos testar?

[04:43] André: Vamos testar Ju.

[04:44] Juliana: Então vou executar aqui com o node fazendo-depositos.js e perfeito, aqui no terminal apareceram dois valores, o primeiro console com 100 reais, 100 dinheiros, não especificamos e segundo com 130, então vamos dar uma revisada no que fizemos.

[05:02] Como o André falou, nós utilizamos funções, espera vou só tirar umas linhas aqui para ficar mais fácil de vermos tudo junto, utilizamos funções para dar comportamentos para um objeto, então depositar, sacar, no caso aqui no contexto do nosso banco, mas pode ser qualquer contexto do que você tiver trabalhando.

[05:26] O André falou algumas vezes de métodos, chamamos de métodos funções que estão ligadas, elas trabalham no contexto de um objeto, mas são funções, então quando uma função está ligada a um objeto no caso de cliente.depositar() depositar é uma função, que ela faz parte, ela trabalha em um contexto de um objeto cliente, chamamos de método, mas é essa a diferença de nome.

[05:57] Então o que fizemos aqui foi que criar uma função, ela é também um conjunto de chaves e valores, ela tem uma chave depositar e o valor dela é uma função, ao invés de ser um dado primitivo, usamos aqui a sintaxe clássica de função do JavaScript function, passando aqui um parâmetro de valor, que é o valor que vamos receber para ser depositado.

[06:22] E aqui dentro do bloco da função, entre as chaves, estamos passando this.saldo como o André falou, this é uma palavra reservada que se refere literalmente a isso, então quando falamos [this é este objeto aqui, está instância de objeto de cliente .saldo que é a propriedade que queremos trabalhar, += que é um operador de incremento aqui, então ele vai incrementar, saldo o valor da propriedade saldo, com o que estamos recebendo aqui como parâmetro da função.

[06:56] E aí no primeiro console.log trazemos o cliente.saldo antes de qualquer alteração, depois o André executou o método, a função depositar, passando como parâmetro 30 dinheiros aqui para ser depositado na conta do cliente, para ser incrementado aqui no valor da propriedade saldo e em seguida o segundo console.log traz o saldo atualizado de 130 reais.

[07:24] Então André, eu acho que é isso, faltou falarmos alguma coisa aqui nessa parte de métodos/funções?

[07:31] André: Acho que é isso mesmo Ju.

[07:33] Juliana: Então fechamos por aqui, lembra de praticar bastante, crie seus próprios métodos, invoque, execute, veja como é que o seu objeto cliente se comporta e nos vemos no próximo vídeo.

[07:45] André: Até o próximo vídeo pessoal. */