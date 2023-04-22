const user ={
    nome:"julian",
    email:"j@j.com",
    nascimento: "2021/01/01",
    role:"estudante",
    ativo: true,
    exibirInfos: function(){
        console.log(this.nome,this.email)

    }    
}

const admin ={
    nome:"Marina",
    email:"m@m.com",
    nascimento: "2021/01/01",
    role:"estudante",
    ativo: true,
    criarCurso(){
        console.log(' curso criado')
    }
}  

//1 primeiro objeto q quer herdar, segundo ob q vai ceder as propriedades herdadas
Object.setPrototypeOf(admin, user)
admin.criarCurso()
admin.exibirInfos()

/* Transcrição
[00:00] Conseguimos ver isso um pouco melhor, se copiarmos todos esses objetos, essas chamadas que fizemos no VSC, se chamarmos, executarmos isso no console do navegador. O console do Node é um pouco diferente do console do navegador, então algumas propriedades, por exemplo, a propriedade do prototype não conseguimos acessar, mas conseguimos acessar pelo console do navegador, então eu vou colar tudo que fizemos, os dois objetos, vou colar primeiro os objetos, o objeto admin e o user.

[00:37] Então está no console do navegador, se eu chamar user, ele encontra, e se eu chamar admin, ele também encontra. E agora eu vou colar e executar o Object.setPrototypeOf(admin, user). Então, o que podemos fazer agora? Fazer a mesma coisa que fizemos no Visual Studio Code, podemos executar o método admin.criarCurso() e admin.exibirInfos.

[01:11] Então ele retornou curso criado, e agora, admin.exibirInfos, ele também exibiu o que queríamos, “Mariana m@m.com”.

[01:22] Agora, uma coisa interessante que não tínhamos comentado ainda. Quando executamos o método a partir de admin.exibirInfos, com uma chamada inicial, fazemos essa chamada, ela é feita para a cadeia de protótipos. Como a chamada inicial foi feita a partir de admin, a partir do objeto admin, então isso significa que o this, que estávamos falando anteriormente, isso significa que o this vai tomar como contexto o objeto admin.

[02:01] Então o contexto de this nessa execução, ela é admin, embora exibirInfos seja um método que não exista dentro dessa objeto. Mas passamos, iniciamos essa cadeia de protótipo a partir de admin, então é ele que vai ser o this. E é por isso que quando chamamos admin.exibirInfos, a informação que é exibida é a informação relativa a Mariana, que é propriedade nome e a propriedade e-mail que estão dentro do objeto admin.

[02:32] Então vamos fazer mais um teste no terminal do navegador, para vermos os protótipos em ação. Eu vou chamar no console admin.__proto__, vamos ver o que aparece.

[02:48] Apareceu um objeto com propriedade nome, Juliana, e-mail j@j, nascimento, role: ‘estudante’, ativo: true, e mais algumas coisas, que é a nossa função exibirInfo, ou seja, o que eu acessei com .proto? É uma propriedade que não conseguimos acessar pelo console do node. Essa propriedade “proto” está nos exibindo qual é o objeto protótipo de admin. O que é esse objeto? É o objeto user, que tem o nome Juliana, que tem data de nascimento.

[03:20] E conseguimos ir mais a frente nessa cadeia de protótipo. Eu vou chamar agora admin.__proto__.__proto__. Vou chamar novamente.

[03:37] Agora, ele trouxe um outro objeto para nós, que é o objeto construtor de object, ou seja, aquilo que estávamos falando lá atrás. Todos os objetos criados com JavaScript têm dentro dele um objeto que é o protótipo básico, que traz todos os métodos e as propriedades que são compartilhados em todos os objetos que criamos. Os objetos criados a partir de construtores, todos eles têm em comum esse primeiro protótipo, que é o protótipo de object, do objeto tipo object.

[04:15] Vamos dar mais uma olhada para entendermos melhor. Vou tentar uma última vez chamar admin.__proto__.__proto__.__proto__.

[04:28] Agora, ele retornou null, isso significa que chegamos no final da cadeia de protótipo, então saímos de admin, passamos pro user, chegamos no protótipo inicial do tipo objeto, tipo object, e acabou, agora ele retornou null, não tem mais para onde ir. Isso significa que existe uma cadeia que liga admin e user, user porque o definimos como protótipo de admin, é importante frisarmos isso, e um outro objeto debaixo de todos esses.

[04:58] Todos os objetos criados com JavaScript tem esse prototype, é aquilo que já vimos, e conseguimos acessar esse protótipo através de Object.prototype, e conseguimos acessar o protótipo do objeto com todas os métodos que todos eles tem.

[05:27] E da mesma forma que conseguimos fazer isso com objeto, conseguimos fazer com outros tipos de dado também. Então, o que aparece no protótipo para nós é o construtor do tipo object, porque tanto admin quanto user são objetos. Mas, também conseguimos acessar esse tipo de objeto construtor a partir de array, então Array.prototype, se criássemos um array, ele também teria esse objeto, só que feito a partir do construtor de objetos do tipo array.

[06:03] Mesma coisa com string. Então String.prototype, conseguimos acessar o protótipo inicial de todos os objetos do tipo string, também ele tem o construtor de string e todos os métodos que trabalhamos com string no dia a dia.

[06:25] Então tem desde a propriedade lenght, que tanto para string quanto para array, quanto várias outras coisas que usamos no dia a dia para manipular strings. Então charAt, charCodeAt para fazer a conversão de tabela ANSI, concat, fixed, lastIndexOf, então vários métodos de string estão disponíveis, porque esse é o protótipo, é o modelo, é o molde de onde saem todas as strings que criamos com JavaScript.

[07:01] Por que isso? Agora, vamos falar de uma coisa que chegamos a comentar no curso anterior de introdução a objetos com JavaScript, que praticamente tudo que criamos com JavaScript, mesmo que sejam tipos primitivos, que falamos, string, booleano e number, eles são, por baixo dos panos, objetos.

[07:25] O Java Script coloca meio que uma capa de tipo primitivo em cima, para melhorar a experiência da linguagem, digamos assim, que já estamos acostumados a trabalhar com tipos primitivos, mas por baixo dos panos, praticamente tudo que criamos com JavaScript, todos os tipos são objetos, e por baixo deles, eles têm esse protótipo inicial.

[07:52] E a partir desse protótipo, vamos criando objetos, e esses objetos vão herdando métodos e propriedades, e, além dos que criamos a partir dos principais, por exemplo, criei um objeto literal a partir de object, ele herda os métodos do construtor de object. Também podemos nós criarmos os nossos protótipos, como fizemos no VSC, então criamos user como protótipo de admin.

[08:19] Então usamos os que o JavaScript nos traz, e também podemos criar os nossos. E é assim, através dessa cadeia de protótipos, que fazemos a herança, esse processo de herança, de herdar propriedades de um objeto para outro, e é assim que fazemos em JavaScript.

[08:37] Hoje em dia, não trabalhamos, não costuma mais usar a herança de protótipo quando desenvolvemos aplicações de JavaScript no dia a dia, mas, mesmo assim, não canso de dizer que é muito importante entender como os protótipos funcionam, porque isso está no conceito de como o JavaScript foi criado. Embora usemos classes, hoje em dia, usemos outras ferramentas, isso é super importante, porque os protótipos vão aparecer no seu dia a dia, programando com JavaScript. Então, vamos continuar vendo um pouco mais sobre assunto, antes de passarmos para as classes.

CONTINUAR LENDO
 */