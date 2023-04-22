class Cliente //sintase de clase começa sempre com letras Maiusculas
{
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
const andre = new cliente ("Andre","Andre@email","214322322",100)

andre.exibirSaldo
console.log(andre)

/*cliente {
  nome: 'Andre',
  email: 'Andre@email',
  cpf: '214322322',
  saldo: 100
}  */

/* Transcrição
[00:00] Juliana: Continuando então aqui com o nosso curso de objetos, agora estamos trabalhando com orientação a objetos e agora o que vamos fazer é criar uma classe cliente a partir da nossa função, dos nossos objetos cliente que temos trabalhado anteriormente no curso, já criei um arquivo aqui, chamei de “classe-cliente.js” e o André vai nos mostrar então como é que colocamos na prática essa sintaxe de classe que vimos, como é que utilizamos em orientação a objeto.

[00:30] André: Então vou começar aqui, então vou usar aquela palavra reservada class, para quem trabalha com orientação a objetos, essa palavra vai ser bem recorrente, então class Cliente{} e aqui dentro das chaves eu vou definir as propriedades do cliente, então tem que ter a palavra reservada constructor, então vou construir, então vai ser o método sendo invocado quando aquele new para ter o objeto na memória, então class Cliente{constructor()} e aqui por parâmetro eu passo quais as informações que eu quero para montar esse cliente, então nome, email, cpf mais alguma informação Ju?

[01:22] Juliana: Acho que a informação de saldo pode ser.

[01:24] André: Vamos colocar o saldo aqui também no parâmetro, saldo, então agora aqui dentro do constructor eu vou colocar as informações do this, que é aquele, esse objeto, então this.nome, this.email, this.cpf para podermos fazer a atribuição das informações que vão vir pelo construtor, então this.nome = nome vai receber um nome, vamos usar a sintaxe de ponto, this.email = email this.cpf = cpf this.saldo = saldo, então aqui eu estou definindo os atributos, que vão ser recebidos na hora de construir esse objeto, então os atributos são as características, que eu preciso, o que eu quero desse cliente, então nome, e-mail, cpf e saldo

[02:48] Então eu vou definir agora os comportamentos, os métodos que esse cliente vai ter, então depois do construtor eu vou definir os métodos, então o método depositar, que recebe como parâmetro o valor, depositar(valor){} para alterar as informações do saldo, então entre as chaves, this.saldo += valor. Então eu defini agora um comportamento para a classe cliente, o comportamento depositar, vamos fazer mais um Ju para exibir esse saldo?

[03:39] Juliana: Vamos.

[03:43] André: Exibir saldo, exibirSaldo(){} ele não vai receber nada como parâmetro e dentro dele eu vou colocar um console.log(this.saldo). Então eu defini uma classe cliente, defini aqui as propriedades da classe, e defini os comportamentos, os métodos, que são método depositar e exibir saldo,

[04:27] Juliana: Então agora eu acho que já podemos criar um novo cliente para testar, ver se nossa classe está funcionando.

[04:34] André: Ok, vou só tirar o espaço daqui do código, então vou definir agora uma const andre = que vai ser um novo cliente, então new palavra reservada, que vai criar nossa instância do objeto cliente na memória para nós, new Cliente(), os parâmetros também recebe, o nome dele (“André”, “andre@email.com”, “12233665544”, 100) e-mail, cpf e o saldo dele, vamos passar de saldo 100 reais, acho que está bom para começar de saldo, vou dar um console.log() agora no objeto andre, console.log(andre).

[05:55] Então de novo só repassando, defini a classe cliente, seus atributos, métodos e agora usando a palavra reservada new, vou estar criando uma instância da classe cliente, então criei o objeto andre, e passei as informações para o construtor da classe, e vamos exibir ele agora no console.

[06:22] Juliana: Eu vou salvar aqui, e rodar com node classe-cliente.js, e ele criou aqui uma nova instância de cliente com os dados que o André passou, tudo perfeito, podemos inclusive pode agora que já temos um novo cliente André criado, podemos chamar no console também, na verdade nem precisaria chamar no console, podemos somente chamar o método, andre.exibirSaldo(), porque dentro de exibirSaldo() o André já colocou um console.log(), então teoricamente se executarmos o nosso andre.exibirSaldo() vai aparecer no terminal o nosso 100 aqui fora do objeto andre, que é resultado aqui da nossa chamada do método exibirSaldo() aqui na instância de cliente, na instância André.

[07:23] Então a sintaxe de classe ela é um pouco diferente do que fazemos normalmente no JavaScript, começando que os nomes das nossas classes, dos nossos construtores de classe como utilizamos com função, eles começam com letra maiúscula, ao contrário de todas as outras variáveis e nomes de funções que criamos com camelCase no JavaScript, ou seja, começando com minúscula e separando as letras com maiúscula, sempre damos o nome de uma classe, com letra maiúscula, isso é padrão da linguagem.

[08:00] E o construtor recebe por parâmetro o que precisamos passar para construir um cliente, e os nossos métodos, lembrando que o método é uma função que executa no contexto de um objeto, a diferença é que com classes não precisamos escrever a palavra-chave function, só declaramos a função aqui passando, abrindo e fechando chaves e passando o parênteses vazio ou com valores, e o JavaScript já interpreta que isso é um método, uma função que vai rodar no contexto dos objetos que criarmos, beleza André? Acho que está super bacana aqui o nosso exemplo.

[08:39] André: Beleza, show de bola

[08:41] Juliana: Então como estávamos falando, por baixo dos panos o JavaScript transforma tudo isso em função, as classes são açúcar sintático, mas vamos evoluir mais esse nosso exemplo para podermos praticar mais com classe nos próximo vídeos, então até daqui a pouco.

[08:57] André: Até o próximo vídeo pessoal.

CONTINUAR LENDO
 */