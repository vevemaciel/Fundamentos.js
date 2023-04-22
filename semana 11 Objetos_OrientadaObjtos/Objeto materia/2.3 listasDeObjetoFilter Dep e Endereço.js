/*Curso atualizado
 const cliente ={
  nome: "joao",
  idade: 24,
  email: "joao@firma.com",
  telefone:[ "21414141414", "32245245245235"],
};

cliente.enderecos =[
{
  rua: "R. alcides",
  numero: 616,
  apto: true,
  complemento: "ap 624",
}
];

cliente.enderecos.push({
rua: "R. jj jameson",
numero: 45,
apto: false,

});

const listaApenasApartamentos= cliente.enderecos.filter(
(endereco)=>endereco.apto === true
);

console.log(listaApenasApartamentos); */

/* Transcrição Curso atualizado
Aprendemos que conseguimos armazenar um objeto dentro de outro em uma propriedade. Mas podemos querer ter uma lista com vários objetos.

Assim como o telefone, em que guardamos mais de um para um mesmo cliente, pode ser que a pessoa tenha mais de um endereço. Desse modo, seria interessante termos uma lista com vários endereços. Porém, esse endereço é um objeto! Como fazemos isso?

Voltando para o VSCode, criaremos uma cópia do arquivo aninhados.js, dentro da pasta aula2. Vamos renomear o arquivo aninhanos.copy.js para listaObjetos.js.

listaObjetos.js:

const cliente = {
nome: "Joao",
idade: 24,
email: "joao@firma.com",
telefone: ["1155555550", "1144444440"],
};

cliente.endereco = {
rua: "R. Joseph Climber",
numero: 1337,
apartamento: true,
complemento: "ap 934",
};

console.log(cliente.endereco);COPIAR CÓDIGO
Ao invés de termos cliente.endereco teremos cliente.enderecos.

const cliente = {
nome: "Joao",
idade: 24,
email: "joao@firma.com",
telefone: ["1155555550", "1144444440"],
};

cliente.enderecos = {
rua: "R. Joseph Climber",
numero: 1337,
apartamento: true,
complemento: "ap 934",
};

console.log(cliente.endereco);COPIAR CÓDIGO
Para transformarmos em uma lista, incluiremos os colchetes fora do objeto. No console log vamos renomear para cliente.enderecos.

const cliente = {
nome: "Joao",
idade: 24,
email: "joao@firma.com",
telefone: ["1155555550", "1144444440"],
};

cliente.enderecos = [
{
  rua: "R. Joseph Climber",
  numero: 1337,
  apartamento: true,
  complemento: "ap 934",
},
];

console.log(cliente.enderecos);COPIAR CÓDIGO
Após realizar essas alterações, vamos ao terminal executar o comando node aula2/listaObjetos.js.

node aula2/listaObjetos.jsCOPIAR CÓDIGO
[
{
  rua: 'R. Joseph Climber',
  numero: 1337,
  apartamento: true,
  complemento: 'ap 934',
},
]COPIAR CÓDIGO
Nos devolveu um array, em que na primeira posição há um objeto, sendo o endereço que cadastramos. Porém, precisamos adicionar os outros endereços.

Logo, após declararmos essa propriedade e antes de exibirmos, incluiremos como acessar o array usando o método push: cliente.enderecos.push().

Dentro do parênteses, podemos passar como parâmetro o que desejamos inserir, no caso como temos um array de endereço, gostaríamos de incluir outro endereço. Representamos esse endereço como um objeto, por isso, colocamos as chaves "{}".

//código omitido

cliente.enderecos.push({

})

//código omitidoCOPIAR CÓDIGO
Em cliente.enderecos.push, podemos descrever um novo endereço para o cliente, inserindo rua, número e apartamento.

listaObjetos.js:

const cliente = {
nome: "Joao",
idade: 24,
email: "joao@firma.com",
telefone: ["1155555550", "1144444440"],
};

cliente.enderecos = [
{
  rua: "R. Joseph Climber",
  numero: 1337,
  apartamento: true,
  complemento: "ap 934",
},
];

cliente.enderecos.push({
rua: "R. Joseph Ladder",
numero: 404,
apartamento: false,
});

console.log(cliente.enderecos);COPIAR CÓDIGO
Desse modo, adicionamos uma nova entrada na lista, usando o método push.

Para confirmar, salvamos o arquivo e voltamos ao terminal para executar o comando node aula2/listaObjetos.js.

[
{
  rua: 'R. Joseph Climber',
  numero: 1337,
  apartamento: true,
  complemento: 'ap 934',
},
  {rua: 'R. Joseph Ladder', numero: 404, apartamento: false}
]COPIAR CÓDIGO
Como retorno, temos dois objetos na primeira posição. O primeiro é o nosso endereço no número 1137 e agora com o número 404, na nova entrada.

O que ganhamos ao fazer isso? Ganhamos todos os métodos que poderíamos usar com array, e podemos utilizar nesses objetos.

Por exemplo, podemos acrescentar uma nova lista a partir dessa lista que geramos, usando um método do array chamado filter ("filtro"). Este seleciona alguns campos ou entradas de forma específica para colocar na lista.

Para fazer essa chamada, vamos criar uma nova lista const listaApenasApartamentos. Nela, deixamos somente os endereços que são apartamentos do cliente.

Logo, a variável listaApenasApartamentos vai receber cliente.endrecos.filter().

//código omitido

const listaApenasApartamentos = cliente.enderecos.filter(

);COPIAR CÓDIGO
Como parâmetro do filtro, passaremos uma função que selecionará o que está dentro do filtro ou não. O parâmetro de cada item é o (endereco) e no retorno "=>" desejamos saber se é um apartamento: (endereco) => endereco.apartamento === true.

//código omitido

const listaApenasApartamentos = cliente.enderecos.filter(
(endereco) => endereco.apartamento === true
);COPIAR CÓDIGO
Em seguida, faremos o console log em listaApenasApartamentos:

//código omitido

const listaApenasApartamentos = cliente.enderecos.filter(
(endereco) => endereco.apartamento === true
);

console.log(listaApenasApartamentos);COPIAR CÓDIGO
Isso porque se endereco.apartamento for verdadeiro, será atribuído na nova lista listaApenasApartamentos. Podemos salvar e voltar ao terminal, para executar o comando node aula2/listaObjetos.js.

[
{
  rua: 'R. Joseph Climber',
  numero: 1337,
  apartamento: true,
  complemento: 'ap 934',
}
]COPIAR CÓDIGO
Assim, temos como retorno a lista filtrada. Vamos supor que tenha muito mais endereços ou se fosse uma lista de objetos mais complexos, poderíamos usar esses métodos para montar relatórios.

listaObjetos.js:

const cliente = {
nome: "Joao",
idade: 24,
email: "joao@firma.com",
telefone: ["1155555550", "1144444440"],
};

cliente.enderecos = [
{
  rua: "R. Joseph Climber",
  numero: 1337,
  apartamento: true,
  complemento: "ap 934",
},
];

cliente.enderecos.push({
rua: "R. Joseph Ladder",
numero: 404,
apartamento: false,
});

const listaApenasApartamentos = cliente.enderecos.filter(
(endereco) => endereco.apartamento === true
);

console.log(listaApenasApartamentos);COPIAR CÓDIGO
Neste vídeo, aprendemos como manipular uma lista de objetos da mesma forma que fazemos com as listas de valores primitivos, como string, números e boolean.

Precisamos nos atentar ao método filter, já que ele nos retorna uma lista independente do número de entradas. Assim, mesmo tendo filtrado somente uma coisa, notamos que ele não nos devolveu o objeto endereço e sim uma lista com uma entrada do objeto endereço, e de um determinado objeto.

Na próxima aula, vamos entender que além de adicionarmos arrays e objetos, podemos acrescentar funções no nosso objeto.

Te espero na próxima aula para aprendermos juntos! */



