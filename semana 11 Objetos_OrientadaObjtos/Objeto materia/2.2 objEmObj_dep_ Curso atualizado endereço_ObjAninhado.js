/* Transcrição atualizaçao curso 

No vídeo anterior, vimos que conseguimos salvar um array dentro de um objeto. Nesta aula, vamos entender casos em que desejamos salvar um objeto dentro de outro objeto.

Primeiro, copiaremos a variável de cliente do arquivo tipos.js:

const cliente = {
  nome: "Joao",
  idade: 24,
  email: "joao@firma.com",
  telefone: ["1155555550", "1144444440"],
};COPIAR CÓDIGO
Logo após, criaremos um arquivo chamado "aninhados.js" na pasta aula2, clicando no primeiro ícone "New file". Desse modo, na pasta aula2, temos dois arquivos: tipos.js e aninhados.js.

A palavra "aninhados" é justamente estar dentro do outro, podendo ser um código ou bloco aninhado.

No arquivo aninhados.js, colaremos a variável cliente.

aninhados.js:

const cliente = {
  nome: "Joao",
  idade: 24,
  email: "joao@firma.com",
  telefone: ["1155555550", "1144444440"],
};COPIAR CÓDIGO
Vamos supor que no cenário da loja em que devemos atender um cliente, precisamos salvar qual o endereço dele. Isso caso seja necessário enviarmos um produto ou fatura.

Sabemos que podemos criar propriedades para os objetos nomeando eles e atribuindo algum valor.

Para isso, podemos adicionar uma propriedade cliente.endereco que vai receber um objeto com todos os campos, como rua, número, apartamento e complemento.

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
};COPIAR CÓDIGO
Assim, temos um cliente que contém uma propriedade chamada endereço, que armazena um objeto.

Logo após, podemos exibir esses valores usando o comando console log.

aninhados.js:

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

console.log(cliente);COPIAR CÓDIGO
Podemos salvar o arquivo e voltar ao terminal para rodar o comando node.

node aula2/aninhados.jsCOPIAR CÓDIGO
{
  nome: "Joao",
  idade: 24,
  email: "joao@firma.com",
  telefone: ["1155555550", "1144444440"],
    endereco: {
        rua: "R. Joseph Climber",
        numero: 1337,
        apartamento: true,
        complemento: "ap 934",
    }
}COPIAR CÓDIGO
Conseguimos visualizar os primeiros campos, que já existiam, como nome, idade, e-mail e telefone. Logo após, temos uma propriedade chamada endereco que dentro armazena outro objeto.

Com isso, confirmamos que podemos guardar um objeto dentro de outro.

Agora, vamos entender como acessar os campos dessa estrutura de forma individual. Solicitamos que fosse feito o console log somente de cliente, se desejamos visualizar o objeto de endereço podemos incluir .endereco.

console.log(cliente.endereco);COPIAR CÓDIGO
Salvaremos essa alteração e voltaremos ao terminal para executar o comando node novamente para verificarmos.

{
        rua: "R. Joseph Climber",
        numero: 1337,
        apartamento: true,
        complemento: "ap 934",
    }COPIAR CÓDIGO
Perceba que exibiu somente o objeto endereco. A partir disso, todos os acessos que formos fazer, é igual quando fazemos o acesso a um objeto de forma direta. Não há segredo.

Outro detalhe é que podemos usar a outra notação de colchetes para acessar.

console.log(cliente["endereco"]);COPIAR CÓDIGO
Podemos salvar e voltar ao terminal para executar o comando node aula2/aninhados.js. Note que retornou a mesma informação:

{
        rua: "R. Joseph Climber",
        numero: 1337,
        apartamento: true,
        complemento: "ap 934",
    }COPIAR CÓDIGO
Após verificarmos isso, podemos voltar ao código e manter a notação de ponto.

Assim como o cliente, o endereço pode ter várias propriedades, atributos ou campos próprios. O endereço em si, é uma unidade lógica que faz sentido dizermos que temos um endereço que possui essas propriedades.

Logo, podemos usar os objetos para armazenar o formato dessas informações de uma maneira que faça sentido. Se comunicarmos que o cliente possui o número 1337, não fica claro. Mas se informamos que o cliente possui um endereço e que o número é 1337, sim.

Como fazemos em casos que desejarmos organizar arrays e objetos dentro de um objeto?

Vamos aprender como aplicar isso no próximo vídeo. Até mais! */


const cliente= {
    nome: "andre",
    idade: 32,
    cpf:"12312331233",
    email: "andre@email.com",
}
cliente.dependentes={

    nome: "sara",
    grauParentesco: "filha",
    dataNascimento:"21/11/1989",

    
}

console.log(cliente)

cliente.dependentes.nome= "sara Silva"

console.log(cliente)

