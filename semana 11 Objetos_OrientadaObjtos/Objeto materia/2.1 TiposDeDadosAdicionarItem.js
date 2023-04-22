

/* Transcrição Curso atualizado

Na aula anterior, vimos algumas coisas que podemos armazenar em um objeto e neste vídeo aprofundaremos como e o que podemos guardar, conhecendo algumas estruturas mais elaboradas.

Voltaremos ao VSCode, e à esquerda clicaremos no segundo ícone que representa o "New folder". Chamaremos este novo arquivo de "aula2", nele seguiremos desenvolvendo o nosso projeto.

Agora, selecionando a pasta aula2, selecionaremos o primeiro ícone "New file" para criarmos uma pasta dentro da aula2 chamada "tipos.js ". Nele, criaremos um objeto cliente que analisamos em aulas passadas.

Vamos criar a const cliente, que vai armazenar um objeto.

tipos.js:

const cliente = {
  nome: "Joao",
  idade: 24,
  email: "joao@firma.com",
  telefone: "1155555550",
};COPIAR CÓDIGO
Por enquanto, nada de novo para nós. Mas podemos armazenar algumas estruturas mais elaboradas!

Por exemplo, em casos em que o usuário possui mais de um telefone. Desse modo, podemos incluir mais uma linha com um telefone2.

tipos.js:

const cliente = {
  nome: "Joao",
  idade: 24,
  email: "joao@firma.com",
  telefone: "1155555550",
    telefone2: "1144444440",
};COPIAR CÓDIGO
Nós já conhecemos uma forma de agrupar informações semelhantes: lista. Desejamos guardar esses dois telefones em uma lista, e essa lista deve ficar dentro de um objeto.

Por isso, copiaremos o número do telefone2 e colocaremos dentro dos colchetes junto com o outro número de telefone.

const cliente = {
  nome: "Joao",
  idade: 24,
  email: "joao@firma.com",
  telefone: ["1155555550", "1144444440"],
};COPIAR CÓDIGO
Com isso, temos um array em que podemos guardar todos os números de telefones desejados. Incluiremos ao final o console log, para exibir essas informações do objeto.

const cliente = {
  nome: "Joao",
  idade: 24,
  email: "joao@firma.com",
  telefone: ["1155555550", "1144444440"],
};

console.log(cliente);COPIAR CÓDIGO
Salvaremos este código e abriremos o terminal para executar o comando:

node aula2/tipos.jsCOPIAR CÓDIGO
{
  nome: "Joao",
    idade: 24,
  email: "joao@firma.com",
  telefone: ["1155555550", "1144444440"]
};COPIAR CÓDIGO
Após selecionarmos a tecla "Enter", percebemos que este formato é aceito pelo Javascript. Conseguimos armazenar um array no objeto, também, precisamos acessar esse objeto, porque podemos querer alterar o array ou capturar um campo específico.

Para acessar o objeto, voltaremos ao VSCode e no console log do cliente, incluiremos .telefone para acessarmos uma propriedade dentro do objeto.

//código omitido

console.log(cliente.telefone);COPIAR CÓDIGO
Dessa forma, vamos acessar somente o array que contém os telefones. Podemos salvar essa alteração e voltar ao terminar para executarmos o comando node aula2/tipos.js mais uma vez.

["1155555550", "1144444440"]

Note que nos devolveu somente o array com os telefones. Este array está guardado em uma propriedade de um objeto.

Assim, conseguimos armazenar um array, e conseguimos estipular como seriam as operações e o que poderíamos fazer. Mas e se desejarmos guardar outro objeto?

No próximo vídeo vamos aprender como guardar outro objeto.

Te espero lá!

 */


const cliente= {
  nome: "andre",
  idade: 32,
  cpf:"12312331233",
  email: "andre@email.com",
  fones: ["987987989987","9897979686" ]
};
cliente.fones.forEach(fone => console.log(fone))


