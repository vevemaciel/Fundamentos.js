const cliente= {
    nome: "andre",
    idade: 32,
    cpf:"12312331233",
    email: "andre@email.com"

};
// console.log(`o nome do cliente é ${cliente["nome"]} e essa pessoa tem ${cliente["idade"]} anos`);
              //0        //1   
const chaves =['nome','idade','cpf','email'];

//console.log(cliente[chaves[0]])

// chaves.forEach((chave) => {
//     console.log(`A chave ${chave} tem valor ${cliente[chave]}`)
// })
chaves.forEach(info => console.log(cliente [info])) 
console.log(cliente ['conta'])


/* Transcrição
[00:00] Juliana: Continuando então com o nosso curso aqui de JavaScript com estrutura de dados objetos, vamos ver o que temos para o desafio deste vídeo, então nosso desafio agora é acessar chaves, lembrando que o objeto é um conjunto, uma dupla de chaves e valores.

[00:17] Então temos que consultar um objeto utilizando uma lista de chaves relativas a informações de clientes, foram geradas pelo sistema, e printar o resultado na tela, bom, consultar um objeto, mas utilizando uma lista de chaves, então qual que é o caso aqui?

[00:38] Vamos primeiro criar um novo arquivo, que eu vou chamar aqui de “acessar-lista.js”, para podermos trabalhar com ele e o caso é que nem sempre dá para fixar no código, qual que é a chave que queremos acessar, ao contrário que já fizemos anteriormente, que sabíamos que as nossas chaves eram nome, CPF, etc. Então André, como que fazemos nesse caso quando não conseguimos fixar no código exatamente qual é o nome da chave que queremos acessar.

[01:18] André: Então Ju, uma possibilidade que temos aqui é usar a notação de colchete, que é muito parecida aquela notação utilizada no array, então você passa a chave como uma variável, aí consultamos esse objeto, essa chave, através dessa variável que vamos estar passando.

[01:37] Juliana: Certo, eu vou copiar aqui o nosso objeto cliente aqui, que vamos continuar utilizando ele e para ficar mais fácil de trabalharmos, então André, vamos lá. Então o que o desafio quer dizer quando ele fala de uma lista de chaves, lista de chaves que vamos receber lá do sistema, receber de alguma outra parte do nosso programa.

[02:10] André: Então Ju, vamos fazer o seguinte, vamos criar um objeto, já temos o objeto aqui cliente, a chave que precisamos, para fazermos esse exemplo aqui e resolver o desafio, são o nome, idade, cpf, e-mail, então vamos fazer aqui, vê se concorda comigo, vou criar um array com as chaves que eu preciso, e passar esse array para uma função para eu consultar as informações do objeto.

[02:36] André: Então vou fazer aqui const chaves = [] e a estrutura do array e aqui eu vou passar chaves que eu quero, que eu vou utilizar, então vai ser [“nome”, “idade”. “cpf”, “email”], então defini um array como definimos no JavaScript, um *array com as chaves.

[03:08] Vou printar agora a informação que eu preciso, vou fazer printar uma informação só para começar, console.log(cliente[]) então eu tenho o objeto chamado cliente, eu vou passar para cá a chave que eu quero agora, então do cliente eu quero qual chave? Lembrando que o array aqui começa do zero, não é isso Ju?

[03:35] Juliana: Sim, começa com zero.

[03:37] André: Então eu quero o nome do cliente, então usando notação de colchete, então cliente eu quero na posição, nessa posição aqui, posição zero, chaves no índice zero, console.log(cliente[chaves[0]]).

[03:54] Juliana: Certo, só consertaria as chaves que escreveu com n.

[03:58] André: Acontece, vamos lá chaves, então quero exibir, do objeto a chave nome, que eu vou estar passando por colchete a chaves que é o meu array no índice zero que tem meu nome, certo? Vamos rodar, só para vermos a saída aqui.

[04:20] Juliana: Vamos sim, vou salvar aqui o arquivo, e vou chamar com node acessar-lista.js e imprimiu, André.

[04:32] Então, já tínhamos utilizado anteriormente a notação de ponto para acessar chaves de objetos e pegar o valor dessas chaves, e o que o André fez agora, foi usar a notação de colchetes para acessar essa chave vinda de um outro lugar, então lembrando que agora, estamos recebendo uma lista, essa array que o André fez, de algum outro lugar, por exemplo, pode estar vindo de alguma variável, uma lista de chaves, então tem a chave nome, tem a chave idade, etc..

[05:10] E utilizamos a notação de colchete para passar esse valor como variável, então funcionaria da mesma forma ou de uma forma parecida, se tivéssemos uma const chave = “nome” chamada somente chave e fosse uma string com o valor de nome, e poderíamos passar apenas [chave], console.log(cliente[chave]).

[05:37] Agora não conseguimos utilizar a notação de ponto com valores variáveis, ou seja, se tentássemos fazer, console.log(cliente.chave), então não conseguimos passar valores variáveis, mesmo que seja uma variável que está no mesmo arquivo, usando a notação de ponto, porque o JavaScript vai acessar o objeto cliente e ele não vai encontrar aqui .chave ele tenta encontrar aqui um nome ou uma idade, ou um cpf, ele tenta encontrar um dado exatamente com esse nome, ele não vai encontrar.

[06:17] Então sempre que queremos passar para o JavaScript, identificar, acessar uma chave de objeto utilizando uma variável, seja direto uma string ou seja uma posição em um array, precisamos utilizar a notação de colchete.

[06:37] Então para conseguirmos utilizar a lista de chaves que recebemos, acessamos aqui a rede chaves no índice zero para pegar nome, ou no índice um para pegar idade e etc., então o que o André fez foi, acessar a variável chaves na posição zero, e aqui é substituído aqui pela string nome e conseguimos acessar André. Mas e como é que fazemos para, por exemplo, printar na tela todas as propriedades, todas as chaves desse objeto aqui, não só o nome, como é que faríamos então.

[07:20] André: Então Ju, podemos usar o forEach do JavaScript para percorrer nosso array e passar como parâmetro para a função console a nossa chaves, vamos fazer isso? Vou fazer aqui, chaves.forEach() eu vou criar uma variável aqui, info usar a seta, arrow function, nome bonito, =>console.log()) e usar a notação de colchete, vou passar então o meu objeto cliente, e quero saber qual chave que eu quero exibir, cliente.[info].

[08:28] Juliana: Vamos sim, então vamos ver se deu tudo certo, node acessar-lista.js, eu vou apagar o console que estava na linha de cima, mais certinho, André, 36, o cpf, e o e-mail, então deu certo André, o que que o André fez aqui com esse tal de forEach() lembrando que forEach() é um método de array do JavaScript então falamos sobre toda essa parte de forEach() os métodos de array no nosso curso de array, então se você não deu uma olhada nele então você pode conferir que está tudo lá.

[09:01] E o método forEach(), lembrando, ele é um método que precisa de uma função callback para funcionar, então passamos info como sendo parâmetro, então para cada info para cada chave que tem dentro do nosso array de chaves o JavaScript percorreu e executou aqui console.log() acessando o nosso objeto cliente na posição info.

[09:27] Então da primeira vez que ele passar no forEach info se refere a nome, então cliente na chave nome, depois cliente na chave idade, depois cliente na chave cpf e até o fim, e ele conseguiu exibir no console todas as informações automaticamente.

[09:48] A notação de colchete de objetos ela também funciona se você quiser é exibir uma informação, console.log() passando a chave exatamente utilizando aspas, então podemos exibir cliente abre colchetes e passa o nome da chave exata que já sabemos assim entre aspas, console.log(cliente[“nome”]) no formato string também é uma forma de usarmos notação de colchete, dessa vez quando sabemos exatamente qual é o nome da chave que queremos pegar, também vai funcionar.

[10:31] Porém quando já trabalhamos com nome de chave fixo, costumamos usar mais a notação de ponto e a notação quando precisamos passar aqui a chave como variável por exemplo como no caso do forEach() que cada vez que passar no loop vai ser um índice diferente, vai ser um valor diferente, certo André?

[10:53] André: Certo. Ju uma pergunta agora, e quando queremos acessar uma chave de um objeto que não conhecemos, ou passa uma chave errada, o que acontece com o JavaScript?

[11:04] Juliana: Boa pergunta, vamos fazer o seguinte, vamos fazer um teste, eu vou tentar acessar cliente passando uma chave que não existe, por exemplo, conta, console.log(cliente[“conta”]), vamos ver o que acontece, ele deu undefined, indefinido, era isso que você esperava que acontecesse André?

[11:28] André: É isso aí.

[11:30] Juliana: Então ele não dá erro, isso é muito importante, quando tentamos acessar a chave de um objeto que não existe no JavaScript, ele não vai dar um erro de sintaxe, ou erro de tipo, nem erro de nada, ele vai só dizer que é indefinido, isso é muito importante sabermos disso quando vamos tentar debugar, tentando acessar meu objeto aqui ele não está trazendo, mas ele também não me dá erro, porque ele só diz que é indefinido, é assim em outras linguagens também André?

[11:58] André: Então por exemplo, no C Sharp, ou no Java, vai dar um erro para você, no JavaScript não, no JavaScript facilita bastante por algum lado a vida do programador.

[12:11] Sim, mas às vezes quando você quer debugar você quer receber um erro e você não está recebendo, então isso é uma característica do JavaScript, muitas coisas que dão erro em outras linguagens como CSharp, Java, Python, eles não vão dar erro no JavaScript, ele só vai dizer para você que é indefinido, então é importante sabermos esse tipo de coisa quando estamos debugando especialmente. Legal André, gostei, então vamos para o próximo vídeo?

[12:37] André: Próximo vídeo pessoal.

CONTINUAR LENDO
 */

