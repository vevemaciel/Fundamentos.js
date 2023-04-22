function User(nome, email){
    this.nome=nome
    this.email=email

    this.exibirInfos=function(){
        return `${this.nome}, ${this.email}`
    }
}
// metodo1
// const novoUser=new User ('Juliana', 'j@j.com')
// console.log (novoUser.exibirInfos())


// metodo2
// function Admin(role){
//     User.call(this, 'Juliana', 'j@j.com')
//     this.role=role ||  'estudante'
// }

// Admin.prototype=Object.create(User.prototype)
// const novoUser= new Admin('admin')
// console.log(novoUser.exibirInfos())
// console.log(novoUser.role)


// metodo3
const user={
    init:function (nome, email){
        this.nome=nome
        this.email=email

    },
    exibirInfos:function(){
        return this.nome
    }

}
const novoUser = Object.create(user)
novoUser.init ('Juliana', 'j@j.com')
console.log(novoUser.exibirInfos())



// console.log(novoUser.exibirInfos('juliana'))
// console.log(user.isPrototypeOf(novoUser))




/* Transcrição
[00:00] Para entendermos como funciona a herança de protótipo no JavaScript, é fundamental entender, praticar, como funciona o this e o bind, mas essa não é a forma como os objetos são criados nesse modelo, então vamos dar uma olhada, porque isso pode ser feito de duas formas, ou com o operador new ou com o object.create.

[00:23] Então vamos lá, vamos começar com o new, que é uma palavra-chave que usamos para criar novos objetos através de um construtor, você pode já ter visto essa palavra durante esses estudos de JavaScript. O new já conhecido de quem trabalha com orientação a objetos em outras linguagens, ele serve para criar instâncias de objetos. Então, eu vou criar um novo documento, um novo arquivo na pasta do projeto, eu vou chamar de “new.js”, vamos ver, vamos fazer uns testes.

[00:54] Então, o new serve para criarmos instâncias através de uma função construtora. As funções construtoras são os equivalentes das classes em JavaScript para trabalharmos com orientação a objetos. Eles servem para a mesma coisa, servem como modelo para a criação de objetos, e é uma das formas que o JavaScript utilizava para trabalhar com orientação a objetos antes de existir a sintaxe de classe.

[01:22] Então vamos lá, eu vou criar uma função, function User, uma coisa que eu acabei não mencionando antes, mas que é importante, o JavaScript normalmente não inicia nenhum nome de função, de variável com letra maiúscula, a não ser nestes casos, quando estamos trabalhando com classes. Porque classe não é apenas uma palavra-chave, classe é um conceito, chamamos de classe todos esses modelos que servem para a criação de objetos. Sempre que vamos criar um desses modelos, usamos letra maiúscula.

[02:02] Eu vou passar como parâmetro, para criarmos esse user, só nome e e-mail, para escrevermos um pouco menos nesse teste, então function User(nome, email) { e dentro eu vou passar duas propriedades, this.nome = nome, agora, o nome vai servir para guardarmos o valor dessa propriedade, e embaixo this.email = email.

[02:33] Então, é muito importante, this.nome e this.email vão ser as propriedades, e do outro lado, do lado direito, igual ao nome e e-mail, estamos falando do parâmetro que é de onde esse dado vai chegar, o nome é o mesmo para não confundirmos.

[02:50] E eu vou criar uma função, um método para exibirmos as informações, o exibirInfos que já estamos trabalhando. Então this.exibirInfos = function(), não precisa de parâmetro e embaixo return ‘${this.nome}, ${this.email}’.

[03:30] Então, vamos ver agora, eu vou criar uma nova instância dessa classe user e vou salvar isso em uma variável, vamos ver. Então vou criar uma const novoUser = new User(‘Juliana’, ‘j@j.com’). E embaixo podemos chamar o método, então novoUser.exibirInfos(). Como exibirInfos não está retornando um console.log, e sim já está retornando os dados, que é o que fazemos normalmente, eu vou envolver essa chama por um console.log, então console.log(novoUser.exibirInfos()). E vamos testar isso no terminal. Então vou chamar com node new.js.

[04:36] Perfeito, “Juliana, j@j.com”. Vamos dar uma olhada no que aconteceu, no que está acontecendo. Quando criamos um novo objeto a partir do new, usando o que chamamos de construtor, que o user é uma função construtora, o JavaScript vai fazer duas coisas: Primeiro, ele vai criar um novo objeto, então o novoUser, essa variável que criamos, primeiro ela vai receber esse novo objeto, e depois o JavaScript vai checar no prototype para ver o que ele tem que encaixar na cadeia de protótipo.

[05:17] No caso, o que tem que ser encaixado na cadeia de protótipo são os métodos, as propriedades, de user. Porque no caso, user vai ser o protótipo do objeto novoUser que está sendo criado agora. E ele faz mais uma outra coisa, ele vai retornar o objeto que foi criado a partir do que passamos como new, e vai atribuir o novo objeto, o novoUser, como contexto para o tal do this.

[05:49] Então, quando chamamos exibirInfos, o contexto dele é novoUser, que o novoUser tem propriedades que passamos os dados que queríamos, passamos Juliana, passamos j@j.

[06:05] Essa é a forma de criar objetos com JavaScript usando um construtor, eu vou comentar essa linha e vamos passar para outra forma, que é usando o object.create. Vamos partir desse mesmo objeto que já estamos trabalhando, mas eu vou usá-lo como base, usá-lo como protótipo, já para criar um outro objeto, que eu vou chamar de admin, porque lembra, nós temos os users padrão e temos o users que são admins do sistema.

[06:32] Então function Admin(role), o admin também precisa receber um outro dado, vamos pedir para o admin receber role também, porque além de nome e e-mail, ele tem um papel, ele tem um cargo especial no sistema, que é o cargo de admin, e precisamos passar isso.

[06:56] Como fazemos para passar, para que admin receba tudo que vem de user, receba as propriedades de user e possa invocar user passando propriedades para ele. Vamos usar um método que chama call. Então a primeira linha dentro da função eu vou chamar User.call(this, ‘Juliana’, ‘j@j.com’), eu vou passar 3 parâmetros, this, nome e e-mail.

[07:39] E além disso, como o admin está recebendo role, eu preciso guardar essa informação, então embaixo this.role = role || ‘estudante’ pode ser que ele receba role através do parâmetro, se não receber nada, então eu vou colocar pipe pipe, e podemos colocar um valor padrão, que é estudante.

[08:02] Então, se receber role, ele vai atribuir role, o que foi passado por parâmetro para a propriedade, ou senão vai ser por padrão estudante. Então vamos dar uma olhada nos parâmetros, o que é o this, que é o primeiro parâmetro que eu passei para dentro do método call?

[08:17] Estamos dizendo que this é o contexto, e o this vai se referir ao contexto de user que vamos aproveitar dentro de admin. Então eu chamo user.call, estou chamando esse método a partir da função user, e o this está se referindo ao contexto de user, que vamos aproveitar coisas de user. Inclusive, depois disso estamos enfileirando as duas propriedades que estão dentro de user e queremos usar dentro de admin. E depois passamos a propriedade extra, que é uma propriedade que é só de admin, que user não tem.

[09:02] E agora, podemos chamar, podemos criar o novo objeto a partir do object.create. Então, primeiro o que eu vou fazer é chamar o protótipo de admin, então Admin.prototype = Object.create(User.prototype). E em seguida eu vou criar const novoUser = new Admin(‘admin’).

[09:48] Então já vou chamar um console.log, para ver se está tudo certo, console.log(novoUser.exibirInfos()), para ver se está tudo funcionando. E também vou pedir para passar console.log(novoUser.role), para ver se entrou corretamente. Porque o role é uma propriedade que não estamos pedindo no nosso exibirInfos. Vou voltar no terminal, rodar o node new.js.

[10:19] E temos dois console.log, o primeiro com as informações Juliana e o e-mail, e o segundo admin. Vamos ver se está tudo certo? Então o que está sendo feito na linha 18, em que chamamos object.create? Passamos para dentro da propriedade prototype de admin, as propriedades de user, então estamos criando um objeto e passando como parâmetro a propriedade protótipo de user, da função user.

[10:53] Então, os protótipos de user estão sendo passados como base, como protótipo, para dentro de admin. E agora, o que conseguimos fazer? Conseguimos criar um novo objeto admin a partir do construtor, passando só o role, que é o que precisamos, porém, como usamos o object.crreate e passamos as propriedades de user para dentro de admin, então user está agindo como protótipo de admin, conseguimos chamar dentro de um objeto criado a partir de admin, construído a partir de admin, conseguimos chamar a função exibirInfos, chamar o método exibirInfos, que é um método de user.

[11:43] E também o role, que é particular de admin, que user não tem, também foi chamado corretamente. Vamos ver um outro exemplo, eu vou comentar o que foi feito, a nossa função admin e a nossa função user, e eu vou criar um novo user, porém, agora, no formato de objeto.

[12:08] Então vou criar uma const user = {. Então dentro desse objeto vamos criar um método, que eu vou chamar de exibirInfos também, então exibirInfos: function(nome) { e o retorno vai ser o mesmo retorno que fizemos anteriormente, então return nome.

[12:46] Então, temos um objeto literal e dentro dele temos um método exibirInfos, que vai receber nome e retornar esse nome. E agora, como usamos esse objeto user que criamos, para criar um novo objeto a partir dele como protótipo.

[13:05] Então o JavaScript sempre cria um protótipo a partir de um objeto. Então esse objeto está criado. Ao invés de pedirmos para ele ser criado através de uma função construtora, já criamos esse objeto direto. Então podemos passar isso para dentro de object.create, por exemplo, então vou criar um const novoUser = Object.create(user), e eu passo como parâmetro do create o meu objeto user.

[13:35] Então user vai ser passado como protótipo para dentro do novo user. Só que agora não estou dependendo de uma função construtora para isso, eu estou fazendo isso com o objeto direto. Então, vamos testar console.log(novoUser.exibirInfos(‘Juliana’)). Vamos testar para ver se está tudo funcionando, vou rodar com o Node.

[14:04] Juliana, retornou o nome e exibiu no console. Podemos, inclusive, testar para ver se user realmente entrou, está sendo usado como protótipo de novo user. Vamos dar mais um console.log(user.isPrototypeOf(novoUser)), ele tem que retornar true. Vamos dar uma olhada no terminal.

[14:46] True, perfeito. Então user está sendo, ele é protótipo de novoUser, só que agora, ao invés de usar uma função construtora, estamos usando objetos diretamente. Essa implementação do object.create ficou um pouco estranha, porque caso o objeto precise ser iniciado com propriedades próprias, como fazemos? Porque o objeto que criamos não tem uma função construtora, ele é um objeto literal. Ele não tem esse construtor, como isso funcionaria?

[15:24] Nesse caso, o construtor tem um padrão para fazermos isso, podemos criar esse construtor na mão, através de um método que normalmente chamamos de init. Então vou criar dentro do nosso objeto user um método init: function(nome, email), ele pode receber os parâmetros que queremos trabalhar de início, por isso eu passei nome e e-mail.

[15:53] E então podemos chamar o tal do this, então this.nome = nome e this.email = email. Então esse padrão de criar essa função init, vai substituir a função construtora. Como estamos trabalhando com objeto literal, não posso esquecer de colocar a vírgula depois da propriedade.

[16:28] E nesse caso, como faríamos para passar para dentro de init? Vamos criar um novo user, eu vou manter o nosso cont novoUser = Object.create(user), só que agora, podemos passar para dentro de novoUser.init(‘Juliana’, ‘j@j.com’) as propriedades que queremos, então ele é uma função, ele vai receber o nome e o e-mail.

[16:56] E agora podemos usar o exibirInfos novamente, só que nesse caso, exibirInfos não precisa mais receber parâmetro, porque a função init já recebeu. Então console.log(novoUser.exibirInfo()) e só preciso executar.

[17:12] E ele deu que o nome não foi definido, e é verdade, porque agora o nome vai precisar de um this, porque ele perdeu o contexto return this.nome. Então vamos de novo no terminal.

[17:25] Agora está tudo certo. Então, porque existe um e existe o outro? O Object.create existe porque ele faz mais sentido para o modelo de protótipo do que usar o construtor com new, que foi o que usamos, inclusive, no primeiro exemplo de object.create.

[17:45] O construtor, a palavra-chave new faz mais sentido no modelo de classes, que é o que vamos usar em seguida. Na vida real, não atribuímos nada, não mexemos em prototype, não atribuímos nada a prototype diretamente, não mexemos nessa propriedade diretamente, fizemos na aula só como exemplo, para ver o protótipo sendo passado no momento.

[18:10] Na vida real, se for usar esse modelo, utilizamos Object.create, direto criando objetos, passando objetos direto a partir de um modelo para outro. Vou deixar um material extra sobre o que acontece dentro do Object.create para você conferir.

[18:31] Agora finalizamos toda essa parte de orientação a objetos com JavaScript sem classe, usando funções, funções construtoras, usando Object.create, que é a forma nativa do JavaScript antes de existir a tal sintaxe de classes, como já tínhamos comentado anteriormente.

[18:50] É super importante, espero que eu tenha te convencido que é muito importante entendermos como funciona este modelo, o modelo de protótipo, embora, na vida real, hoje em dia, não trabalhemos mais com protótipo e sim com classe. E isso por 3 motivos, o primeiro é que os protótipos vivem aparecendo em código legado, eles aparecem em exemplo, aparecem em um monte de lugares, podem aparecer enquanto você estiver debugando, porque o modelo de classe foi construído em cima dos protótipos, ele é açúcar sintático, como já dissemos, é uma capa por cima do modelo de protótipos.

[19:23] Ele tem algumas diferenças de funcionalidades, diferenças de implementação, mas ele não existe de verdade no JavaScript literalmente, ele é feito em cima do protótipo, e porque isso explica algumas particularidades das classes do JavaScript, como elas funcionam. Então agora, vamos começar trabalhar com classes no nosso estudo de orientação a objeto. */






























