const cliente= {
    nome: "andre",
    idade: 32,
    cpf:"12312331233",
    email: "andre@email.com",
    fones: ['4234345464774', '214141413413414'],
    
    dependentes:[{

    nome: "sara Silva",
    grauParentesco: "filha",
    dataNascimento:"21/11/1989",

    }] 
}
cliente.dependentes.push({
    nome: "samia maria",
    grauParentesco: "filha",
    dataNascimento:"21/11/2000",
})



//console.log(cliente)

const filhaMaisNova=cliente.dependentes.filter(dependente=> dependente.dataNascimento==="21/11/2000")

console.log(filhaMaisNova[0].nome)

/* Transcrição
[00:00] Juliana: Continuando então com o nosso curso de JavaScript com objetos, vamos ver qual é o desafio deste vídeo, o desafio chama lista de dependentes e trata-se de verificar a melhor forma de agregar informação de um novo dependente ao objeto cliente.

[00:19] Podemos dizer então que nosso cliente agora ele vai ter mais de um dependente, e qual é a melhor forma de lidarmos com esse tipo de informação? Eu já criei aqui o arquivo chamado “lista-dependentes.js” e copiei o que foi feito anteriormente, coloquei o objeto que temos trabalhado, e nesse objeto cliente aqui, eu já adicionei a chave dependentes com um objeto, com o nosso dependente, com seu nome, seu parentesco, sua data de nascimento.

[00:53] Mas agora precisamos agregar mais um dependente, e caímos na mesma história de fones, como é que fazemos para adicionar vários telefones, mas esse caso é um pouco diferente, André então como é que fazemos para lidar aqui quando a pessoa tem mais de um dependente e tem que adicionar no nosso sistema?

[01:16] André: Então Ju uma boa opção aqui para podermos resolver esse problema, seria transformar a dependência em um array de objetos, o que que você acha?

[01:25] Juliana: Afinal de contas vimos anteriormente que quando temos vários dados de um mesmo tipo, podemos listá-los em um array.

[01:34] André: Então vamos lá, posso mexer aqui? Transformar isso aqui, dependentes em um array, correto?

[01:42] Juliana: Sim, então por enquanto temos agora a nossa chave dependentes, o valor dela agora é um array com somente um índice, podemos dizer então que o objeto por maior que ele seja, ele ainda é um índice só do array?

[01:56] André: Isso ai. Então Ju, agora eu quero adicionar nesse array, então agora que eu sei que meu dependentes é um array, eu posso usar funções de array, correto, Ju?

[02:18] Juliana: Corretíssimo.

[02:19] André: Então cliente.dependentes. e vou adicionar, qual o método que utilizamos ai?

[02:28] Juliana: Então se estamos lidando com array e queremos adicionar um dado no array sem se importar em qual que é a posição que vamos adicionar, podemos usar o método de array que é o push(), que sempre vai adicionar o que passarmos por parâmetro no último índice do array.

[02:45] André: Então é cliente.dependentes.push() entre parênteses, e aqui dentro eu vou passar um objeto do tipo dependente para o array dependentes, vou abrir os colchetes aqui, você chama chaves, não é?

[03:10] Juliana: É, chaves.

[03:11] André: continuando o código {nome: “Samia Maria”, parentesco: “filha”, dataNasc: “04/01/2014”}, certo, então adicionei uma nova dependente para minha lista de dependentes do objeto cliente, e agora vou exibir esse objeto, para vermos se ele rodou certo o que estamos querendo fazer, console.log(cliente), você roda aí, Ju?

[04:17] Juliana: Vou salvar aqui então, chamar o node aqui para executar meu arquivo node lista-dependentes.js e ele trouxe para mim o objeto cliente e dentro da chave dependentes agora temos um array com dois elementos, o primeiro elemento é um objeto, com nome, parentesco e data de nascimento da Sara.

[04:44] E o segundo índice desse array, é um outro objeto também com a estrutura de nome, parentesco e data de nascimento, só que agora é da Samia Maria.

[04:56] Então se estamos trabalhando com array de dependentes, como que conseguimos acessar, agora temos que acessar dependentes, entrar nesse array e por exemplo, se quiséssemos trazer só o nome por exemplo da dependente mais nova, então, é Dia das Crianças, vamos mandar um brinde, e quer só por exemplo pegar a mais nova da família, dessa família de dependentes, como que poderíamos fazer então André?

[05:29] André: Então Ju, já temos a lista de dependentes, que tal filtrarmos essa lista, usando como parâmetro a data nascimento?

[05:41] Juliana: Pode ser, fazemos um filtro e aí traz a que bata com a nossa data de nascimento só para vermos tudo em funcionamento.

[05:50] André: Então vou criar uma nova const aqui chamada filha mais nova const filhaMaisNova = e agora eu vou usar um filter em cima do meu array de dependentes, então cliente.dependentes usando a notação de ponto, que já frisamos, e vou fazer um filter() em cima dele, usar aquela arrow funtion, dependente =>, arrow function, é essa seta que criamos, então eu estou rodando meu vetor, o meu array de objetos dependentes, pegando um dependente e vou fazer uma verificação agora.

[06:49] Juliana: Ali o dependente ficou dependente no parâmetro ali, faltou um n.

[07:03] André: Continuando o código, então dependente.dataNasc === vamos usar os 3 iguais.

[07:14] Juliana: Sim, sempre.

[07:17] André: Vou filtrar aqui pela data da mais nova ”04//01/2014”), ficou meio extenso esse código, const filhaMaisNova = cliente.dependentes.filter(dependente => dependente.dataNasc === “04/01/2014”), mas vamos lá, então eu criei uma nova const, chamada filha mais nova que vai filtrar, ele está no objeto cliente, dentro do objeto cliente vou percorrer a lista de objetos chamada dependentes, filtrei pela data de nascimento, isso vai me retornar uma posição do array, correto Ju?

[07:54] Juliana: Correto.

[07:56] André: Então vamos só exibir aqui o objeto que eu criei, a variável console.log(filhaMaisNova), e isso vai ser um array, o retorno do filter é um array, é isso Ju?

[08:14] Juliana: O filter é um método de array que sempre vai retornar o que ele filtra dentro de um novo array, mesmo se ele não encontrar nada, ele vai retornar um array vazio.

[08:24] André: Então como é um array eu vou passar a posição dele, então eu vou colocar na posição zero[0], a posição zero eu vou acessar, por exemplo, o nome, console.log(filhaMaisNova[0].nome), é isso Ju?

[08:41] Juliana: É vamos testar, e aí vamos dar uma olhada final em tudo que fizemos, então node lista-dependentes.js vou executar, e ele trouxe, eu vou fazer o seguinte, eu vou comentar o nosso primeiro console.log(), e vou executar novamente, só para deixarmos o console aqui o terminal mais limpo, não salvei, vamos salvar, e agora sim, agora ele retornou somente o nome da dependente, da filha mais nova.

[09:17] Então vamos entender melhor o que que fizemos nesse filtro, o que que o André preparou aqui para nós, quando estamos trabalhando com array podemos usar todos os métodos de array disponíveis.

[09:31] Então o que que o André fez foi entrar no objeto cliente, entrar na chave dependentes, e através do método filter que é um método de array do JavaScript, que ele filtra dados de acordo com o que passamos dentro da nossa arrow function, o André pediu para filtrar alguma coisa, o que ele está pedindo para filtrar? Ele está pedindo para cada dependente que o filtro percorre, ele faz aquele loop, ele está acessando a chave de cada um dos objetos.

[10:08] Então conseguimos entrar na array, cada índice da array é o seu próprio objeto, e o filtro consegue acessar esse objeto através da notação de ponto, aqui dependente ponto data de nascimento, ele vai acessar a chave data de nascimento de cada um dos índices da array que já colocamos aqui no parâmetro estamos chamando de dependente, e comparar se o valor da string for 04/01/2014 ele retorna o dado, senão, ele passa reto.

[10:42] Isso significa que se dermos um console.log(filhaMaisNova) aqui em filha mais nova somente, ele deve trazer um array com o conteúdo do objeto que tem o nome de Samia Maria, vou rodar mais uma vez novamente, e é isso mesmo, ele traz um array com somente o que ele encontrou, onde a comparação de data de nascimento igual 04/01/2014 foi true e trouxe o objeto inteiro.

[11:17] Conseguimos acessar o nome porque usamos aqui os colchetes, agora esses colchetes que usamos é para acessar um índice de uma array, o índice zero, que é o único elemento que temos no array, acessamos e conseguimos entrar no objeto e acessar a propriedade nome.

[11:35] Juliana: Então sempre lembrar que quando acessamos propriedades de objetos, e elas são outros objetos, conseguimos continuar digamos assim, entrando níveis abaixo, níveis a dentro e acessando com a notação de ponto, e a mesma coisa se cada um dos objetos for um índice de um array.

[11:58] Com os métodos de array conseguimos percorrer e cada um desses objetos conseguimos acessar o que tem dentro deles através da notação de ponto aqui passando a chave que queremos, então acesso data de nascimento, acesso o nome, a partir do momento que conseguimos entrar no array e pegar cada um dos objetos que está na lista, é isso André?

[12:22] André: É isso mesmo Ju, e é bom ressaltar que trabalhar com lista de objetos, e se relacionar em objetos, dentro de objetos, é comum no dia a dia, não só em JavaScript, mas em outras linguagens de programação também.

[12:34] Juliana: Essa estrutura de dados é super comum, então fomos evoluindo, começamos aqui com dados primitivos e estamos passando para cada vez as estruturas que são mais normais no dia a dia quando trabalhamos com estrutura de dados do tipo objeto, trabalhar com arrays, com arrays de objetos, lista de objetos e arrays dentro de objetos e por aí vai, então é importante aqui entendermos essa estrutura e principalmente saber como é que se acessa os dados que estão dentro dessas estruturas, certo?

[13:08] André: Certo Ju.

[13:09] Juliana: Então acho que por esse vídeo é só, nos vemos daqui a pouco.

CONTINUAR LENDO
) */