const numeros =[100,200,300,400,500,600]
                     //6
for (let i= 0; i< numeros.length; i++){

                // numeros [0]  
    console.log(i, numeros [i])

}

/* Transcrição
[00:00] Juliana: Continuando com os nossos estudos sobre estruturas de dados com arrays, vamos ver qual o desafio deste vídeo. Vamos então imprimir um índice e uma lista com os seguintes números. Agora vamos trabalhar com uma estrutura chamada for.

[00:22] Juliana: Vou criar um novo arquivo para começarmos a trabalhar, vou chamar somente de for.js. O desafio aqui, Léo, basicamente é apenas imprimir uma lista de alguns números, né? Só que vamos usar uma estrutura específica para isso, né?

[00:40] Leonardo: Exatamente, Ju. Vou começar então de novo criando nossa lista. Essa lista tem que guardar de 100 até 600. Então 100, 200, 300, 400, 500 e 600.

[01:00] Juliana: Isso, só faltou dar um nome para sua lista.

[01:02] Leonardo: Exatamente. Vou dar o nome de números, vamos guardar os números de 100 até os números de 600. E agora temos que imprimir o índice e os valores dessa lista, né? E vamos usar o for para isso. Então, vamos começar a usar o for. Vão algumas coisas dentro dele.

[01:28] Leonardo: A primeira coisa que vai é uma variável que vamos ter que criar, vou chamar de “i”, que geralmente o pessoal usa esse i para usar essa variável, que é um valor de controle, você pode dar o nome que você quiser aqui, só cuidado para não ficar reutilizando, dependendo de onde você declarar para você não reutilizar ele em outro lugar e substituir o valor dele, porque isso pode causar problemas.

[01:50] Leonardo: O que vamos verificar nesse i? Vamos ver se ele é menor que o tamanho da nossa lista, então numeros.length. Eu nunca sei falar essa palavra.

[02:08] Juliana: Essa palavra é triste para nós que falamos português, não tem problema.

[02:11] Leonardo: Sim, é um pouco complicada. Mas é o tamanho da nossa lista. Por último, o que vamos fazer cada vez que nós passarmos? Nesse caso é i++, vamos somar 1 toda vez que nós passarmos por ele. E vamos agora executar o que está aqui dentro.

[02:30] Leonardo: O que vamos fazer? Quero só mostrar, então posso usar um console.log e vou mostrar o valor de i, que vai ser o valor que vamos passar, que vai começar em 0, depois vai para 1, depois para 2, e também quero mostrar qual o valor da lista que está nesse índice.

[02:52] Leonardo: Então lista[i], e vamos conseguir mostrar o índice e depois o valor.

[03:02] Juliana: Certo. Então podemos salvar e executar e ver o que acontece? Vamos lá. Vamos ao terminal, node, for.js, lista is not defined, é porque o nome da sua variável é números, e não lista.

[03:20] Leonardo: Verdade, olha aqui, já estou errando, e os erros já mostraram para mim onde estava, que a lista não estava definida, é números o nome da minha lista. Podemos tentar agora, Ju.

[03:33] Juliana: Agora sim. O terminal exibiu para nós seis sequências. 0 e 100, 1 e 200, 2 e 300, por aí. O que então estamos fazendo com essa estrutura? O for é uma estrutura de loop, é um laço de repetição. Toda vez que o Java script e que nosso programa cai numa linha que tenha esse for ele vai entrar e vai ficar lá, repetindo e executando o que está sendo pedido dentro do bloco, lembrando que um bloco de código no Java script é o que especificamos entre as chaves.

[04:22] Juliana: Este for da forma como escrevemos aqui existe de forma parecida em várias outras linguagens de programação. Vamos ver passo a passo o que ele está fazendo, porque os parâmetros dele são um pouco diferentes dos normais. Ele tem ponto e vírgula no meio, um pouco diferente, então vamos dar uma olhada.

[04:41] Juliana: A primeira coisa que o Léo fez foi criar uma variável, uma let, e ele chamou de i, como costumamos chamar i de índice, mas esse é só um nome padrão que costumamos usar, pode ser qualquer nome como o Léo disse, mas vamos usar o padrão.

[04:58] Juliana: Ele deu para essa variável i o valor de 0. A segunda coisa que o Léo fez foi dizer que ele está fazendo uma comparação de i menor do que numeros.length. É o tamanho da array que estamos trabalhando. Por enquanto, nesse momento, qual o tamanho de números? Números tem seis elementos. Então o valor referente a numeros.length é seis.

[05:40] Juliana: E i por enquanto tem valor 0, que foi o que acabamos de falar aqui. Neste momento, essa condição é verdadeira, porque o valor de i é menor do que seis. E a terceira coisa que o Léo colocou foi i++. É um operador que aumenta em um o valor da variável i, que é a mesma coisa que escrever i = i + 1, é só uma forma mais curta de escrever. Certo, Léo, por enquanto?

[06:20] Juliana: Esse for vai fazer o que estamos pedindo dentro do bloco a quantidade de vezes que passarmos para ele fazer, e como o Java script sabe a quantidade de vezes que ele tem que executar uma coisa? É baseado nessa comparação. Vamos executar esse for, ou seja, esse loop, esse laço de repetição vai acontecer enquanto o valor de i for menor do que seis. O valor de i começa com 0, então vamos lá.

[06:56] Juliana: Começou com 0, fez a comparação, 0 é menor do que 6, entrou no bloco, executou. O que está sendo executado aqui no console.log? Estamos pedindo para passar duas coisas. A primeira é o valor da variável i, que é a let que foi criada no for, e o segundo valor que estamos passando dentro do console é o valor dentro da array números no índice.

[07:28] Juliana: Lembrando que o que guardamos dentro das variáveis o Java script vai pegar o valor daquilo. Então a variável i por enquanto é 0, é a mesma coisa neste momento que escrevermos números no índice 0. Neste momento, passou dentro do for, o Java script imprimiu no terminal para nós, o valor de i que é 0 e o valor do array número no índice 0 que é 100.

[08:02] Juliana: A última coisa que o programa vai fazer, isso é super importante nesse for, antes de fazer qualquer outra coisa, é checar essa última condição que no caso é i++, ele vai executar isso, ele executou tudo que está dentro do bloco, que no caso é só um console.log, aí antes de fazer de novo o loop ele executa essa terceira condição.

[08:36] Ou seja, e agora não tem mais valor de 0 e vai ter o valor de 1. Aí o Java script vai voltar para a condição do meio, checar novamente se i é menor que o tamanho do array, e agora não tem mais valor de 0, tem o valor de 1. Porém 1 ainda é menor que 6, vamos executar novamente o que tem dentro do bloco, porém agora imprimindo o valor atual de i, que é um 1, e o valor da array números no índice 1, que é 200.

[09:25] Juliana: Imprimiu 200, a mesma coisa, não tem mais nada a ser feito dentro do bloco, porém antes do programa seguir em frente ele executa a terceira condição e agora passa a ter o valor de 2 e por aí vai. Isso é executado enquanto essa condição do meio é verdadeira, então após executar até cinco, e quando o i passa a ter valor de seis a condição do meio passa a ser falsa, porque seis não é menor que seis, e o programa sai do loop e continua a fazer o que ele tem que fazer nas próximas linhas.

[10:11] Juliana: Uma coisa importante quando trabalhamos com o for, com laços de repetição no geral, é que o programa fica meio que preso fazendo o loop enquanto o loop não é resolvido. Temos que tomar cuidado quando passamos essa condição de parada para o loop para não gerar o loop infinito que pode travar seu computador. Vamos dar umas informações no material extra para vocês no para saber mais sobre o tal do loop infinito.

[10:44] Juliana: Mas acho que, por enquanto, já dá para ter uma ideia do que está acontecendo. Léo, e tem mais alguma coisa sobre o nosso querido e amado for?

[10:52] Leonardo: Acho que não, Ju, só tomar cuidado com o loop infinito, que vamos deixar um pouco mais de informação no para saber mais, e acho que é isso, Ju.

[11:00] Juliana: Certo, então façam seus testes, pratiquem bastante, porque essa estrutura usamos bastante, de laço de repetição, em programação, e é isso, nos vemos no próximo vídeo. */

