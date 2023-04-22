


/* Transcrição
[00:00] André: Começamos hoje na aula 4 falando sobre Prototype, e o que é o prototype. Muitas vezes quando começamos a estudar o JavaScript, ou ouve falar, é muito comum escutar que o JavaScript é uma linguagem baseada em protótipos, e que tudo em JavaScript é um objeto, e nessa aula vamos estudar um pouco sobre o prototype, certo Ju?

[00:27] Juliana: Certo, então o que é esse tal de prototype, nesse vídeo ao invés do Visual Studio Code, vamos fazer um pouco diferente, vamos utilizar o console do navegador, tanto o Chrome, quanto o Firefox eles tem uma área, uma área que chamamos developer tools, ou seja, área de ferramentas de desenvolvimento, que você consegue acessar em qualquer página, eu estou aqui na página inicial do Firefox, mas qualquer página que você entrar você pode clicar com o botão direito e ir no menu inspecionar, vai estar como inspect, ou inspecionar, ou inspect element aqui no caso do Firefox e você consegue inspecionar os conteúdos de qualquer página que você esteja acessando.

[01:12] Ao lado do inspetor, a segunda aba é uma aba que chama Console e através desse console conseguimos dar comandos JavaScript, por exemplo, criar uma const numero = 1 e chamar, e fazer operações com o código JavaScript que geramos aqui e também conseguimos acessar JavaScript que está rodando na página aqui que você está acessando no navegador.

[01:39] Por que que vamos utilizar esse console dessa vez? Porque ele funciona de uma forma um pouco diferente do que o terminal do VSC, ou terminal fora do VSC que você pode estar utilizando, e vamos precisar acessar algumas propriedades de objetos do JavaScript.

[01:59] Quando começamos a trabalhar com JavaScript acabamos tropeçando nesse termo que chama protótipo, ou prototype, quase tudo, e ouvimos também falar que tudo, ou quase tudo no JavaScript é um objeto, mas um objeto aqui até onde estudamos é essa estrutura de dados aqui, não é André?

[02:20] André: É isso aí, estamos trabalhando com objetos literais, então é o formato chave valor, esse par chave valor, não é Ju?

[02:31] Juliana: Certo, esse aqui como o André falou, é um objeto literal, criamos uma variável e guardamos dentro dessa variável uma estrutura, um par de chaves e valores, mas além disso existe um outro tipo de objeto, que é o objeto que o JavaScript utiliza para consigamos criar uma base para tudo que trabalhamos dentro da linguagem, sejam objetos, sejam arrays, sejam números, vamos dar uma olhada então em como isso funciona.

[03:08] Então se eu criar aqui no console do navegador um const arr = arr que é um nome padrão vou abrir aqui um array e passar aqui 3 itens [1, 2, 3], criei esse array e podemos fazer operações com ela, por exemplo, arr.length e ele nos passa o tamanho desse array, tem 3 elementos, etc.

[03:30] Mas eu vou fazer uma coisa um pouco diferente, eu vou acessar arr que é o nome do nosso array ponto, underline underline proto underline underline arr.__proto__, o que é essa propriedade proto? A propriedade proto ela guarda as definições de todo array que criamos no JavaScript, então o que é esse tal de proto, do prototype, do protótipo, é como se fosse uma base, um modelo, que o JavaScript traz para dentro de tudo que criamos, de todos os dados que criamos, sejam arrays, números, objetos, strings e graças a essa base que ele traz junto, que ele cria junto com as nossas propriedades ou com os nossos arrays, conseguimos ter métodos associados a ele.

[04:22] Então lembra que vimos nos vídeos anteriores quando trabalhamos com array conseguimos acessar por exemplo, fazer um map(), ou fazer um forEach(), ou até mesmo acessar length, o tamanho do array, conseguimos utilizar esse métodos graças a esse objeto oculto, que o JavaScript criar e associa, tudo por baixo dos panos, sem termos que fazer nada.

[04:51] E esse objeto oculto ele já traz com eles as próprias funções, ou seja, os próprios métodos, então todos os métodos de array que utilizamos em JavaScript forEach() ,map(), push() para adicionar alguma coisa dentro do array, eles estão aqui dentro dessa propriedade que é o proto que é o protótipo do objeto array.

[05:15] E conseguimos também ver aqui uma propriedade chamada constructor(), o construtor desse objeto, e o construtor desse objeto ele chama Array com A maiúsculo, então se quisermos fazer de outra forma essa criação de array podemos simplesmente criar uma const outroArray = new Array() com A maiúsculo, que foi justamente a propriedade que acabamos de ver, passando dentro dele, abre colchetes, [1, 2, 3], e se acessarmos outroArray, está aqui o nosso array criado, nosso construtor de array e dentro dele os nossos dados.

[06:02] Podemos fazer isso com outros tipos de dados também, eu vou limpar aqui o console, fazer por exemplo aqui o objeto, então uma const obj = obj de objeto, vou criar aqui um objeto somente de duas propriedades, {a:1, b:2}, propriedade a com valor de 1 e propriedade b com valor de 2, eu também consigo acessar obj.__proto__.

[06:26] E aqui dentro vemos as propriedades desse objeto que ele já nos traz automaticamente, então por exemplo, já temos o construtor, ou seja, construímos o nosso objeto que eu chamei aqui de obj a partir de uma base, que é uma base de objeto JavaScript e dentro desse objeto JavaScript, conseguimos ver aqui por exemplo, Object.keys que foi um método que utilizamos um pouco antes nos vídeos anteriores para extrair um array de keys.

[07:03] Então como sempre costumamos falar todo código executado no computador, executado na internet, ele mora em algum lugar, e conseguimos utilizar os métodos de objetos, métodos de arrays ou por exemplo, os métodos de string ou de número, graças a essas propriedades, esse objeto que traz propriedades com ele e que o JavaScript esconde de nós e nos traz toda vez que criamos um novo objeto, um novo array, ou até mesmo uma nova função.

[07:34] Se eu criar uma function aqui, function funcao(){} não vou passar valor nenhum, só vou pedir para ela, colocando código dentro dela return 1, também a minha function função vai também ter suas propriedades de protótipo, podemos acessar e ver que ela foi criada a partir de um construtor genérico de função que traz com ele algumas outras propriedades que conseguimos usar para acessar.

[08:04] Os dados primitivos por exemplo, números e strings elas também tem objetos associados a ele, os valores primitivos, por exemplo, const numero = 1, eu tentei redeclarar, porque eu já tinha criado uma const numero anteriormente, então eu vou criar uma const texto = “Alura”.

[08:34] Os valores primitivos, string, booleano, número, eles não têm por si só propriedades, porque eles são blocos básicos de dado, mas o JavaScript fornece mesmo assim esse objeto que dizemos que ele envolve este dado, para também nós termos uma experiência mais consistente com a linguagem e também conseguir utilizar os métodos de string, por exemplo, para transformar, acessar substring, ou transformar tudo em caixa alta, toUpperCase() para conseguirmos também utilizar os métodos passando do protótipo para instância que criamos, chamamos de instância esse dado que criamos a partir de um protótipo.

[09:26] André: Interessante, isso é um conceito importante para podermos avançar também nos estudos do JavaScript, e esse protótipo pelo que eu estou vendo aqui, permite você trabalhar com herança, com o conceito de herança, você herdar atributos, propriedades, funções a partir do protótipo, correto?

[09:44] Juliana: Correto, então herdamos, que é termo que utilizamos, por exemplo, o nosso texto, ele herdou, o texto na verdade não porque ele é um dado primitivo, mas os nossos arrays, vou chamar aqui o nosso array que criamos o outroArray, ele herda as propriedade dele através de um construtor de array, você tem que vir aqui em outroArray.__proto__ aqui e conseguimos acessar, e isso vamos ver um pouco mais na frente durante o curso, sobre o que são essas tais de heranças que faz com que consigamos puxar propriedades de um objeto e utilizar em outro, utilizar em outro.

[10:31] Então acho que já temos uma primeira introdução sobre o que é esse tal de protótipo, o JavaScript ele é uma linguagem baseada em protótipo e vamos fazer em seguida mais alguns exercícios para fixarmos bem esse conceito. Nos vemos no próximo vídeo.

[10:47] André: Até o próximo vídeo pessoal. */