const user ={
    nome:"julian",
    email:"j@j.com",
    nascimento: "2021/01/01",
    role:"adm",
    ativo: true,
    exibirInfos: function(){
        console.log(this.nome,this.email)

    }    
}

//herança de prototipo



/* Transcrição
Transcrição
[00:00] Vamos relembrar um pouco sobre como criamos objetos com JavaScript. Na pasta do meu projeto, eu já criei um arquivo, chamei de “objetoLiteral.js”, para fazermos o primeiro teste. Agora, que já temos uma ideia do que queremos, por onde queremos começar a desenvolver as nossas classes, desenvolver o nosso sistema de gerenciamento de usuários. Então, vamos lá.

[00:23] Eu vou começar criando um objeto que traduza as propriedades e os métodos que observamos no nosso diagrama, na nossa classe user. Vou criar uma const, que vou chamar de const user = {. Vamos criar o nosso primeiro objeto, então ele vai ter nome: “Juliana”,, vai ter um email: “j@j.com”,, vai ter nascimento: “2021/01/01”,. Além disso, o nosso usuário tem um role, um papel, um cargo no nosso sistema, então vai ser role: “admin”,. E por último, eu vou criar uma última propriedade, que eu vou chamar de ativo, e vou dizer que é true, então ativo: true.

[01:35] Então, podemos dizer que podemos definir que sempre que é criado um novo usuário no sistema, por padrão esse usuário entra como ativo: true, ou seja, ele é um usuário ativo no sistema, ou seja, ele não está desligado, não é um aluno que cancelou matrícula. Então, essas são as propriedades que previmos no nosso UML.

[01:57] Além disso, nós previmos também um método que eu estou chamando de exibirInfos, para exibir as informações de todos os usuários. Cada um dos tipos de usuários também tem um método que eu estou chamando de constructor(), e vamos falar dele um pouco mais para frente. O interessante agora é vermos esse método exibirInfos, também podemos criá-los no nosso objeto literal.

[02:24] Então, vou criar um novo atributo, que eu vou chamar de exibirInfos: function() { e ele só vai retornar um console.log(nome), e podemos retornar, por exemplo, um nome e o e-mail, que são os dados básicos de contato de um usuário.

[02:49] O intellisense do VSC já te pergunta se você quer autocompletar com o nome. Se eu clicar em nome para autocompletar, ele vai colocar automaticamente antes de nome, uma palavra chamada this, então eu pedi para completar com a propriedade nome, o console.log, para ele preencher, ele preencheu automaticamente um this.nome.

[03:17] Vamos tentar a mesma coisa com e-mail? Vou pedir para ele autocompletar e-mail, e ele colocou na frente de e-mail this.email.

[03:25] O que é essa palavra-chave this? Que ele colocou sozinho para nós, digamos assim, ele disse que precisamos disso, então ele colocou para nós. O que é o this? Antes de eu começar a falar do this especificamente, vou voltar para explicar algumas coisas sobre como funciona a orientação a objetos em JavaScript.

[03:49] Sempre foi possível usar o paradigma de orientação a objetos para programar com JavaScript, porém, existe um conceito em programação orientada a objetos, que é o conceito de classe. Classe é como chamamos, eu já usei essa palavra antes, é como chamamos esse modelo, esse molde de onde tiramos os nossos objetos. Então uma classe gato é um modelo para eu criar vários objetos com gatos diferentes. Uma classe user, um modelo para eu criar vários users com nomes diferentes, roles diferentes, para cada usuário do meu sistema.

[04:23] Porém, a sintaxe de classe que chamamos, para podermos utilizar a palavra-chave classe, a sintaxe específica de como montar esse pedaço de código específico, não existia no JavaScript até o famoso ES6. Antes disso, para trabalharmos em JavaScript com orientação a objetos, usávamos apensas funções. E além das funções, usávamos também um conceito que é particular do JavaScript e a forma que o JavaScript foi pensado originalmente, que é o que chamamos de herança de protótipo.

[05:09] A herança de protótipo, ao contrário da herança de classe, é a forma como o JavaScript originalmente pensou nessa questão de você fazer modelos de objetos, de você passar propriedades de um objeto para outro, então eu tenho um modelo de user e eu quero que todos os meus usuários tenham essas propriedades, possam executar essas funções.

[05:33] Só que esse modelo de herança de protótipo é um pouco particular do JavaScript. Quando o JavaScript se popularizou, muita gente começou a vir de outras linguagens para programar o JavaScript, e muitas dessas pessoas estavam acostumadas com a tal da sintaxe de classe, de trabalhar com orientação a objeto utilizando as classes.

[05:56] Ou seja, foi meio que uma demanda da comunidade Dev que as classes fossem implementadas no JavaScript e isso aconteceu em 2015, com o ES6. Só que a herança de protótipo funciona de uma forma um pouco diferente, e vamos trabalhar nessa aula para entender como funciona essa herança de protótipo.

[06:19] “Mas por que eu preciso entender a herança de protótipo, que é uma coisa do JavaScript, se você mesma falou que de 2015 para cá foi implementado classe e podemos fazer tudo como classe, da forma que outras linguagens de programação fazem?” É porque no JavaScript, a classe é implementada em cima desse modelo original de herança de protótipo. E por que eu estou falando disso agora?

[06:45] Porque essa palavra-chave this é essencial para entendermos como a herança de protótipo funciona. Então mesmo que de um momento em diante do curso vamos começar a utilizar as classes para ir desenvolvendo, é muito importante, é essencial entendermos como a herança de protótipo funciona, porque é em cima dela que quem desenvolveu o JavaScript criou a sintaxe de classe em cima.

[07:19] E tudo que é relacionado ao protótipo, por exemplo, o this, aparece para nós em vários momentos, quando estamos programação em JavaScript, mesmo que não estejamos fazendo nada relacionado a orientação a objetos. O this ainda vai aparecer, a questão do protótipo ainda vai aparecer, então esse é o momento de pararmos e entendermos um pouco como a herança de protótipo funciona, como o this funciona e outras palavras-chave, outros métodos relacionados ao this, que vamos ver agora. Então, vamos lá */