/* Para saber mais: O loop infinito
PRÓXIMA ATIVIDADE

Os laços de repetição, como o for, são ferramentas essenciais na programação. São utilizados para, entre outras coisas, percorrer arrays e executar blocos de código para cada elemento.

Porém, quando usamos for para executar códigos em loop, temos que deixar claro qual é a condição de parada do loop. Caso contrário, o programa não sabe em que momento deve parar de executar o loop, acaba ficando “preso” e entrando em loop infinito.

O loop infinito pode travar seu navegador, o terminal em que o código estiver sendo executado, ou até mesmo o computador, então é importante saber como evitá-lo.

Abaixo temos um exemplo de for que imprime no terminal números de 0 a 10:

for (let i = 0; i <= 10; i++){
 console.log(i)
}COPIAR CÓDIGO
O código executa corretamente e o programa é capaz de encerrar o loop, pois a condição de parada i <= 10 está correta, a variável i que faz o controle do loop começa em 0 e ao fim de cada ciclo do loop, é aumentada em 1 (i++). Quando o valor da variável de controle i chega a 11, depois de imprimir o número 10 no terminal, a comparação i <= 10 retorna false e isso encerra o loop.

O loop infinito pode acontecer caso algum dos parâmetros seja passado de forma incorreta ou esteja faltando. Por exemplo o terceiro, responsável por alterar a variável de controle após o bloco de código dentro do for ter sido executado:

for (let i = 0; i < 10; ){
 console.log(i)
}COPIAR CÓDIGO
A mesma coisa acontecerá se o for for executado sem o segundo parâmetro, que é a condição de parada.

for (let i = 0; ; i++){
 console.log(i)
}COPIAR CÓDIGO
Outro caso que pode gerar loop infinito é o de alterações feitas na variável de controle dentro do bloco do for, o que não é uma boa prática:

for (let i = 0; i < 10; i++){
 i--
 console.log(i)
}COPIAR CÓDIGO
IMPORTANTE: Como mencionamos acima, o loop infinito pode travar o terminal ou computador. Se durante seus estudos você perceber que executou um código com loop infinito, finalize a execução do programa o mais rápido possível no terminal pressionando “Ctrl + C”. */