/*  Transcrição
[00:00] Juliana: Continuando com nosso curso de objetos com JavaScript, vamos ver qual é o desafio deste vídeo. Então temos que compor um objeto, então adicionar dependentes para cada um dos clientes cadastrados no sistema do banco, com o nome, idade e parentesco.

[00:20] Então é normal quando o banco vai oferecer por exemplo, seguro, ou tem que trabalhar com algo nesse sentido, ter um cadastro dos dependentes de cada cliente cadastrado, eu já criei um arquivo novo aqui que eu estou chamando de “compondo-objetos.js” que é o nome do nosso desafio, e aqui eu coloquei, eu copiei, o nosso objeto cliente, com os dados que inserimos anteriormente, então André, como que fazemos então, qual que é a melhor forma de adicionar uma lista de dependentes aqui, de uma forma que seja de acordo com que trabalhamos no dia a dia com objetos.

[01:01] André: Então Ju, vamos fazer aqui, vamos adicionar um dependente para o cliente André, então vamos usar aquela notação de pontos também que já comentamos, então cliente.dependentes então estou criando aquela nova propriedade dependentes.

[01:26] Eu vou adicionar um dependente aqui e vou exibir para podermos visualizar, então abre chaves = {} aqui eu vou criar um outro objeto chamado dependentes, então quais proxies que eu preciso? nome: vou colocar aqui como minha dependente, dependente do André, a ”Sara”, continuo com parentesco: “filha”, e data de nascimento como dataNasc: “20/03/2011”.

[02:21] André: Então dessa maneira adicionamos uma nova propriedade chamada dependentes, que na verdade é um objeto, para o cliente que definimos aqui, então vamos exibir o cliente para ver se vai aparecer o nosso dependente. Então vou dar um console.log(cliente) e vou passar o cliente.

[02:51] Juliana: Podemos rodar?

[02:52] André: Roda ai para vermos o resultado.

[02:54] Juliana: Então vamos executar aqui com o node compondo-objetos.js, executou aqui no terminal, trouxe o nosso objeto cliente e dentro dele, foi adicionado uma nova chave, uma nova propriedade cujo valor é um objeto, então agora já temos 4 tipos de dados aqui no nosso objeto, temos dados do tipo string, dados do tipo número, do tipo array e agora um outro objeto dentro do outro, porque o valor da propriedade dependentes é um outro objeto, afinal de contas, cada um dos dependentes, ele também tem seu nome, também tem seus dados, por exemplo, data de nascimento, e etc.

[03:36] Então essa estrutura aqui também é muito comum, o cliente existe na vida real, com várias propriedades, os dependentes do cliente também existem na vida real com várias propriedades, e toda a questão de trabalharmos com objetos é justamente abstrair essas propriedades que as pessoas, que os seres, tem no mundo, na vida, André mas e se quisermos, por exemplo, fazer alguma alteração dentro da propriedade dependentes, como é que ficaria?

[04:09] André: Então Ju, vamos ver aqui no código, vou pular a linha aqui, então por exemplo, colocamos só a Sara, primeiro nome dela, quero o nome completo dela agora, vai se chamar Sara Silva, então eu preciso acessar o objeto, dependentes e dentro do meu objeto dependentes acessar a propriedade nome, e ele alterar o que eu quero.

[04:33] André: Então vou fazer o seguinte, cliente.dependentes.nome = então o que eu estou fazendo aqui? Eu estou acessando a propriedade nome do objeto dependentes que está dentro do objeto clientes, e aqui eu altero o valor agora, então vai chamar agora ”Sara Silva” e aqui embaixo eu dou um console só para ele exibir se a propriedade realmente foi alterada console.log(cliente).

[05:20] Juliana: Eu vou salvar então, limpar aqui a exibição do terminal e rodar novamente, agora podemos ver dois registros, o primeiro objeto André aqui com dependentes o nome é somente Sara, e no segundo console no segundo registro aqui, dependentes já foi alterado para Sara Silva, é de uma forma muito similar com que fizemos anteriormente.

[05:42] Então é aquela questão que sempre não cansamos de frisar porque é importante sabermos que a partir do momento em que acessamos a conotação de pontos, uma propriedade de um objeto, temos acesso ao valor dela, e podemos trabalhar com o valor dela de acordo com que é este valor.

[06:01] Então se o valor for uma string utilizamos métodos de strings, se o valor for um array, métodos de array, e no caso aqui, dependentes, a propriedade, a chave dependentes, ela é um objeto, então conseguimos entrar nesse objeto, acessar a propriedade nome, e alterar como já vimos anteriormente como que fazemos para alterar ou para criar novas propriedades de um objeto, já alterar o existente.

[06:27] Essa então, continuando essa estrutura aqui também é super comum trabalharmos com objetos que são, com valores de propriedades que são arrays, valores de propriedades que são objetos dentro de objetos, porque aí conseguimos fazer com que as nossas estruturas de dados elas consigam juntar dados mais complexos, todos no mesmo lugar.

[06:49] Então praticamos bastante com essa estrutura no dia a dia, então é bom sempre ficar ligado e praticar bastante, mudem, criem seus dependentes, mudem os nomes, vão praticando, criando outras propriedades nos seus objetos para isso ficar bem fixado na memória, então André, fechamos essa parte aqui?

[07:09] André: Fechado Ju.

[07:10] Juliana: Então nós vemos no próximo vídeo.

[07:13] André: Próximo vídeo pessoal.*/