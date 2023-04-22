class User{
    constructor (nome, email,nascimento,role,ativo =true) {
        this.nome = nome
        this.email=email
        this.nascimento =nascimento
        this.role= role || 'estudante'
        this.ativo =ativo
    }
    exibirInfos(){
        return `${this.nome}, ${this.email}`
    }
}
const novoUser =new User ('juliana', 'J@J.com', '2021-02-02')

console.log(novoUser)
console.log(novoUser.exibirInfos())

console.log(User.prototype.isPrototypeOf(novoUser)) 



/* Transcrição
[00:00] Vamos trabalhar com classes. Dos conceitos principais de orientação a objeto, nós já vimos o objeto em si, agora vamos ver a classe. Essa é a sintaxe mais comum para se trabalhar em orientação a objetos, como já comentamos anteriormente, elas não existiam nas primeiras versões do JavaScript, e elas são açúcar sintático, uma camada de abstração em cima do modelo de protótipos, vamos ver o que isso significa.

[00:28] Para começar, eu vou criar um arquivo, eu vou chamar esse arquivo de “User”, e nele que vamos definir nossa primeira classe. Então, vamos ver como funciona a sintaxe.

[00:42] Voltando ao diagrama de classes que tínhamos trabalhado anteriormente, vamos lembrar o que definimos como sendo as propriedades e os métodos que um usuário tem que ter. Então, tem nome, e-mail, nascimento, o role, o cargo dele, se é ativo ou não, e temos esse exibirInfos() e o constructor(). Vamos então criar a nossa primeira classe.

[01:07] Começamos usando a palavra-chave class, e passamos o nome dela, class User { lembrando que sempre começando com letra maiúscula. Ao contrário das funções, nesse caso, não vamos passar os parênteses para parâmetros, simplesmente abrimos chaves, e dentro podemos usar aquela sintaxe, podemos usar o conceito de construtor como já tínhamos usado anteriormente, para iniciar a classe com algumas propriedades.

[01:39] Então chamamos isso de construtor de classe, e é uma função especial chamada constructor(), e ela sim, uma função, um método, tem os parênteses para passarmos os parâmetros. Então vamos lá, o que o nosso user precisa, precisa de nome, email, nascimento, role e se é ativo ou não, então constructor{nome, email, nascimento, role, ativo = true}.

[02:02] Então, se é ativo, definimos anteriormente que todo o nosso usuário no nosso sistema começa por padrão como true, então podemos dizer que a propriedade ativo, que vai ser passada como parâmetro, já a iniciamos, definimos que ela vai começar como true, então não precisa receber um parâmetro, ela já entra como true.

[02:27] E dentro, mesma coisa, parecido com o que fizemos anteriormente, vamos definindo this.nome = nome, embaixo this.email = email, embaixo this.nascimento = nascimento, embaixo this.role = role e o ativo vai vir de ativo também, então this.ativo = ativo, ele já vai chegar como true.

[03:03] Quanto ao role, tínhamos definido que todo usuário padrão seria um estudante, então podemos dizer que na nossa classe user, que ou recebemos role a partir dos parâmetros, ou ele já é iniciado como uma string estudante, então this.role = role || ‘estudante’.

[03:23] Então esse é o nosso construtor da classe user, ele vai receber todas as propriedades que essa classe precisa para ser iniciada por parâmetro, parecida da forma que fizemos anteriormente com função. Mas as classes não tem somente propriedades, elas também têm comportamentos, que também fazemos isso através de funções, através de métodos. Então vamos criar um método também.

[03:48] Na sintaxe de classe, não escrevemos function quando vamos iniciar um novo método. Lembrando que métodos são funções que são executadas em um contexto de um objeto. Quando estamos trabalhando com a sintaxe de classe, passamos só o nome desse método, então é exibirInfos() {, não precisa de um parâmetro, porque só vamos retornar algumas informações.

[04:12] Para simplificarmos também, não ficarmos escrevendo muito, vamos pedir para ele retornar apenas return ${this.nome}, ${this.email}.

[04:31] Então, agora vamos instanciar esse nosso objeto a partir da classe que acabamos de criar. Então vou criar const novoUser = new User(‘Juliana’, ‘j@j.com’, ‘2021-01-01’, lembrando que a palavra-chave new, que associamos muito a algo com classe, e dentro de user vamos passar as informações que precisamos, que é o nome, o e-mail e o nascimento, eu acho que é só disse que precisamos, porque o role, nós vamos criar esse novo user como estudante, então se não passarmos nada em role, ele vai assumir automaticamente uma string estudante como valor e o ativo já vem como true, então não precisamos passar esses parâmetros e só precisamos desses 3 primeiros para iniciar.

[05:29] Agora, eu vou dar um console.log(novoUser), para vermos se o nosso user foi criado e de que forma ele foi criado. E também já vou pedir um console.log(novoUser.exibirInfos()), e ver o que acontece. Vamos executar, ir no terminal e rodar node User.js.

[05:53] Então, o primeiro console.log criou um objeto do tipo user, a partir da classe user, e com os nomes com a data de nascimento, ele já passou para dentro de role a string estudante e iniciou o ativo como true, exatamente do jeito que queríamos. E o segundo, ele executou o nosso método exibirInfos, e retornou uma string com duas informações, nome, e-mail, tudo perfeito.

[06:21] Acabamos de criar a nossa primeira classe, a nossa classe user, o usuário padrão do nosso sistema. Então através do construtor, essa função especial, o constructor, recebemos as propriedades que o nosso usuário padrão precisa para ser iniciado no nosso objeto, e agora o nosso novo User tem acesso tanto as propriedades que foram iniciadas a partir do construtor, e ele tem acesso ao método exibirInfos.

[06:57] A sintaxe de classe começou a ser utilizada desde a sua implementação, e hoje ela é muito mais usada do que as funções. Então, novamente, por que começamos estudando a orientação de objetos como funções? Porque as classes são açúcar sintático, já falei esse termo algumas vezes, significa que é uma camada de abstração, que serve para deixar o código, alguma parte da linguagem ou da implementação um pouco mais palatável, colocamos açúcar em cima para ficar mais fácil de trabalhar, para melhorar a experiência da linguagem.

[07:31] Então as classes são uma capa, com algumas melhorias de performance, por cima das funções e da herança de protótipo. Vamos conferir isso, para termos certeza? Então eu vou pedir um outro console.log(User.prototype.isPrototypeOf(novoUser)). Vamos conferir? Isso tem que dar true, vamos dar uma olhada no terminal. Eu vou limpar, vou dar novamente e deu true.

[08:12] Ou seja, por baixo da classe user, temos uma propriedade prototype, que além de tudo foi passada pela cadeia de protótipo, para dentro de novoUser, mesmo usando a sintaxe de classe, e mesmo criando, instanciando através do construtor, através de uma nova classe. Então, espero que agora você esteja convencido da importância de se entender o modelo de herança de protótipo do this, do bind, de tudo que vem junto com ele, mesmo que estejamos utilizando classes, eu vou repetir isso o curso inteiro, porque realmente é muito importante.

[08:51] E além disso, a questão do this, a questão de contexto vai aparecer todo com certeza no seu dia a dia, quando você estiver desenvolvendo com JavaScript. Então, essa é a classe, essa é a sintaxe de classe, a partir de agora, começamos a trabalhar dessa forma, e vamos evoluindo o nosso projeto a partir desse ponto. */