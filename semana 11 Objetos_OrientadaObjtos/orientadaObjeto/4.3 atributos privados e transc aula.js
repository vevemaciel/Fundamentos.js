/*Para saber mais: atributos privados com _
PRÓXIMA ATIVIDADE

Até recentemente, o JavaScript não tinha a opção de usar atributos privados com #. Ao invés disso, atributos privados tinham um _ como prefixo como convenção, indicando se tratar de atributos privados. Vamos ver alguns exemplos de como essa convenção funcionava.

Como “convenção”, podemos entender como um “acordo”; a comunidade dev adotou a sintaxe _variavel (com o _ antes do nome) como um aviso no código de que trata-se de uma propriedade ou método privado, que não deve ser chamado ou modificado fora da classe. Porém incluir o _ não produz nenhuma modificação sintática no código. Ou seja, os atributos na prática continuam se comportando como propriedade ou método normal (público) e ainda podem ser acessados livremente.

Lembrando que: propriedades e métodos públicos são aqueles que podem ser acessados a partir de qualquer parte do código; os privados são acessados apenas “por dentro” da classe.

Além da convenção, existem algumas formas de fazer um atributo se comportar como privado. Vamos ver alguns exemplos, começando por uma classe totalmente pública:

class User {
 role = '';

 constructor(nome) {
   this.nome = nome;
   console.log(`Criado novo usuário: ${nome}` );
 }
}

// criar o usuário
let novoUser = new User('Rodrigo');

// modificar o role
novoUser.role = 'admin';
console.log(novoUser.role) // adminCOPIAR CÓDIGO
Agora vamos “proteger” as propriedades nome e role, marcando com o prefixo _ e também modificando um pouco a estrutura da classe:

class User {
 _role = '';

 set role(tipoRole) {
   if (tipoRole !== 'admin') {
     tipoRole = 'estudante'
   }
   this._role = tipoRole
 }

 get role() {
   return this._role
 }

 constructor(nome) {
   this._nome = nome;
 }
}COPIAR CÓDIGO
Ao criarmos a classe, condicionamos o acesso aos getters e setters. Ao criarmos a instância e executarmos os métodos:

// criar o usuário
let novoUser = new User('Rodrigo');

// modificar o role
novoUser.role = 'admin'; // acessando via setter
console.log(novoUser.role) // admin

// tentar incluir um role não existente
novoUser.role = 'gerente';
console.log(novoUser.role) // estudanteCOPIAR CÓDIGO
Propriedades do tipo “apenas leitura” (read-only)
A partir do momento em que usamos getters ou setters em uma classe, as operações ficam dependentes entre si. Ou seja, uma classe que utiliza getters para acessar propriedades vai precisar necessariamente de setters para modificá-las. Por exemplo:

class User {
  constructor(nome) {
   this._nome = nome
 }

 get nome(){
   return this._nome
 }
}COPIAR CÓDIGO
Acima, criamos uma classe com apenas um construtor para receber um valor para a propriedade nome e um getter para nome.

Vamos instanciar a classe e tentar atualizar nome:

// criar o usuário
let novoUser = new User('Rodrigo');
console.log(novoUser.nome) //usando o getter

novoUser.nome = 'Mariana'
console.log(novoUser.nome) //não é modificado, continua 'Rodrigo'COPIAR CÓDIGO
O setter não foi implementado, então a propriedade não é modificada.

Usando métodos
É possível emular os getters e setters com funções. As funções são mais flexíveis do que get/set (podem aceitar argumentos diferentes, por exemplo).

class User {
 _nome = '';

 setNome(nome) {
   this._nome = nome;
 }

 getNome() {
   return this._nome;
 }
}COPIAR CÓDIGO
Nesse caso, suprimimos o construtor e passamos toda a responsabilidade para setNome(). Vamos executar:

const novoUser = new User()
novoUser.setNome('Rodrigo');
console.log(novoUser.getNome()); //RodrigoCOPIAR CÓDIGO
A convenção do prefixo _ para atributos privados têm sido usada há muito tempo e, apesar da funcionalidade de atributos privados com # já ter sido implementada, você ainda pode encontrar a forma anterior com frequência. */

