

/* Transcrição aula atualizada
Agora que sabemos acessar os valores das propriedades dos objetos, é interessante aprendermos como manipular, alterar ou criar novas propriedades.

No VSCode, clicaremos no ícone "New File" ("Novo arquivo"), para criar um novo arquivo chamado "alterar.js" dentro da pasta aula1.

Dentro do arquivo criado, inserimos um novo objeto const pessoa e atribuímos usando o sinal de igual "=" bloco de chaves. Nele, teremos o nosso objeto.

alterar.js:

const pessoa = {

}COPIAR CÓDIGO
Vamos atribuir ao objeto pessoa um atributo chamado nome, em que seu conteúdo será "Luma".

const pessoa = {
    nome: "Luma", 
}COPIAR CÓDIGO
Na linha seguinte, incluiremos uma propriedade chamada profissao:

const pessoa = {
  nome: "Luma",
  profissao: "Engenheira",
};COPIAR CÓDIGO
Assim, temos um objeto pessoa que contém duas propriedades. Sabemos que podemos aplicar o console.log() para saber o nome, para isso pedimos para exibir pessoa.nome, como parâmetro.

//código omitido

console.log(pessoa.nome);COPIAR CÓDIGO
Vamos rodar esse código voltando ao terminal e executando o comando node aula1/alterar.js.

node aula1/alterar.jsCOPIAR CÓDIGO
Luma

Como saída, retornou o nome "Luma". E se quisermos exibir o telefone dessa pessoa? Lembrando que esse campo não existe no nosso objeto.

//código omitido

console.log(pessoa.telefone);COPIAR CÓDIGO
Vamos salvar o arquivo clicando nas teclas "Ctrl + S" e voltar ao terminal para executar mais uma vez o comando node.

node aula1/alterar.jsCOPIAR CÓDIGO
Luma
undefinedCOPIAR CÓDIGO
Por ser uma propriedade que não existe dentro de um objeto, o retorno para esse cenário é a palavra undefined. Esta palavra representa algo que não foi iniciado ou definido.

Vamos fazer mais algumas inclusões para analisarmos. E se colocarmos pessoa.telefone, que recebe um número?

//código omitido

pessoa.telefone = "11 2223333444";COPIAR CÓDIGO
Logo após, podemos exibir essa informação usando console log.

//código omitido

pessoa.telefone = "11 2223333444";

console.log(pessoa.telefone);COPIAR CÓDIGO
Código do arquivo alterar.js completo até o momento:

const pessoa = {
  nome: "Luma",
  profissao: "Engenheira",
};

console.log(pessoa.nome);

console.log(pessoa.telefone);

pessoa.telefone = "11 2223333444";

console.log(pessoa.telefone);COPIAR CÓDIGO
Para verificarmos o que vai acontecer, voltaremos ao terminal para executarmos o comando node aula1/alterar.js.

Luma
undefined
11 2223333444COPIAR CÓDIGO
Antes de definirmos esse número de telefone, retornava como undefined. Mas após incluirmos no código, conseguimos devolver a propriedade.

Desse modo, descobrimos que se criarmos uma propriedade depois, vai funcionar. Ou seja, podemos adicionar propriedades mesmo depois do objeto estar criado.

Vamos supor que salvamos somente o primeiro nome da pessoa, mas agora temos o nome completo. O que acontece se inserirmos pessoa.nome = "Luma Silva";?

pessoa.nome = "Luma Silva";COPIAR CÓDIGO
Logo após, vamos solicitar que seja exibido o objeto completo (todos os campos).

pessoa.nome = "Luma Silva";

console.log(pessoa);COPIAR CÓDIGO
Podemos salvar essas alterações e voltar ao terminal para executarmos o comando node mais uma vez.

Luma
undefined
11 2223333444
{
  nome: "Luma",
  profissao: "Engenheira",
    telefone: '11 2223333444'
};COPIAR CÓDIGO
Nos retorna o nome "Luma", sendo o primeiro que solicitamos a exibição no código. Antes de inserirmos o número telefone, nos devolvia a palavra undefined por não estar definido. Logo após, passamos a receber esse telefone alterado e depois de alterarmos o nome também, o objeto final consta com o nome completo "Luma Silva".

Acessamos a chave nome, alteramos o valor que estava salvo nela e isso refletiu no objeto que solicitamos que fosse exibido.

O Javascript nos permite alterar, adicionar e remover campos, para manipularmos esses campos.

Se você estiver atento(a), talvez já tenha suspeitado de algo neste código que escrevemos juntos.

alterar.js:

const pessoa = {
  nome: "Luma",
  profissao: "Engenheira",
};

console.log(pessoa.nome);

console.log(pessoa.telefone);

pessoa.telefone = "11 2223333444";

console.log(pessoa.telefone);

pessoa.nome = "Luma Silva";

console.log(pessoa);COPIAR CÓDIGO
Na primeira linha, usamos a palavra reservada const para declararmos a variável pessoa que guarda o objeto. Mas se é uma constante, como alteramos essa variável?

O que acontece é que a palavra reservada 'const' não nos permite reatribuir um objeto inteiro. Por exemplo, no final do arquivo vamos incluir uma const novaPessoa = {}.

Nele, incluiremos um nome "Pedro" e depois tentaremos fazer com que pessoa receba uma nova pessoa: pessoa = novaPessoa. Isto é, reatribuir o valor que está sendo armazenado, pegar um novo objeto e reatribuir na variável anterior.

// código omitido

const novaPessoa = {
  nome: "Pedro",
};

pessoa = novaPessoa;COPIAR CÓDIGO
Após essa alteração, o arquivo alterar.js deve ficar da seguinte forma:

const pessoa = {
  nome: "Luma",
  profissao: "Engenheira",
};

console.log(pessoa.nome);

console.log(pessoa.telefone);

pessoa.telefone = "11 2223333444";

console.log(pessoa.telefone);

pessoa.nome = "Luma Silva";

console.log(pessoa);

const novaPessoa = {
  nome: "Pedro",
};

pessoa = novaPessoa;COPIAR CÓDIGO
Agora, voltaremos ao terminal para executarmos novamente o comando node aula1/alterar.js.

Parte do erro selecionada pelo instrutor:

TypeError: Assignment to constant variable.

Em português, atribuição à variável constante. Logo, isso é o que não podemos fazer, mas se tivermos um objeto armazenado em uma variável constante, podemos manipulá-lo, porém, não podemos reatribuir algum valor naquela variável.

Por enquanto, esse conhecimento é satisfatório para seguirmos com o curso. Nesta aula estudamos um pouco sobre objetos, sua estrutura, formas de acessar e manipular. Aprendemos também como alterar e criar as propriedades, mesmo após o objeto já ter sido criado.

Te espero na próxima aula! */


