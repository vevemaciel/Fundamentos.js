const listaCPFs= ['4234345464774', '214141413413414','214141413413414']

//const cliente = ['nome','andre','idade',36]

const cliente= {
    nome: "andre",
    idade: 36,
    cpf:"12312331233",
    email: "andre@email.com",
   

}





/*Transcrição
[00:00] Juliana: Olá, começando então com o nosso curso de JavaScript focado em objetos nessa estrutura de dados super importante para trabalhar, não só com JavaScript mas com qualquer linguagem de programação.

[00:10] Vamos começar esse vídeo explicando um pouco sobre o que é objetos, a diferença entre objetos e arrays, e como que montamos, como que é a cara do objeto.

[00:19] Eu vou começar criando então um arquivo que eu vou chamar “objetos.js” e o André que está aqui comigo, vai falar um pouco sobre como funciona os objetos, como que montamos um objeto, e qual que é a diferença de um objeto para um array. Vamos lá André?

[00:38] André: Vamos lá Ju. Então pessoal, no JavaScript, para trabalhar com objetos, temos que ter a ideia, a noção, que ele é formado, todo objeto no JavaScript ele é formado com a chave valor, diferente de um array, que o array você tem lá os elementos do array e você consegue acessar pelo índice.

[00:59] Então só para exemplificar, vamos criar um array aqui, então const listaCPFs = [], então eu preciso armazenar aqui, alguns CPFs de usuários, clientes, enfim, estou digitando a esmo pessoal, const listaCPFs = [“12365242625”, “9242624265”].

[01:32] Juliana: Se for o seu CPF aparecendo na tela é mera coincidência.

[01:35] André: É exatamente, só está aqui no automático, então criei uma lista que tem strings, que representa o CPF de um cliente, só que determinadas situações precisamos armazenar mais de um tipo de informação de um objeto, de algo do mundo real, de um cliente, de uma pessoa.

[02:03] Então existe uma estrutura de dados, que conhecemos como objetos, que permitem trabalhar com essa lista de dados e informações, de maneira mais simplificada, então olha só pessoal.

[02:20] Se eu quiser armazenar por exemplo, eu tenho CPFs agora do cliente, se eu quiser armazenar um nome, ou a idade, eu poderia imaginar algo tipo assim, olha só, const cliente = e vou armazenar as informações do cliente aqui um nome, André, idade, e o valor da idade 36, const cliente = [“nome”, “André”, “idade”, 36].

[02:57] Então olha só, no primeiro eu só tenho informações mais simples, só CPF, só no segundo array que está armazenando mais de um tipo de informação, quero armazenar o nome, o valor do nome, idade, valor, se eu quiser armazenar o e-mail, também começa a ficar um pouco mais complexo para armazenar isso só em um array, correto Ju?

[03:18] Juliana: Correto, porque teríamos que dar um jeito de dizer que a informação nome, na string, nome, ela está relacionada a André, e a informação idade, a string idade está relacionada a 36, e array, ela não permite isso, ela é só uma informação por índice e não tem nada que diga que essas informações elas são pares ligados, nome a descrição do nome, a idade a descrição da idade, então por isso que array não funciona muito bem quando temos que passar esse tipo de informação.

[03:49] André: Isso ai Ju, então a ideia é que utilizemos alguma outra estrutura que tenhamos na linguagem que nos permita fazer de maneira mais simplificada, mais harmônica, mais facilitada, e um dos recursos que temos, não só em JavaScript mas em outras linguagens também, são os objetos, que são estruturas de dados que permitem você armazenar essas informações de maneira mais organizadas dentro de um único objeto.

[04:17] Então eu vou criar um objeto aqui agora, só para podermos fazer a comparação, então const cliente = {} vamos receber, vai ser composto, aqui é com chaves, nome, só quebrar a linha aqui para ficar mais organizado, vou colocar dentro das chaves nome: “André”, idade:36, cpf:”1254365226”, - o CPF do André que também estou digitando a esmo -, e o email:”andre@email.com”.

[05:25] Então pessoal, no JavaScript, um objeto, ele é formado por um par chave valor, então a chave aqui, eu tenho um objeto cliente, onde eu tenho a chave nome, com valor André, eu tenho a chave idade, com o valor 36, CPF com valor 123 e vai embora, a chave e-mail e o valor do e-mail.

[05:57] Então no JavaScript, ele permite você criar um objeto dessa forma aqui, existe outras formas que vamos ver no decorrer do curso, então é isso, um objeto em JavaScript é formado pela cadeia, chave, valor e fica muito mais organizado.

[06:10] Agora eu consigo do cliente ter as informações, saber que o nome é André, idade 36, porque da maneira que estava antes aqui, fica meio desorganizado que nem a Ju falou, então para podermos relacionar aquelas informações, o que é a chave, o que é o valor daquela chave, fica um pouco mais complexo de trabalharmos com isso ai.

[06:32] Juliana: Então ambos os tipos de dados são super importantes, vamos ver um pouco mais para frente como arrays e objetos trabalham juntos, eu vou apagar essa array, só vou comentar essa array cliente aqui porque ela tem o mesmo nome, mas vimos que arrays funcionam para quando temos que organizar por exemplo informações que são do mesmo tipo, então eu tenho uma lista de CPFs, eu tenho uma lista de nomes, eu tenho uma lista de valores, por exemplo.

[06:58] Agora o objeto, ele funciona quando precisamos fazer uma abstração de algo do mundo real por exemplo, então eu tenho o cliente, o cliente tem nome, o cliente tem idade, o cliente tem endereço, o cliente tem várias coisas, e precisamos organizar essa informação para que ela seja acessada de uma forma coesa, e também o cliente pode ser o André, o cliente pode ser a Juliana, o cliente pode ser você, então todos os clientes eles tem nome, eles tem idades, de acordo com o que o seu produto precisa, mas tudo pode ser representado por um único objeto cliente.

[07:32] O objeto ele é estrutura de dados mais importantes do JavaScript, também vamos ver mais sobre isso mais um pouco para frente do curso, e ele tem essa cara de uma estrutura de chaves e valores, os valores podem ser tanto primitivos, como strings, números, booleanos, ou podem ser alguns outros tipos de estrutura que também vamos ver ao longo do curso.

[07:58] Então André, acho que podemos fechar por aqui e passar para frente para começarmos a ver como que manipulamos esses objetos, então?

[08:05] André: Isso ai Ju, vamos continuar agora.

[08:09] Juliana: Então até o próximo vídeo.

[08:11] André: Até o próximo vídeo pessoal.

CONTINUAR LENDO
. */