/* Transcrição aula

[00:00] Já falamos durante o curso de objetos, de classes, de herança, faltam dois temos que são os conceitos principais da orientação a objeto, que é o polimorfismo e o encapsulamento. Vamos falar um pouco do encapsulamento.

[00:17] Então, encapsular, encapsulamento, é a ação de “esconder” os atributos de uma classe. Como assim esconder? E por que esconderíamos? Escondemos atributos de uma classe, sejam métodos ou propriedades, para que uma classe não seja utilizada da forma errada. O que seria forma errada? Alguém tentar alterar alguma propriedade de uma classe que seja uma propriedade, por exemplo, dados de uma conta, alguma informação sensível, algum dado que realmente não pode alterar.

[00:55] Por exemplo, o nome de um usuário em um sistema é um dado muito importante. E ele não pode ser alterado em qualquer parte do código.

[01:03] Do jeito que está agora, eu consigo simplesmente pegar a minha instância de user, acessar, então eu crio um novoUser.nome = ‘José’, eu consigo alterar, então isso significa que eu consigo acessar propriedades por fora da classe e manipular. E isso não é uma coisa legal, muitas vezes não é o que queremos, especialmente quando se trata de, por exemplo, dados de um usuário, uma informação de uma conta de banco, qualquer informação sensível.

[01:39] Pode não ser também malicioso, se não protegemos atributos de uma classe, uma outra pessoa que está cuidando de uma outra parte do sistema, mas que tenha contato com essa classe, pode sem querer mandar para dentro dela uma informação que não é para mandar, ou usar o método da forma errada, então pode ser também para evitar que tenhamos problemas durante o desenvolvimento.

[01:59] Isso normalmente é feito com duas ferramentas, a primeira ferramenta são atributos privados e o segundo são os métodos assessores. Vamos começar com os atributos privados.

[02:11] O JavaScript só passou a ter atributos privados para a classe, privado é o que chamamos quando ele não está acessível do lado de fora da classe. Então, um atributo privado é o que só conseguimos acessar por dentro da classe. Como assim? Então, propriedades privadas só podem ser acessadas por funções que estão dentro da classe, que são declaradas dentro da classe, não conseguem ser acessadas por fora.

[02:43] Então, quando falamos de atributos privados, são atributos que não podem ser acessados por fora da classe. Então, voltando, o JavaScript, até recentemente, uma das últimas implementações do ECMAScript, ele não tinha suporte a atributos privados, que eu estou mostrando na tela da documentação do MDM. Isso é muito recente.

[03:08] Por ser muito recente, ainda não há suporte amplo a essa funcionalidade. Lembrando que toda vez que o ECMA, que é a fundação que faz a gestão das features do JavaScript, toda vez que define novas funcionalidades, cada versão que sai os navegadores tem que implementar, o Node tem que implementar, o deno tem que implementar, qualquer run time que funciona com JavaSript tem que implementar essas funcionalidades e isso leva tempo.

[03:35] Então, por isso que às vezes sai alguma funcionalidade nova, mas ela demora um pouco para ter um grande suporte pelos interpretadores. Então, as classes privadas existem e é com elas que vamos trabalhar, é uma feature nova, é muito esperada do JavaScript. Então vamos aprender como ela funciona, aprender a trabalhar com ela, e eu vou deixar material extra para você ver também como isso era feito, como eram emuladas as classes privadas com o JavaScript, antes desses atributos privados existirem.

[04:15] Antes era feito de uma forma simuladas, algumas ferramentas você podia usar para tentar dar essa cercada, dar essa segurança para as classes. Eu vou deixar no material extra, mas o que vamos trabalhar é realmente as classes privadas que foram implementadas recentemente no ECMAScript e já estão sendo implementadas pelos interpretadores.

[04:38] O Node já tem suporte desde a versão 13. Então, se você quiser verificar se você está trabalhando com a versão 13 em diante do Node, eu vou deixar também o material para você verificar qual é a sua versão e fazer a atualização de uma forma fácil com um MVM, se você precisar, também vai estar no material extra, mas vamos lá, vamos para o código.

[05:03] Já que agora estamos trabalhando com 3 classes diferentes, vamos fazer o seguinte, eu vou criar um arquivo que eu vou chamar de “index” na raiz do projeto junto com outros arquivos, e vamos passar todas as instâncias, todas as chamadas de classe para dentro de “Index.js”, para deixar o nosso código um pouco mais organizado.

[05:28] Então eu vou tirar todas as instâncias que criamos em admin e em docente, todos os testes que fizemos anteriormente, e também do nosso user, ele já não tinha nada. E vamos importar todas essas classes para dentro de “Index.js”. Então, dentro da classe admin também vamos precisar exportar, então export default class Admin, e export default class Docente, para podermos importar essas classes dentro de “index.js”. Então vamos lá.

[06:07] import User from “./User.js”;, embaixo import Docente from “.Docente.js”; e import Admin from “./Admin.js”;. Agora deve estar tudo funcionando.

[06:25] Mas para testar, vamos instanciar um novoUser, então const novoUser = new User(‘Mariana’, ‘m@m.com’, ‘2021-01-01’). E podemos chamar o nosso console.log(novoUser.exibirInfos(). E rodamos no terminal node index.js.

[07:09] Mariana, m@m, tudo certo. Só que vamos lá. Também podemos fazer outra coisa, podemos chamar novoUser.nome – ‘Márcia’, e também podemos acessar console.log(novoUser.nome). Vamos ver se mudou alguma coisa?

[07:34] Temos o primeiro console.log, mas depois mudou o nome para Márcia e fizemos um console.log, agora o nome do nosso user é Márcia. Esse é o tipo de coisa que não queremos que aconteça, não queremos que qualquer parte do sistema possa mudar o nome de um usuário criado com uma classe user. E é disso que vamos tratar.

[07:59] A sintaxe de atributos privados do JavaScript, como ela funciona? Ela funciona passando uma cerquilha antes da declaração do nome da variável que vamos utilizar. Então, se quisermos proteger a classe nome, dizer que nome agora é uma classe privada, colocamos uma cerquilha antes de nome. Isso é para todas as propriedades que quisermos que sejam privadas.

[08:31] Só que antes disso, antes do construtor, precisamos declarar essa variável logo na primeira linha da classe, então vou declarar #nome. E dentro do construtor repetimos o nome, agora com o this, que é onde ele vai ser construído, onde vamos passar dentro do construtor e vai ser associado com um dado. Então, declaramos a propriedade que queremos que seja privada fora do construtor, chamamos ela no construtor e agora temos que corrigir o exibirInfos, que não é mais a propriedade nome, a propriedade é #nome.

[09:12] Vamos fazer um novo teste, eu vou rodar esse código no terminal. Acho que não deu certo, porque continuou trocando de Mariana para Márcia, vamos ver o que aconteceu no código.

[09:28] Na chamada que fizemos, quando criamos e instanciamos o novoUser.nome = ‘Márcia’, Olha só o que aconteceu, o novoUser está sendo chamado, está exibindo as informações certas, Mariana, m@m, só que embaixo estou tentando atribuir novoUser.nome = ‘Márcia’.

[09:50] E nome é uma propriedade que não existe. Isso é uma coisa importante, foi bacana ter acontecido. Nome com cerquilha e nome sem cerquilha, são propriedades diferentes, o JavaScript não reconhecer nome com cerquilha como a mesma coisa que nome. Mas, agora, se tentarmos acessar a propriedade #nome, que é onde guardamos a informação de Mariana, vamos ver o que acontece. Vou apagar esse console.log.

[10:24] Vamos só fazer esse teste. Então, criamos o nosso novoUser como Mariana, e tentamos depois trocar #nome para Márcia. Vamos rodar novamente.

[10:35] E agora sim deu erro, ele diz que o campo privado nome precisa ser declarado dentro da classe e deu um erro de campo privado, ele não me deixou trocar a propriedade nome que já existia, trocar o valor da propriedade nome que já existia, de Mariana para Márcia.

[10:53] Agora, se quisermos, podemos voltar ao nosso construtor da classe user, e adicionar cerquilhas em todas as propriedades que achamos que tem que ser privados. É legal todas as propriedades que se referem a dados de clientes não serem públicas, porque todos os dados de um usuário são dados sensíveis e passamos a cerquilha para todos eles dentro do construtor e também declaramos fora do construtor, no começo da classe. Então #nome, #email, #nascimento, #role e #ativo.

[11:35] Também consertamos o nosso exibirInfos, para exibir this.#nome, e this.#email, você pode fazer depois o teste, se você quiser, com todas as outras propriedades. Eu não vou colocar todas, para ficar um pouco mais curto de escrever.

[11:50] Vou conferir no “index.js” se está sendo chamado da forma certa o novoUser.exibirInfos, e vamos executar node index.js. E se tentarmos fazer a mesma coisa que fizemos com nome, novoUser.#nome = ‘Márcia’, novoUser.#email = ‘x@x’, e vamos testar se continua dando erro.

[12:25] Continua dando erro, ele já deu erro no nome, ele nem deixa mais ir para frente, mas podemos tirar o teste, deixar só o teste para ver se conseguimos alterar a propriedade privada e-mail. Vamos rodar novamente.

[12:39] E também não deixou, ele disse que e-mail é um campo privado. Então, está tudo certo o que queríamos fazer, não conseguimos mais fazer modificações em nenhuma propriedade de user por fora da classe.

[12:56] Então, resumindo, os atributos privados servem para impedir o acesso de outras partes do código a um determinado dado, no caso uma propriedade, ou pode ser um método que não pode ser acessado também, por fora da classe, só por dentro da classe. Os métodos dentro da classe conseguem acessar as propriedades da classe.

[13:19] A não ser, que realmente quisermos que esse atributo seja o que chamamos de exposto, vamos expor um atributo para fora da classe e vamos ver em seguida como isso funciona. Então eu vou deixar o material extra para você ver como as classes privadas eram implementadas antes do JavaScript antes de existir a sintaxe com a cerquilha, e vamos continuar no assunto de encapsulamento no próximo vídeo.

CONTINUAR LENDO */