const cliente= {
  nome: "andre",
  idade: 32,
  cpf:"12312331233",
  email: "andre@email.com"
};
console.log(cliente);
  
cliente.fone = "9897979686";

console.log(cliente);

cliente.fone = "987987989987";

console.log(cliente);



/* Transcrição
[00:00] Juliana: Continuando com o nosso curso de JavaScript com objetos, estamos vendo qual que é a estrutura do objeto, e como que manipulamos as informações que estão dentro dele, vamos ver qual que é o desafio para este vídeo, então temos que adicionar campos, adicionar informações importantes que ainda estão faltando, por exemplo no nosso objeto cliente, nos nossos clientes do banco, então como telefone e também os valores desses campos.

[00:31] Então trabalhamos com o nosso objeto cliente, eu vou inclusive copiar ele dos arquivos que usamos nos vídeos passados.

[00:41] Vou criar um novo arquivo, que vou chamar de “adicionar-campos.js”, copiar, colar o nosso objeto cliente, então o que que está acontecendo aqui, nosso cliente tem nome, idade, cpf e e-mail, mas ainda tem por exemplo, o que chamamos de campos faltando, então por exemplo, telefone, ou nosso cliente pode no futuro ter outras informações, como que fazemos então André para adicionarmos conjuntos de chave valor em um objeto?

[01:14] André: Então o que que podemos fazer Ju é o seguinte, pegar o objeto, e adicionar esse campo que precisamos, usando a notação de ponto, vou fazer aqui, definimos então o cliente, queremos adicionar o que nele agora? Um telefone para o cliente, então cliente.fone = e vai receber um telefone, também estou digitando a esmo aqui ”9242525252”, então cliente.fone.

[01:44] Então se você ficar um console aqui e passar o cliente, console.log(cliente), nesse primeiro log aqui não tem que aparecer para você o fone, depois eu adiciono o campo fone ao objeto, e vou dar um console aqui e vou copiar, e vou dar um console.log() no cliente de novo, vamos rodar para ver o que que acontece Ju?

[02:15] André: Vamos, então rodar aqui, chamar o node adicionar – campos.js e o nome do arquivo agora é “adicionar-campos.js”, então recebemos dois objetos, no primeiro console, vem o objeto que estávamos trabalhando com nome, idade, cpf e e-mail.

[02:35] Porém no segundo console depois que o André acrescentou uma chave fone e um valor aqui de string, o JavaScript já acessou o objeto, adicionou a chave fone com o valor que passamos, e foi só isso, é só isso André? Criamos aqui com a notação de ponto um campo novo, adiciono um valor nele e ele já funciona?

[03:01] André: É isso aí.

[03:02] Juliana: É muito mais fácil, muito mais descomplicado do que adicionar coisas em arrays. Mas André, o que acontece então se já existir o campo fone, cliente.fone e passarmos uma outra informação?

[03:19] André: Vamos testar, então aqui exibimos o cliente sem o campo fone, depois adicionamos o campo fone ao cliente e exibiu de novo, isso aí que Ju nos mostrou no terminal, então agora Ju, então temos que alterar o valor do fone, é isso?

[03:39] Juliana: É vamos supor que o telefone está errado ou que precisa de um nove a mais, não sei.

[03:44] André: Então vamos lá, vou colocar aqui console.log().

[04:03] Juliana: Na verdade estava certo, podemos primeiro alterar o fone e depois pedir o console.log de cliente de novo para ver se alterou.

[04:11] André: Vamos fazer isso aí, se não estou com os carros na frente dos bois aqui, então cliente.fone = 875254554, então o telefone alterou. Agora vai começar com 8, o número é o mesmo aqui. E vou dar um console.log, para exibir aqui o meu valor cliente.fone vamos exibir o cliente todo , não é? Só para vermos a alteração, vamos rodar Ju?

[04:47] Juliana: Vamos, deixa eu só salvar aqui, limpar o terminal e rodar de novo, então o primeiro console.log da linha 8, exibiu o nosso objeto cliente como ele veio e em seguida na linha 12, adicionamos com uma chave telefone, um valor que começa com 9924 etc., mas decidimos trocar o valor de fone e foi o que fizemos na linha 14, chamamos cliente.fone novamente e passamos um outro valor de string para ela, começando agora com 875.

[05:23] Então o que que acontece? Se determinada chave não existe no objeto e passamos aqui, objeto ponto chave no caso cliente.fone = já passamos o valor, o JavaScript cria essa chave, e atribui o valor que passamos, caso essa chave já exista no objeto e utilizemos a mesma sintaxe, objeto ponto chave e passe um valor diferente, atribui, o JavaScript vai substituir o atual, então foi exatamente o que fizemos nos 3 consoles que criamos.

[06:01] Primeiro na linha 10 criamos a chave fone, e em seguida simplesmente chamamos essa chave novamente e pedimos para trocar o valor dela e o JavaScript trocou e é assim que fazemos para criar novos campos no objeto literal, ou atualizar, modificar o valor desses campos, por enquanto é isso André?

[06:21] André: Ju acho que por enquanto é isso.

[06:23] Juliana: Vamos ver mais então como manipulamos valores, acessamos valores, porque ainda tem bastante coisa para vermos sobre isso, então até o próximo vídeo.

[06:31] André: Até o próximo vídeo pessoal.

CONTINUAR LENDO */