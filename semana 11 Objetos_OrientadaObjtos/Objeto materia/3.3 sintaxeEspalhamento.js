/* curso atualizado Transcrição
Nesta aula, vamos aprender um pouco sobre a sintaxe de espalhamento e como podemos utilizá-la com objetos. Talvez você lembre do curso anterior, em que tivemos que usá-la para compor e decompor arrays.

Voltando ao VSCode, podemos remover o comentário do arquivo chaves.js:

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

const chavesDoObjeto = Object.keys(cliente);

console.log(chavesDoObjeto);

if (!chavesDoObjeto.includes("enderecos")) {
  console.error("Erro. É necessário ter um endereço cadastrado.");
}COPIAR CÓDIGO
E novamente, copiaremos o cliente com o respectivo endereço:

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
];COPIAR CÓDIGO
Agora, na pasta da aula3, criaremos um arquivo chamado espalhamento.js.

Dessa forma, ficamos com as seguintes pastas na aula 3:

aula3
chaves.js
espalhamento.js
repeticao.js
No arquivo espalhamento.js, colaremos o trecho do código que copiamos do arquivo chaves.js.

espalhamento.js:

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
];COPIAR CÓDIGO
Vamos supor que temos uma função externa (ou seja, que não é nossa) e precisamos usá-la em casos que desejarmos ligar ou ter algum tipo de contato com o cliente.

Chamaremos essa função assumindo que ela veio de fora. Usaremos o comando function ligaParaCliente(), que receberá os dois números de telefones do cliente.

// código omitido

function ligaParaCliente (telefoneComercial, telefoneResidencial) {

}COPIAR CÓDIGO
Esta função apenas exibirá um console log ligando para o telefone comercial e outro para o residencial, através de template string passando como valor o que está sendo passado como parâmetro na função ligaParaCliente: console.log(Ligando para ${telefoneComercial}).

// código omitido

function ligaParaCliente(telefoneComercial, telefoneResidencial) {
  console.log(`Ligando para ${telefoneComercial}`);
  console.log(`Ligando para ${telefoneResidencial}`);
}COPIAR CÓDIGO
Agora, assumimos que não podemos alterar a implementação desta função, porque ela veio de fora. Como poderíamos chamar essa função passando os valores que temos no objeto cliente? Desejamos entrar em contato com o cliente.

Chamaremos ligaParaCliente passando como parâmetro cliente.telefone com o índice zero e um. Porque é um array e temos duas posições, e estamos assumindo que a primeira é comercial e a segunda residencial.

// código omitido

function ligaParaCliente(telefoneComercial, telefoneResidencial) {
  console.log(`Ligando para ${telefoneComercial}`);
  console.log(`Ligando para ${telefoneResidencial}`);
}

ligaParaCliente(cliente.telefone[0], cliente.telefone[1]);COPIAR CÓDIGO
Podemos salvar essa alteração e verificar se funciona voltando ao terminal e executando o comando node aula3/espalhamento.js:

Ligando para 1155555550
Ligando para 1144444440COPIAR CÓDIGO
Funcionou, ele liga para o primeiro número e depois para o próximo número de telefone.

Mas vimos que podemos aplicar a sintaxe de espalhamento, que ela divide o array e passa cada campo como se fosse um parâmetro diferente.

Para fazer isso, informamos somente o array cliente.telefone e podemos incluir uma reticência antes dessa chamada. Teremos o mesmo comportamento do caso anterior.

ligaParaCliente(...cliente.telefone);COPIAR CÓDIGO
Podemos salvar e voltar ao terminal para rodar novamente o comando node aula3/espalhamento.js.

Ligando para 1155555550
Ligando para 1144444440COPIAR CÓDIGO
Obtivemos o mesmo retorno que anteriormente, ela espalhou o array no momento da chamada e tivemos dois parâmetros sendo passados. Foi uma adaptação que aplicamos para funcionar com a chave antiga.

Será que conseguimos fazer algo parecido com objetos? Vamos supor que precisamos realizar um envio de algum produto para o cliente. Para testar isso, no final do arquivo espalhamento.js, criaremos uma const encomenda que será igual a um objeto, = {}.

espalhamento.js:

//código omitido

const encomenda = {

}COPIAR CÓDIGO
Precisamos enviar esse produto por correio ou para o responsável pela logística da loja, para enviar essa encomenda para o cliente. Os campos que precisaremos serão o nome do cliente (destinatário) e o endereço.

//código omitido

const encomenda = {
  destinatario: cliente.nome,
  endereco: cliente.enderecos[0],
};COPIAR CÓDIGO
Para visualizarmos esse objeto, colocaremos um console log passando como parâmetro a encomenda.

//código omitido

const encomenda = {
  destinatario: cliente.nome,
  endereco: cliente.enderecos[0],
};

console.log(encomenda);COPIAR CÓDIGO
Novamente vamos salvar essas alterações e voltar ao terminal para executar o comando node aula3/espalhamento.js.

Ligando para 1155555550
Ligando para 1144444440
{ destinatario: 'Joao', 
    endereco: {
        rua: 'R. Joseph Climber',
        numero: 1337,
        apartamento: true,
        complemento: 'ap 934'
    }
}COPIAR CÓDIGO
Este é o nosso objeto de encomenda. Ele possui um destinatário chamado João, e um endereço que contém outro objeto nele, com a rua, número, apartamento e complemento.

Vamos supor que a maneira que devemos enviar esse objeto, não pode ter outro objeto aninhado. Deve ter todos os campos de forma direta, sendo um objeto que contém os campos rua, número, apartamento, complemento e destinatário. Assim como visualizamos em uma carta analógica.

No VSCode, nós poderíamos passar os campos de forma mais bruta, passando os campos e removendo o objeto no final:

//código omitido

const encomenda = {
  destinatario: cliente.nome,
    rua: cliente.enderecos[0].rua,
    numero:cliente.enderecos[1].numero,
};

console.log(encomenda);COPIAR CÓDIGO
Salvaremos e vamos verificar no terminal rodando o comando node.

Ligando para 1155555550
Ligando para 1144444440
{ destinatario: 'Joao', rua: 'R. Joseph Climber', numero: 1337 }COPIAR CÓDIGO
Obtivemos o destinatário, a rua e o número. Mas vamos supor que estamos em um cenário em que temos muitos campos!

Voltando ao VSCode, para facilitar, o Javascript adotou a sintaxe de espalhamento em objetos. Como podemos fazer isso de forma mais prática?

Vamos dizer que queremos espalhar o que está dentro do objeto de endereço. Para isso, usaremos o operador de espalhamento reticência e chamaremos o cliente.enderecos[0], no índice zero.

//código omitido

const encomenda = {
  destinatario: cliente.nome,
  ...cliente.enderecos[0],
};

console.log(encomenda);COPIAR CÓDIGO
Salvaremos o arquivo mais uma vez e vamos voltar ao terminal para rodar o comando node aula3/espalhamento.js:

Ligando para 1155555550
Ligando para 1144444440
{ 
        destinatario: 'Joao', 
        rua: 'R. Joseph Climber',
        numero: 1337,
        apartamento: true,
        complemento: 'ap 934'
}COPIAR CÓDIGO
Assim, temos somente um objeto, que contém os campos destinatário, rua, número, apartamento e complemento.

No próximo vídeo, vamos aprender sobre outras notações e como podemos salvar e transmitir algumas coisas usando os objetos.

Te espero na próxima aula! */


