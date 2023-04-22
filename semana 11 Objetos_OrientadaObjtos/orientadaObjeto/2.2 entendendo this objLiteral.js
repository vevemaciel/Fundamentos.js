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
//user.exibirInfos()
//const exibir = user.exibirInfos
//exibir()
//herança de prototipo

const exibir = function(){
    console.log(this.nome)
}
const exibirNome= exibir.bind(user)
exibirNome()
exibir()

/* Transcrição
[00:00] Se executarmos, voltando para o nosso “objetoLiteral.js”, se executarmos a função exibirInfos, então eu vou chamar no código user.exibirInfos(), e eu vou no terminal, já estou dentro da pasta certa, já estou na pasta “Curso”, você vai navegar e encontrar a pasta do seu projeto, chamar o node objetoLiteral.js. Então vou executar no ambiente do node.

[00:39] Ele trouxe as informações que pedimos, meu nome, Juliana, e o e-mail que eu passei, que são as informações que passamos para dentro do console.log.

[00:49] Eu vamos tentar fazer uma outra coisa. No JavaScript, as funções são valores também. Conseguimos atribuir funções a variáveis, então vou criar uma const exibir = user.exibirInfos, sem parênteses, porque eu só quero passar o conteúdo de user.exibirInfos para dentro da variável exibir. E vamos lá de novo, vou chamar novamente a função exibirInfos, só que agora através de exibir. Então eu vou chamar exibir(), agora com parênteses, porque agora quero executar essa função. Vou voltar no terminal, rodar novamente node objetoLiteral.js.

[01:45] O anterior funcionou perfeitamente, só que a segunda vez que eu tentei, a partir da variável exibir, ele me retornou undefined undefined. Por que isso aconteceu? Porque toda vez que atribuímos uma função a uma variável, isso é possível fazer em JavaScript, fazemos normalmente, só que o que aconteceu nesse caso? Quando passamos o conteúdo de exibirInfos, user.exibirInfos, que é uma função que está dentro do objeto user, no momento em que atribuímos essa função como valor a variável exibir, podemos dizer que exibirInfos perdeu o contexto, ou seja, ela perdeu a “conexão” com o objeto user, que de onde ela fazia parte.

[02:36] Então, quando passamos exibirInfos para dentro dessa variável exibir, é mais ou menos como se fizéssemos isso, const exibir = function() { e embaixo console.log(this.nome, this.email), que é exatamente a mesma linha que está no exibirInfos, que é uma função que só tem uma linha, só tem esse console.log(this.nome, this.email), e quando o passamos para dentro da variável exibir, é como se tivéssemos criando uma nova função chamada exibir, que tem esse mesmo conteúdo.

[03:38] Só que dentro de exibir, não tem nenhuma informação além desse console.log(this). O que é this? É exatamente, podemos dizer que é literalmente “isso”. Então quando falamos this, “isso” é uma palavra que só faz sentido com contexto. Então se você falar para uma pessoa: “Eu quero isso”, a pessoa vai te perguntar: “Você quer o quê?”, a pessoa não vai saber. Ou “Eu não gosto disso”, você não gosta do quê? Então this, assim como a tradução literal dela “isso”, é um termo que só funciona se tiver contexto atrelado a ele.

[04:28] “Eu não gosto disso”, mas o que é isso? “Não gosto de chuchu”, então “Chuchu” se refere a “isso”. Agora eu já sei qual é o contexto de “Isso” nessa frase. Com this é exatamente a mesma coisa e vai funcionar da mesma forma no código, no JavaScript, literalmente dessa forma. Vamos fazer mais um teste.

[04:51] Nessa função cont exibir, que acabamos de criar, eu vou pedir para o console.log retornar somente this, vou tirar o .nome, vou tirar o .email, só this. Vou voltar no terminal, vamos rodar e ver o que acontece.

[05:10] Não aconteceu nada, porque eu esqueci de chamar a função, de pedir para o JavaScript executar a função exibir, então na linha de baixo exibir(). Vamos lá.

[05:22] E agora ele me trouxe um objeto global. O objeto global é um objeto interno do Node, que ele contém todas as propriedades que são comuns a todos os módulos do Node JS, um objeto interno. Então, o que é o this nesse caso? Se eu não passei para o this nada ligado a ele, ele me trouxe o contexto global de onde ele está. Certo, vamos fazer com que a nossa função exibir tenha algum contexto ligado a ela, porque ela está perdida nesse momento, ela não tem nada além do objeto global ligado do this.

[06:06] Então se eu quisesse trazer console.log(this.nome), por exemplo, a função não sabe o nome de quem eu quero que ela traga, porque ela não tem, como já estávamos conversando, ela perdeu toda a comunicação com user, então ela não tem nenhuma propriedade que se chame nome para ser chamado, então não tem contexto nenhum. Vamos dar um contexto para ela.

[06:27] Eu vou criar uma nova const exibirNome = exibir.bind(nome), e eu vou usar essa variável para prender essa função exibir que criamos, a um contexto específico, não vou mais deixar solta. Como fazemos isso? Eu vou usar um método que é ligado ao this, que chama bind.

[07:03] O método bind é um método que usamos para prender a execução de uma função a um contexto específico. Vamos executar isso e vai ficar um pouco mais claro. Então eu vou prender bind a função exibir, a user, ao meu objeto user. Então passo no parâmetro de bind um objeto que eu vou usar como contexto. Então, agora, eu posso executar exibirNome(), posso executar embaixo o exibir() também, para conferirmos os dois retornos.

[07:40] Então salvei, voltando no terminal, vou limpar. E agora, eu tenho no primeiro console.log Juliana, que é o meu nome, no segundo, undefined. Eu vou, inclusive, voltar no código e vou comentar em cima, onde eu tinha pedido para executar user.exibirInfos, só para confirmarmos realmente que só está sendo executado os consoles que pedimos. Então no primeiro ele trouxe o nome Juliana e no segundo, undefined.

[08:13] Por quê? Porque quando eu pedi para executar exibir, ele está executando só essa função mesmo, sem contexto, undefined porque ele não encontrou a quem esse nome, “isso nome” se refere. Está certo, ele trouxe undefined para nós. E quando eu criei a const exibirNome, eu prendi, eu liguei, bind, de ligar uma coisa a outra, prender uma coisa a outra, eu peguei a minha função exibir e prendi essa função a um contexto específico, que eu passei via parâmetro.

[08:49] O que eu estou chamando de contexto é o objeto que vai dar contexto a essa função, no caso, o meu objeto user, que ele, sim, tem uma propriedade nome que o JavaScript pode trazer de volta. E é por isso a minha const exibirNome, lembrando novamente, as funções em JavaScript são valores e podemos atribuí-las a variáveis e fazemos isso mesmo.

[09:19] Então eu atribui, exibir é uma variável, porém eu trouxe com ela, prendi ela a um contexto específico, ao contexto do objeto user e ela não se perde mais, exibirNome agora sabe que o this se refere a user, e ele consegue trazer a propriedade nome, que é uma string Juliana que está dentro de user. E é por isso que exibirNome consegue retornar um nome, e somente exibir, sem contexto nenhum, não consegue encontrar nada e ele devolve undefined.

[09:58] Uma coisa interessante nesse caso também, que quando passamos essa função como valor para dentro de uma variável, não criamos uma referência dessa função, e sim uma cópia dela, e é por isso que exibirNome e exibir são funções diferentes nesse momento, elas não interferem uma com a outra. Porque exibir, no momento que foi passado para dentro de exibirNome é uma nova função.

[10:31] Então, esse foi o nosso primeiro exercício com a palavra-chave this, que é super importante para entendermos como funciona o contexto de objetos, e como os objetos passam as propriedades deles de lá para cá, e vimos também um bind, que é um método que usamos com o this, é um dos métodos do this, que usamos para prender this, prender “isso” a determinado contexto. Então conseguimos passar as propriedades de um lado para o outro, e atribuir funções a variáveis, sem que ela se perca com relação a quem é o this, onde está o this, o que é o this.

[11:11] Então, vamos fazer mais exercício com a herança de protótipo, então vamos continuar.

CONTINUAR LENDO
 */