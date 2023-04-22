/* Prototype
PRÓXIMA ATIVIDADE

O JavaScript é uma linguagem poderosa para o desenvolvimento tanto no front-end quanto no back-end. É muito comum escutar que ela é baseada em protótipos ou que tudo no JavaScript é objeto.

Sabendo disso, analise as alternativas abaixo e marque as verdadeiras em relação ao assunto protótipos.

Alternativa correta
function Estudante(nome, idade, curso) {
  this.nome = nome
  this.idade = idade
  this.curso=curso
}
var estudante = new Estudante("Bob Drake", 32,"Curso de Javascript" );
Executando o código acima no navegador, teremos acesso apenas às propriedades do estudante.


Alternativa correta
É através da propriedade prototype que podemos manipular o protótipo de um objeto e adicionar propriedades e funções como no código abaixo:

function ClientePoupanca(nome, cpf, email, saldo, saldoPoup){
 Cliente.call(this, nome, cpf, email, saldo)
 this.saldoPoup = saldoPoup
}
ClientePoupanca.prototype.depositarPoup = function(valor){
 this.saldoPoup += valor
}

Alternativa correta! Muito bem! É isso mesmo, através da propriedade prototype que acessamos o protótipo de um objeto para manipulá-lo, podendo adicionar propriedades e funções. Novos objetos criados herdarão essas características e comportamentos diretos do protótipo.

Alternativa correta
Existe um protótipo associado ao uso de objetos literais no JavaScript para a herança de atributos e funções já definidos.


Alternativa correta! Muito bem! Quase todo objeto em Javascript tem associado a ele um segundo objeto, seu protótipo, que lhe confere uma série de atributos e funções. */