/* Transcrição
[00:00] Juliana: Continuando então com nosso curso de Javascript aqui falando de objetos, nos vídeos anteriores trabalhamos com o nosso objeto cliente, e o nosso objeto cliente tem algumas chaves, nosso cliente tem propriedades, nosso cliente ele tem um nome, ele tem idade e tem cpf.

[00:17] Os nomes, os cpfs, as idades, eles são dados do tipo string, eles são nomes, mesmo os números do cpf eles estão entre aspas, eles são uma string de números, e a idade é um dado do tipo número.

[00:31] Mas vamos ver agora com o próximo desafio que temos, o que vamos trabalhar agora, com que tipo de ângulo que vamos trabalhar, então o desafio desse vídeo chama “lista de telefones”, e temos que acessar uma lista de números de telefone, de cada pessoa cadastrada no sistema do banco, cada cliente e temos que imprimir essa lista, e verificar se há mais de um número no cadastro, ou seja, se o cliente tiver mais de um número temos que imprimir os dois números.

[01:01] Por enquanto o nosso objeto cliente não tem ainda telefone, trabalhamos com adicionar fones, adicionar propriedade fones, mas dessa vez, vamos criar um arquivo novo, vou chamar de “acessar-telefones.js”, e vou copiar o nosso objeto cliente aqui para começarmos a trabalhar e o André vai agora nos explicar, como que resolvemos essa história de ter mais de um telefone, como é que colocamos mais de um telefone aqui para o nosso cliente.

[01:43] André: Então continuando de onde terminamos, vamos adicionar vários telefones em um objeto, então qual seria a melhor maneira de fazer isso? Estou aqui na lista “acessar-telefones.js”, então já temos aqui nosso objeto cliente, e na última aula adicionamos um telefone, e ela quer adicionar mais de um, porque uma pessoa pode ter mais de um telefone, às vezes um número particular, outro para trabalho, enfim, pode ter uma série de cadastro de telefone para uma pessoa.

[02:14] Então o que eu vou fazer aqui agora? Vou criar uma lista de telefones, lembrando de novo que um objeto é formado ali pelo aquele par chave valor, e um objeto ele pode ser composto por um array, por outros tipos de number, string, booleano, e ser formado por outros objetos também, mas vamos começar aqui com um array, então vou adicionar aqui no objeto o array, fones:[] e vou colocar aqui dois telefones, ”55912345498”, “5521988743124”.

[03:23] Juliana: Novamente se for o seu telefone aparecendo na tela saiba que é mera coincidência.

[03:27] André: Exatamente, então eu aqui agora adicionei um array como propriedade do objeto cliente. Então para resolver o desafio agora eu quero exibir a lista de telefones do cliente André, então eu vou pegar o objeto cliente na propriedade dele vamos acessar o valor usamos a notação de ponto, é uma daquelas formas que vimos na última aula, então cliente.fones e como é um array qual função Ju interessante que podemos utilizar aqui?

[04:09] Juliana: Então uma vez que só queremos imprimir as informações na tela e nada mais, podemos usar o método forEach() porque ele não retorna nada, não retorna nenhum dado, ele só faz o que pedimos dentro do loop.

[04:22] André: Então vou usar o forEach() então, cliente.fones.forEach() e aqui eu vou usar aquela arrow function, que vimos na última aula com a Ju, então vou passar o fone =>, que é a variável que eu quero, meu loop e vou dar um console.log(fone)) e passando ali eu quero exibir o fone, então ele vai percorrer esse array de telefones, e vai exibir em cada posição o valor do fone que eu quero. Não é isso Ju?

[04:59] Juliana: É exatamente isso, podemos salvar e testar já, então vou executar o arquivo, node acessar-telefones.js aqui a partir do terminal, e executou aqui o arquivo e apareceu no meu terminal aqui os dois números de telefone, o que podemos concluir disso tudo?

[05:33] Trabalhamos então com tipos primitivos de dados, então trabalhamos com string, a idade é um número, mas nós também podemos ter como valores de chaves arrays.4

[05:47] Quando precisamos colocar uma lista de valores, então meu cliente ele tem mais de um telefone, não fica muito factível se fizéssemos por exemplo, fone1:”455667622” depois fone2 se tivesse mais um telefone, esse tipo de solução ela não é factível, porque não temos como saber muito bem quantos telefones cada cliente vai ter, quais que eu vou ter que acessar, então quantos telefones o cliente tem? Quantos telefones eu preciso acessar? Então esse é um caso que cai bem colocarmos todos os telefones possíveis em uma lista de telefones, um array de telefones.

[06:37] E podemos, uma vez que acessamos a chave fones, trabalhar com valor dela, é sempre muito importante entendermos, que quando usamos notação de ponto para acessarmos uma chave de um objeto, temos acesso ao valor dessa chave, e o valor dessa chave é um array e sendo um array a partir do momento em que acessamos esse dado, conseguimos utilizar todos os métodos de array disponíveis que queremos utilizar.

[07:08] Então no caso como só queremos exibir no console não queremos fazer mais nada, não preciso retornar nada, podemos utilizar aqui o método forEach() que vai simplesmente fazer um loop e para cada fone, para cada item, cada índice do nosso array que estamos chamando de fone, só fizemos aqui um console.log() para exibir no nosso terminal quando executássemos o arquivo.

[07:31] Então essa estrutura de arrays e objetos trabalhando juntos, ela é super comum e é muito importante praticarmos para trabalhar com elas no dia a dia, porque é muito normal esse tipo de estrutura quando trabalhamos com dados no formato de objetos, certo André?

[07:49] André: Isso aí. Ju, mas o seguinte, e se eu quiser trabalhar com um objeto ao invés de um array, se eu quiser trabalhar com um objeto dentro do meu objeto, como que fazemos?

[07:59] Juliana: Então se não tivermos um array e quisermos trabalhar com objetos dentro de objetos, pode? Vamos ver isso então no próximo vídeo, pode ser?

[08:06] André: Beleza, isso aí Ju.

[08:07] Juliana: Então até mais.

[08:09] André: Até mais. */