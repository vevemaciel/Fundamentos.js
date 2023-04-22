const notas =[10 , 6.5, 8 , 7.5];

let somaDasNotas = 0

//callback //Certo! Essa função tem o nome de callback e vai ser executada para cada elemento do array, sendo que pode receber de 1 a 3 argumentos; o elemento, o índice e o array atual, respectivamente.
//notas.forEach(nota =>  {
//somaDasNotas += nota;
//})

notas.forEach(function(nota)  {
                //nota [1]
    somaDasNotas += nota
       
})

let media = somaDasNotas/notas.length;
console.log(media)

/* Transcrição
[00:00] Juliana: Continuando então trabalhando com arrays, cada vez estamos incrementando mais nosso código, vamos ver qual o desafio deste vídeo. Estávamos trabalhando com médias de notas. Fizemos a média com for e agora temos que fazer uma tal de média com foreach, que é o nome do nosso desafio.

[00:20] Juliana: Vamos calcular a média entre as seguintes notas usando esse foreach que o Léo vai dizer para nós o que é, do que se trata, mas antes disso vou criar um novo arquivo, vou chamar de média foreach. E, Léo, o que é esse tal de foreach?

[00:44] Leonardo: Esse foreach é um jeito diferente que temos de passar por cada elemento do nosso array. Vamos escrever o código e depois vamos destrinchando ele para ver como ele trabalha, pode ser? Vou criar as notas de novo, a const notas que é igual a do último vídeo, que é 10, 6.5, 8 e 7.5. Vou criar também a soma das notas, igual fizemos no último vídeo. Também vou colocar valor de 0 para ela.

[01:24] Leonardo: Agora vamos entrar no foreach. O foreach é um método, temos que chamar ele no nosso array, então notas.forEach, e ele vai trabalhar com uma função aqui dentro. Essa função vamos escrever como se fosse arrow function. Então vamos passar uma variável que vamos usar, um parâmetro que vamos usar dentro da função, colocar a seta da arrow function, e vou abrir os bigodes para ficar mais fácil de entender e padronizar nosso código.

[02:16] Leonardo: O que vamos fazer aqui dentro? Vamos fazer a soma como fizemos no for, no último vídeo. Então, somaDasNotas += nota, que é nosso parâmetro. E aqui fizemos igual fizemos no último desafio, que tivemos que montar todo o for, fizemos um bloco menor de código. Vamos só terminar aqui, vou calcular a média e colocar no console, depois passamos certo e vamos explicando como funciona esse foreach, como trabalhamos com ele.

[02:56] Leonardo: Vou criar a média, que vai ser a soma das notas dividido por notas.length, e o console.log da nossa média para poder saber se fizemos tudo certo. Esse é o código, Ju. Vamos explicar como ele funciona?

[03:25] Juliana: Vamos. Antes disso só vou rodar esse código no terminal para conferirmos se está tudo certo. Então node média foreach, valor de 8, vamos voltar. Léo, primeira coisa que eu vi de diferente já na linha 6, soma das notas agora é só += a nota, não estamos mais usando aquela notação de colchete, né? Que seria nota e depois i entre colchetes.

[04:00] Leonardo: Exatamente, Ju.

[04:02] Juliana: Então, o que estamos fazendo aqui? Qual a diferença entre a estrutura que usamos anteriormente do for e essa do foreach? O Java script foi se modernizando, o for que usamos anteriormente é das versões bem anteriores do Java script, bem do começo dele, só que de uns tempos para cá foram criados outros métodos para fazer laços de repetição. Esse que usamos chama foreach. Significa para cada.

[04:35] Juliana: Se lermos o que está na linha 5, seria para cada nota de uma array de notas, estamos chamando esse método dentro da array de notas, então notas.foreach. Para cada nota, vamos executar alguma coisa. O que vamos executar? Da mesma forma do for anterior vamos executar algo que definimos dentro do bloco. Por isso abrimos os bigodes.

[05:04] Juliana: A única diferença aqui é que foreach é um tipo de método que nós chamamos de call-back. Por que tem esse nome estranho? Porque o parâmetro dessa função foreach não é um dado. Nós fizemos alguns exercícios anteriormente cujas funções levavam como parâmetros dados como string, como número, porém aqui numa função call-back o parâmetro que nós temos que passar para ela é outra função, por isso ela tem esse nome, é uma função que chama outra, ela chama de volta outra função.

[05:46] Juliana: Nós usamos aqui os arrow functions como função, porém ela também funcionaria como uma função normal. Vou comentar esse bloco de código e se escrevermos notas.forEach e passar aqui dentro aquela função normal que escrevemos com function e abre parênteses, ela funcionaria da mesma forma.

[06:20] Juliana: Como é foreach, para cada nota, nota é um parâmetro, para cada nota do meu array de notas estamos fazendo, executando alguma coisa no nosso código. Vou copiar do anterior, e soma das notas igual à nota. Utilizar o arrow function é mais comum, mais utilizado hoje em dia porque é um pouco mais curto, mas o que queremos passar aqui é que isso é basicamente um método que está levando como argumento dentro dele uma função ao invés de um número, uma string, como temos feito anteriormente. São as tais funções call-back.

[07:05] Juliana: Foreach faz o mesmo papel do for, tudo que colocamos dentro dos bigodes, do bloco de código, não é executado, e qual a diferença? A primeira coisa que notamos de diferente, por que não precisa dos tais colchetes, que no exercício anterior usamos nota no índice i?

[07:30] Juliana: É porque esse método foreach automaticamente faz já um loop na array que passamos, no caso, array notas, sem precisarmos passar essa notação de colchete dizendo o número do índice. Automaticamente passando como parâmetro nota ele interpreta que cada nota no parâmetro é um dos índices da array que estamos passando aqui.

[08:00] Juliana: Ele vai fazer automaticamente esse loop do índice 0, do 1, para o 2, para o 3, basta passarmos como parâmetro da função que está dentro dele, da função call-back, o parâmetro com o nome correto. Aqui nós damos nota porque é um array de notas. Se fosse um array de fruta aí seria cada fruta, um array de pessoas seria cada pessoa. E por aí vai.

[08:25] Juliana: Nós vamos trabalhar bastante com esse tipo de função, hoje em dia no Java script nós trabalhamos basicamente com laços de repetição utilizando funções call-back, então vamos estudar um pouco mais sobre os loops com funções call-back um pouco mais para frente e nos vemos no próximo vídeo. */