export default class User {
    #nome
    #email
    #nascimento
    #role
    #ativo
    
    constructor (nome, email,nascimento,role,ativo =true) {
        this.#nome = nome
        this.#email=email
        this.#nascimento =nascimento
        this.#role= role || 'estudante'
        this.#ativo =ativo
    }

    get nome(){ //getters
        return this.#nome
    }
    get email(){
        return this.#email
    }
    get nascimento(){
        return this.#nascimento
    }
    get role(){
        return this.#role
    }
    get ativo(){
        return this.#ativo
    }

    set nome(novoNome){
        if(novoNome === ''){
            throw new Error ('Formato invalido') ////  throw new Error ('Formato invalido')
        }
        this.#nome= novoNome

    }
 
    exibirInfos(){
        //const this = this.#montathis()
        //return `${this.nome}, ${this.email},${this.nascimento}, ${this.role}, ${this.ativo}`
       
        return `${this.nome}, ${this.email},${this.nascimento}, ${this.role}, ${this.ativo}`
    }
}




/* Transcrição
[00:00] Já criamos a nossa primeira classe, a classe user, que é o usuário padrão do sistema. Porém, voltando ao diagrama, existem outros tipos de usuários que também temos que dar conta. Segundo o diagrama, todos os tipos de usuário compartilham as propriedades que identificam esses usuários, todos eles têm exibirInfos() e tanto docente quanto admin, eles têm pelo menos um método que é especial, que o usuário padrão não tem, que só o admin, tem que só o docente tem.

[00:39] Como fazemos para fazer esse reaproveitamento de código e para fazer a tal da herança para conseguirmos fazer com que objetos herdem de outros objetos propriedades ou métodos, como fizemos anteriormente com os protótipos e com as funções.

[01:00] E existe, claro, essa questão de herança, chamamos, inclusive, de herança de classe. Então herança de classe é um conceito importante de orientação de objetos, vamos dar uma olhada em como fazemos nessa nova sintaxe.

[01:12] Em user eu vou deletar as chamadas que fizemos, as instâncias que criamos da classe user, e eu vou, antes de começarmos a criar novas classes para fazer essa questão da herança, eu vou exportar o código da classe user. Eu vou fazer isso usando export default class User, que é exporte padrão, então antes de class User, colocamos export default para podermos exportar todo esse código e usá-lo em outras partes do projeto.

[01:46] Eu não vou entrar em detalhes sobre a questão da importação e exportação de módulos com Java Script, mas eu vou deixar um material extra bem completo, se você precisar relembrar ou saber um pouco mais sobre como funciona as duas formas de importar e se exportar módulos, blocos de código, com o JavaScript.

[02:09] Eu estou usando uma dessas sintaxes, a sintaxe mais nova, que chamamos de ecmascript modules, e para usarmos, para conseguirmos fazer essa importação e exportação, jogar módulos de uma lado para o outro do nosso programa, do nosso sistema, precisamos avisar o JavaScript que estamos usando módulos. Como fazemos isso?

[02:36] Eu vou voltar no terminal e vou iniciar um projeto e criar um arquivo de configuração, o package json, que normalmente trabalhamos com esse arquivo de configuração em todo o projeto de JavaScript, mas ainda não tínhamos feito isso. Então no terminal eu vou passar o comando npm init -y, para criar um arquivo “package.json” no nosso projeto.

[03:03] E dentro desse arquivo, que é o arquivo de configuração do nosso projeto, em qualquer parte eu vou abrir uma linha depois da propriedade description, depois da linha 4 do “package.json”, e eu vou inserir uma nova propriedade, que vai ser ”type”: “module”, sem esquecer das aspas duplas.

[03:30] Então, com esse type, eu estou avisando o interpretador que nesse projeto fazemos importação e exportação de módulos, usando ecmascript modules, que é essa sintaxe export default, dá uma olhada no material extra. Não deixa de conferir todo o material extra, todo o conteúdo em texto e as atividades que deixamos para vocês, porque eles têm muita coisa bacana e muita coisa que complementa o que estamos vendo no vídeo, e vai te dar mais informações, vai te dar mais dados, mais conhecimento desse tema que estamos trabalhando. Então não deixa de conferir, faz os testes de todo o código que passamos, confere e vamos lá.

[04:11] Já exportei a classe user, agora podemos criar um novo arquivo, que eu vou chamar de “Admin.js”, e a questão é aproveitar o código de user para o admin, então a primeira coisa que temos que fazer, é em user nós exportamos a classe user, e agora temos que importar a classe user em admin, então no topo do arquivo import User from “./User.js”;.

[04:45] Quando fazemos importação de módulos com essa sintaxe, import e export, sempre tem que colocar o .js no fim do arquivo, senão o interpretador não consegue encontrar, ele se perde. Vamos criar a nossa classe admin, então class Admin extends User {, e agora, como fazemos para avisar Admin que ele tem que puxar, que ele tem que herdar, trazer coisas de user? Através de uma palavra-chave extends, ele está estendendo, a classe Admin se estende a partir de user. Então a classe Admin herda, se estende a partir da classe user.

[05:38] E a classe Admin também precisa de propriedades para ser instanciada, a classe user tem nome, e-mail, a classe Admin também precisa de tudo isso. Então vou criar um construtor e dentro dele vou passar todas as propriedades que o Admin precisa, que são as mesmas de user, como está no diagrama, então precisa de nome, e-mail, nascimento, role, ativo. Como todos os objetos que criarmos a partir de Admin, vão ser do tipo Admin, uma string Admin, já podemos passarmos isso no role, da mesma forma que fizemos com estudante lá atrás. E ativo também pode ser igual a true, então constructor(nome, email, nascimento, role = ‘admin’, ativo = true).

[06:32] Crio a minha função constructor. Só que você pode se perguntar: Qual é o reaproveitamento de código que estamos fazendo, se, aparentemente, já que você repetiu as informações do construtor da classe user, vamos copiar todas as propriedades que estão dentro do construtor de user para dentro de Admin? Não vamos fazer isso, vamos chamar uma função que é especial de classe, que é a função super(), de superclasse.

[07:04] Então, o que estamos trazendo de superclasse? Todas as propriedades que queremos aproveitar de user para Admin. Como o user e o Admin nós definimos no nosso projeto que eles compartilham de todas as propriedades, todos tem nome, e-mail, nascimento, eu vou passar tudo isso para dentro dos parâmetros de super, o ativo não precisa mais do = true e role não precisa mais do = admin e, só estamos passando como parâmetro, então super(nome, email, nascimento, role, ativo).

[07:36] Mas eu preciso repetir tudo? Precisa repetir porque nem sempre vamos querer trazer todas as propriedades da superclasse. O que é a superclasse, afinal, esse super? Superclasse é como chamamos a classe que está fornecendo os parâmetros e os métodos para a outra classe herdar. Então user é uma superclasse de Admin e a Admin é uma subclasse de user.

[08:02] Em alguns lugares, você pode ver uma outra forma de se referir a essa herança, como classe parent e classe child, mãe e filha, parent, na verdade, se refere tanto a pai quanto a mãe, então pode ser que você veja com essa nomenclatura também, eu preciso usar subclasse e superclasse, os dois se referem a mesma coisa.

[08:25] Então, da superclasse, que no caso é user, a classe Admin sabe que a superclasse é user, porque estamos dizendo extends de User, trazemos essas propriedades. Pode ser que você não queira trazer todas as propriedades, eu posso dizer que Admin não precisa de nascimento e nem de e-mail, meu Admin só precisa de nome, role e ativo, e você pode tirar e só trazer as propriedades que você quer da superclasse.

[08:57] Não é o caso do nosso projeto, no nosso projeto dizemos que todo os usuários têm que ter as mesmas propriedades, então trazemos tudo isso da superclasse.

[09:08] Vamos testar? Eu vou criar um novo Admin, então const novoAdmin = new Admin(‘Rodrigo’, ‘r@r.com’, ‘2021-01-01’). Da mesma forma que estabelecemos com user, o role vai ser automaticamente Admin, que é o que já estamos iniciando no parâmetro, passando o parâmetro com valor, e a mesma coisa para ativo, que vai ser igual a true.

[09:46] Eu vou pedir um console.log(novoAdmin), e também um console.log(novoAdmin.exibirInfos()). Vamos ver o que vai acontecer, eu vou pedir para o novoAdmin, para a nossa classe Admin trazer um método de user. Vamos ver se dá certo? No terminal, eu vou limpar, então node Admin.js, e vamos ver.

[10:24] Ele trouxe um objeto Admin com todos os dados que pedimos, role, ativo true, tudo certo, e olha só, embaixo dele trouxe um outro console.log, que é justamente Rodrigo, r@r.com, que são os dados que pedimos no nosso método exibirInfos.

[10:45] Então a herança de classe não funciona somente para trazer propriedades, mas também para trazer os métodos dessa propriedade. Toda vez que dizemos que Admin é uma subclasse de user, que Admin está herdando de user, não herda apenas as propriedades que iniciamos no construtor da classe, que é o caso que usamos o super para dizer que toda vez que instanciamos um novo objeto do tipo Admin, o instanciamos com essas propriedades, com as mesmas propriedades de user, da superclasse.

[11:24] O extends, quando estendemos, quando herdamos, ele traz também os métodos. Então exibirInfos não é um método que todos os tipos de usuário têm que ter? Então foi exatamente isso que fizemos, herdamos e não precisamos repetir o código, porque Admin usou o exibirInfos, que estava em user, ele trouxe, ele tem acesso.

[11:47] A herança de classe é um dos conceitos mais importantes de orientação a objeto, ela não serve só para reaproveitar código, como estamos vendo, mas também para que os objetos que criarmos, as entidades que trabalhamos no nosso projeto, sejam usuários, sejam produtos, o que for, também as regras de negócio, elas façam mais sentido no sistema. Então, faz mais sentido termos, por exemplo, um tipo de usuário e a partir desse usuário padrão, estabelecemos que existem alguns outros tipos de usuário, cada um que pode ter a sua particularidade, que o usuário padrão não tem.

[12:27] Mas, por exemplo, todos os alunos, seja lá qual for a classe deles, eles ainda são alunos. Todos os funcionários de uma empresa não importa se ele é um gerente, se ele é um supervisor, se ele é um assistente, eles ainda são funcionários. Produtos a mesma coisa. Então, a herança de classe não serve só para enxugarmos código, mas também para fazer com que as entidades de um sistema, todos os objetos que compõem esse sistema, sejam coesos, eles façam sentido.

[12:57] Então, agora já criamos classe, já sabemos como funciona a herança de classe e tem alguns comportamentos de Admin que o usuário padrão não tem, vamos ver como isso funciona em seguida.

CONTINUAR LENDO
. */