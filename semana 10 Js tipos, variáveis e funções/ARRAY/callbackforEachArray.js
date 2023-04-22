const nomes =['ana', 'ju','leo', 'paula'];


nomes.forEach(ImprimeNomes)

function ImprimeNomes(nome){
    console.log(nome)
}



//callback //Certo! Essa função tem o nome de callback e vai ser executada para cada elemento do array, sendo que pode receber de 1 a 3 argumentos; o elemento, o índice e o array atual, respectivamente.
//notas.forEach(nota =>  {
//somaDasNotas += nota;
//})

//notas.forEach(function(nota)  {
                //nota [1]
    somaDasNotas += nota
       
//})


/* Transcrição
[00:00] Juliana: Anteriormente nós conversamos um pouco, demos uma primeira apresentação nos métodos que chamamos de funções call-back do Java script. Vamos pausar um pouco nossos exercícios e desafios para conversar um pouco com um pouco mais de calma sobre o que são essas tais funções call-back e como elas funcionam.

[00:25] Juliana: Vou abrir um novo arquivo, salvar o que estávamos trabalhando anteriormente, e vou chamar o novo arquivo de callbacks.js, o Léo vai explicar um pouco, dar mais alguns exemplos sobre como escrevemos e utilizamos essas funções.

[00:47] Leonardo: Vamos continuar trabalhando com call-back e foreach por enquanto que é um método que já vimos e que vamos conseguir trabalhar talvez um pouco melhor em cima dele. Então, vou criar uma const, mas, dessa vez, de nomes. E vamos colocar alguns nomes aqui dentro. Vou criar Ana, Ju, vamos me colocar e vamos colocar a Paula também.

[01:20] Leonardo: Temos esses nomes aqui. E agora quero mostrar esses nomes no console, só mostrar no console, sem fazer muita coisa com ele. Como podemos fazer isso? Podemos usar o for, que já vimos como funciona, mas como vamos trabalhar com call-back vamos usar o foreach. Vou inclusive trocar de nome para nomes para não confundirmos com alguma coisa.

[01:44] Leonardo: Vou chamar o foreach e vou executar para ele mostrar no console, mas não vou escrever minha função aqui dentro, vamos falar que é uma função mais geral que tenho no meu programa, vamos criar essa função function ImprimeNomes, ela vai receber como parâmetro um nome. O que ela vai fazer? Tudo que quero é imprimir no console, então console.log do nome que vamos passar para essa função.

[02:35] Leonardo: Como posso agora trazer essa função para o foreach? Sabemos que ele tem que receber como argumento uma função, e nós sempre escrevemos essa função aqui dentro, mas não precisa ser assim. Nós podemos usar essa função como usaríamos em qualquer outra parte do programa. Então, ele vai chamar o imprimeNomes e vai executar para nós.

[03:00] Leonardo: Vamos tentar rodar, Ju?

[03:03] Juliana: Vamos sim, estou salvando já aqui, e vamos chamar com node callbacks.js, Ana, Ju, Léo e Paula apareceram no meu terminal, então está tudo certo. Uma coisa muito importante é que, por exemplo, funções como foreach, que recebem outras funções dentro dela, tanto podem ser escritas como fizemos anteriormente como a função que é chamada dentro dela pode estar fora do parâmetro, como o Léo fez.

[03:36] Juliana: Uma coisa importante, funções como foreach não vão funcionar, por exemplo, se nós simplesmente escrevermos algum código que não seja uma função, nós não conseguimos, por exemplo, passar para dentro dessa função um nome, ou passar simplesmente a array, porque às vezes você pode pensar que se o foreach é um método para, por exemplo, iterar um array, percorrer um array, não posso simplesmente passar o nome dela aqui, não vai funcionar?

[04:11] Juliana: Nesse caso não vai funcionar, lembrando que funções call-back, como o foreach é uma delas, vamos deixar o material para vocês com uma lista de mais alguns que nós usamos bastante para programar com Java script, só vai funcionar se o que passarmos entre parênteses, como parâmetro for uma function, uma função. Tanto pode ser escrito do lado de fora ou como pode ser feita como fizemos anteriormente, quando escrevemos a função diretamente dentro do parâmetro. Ambas as formas funcionam e você pode ver o que fica mais tranquilo para você ir se acostumando com essa nova ferramenta.

[04:54] Leonardo: Exatamente, Ju. E também às vezes você tem mais de um array e você quer usar a mesma função em vários arrays, nesse caso é interessante você colocar a função fora e chamar o foreach para os arrays passando essa função, você escreveu ela uma vez só ao invés de escrever uma vez para cada array que você vai chamar.

[05:15] Juliana: Sim, certo. Essas funções como foreach, por exemplo, podem aceitar um segundo parâmetro que é o índice. Caso você precise normalmente utilizamos o índice das arrays para fazer o loop no for, mas se for o caso e você precisar realmente pegar o índice de cada um dos elementos que ela vai fazer o loop você também pode fazer isso, é o segundo parâmetro, esse segundo parâmetro do foreach é opcional, você usa se precisar, mas o primeiro parâmetro, que é função, é obrigatório estar nesse formato. Como sempre, pratique bastante, nos vemos no próximo vídeo. */