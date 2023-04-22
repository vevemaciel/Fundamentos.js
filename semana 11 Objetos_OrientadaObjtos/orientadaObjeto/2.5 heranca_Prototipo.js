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
[00:00] Continuando com o nosso estudo de protótipos, vendo o JavaScript por baixo dos panos, vamos ver como funciona a tal da herança de protótipo, que é a forma “original” do JavaScript, de fazer orientação a objetos, trabalhar com esse paradigma, antes de existirem as classes.

[00:22] Continuando com o objeto que estávamos trabalhando anteriormente, eu vou apagar as chamadas de funções que fizemos, deixar só o objeto e temos o objeto Juliana, role: “admin”.

[00:35] Especificamos no começo, quando fizemos o nosso diagrama UML que os usuários padrão do sistema seriam estudantes. E qualquer coisa que não fosse padrão, que não fosse o user estudante, seria docente ou admin. Para testarmos a herança de protótipo, eu vou mudar a Juliana para ser o role: “estudante”.

[00:58] E vou criar um outro objeto, para ser um usuário admin. Então vamos criar esse user admin, para vermos como funciona. Então const admin = {, pode ser o nome do nosso objeto, já que é um objeto literal que estamos trabalhando, embaixo colocamos nome: “Mariana”, email: “m@m.com”, eu vou preencher só nome, e-mail e role para ficar com menos coisa para escrever, e o role: “admin”.

[01:33] Também vimos quando estávamos falando do diagrama e vendo como funcionavam os usuários padrão, que todos os usuários têm que ter uma função de exibirInfos, porém, docentes e admins tem coisas mais específicas que eles podem fazer no sistema. Então, teoricamente, nosso usuário admin, que acabamos de criar o objeto, ele também deveria ter o método exibirInfos, porque ele também precisa fazer isso.

[02:05] Só que já tem alguma coisa cheirando mal, porque repetimos o método exibirInfos, tanto no usuário padrão, na const user, quanto na nossa const admin. Mas, teoricamente, a orientação a objeto também deveria servir para reutilizar código, para não precisar ficar repetindo. O que teria que acontecer no nosso objeto admin, é que ele só teria que ter um método que é pertinente a ele.

[02:38] Por exemplo, eu coloquei no diagrama criarCurso(). Então vamos fazer o seguinte, vamos tirar exibirInfos do nosso const admin, e eu vou substituir por criarCurso() {, é um método que também não precisa de parâmetro. Como nesse curso não estamos trabalhando com base de dados para guardar os dados que estamos criando em lugar nenhum, estamos focando no conceito de orientação a objeto, eu vou fazer com que esse método criarCurso só retorne um console.log mesmo, para vermos que ele está funcionando. Então ele vai retornar um console.log(‘curso criado!’).

[03:20] Mas, agora temos dois objetos diferentes, e eu quero que o admin tenha o método dele, que é criarCurso, que nosso usuário padrão não tem que ter, mas eu também quero que o admin tenha exibirInfos. Como juntamos essas coisas? E é aí que entra o protótipo, eu vou criar na linha embaixo de todos esses objetos, eu vou chamar um método que é de object, então Object.setPrototypeOf(admin, user), que eu vou definir um protótipo.

[04:00] Então, setPrototypeOf leva dois parâmetros, o primeiro parâmetro é o objeto que eu quero usar, que eu quero herdar propriedades, então é o admin. E de quem o admin quer herdar essas propriedades ou esses métodos? Ele quer herdar de user. Então os dois parâmetros, primeiro parâmetro o objeto que vai herdar propriedades e o segundo parâmetro o objeto que vai dar, que vai ceder essas propriedades que vão ser herdadas. Vamos testar? Eu vou chamar o objeto admin.criarCurso(), que foi o objeto que definimos dentro dele, para testar se está tudo certo.

[04:39] Em seguida, vamos chamar novamente o objeto admin, porém com o método exibirInfos, que é o método que está dentro de user, então admin.exibirInfos(). Vamos voltar no console, vamos rodar com node objetoLiteral.js.

[05:00] Curso criado e “Mariana m@m.com”, ou seja, deu tudo certo, porque o admin tanto executou a função, o método que estava vinculado a ele, o objeto admin, quanto o exibirInfos, que ele estava vinculado originalmente ao objeto user. Vamos ver com calma o que está acontecendo.

[05:27] Como estávamos conversando anteriormente, os protótipos são a forma do JavaScript fazer com que objetos herdem recursos uns dos outros. E por exemplo, a partir de user, temos outros objetos que precisam herdar propriedades e métodos, porque user é o objeto padrão no nosso projeto.

[05:49] Então temos admins que precisam herdar, docentes que precisam herdar. Então o que acontece quando chamamos admin.exibirInfos? O interpretador do JavaScript vai no objeto admin, procura esse método exibirInfos, não encontra, porque não tem. E o que ele faz? Ele procura para saber se admin está usando algum outro objeto como protótipo para ele. Ele encontra, porque definimos que user é um protótipo de admin, então ele encontra, ele vê que tem um objeto sendo usado como protótipo. Vamos ver qual é esse objeto e onde ele está.

[06:28] E ele encontra o objeto user, dentro dele ele procura pelo método, que é o método exibirInfos, encontrou esse método, conseguiu executar esse método. E ele para por aí. Mas, esse processo do interpretador do JavaScript e pulando em objeto, procurando, percorrendo e procurando determinado método ou determinada propriedade para acessar, chamamos isso de cadeia de protótipo.

[07:02] E ela pode se estender, podemos fazer os objetos irem herdando recursos uns dos outros, até que cheguem no final da cadeia, no final do processo, onde o JavaScript vai encontrar o próprio protótipo do objeto object, que é a base que define que todos os objetos criados com JavaScript tem dentro deles o protótipo de object, que é onde estão definidos todos os métodos que são comuns a todos os objetos, inclusive setProtypeOf, que foi o que utilizamos. */