/* Transcrição
Na aula anterior, vimos como acessar uma propriedade usando o operador ponto, mas vamos entender que essa não é a única maneira que temos para acessá-las.

Para demonstrar essa outra maneira, podemos selecionar o código inteiro do arquivo acesso_ponto.js e copiá-lo usando "Ctrl + C".

Após copiar, à esquerda em "Explorer", clicaremos no primeiro ícone para criarmos um novo arquivo chamado "acesso_colchete.js" dentro da pasta aula1.

Com isso, ficamos os as seguintes pastas até o momento:

aula1
acesso_colchetes.js
acesso_ponto.js
objeto.js
No arquivo acesso_colchete.js, colaremos o código que copiamos anteriormente.

acesso_colchete.js:

const cliente = {
  nome: "Andre",
  idade: 32,
  cpf: "1122233345",
  email: "andre@dominio.com",
};

console.log(
  `O nome do cliente é ${cliente.nome} e essa pessoa tem ${cliente.idade} anos.`
);

console.log(`Os 3 primeiros digitos do CPF são ${cliente.cpf.substring(0, 3)}`);COPIAR CÓDIGO
A maneira como podemos acessar as propriedades é usando o operador de colchetes, similar ao que usávamos ao usar arrays.

No template string do primeiro console.log, podemos acessar o nome usando os colchetes: client["nome"] e aplicamos da mesma forma para o campo idade.

acesso_colchete.js:

const cliente = {
  nome: "Andre",
  idade: 32,
  cpf: "1122233345",
  email: "andre@dominio.com",
};

console.log(
  `O nome do cliente é ${cliente["nome"]} e essa pessoa tem ${cliente["idade"]} anos.`
);

console.log(`Os 3 primeiros digitos do CPF são ${cliente.cpf.substring(0, 3)}`);COPIAR CÓDIGO
Podemos salvar e validar voltando no terminal para executar o comando node.

node aula1/acesso_colchete.jsCOPIAR CÓDIGO
O nome do cliente é Andre e essa pessoa tem 32 anos.
Os 3 primeiros dígitos do CPF são 112COPIAR CÓDIGO
Obtivemos o mesmo retorno de quando usamos o operador ponto. Mas qual a diferença entre essas formas?

Às vezes temos um objeto para receber, que não necessariamente sabemos no momento de escrever o código, quais são as propriedades.

Neste exemplo estamos com um caso simples, em que visualizamos o nome das propriedades sem problema nenhum. Porém, nem todos os casos são assim, principalmente se tiver muitas propriedades.

Vamos remover o segundo console.log:

console.log(`Os 3 primeiros digitos do CPF são ${cliente.cpf.substring(0, 3)}`);COPIAR CÓDIGO
Assim, ficamos com o arquivo acesso_colchete.js da seguinte forma até o momento:

const cliente = {
  nome: "Andre",
  idade: 32,
  cpf: "1122233345",
  email: "andre@dominio.com",
};

console.log(
  `O nome do cliente é ${cliente["nome"]} e essa pessoa tem ${cliente["idade"]} anos.`
);COPIAR CÓDIGO
Após o console.log vamos escrever um trecho de código assumindo que não sabemos os valores das chaves. Vamos supor que as chaves foram passadas como parâmetro para nós, por isso, no final no arquivo colocaremos uma const chaves = [].

Dentro dela, teremos um array com todos os valores da chave.

//código omitido

const chaves = ["nome", "idade", "cpf", "email"];COPIAR CÓDIGO
O que podemos fazer com essa informação? Temos uma lista, vimos o método de lista e é possível percorrermos essa lista e capturar cada valor.

Para tal, usaremos chaves.forEach() e dentro passaremos uma função que será chamada para cada valor daquela chave.

A propriedade que vamos ter do array é cada uma das chaves, logo dentro do parêntese incluiremos outro parêntese e digitaremos "chave": chaves.forEach((chave)). Nela, teremos uma arrow function em que listaremos as chaves e seus respectivos valores e exibiremos usando console.log().

No console.log() usaremos uma template string para passarmos uma mensagem customizada, chamando a chave que desejamos exibir.

//código omitido

chaves.forEach((chave) => {
  console.log(`A chave ${chave} tem valor`);
});COPIAR CÓDIGO
Por estarmos assumindo que não sabemos os nomes das chaves, usamos o operador de colchetes dentro do objeto: ${cliente[chave].

//código omitido

chaves.forEach((chave) => {
  console.log(`A chave ${chave} tem valor ${cliente[chave]}`);
});COPIAR CÓDIGO
Ou seja, o valor da chave é uma string, e uma string dentro de colchetes depois de um objeto, nos permite acessar determinada propriedade.

acesso_colchete.js:

const cliente = {
  nome: "Andre",
  idade: 32,
  cpf: "1122233345",
  email: "andre@dominio.com",
};

console.log(
  `O nome do cliente é ${cliente["nome"]} e essa pessoa tem ${cliente["idade"]} anos.`
);

const chaves = ["nome", "idade", "cpf", "email"];

chaves.forEach((chave) => {
  console.log(`A chave ${chave} tem valor ${cliente[chave]}`);
});COPIAR CÓDIGO
Para validarmos, voltaremos ao terminal e executamos novamente o comando node.

node aula1/acesso_colchete.jsCOPIAR CÓDIGO
O nome do cliente é Andre e essa pessoa tem 32 anos.
A chave nome tem valor Andre
A chave idade tem valor 32
A chave cpf nome tem valor 1122233345
A chave email tem valor andre@dominio.comCOPIAR CÓDIGO
Perceba que exibiu a mensagem do código anterior e agora temos todas as chaves listadas com seus respectivos valores.

Assim, aprendemos que com a sintaxe de colchetes podemos acessar campos que não temos acesso no momento em que estamos escrevendo o código. Com isso, flexibilizamos o uso das chaves, das propriedades e dos objetos.

Uma coisa que podemos fazer, também, é analisar o que acontece ao tentarmos acessar uma chave que não existe. Para testarmos, em const chaves incluiremos altura.

const chaves = ["nome", "idade", "cpf", "email", "altura"];COPIAR CÓDIGO
Após feita essa alteração, salvaremos o arquivo e voltamos ao terminal para executar o comando node aula1/acesso_colchete.js.

O nome do cliente é Andre e essa pessoa tem 32 anos.
A chave nome tem valor Andre
A chave idade tem valor 32
A chave cpf nome tem valor 1122233345
A chave email tem valor andre@dominio.com
A chave altura tem valor undefinedCOPIAR CÓDIGO
A última linha é a chave altura, em que o valor foi devolvido como undefined ("indefinido"). O undefined é um valor reservado do JavaScript (sendo uma palavra especial) devolvido ao tentarmos acessar uma propriedade que não existe.

Não retorna erro e não vai quebrar o código, mas o campo é devolvido com o valor undefined.

Aprendemos que podemos acessar os campos de um objeto, e que temos a notação de ponto e de colchetes. Esta última surgiu para cenários em que, não necessariamente, sabemos quais campos acessaremos. E que ao acessarmos uma propriedade que não existe, o valor devolvido será undefined.

Até a próxima aula! */