const clientes= [
  {
    nome: "andre",
    cpf:"12312331233",
    dependentes:[{
      nome: "sara Silva",
      Parentesco: "filha",
      dataNasc:"21/11/1989"
      },
      {
      nome: "samia maria",
      Parentesco: "filha",
      dataNasc:"21/11/2000"
      }],
  },
  {
    nome: "Juliana",
    cpf:"12312331233",
    dependentes:[{
      nome: "sofia",
      Parentesco: "filha",
      dataNasc:"21/11/1989"
    }],
  }
]
const listaDependentes= [...clientes[0].dependentes,...clientes[1].dependentes];

console.table(listaDependentes)
/* 
console.log(listaDependentes)
mostra a informação no exemplos abaixo:
[
  {
    nome: 'sara Silva',
    grauParentesco: 'filha',
    dataNascimento: '21/11/1989'
  },
  { nome: 'samia maria', Parentesco: 'filha', dataNasc: '21/11/2000' },
  { nome: 'sofia', Parentesco: 'filha', dataNasc: '21/11/1989' }
] */


/* Transcrição
[00:00] Juliana: Continuando a trabalhar aqui com objetos em JavaScript, vamos dar uma olhada qual que é o desafio para este vídeo, então nosso desafio é a lista de dependentes.

[00:12] Então temos que extrair de uma listagem de clientes apenas as informações de dependentes e aí montamos uma lista única com esses dependentes para análise de outros departamentos do banco, ver qual que é a idade dos dependentes, etc.

[00:23] Então onde estávamos trabalhando nos vídeos anteriores apenas com um objeto cliente, vamos ter agora uma lista de clientes, alguns clientes, eu já criei um arquivo aqui chamado “lista-unica.js”, André então como é que fazemos isso que o desafio está pedindo, acessar uma lista e extrair de uma lista de clientes, alguns dados, e juntar esses dados em um lugar só?

[00:52] André: Então Ju, em JavaScript, assim como em outras linguagens, podemos utilizar diversas maneiras para obter o mesmo resultado, mas no JavaScript específico temos um operador de espalhamento, o spread operator, que vai ser muito útil nesse caso aqui, nessa situação, vamos ver como fazer?

[01:09] Juliana: Vamos ver.

[01:10] André: Então eu vou primeiro criar aqui uma const clientes = que vai ser o nosso array de clientes, aí vamos ter mais informações resumidas que nem você falou, e aqui dentro vou colocar dois objetos [] para adiantar um pouco nossa vida, vou copiar, já tem salvo aqui o objeto André, vou colar dentro do array que criamos, e vou copiar o objeto Juliana também para termos dois objetos aqui dentro do nosso array então temos um array de objetos aqui chamado clientes.

[02:06] Juliana: E aí cada um desses clientes ele tem aqui alguns dependentes, um array com dependentes em cada um deles, certo.

[02:16] André: Então Ju agora eu vou usar o, vou criar uma variável chamada lista dependentes para extrair somente os dependentes desse nosso array de clientes, e ai utilizar o spread operator, então vou criar uma outra const aqui const listaDependentes = e vou usar o operador de espalhamento, que são 3 pontos.

[02:44] Juliana: Isso, como se fosse uma reticência.

[02:46] André: Isso, [...clientes[0]] e vou passar índice zero só para adiantarmos um pouco, então o array clientes no índice zero, eu quero que ele espalhe para mim, dentro desse array novo, listaDependentes, os meus dependentes, [...clientes[0].dependentes] e vou usar o operador de espalhamento também para o objeto 2 da minha lista, que é a Juliana, então spread operator, clientes no índice 1 [,...clientes[1].dependentes] usar até uma notação de ponto ali para acessarmos nossas chaves.

[03:31] Então Ju, vou usar para começar a exibir nossa listaDependentes, esse array criado a partir dos dependentes dos nossos objetos, vou usar o console.log() só para vermos a saída como que vai ficar, console.log(listaDependentes), você roda Ju para vermos como vai ficar?

[03:57] Juliana: Vamos salvar e executar aqui o node lista-unica.js, e o que aconteceu aqui? Todos os dependentes dos nossos objetos agora eles são parte de um único array, então o que afinal de contas fizeram esses 3 pontos? O nosso operador de espalhamento.

[04:26] Se voltarmos aqui na linha 27 onde o André criou nossa const listaDependentes, ele criou, abriu um array, e dentro desse array ele espalhou, é literalmente isso que esse operador faz, primeiro ele espalhou dentro do array o conteúdo de clientes no índice zero ponto dependentes, ou seja, o primeiro índice do nosso array, a primeira posição da nossaarray clientes, que é o objeto André, acessou a chave dependentes dentro do objeto André, ela é um array, pegou todos os itens desse array e espalhou dentro aqui do array que ele criou, do array listaDependentes.

[05:15] E em seguida fez a mesma coisa para o índice um da nossa array clientes que é nosso objeto Juliana, acessou clientes no índice um, ponto dependentes, então pegou esse array aqui que é o array que só tem um índice e espalhou o conteúdo dele dentro do nosso array listaDependentes, ou seja, ele tirou, o que esse operador fez foi, ele foi retirando cada um, os elementos dentro de seus arrays, e colocando eles literalmente espalhados dentro de um único array.

[05:54] Então agora temos uma lista com todos os dependentes sem mais nenhuma informação, e eles não estão mais separados, por exemplo, Sara e Samia, não estão mais dentro do seu array e Sophia dentro do seu array, estão separados, eles são todos parte, eles estão, todas as informações os índices estão espalhados dentro do array principal que é o nosso array listaDependentes que foi que criamos para colocar tudo isso aqui dentro.

[06:21] Nós inclusive temos um outro tipo de console que é o console.table() que vai exibir essas informações de um jeito mais interessante aqui para nós, não é André?

[06:31] André: Isso aí, Ju.

[06:33] Juliana: Então ele vai exibir no console aqui os itens desse array aqui pelo índice, e cada uma das chaves vira um nome de coluna, e os valores das chaves aqui estão listados, o nome, o parentesco, a data de nascimento.

[06:53] Então o operador de espalhamento ele tem vários usos dentro do JavaScript, esse aqui é somente um deles, vamos deixar um material extra para vocês praticarem com alguns outros exemplos, tanto com objetos, quanto com arrays e aí vai praticando, cria, incrementa aqui o seu array de clientes, pode colocar, se o que está funcionando aqui para dois clientes, vai funcionar para mais.

[07:18] Inclusive podemos deixar um desafio aqui para o pessoal André, para o invés de ir listando no índice zero, no índice um, pode fazer um loop no array clientes e para cada um deles ver como é que você puxa o espalhamento de cada um dos dependentes, deixamos como desafio para vocês, acho que é isso por enquanto sobre esse operador de espalhamento, eu acho que podemos ficar por aqui.

[07:48] André: Isso aí, Ju.

[07:49] Juliana: Então pratica bastante e nos vemos no próximo vídeo.

[07:51] André: Até o próximo vídeo pessoal.

CONTINUAR LENDO
 */