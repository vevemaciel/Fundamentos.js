//seja as regras strict mode 

import User from './User.js';


export default class Docente extends User{
    constructor(nome, email,nascimento,role='docente',ativo =true) {
       super(nome, email,nascimento,role,ativo)
    }
    aprovaEstudante(estudante, curso){
        return `estudante ${estudante} aprovado no ${curso}`;
    }
}
/* const novoDocente = new Docente('jessica', 'j@j com', '2006-02-02');
console.log(novoDocente);
console.log(novoDocente.exibirInfos());

console.log(novoDocente.aprovaEstudante ('juliana','js')); */

/* Transcrição
[00:00] Então, pelo diagrama, já vimos que os usuários Admin podem fazer coisas no sistema, que os usuários padrão não podem. No caso, criar um curso. Então vamos adicionar esse método, lembrando que nada mais é do que uma função que é executada no contexto de um objeto, e que quando usamos classes, não usamos a palavra-chave function, passamos direto o nome do método, o nome da função, então vamos criar dentro da classe Admin, depois do método construtor criarCurso() {.

[00:39] Como não estamos trabalhando com nenhuma base de dados, só estamos vendo a estrutura da orientação a objeto, vamos retornar no criarCurso, só um texto, só uma string, para testarmos o método. Então vou dizer que criarCurso vai receber dois parâmetros, um que é o parâmetro do curso, que podemos passar, e também a quantidade de vagas, então criarCurso(nomeDoCurso, vagas).

[01:07] E eu vou retornar só um texto, só uma String, que vai dizer return ‘Curso de ${nomeDoCurso} criado com ${vagas}’. Então curso de alguma coisa criado com x vagas.

[01:43] Vamos testar o nosso novo método. Podemos aproveitar a const novoAdmin, que já criava um Admin novo, e agora, vamos chamar depois de criarmos o nosso novo Admin, vamos chamar dentro do console.log o novo método, então console.log(novoAdmin.criarCurso(‘JS’, 20)). Vamos no console, vou dar um node Admin.js.

[02:22] E curso de JS criado com 20 vagas, que eu esqueci de escrever no nosso return, return ‘Curso de ${nomeDoCurso} criado com ${vagas} vagas’. Então vou voltar, só para ficar correto.

[02:34] Curso de JS criado com 20 vagas. Então, o que está acontecendo? Nossa classe Admin herda de user as propriedades e os métodos que são os métodos padrão de user, porém, conseguimos criar também métodos que são particulares dessa subclasse Admin, que só ela tem user, não tem acesso, então podemos criar esse método, ele vai receber parâmetros. E instanciamos o nosso novo Admin, e a partir dele nós temos acesso ao método que criamos e podemos chamá-lo, podemos executá-lo, passando os parâmetros que ele está pedindo.

[03:13] Já que estamos nesse caminho, podemos aproveitar para fazer a mesma coisa com o docente, vamos testar a criação de mais uma classe, estendendo de user? Vou criar um novo arquivo que eu vou chamar “Docente.js”. Ele também vai importar user, então import User from “./User.js”;, e criamos a class Docente extends User {, dentro podemos, inclusive copiar o construtor de Admin, porque, lembrando, todo mundo, todos os nossos usuários têm as mesmas propriedades, só que o role nesse caso vai ser docente.

[04:09] E o que os nossos docentes fazem? Eles aprovam um estudante, de acordo com o diagrama. Vamos criar o nosso método aprovaEstudante. Ele teria que receber, se estivéssemos trabalhando com base de dados, ele receberia um ID de estudante, um ID do curso, só que não estamos entrando nesse tipo de detalhe neste curso, estamos vendo só a parte de orientação a objetos, então eu vou passar como estudante mesmo e curso, então aprovaEstudante(estudante, curso). Definimos uma String para retornar só para testarmos o método.

[04:45] Então ele vai return 'estudante ${estudante} aprovado no curso ${curso}.'. E novamente, vamos testar criando um novo docente, então const novoDocente = new Docente(‘Mariana’, ‘m@m.com’, ‘2021-01-01’), o restante não precisamos, e já testamos console.log(novoDocente), e testamos o método também, console.log(novoDocente.exibirInfos()), vamos testar para ver se está tudo certo, e console.log(novoDocente.aprovaEstudante(‘Juliana’, ‘JS’)), vamos testar tudo isso no console, e node Docente.js.

[06:19] Então criou um novo docente, Mariana, com role docente, ativo true, chamou o exibirInfos do user, e passou as informações corretamente, e nosso método aprovaEstudante também está funcionando, estudante Juliana aprovado no curso JS, vamos precisar trabalhar com a linguagem, que eu não sou um aprovado, eu sou uma aprovada, mas isso eu vou dizer que é passou no curso.

[06:50] E nessa aula, vimos a sintaxe de classes com o JavaScript. Como declaramos atributos, propriedades e métodos, como funciona o conceito de herança, como aproveitamos métodos e propriedades de uma base, de uma superclasse para criar as subclasses.

[07:10] E uma coisa importante, nem toda classe que vamos criar enquanto estivermos trabalhando com os nossos projetos vai ter métodos, algumas classes só vão ter propriedades, e nem toda classe vai precisar de um construtor para receber propriedades na inicialização da classe, vai depender muito do projeto, da sua entidade, do que você quer transmitir da vida real para o código. Nem métodos, nem construtores são obrigatórios, então podemos criar classes sem construtores, se for o caso.

[07:46] Uma coisa importante também, ao contrário das funções que são nomeadas e das variáveis, as funções não são hoisted, elas não tem aquele comportamento que é o //hoisting, que é quando o Java Script puxa para o topo do arquivo as funções nomeadas e as variáveis nomeadas. Então não conseguimos chamar, não conseguimos instanciar uma classe antes dela ser declarada, lendo de cima para baixo, então temos que instanciar a classe e depois chamar.

[08:27] Se invertermos a ordem e voltarmos no terminal, ele não encontra, porque não consegue acessar a docente antes da inicialização. Então as classes não são hoisted, elas não são içadas para cima, para o topo dos arquivos.

[08:42] Uma última coisa, é que toda classe que criamos, ela segue implicitamente as regras do que chamamos de strict mode do JavaScript, eu vou deixar o material extra sobre o que é o strict mode também, para você dar uma olhada, mas só saber que por baixo dos panos, todas as classes seguem as regras do modo estrito.

[09:05] Então, agora que já criamos as nossas classes, vamos evoluir a partir daqui com mais conceitos de orientação a objetos. */