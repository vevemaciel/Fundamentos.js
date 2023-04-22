const notas = [10, 6 , 8];
notas.push(7);
console.log(notas);
let media = (notas[0] + notas[1] + notas[2] + notas[3] )/notas.length;

console.log(media);

/* Transcrição
[00:00] Juliana: Neste segundo vídeo nós vamos continuar trabalhando com os desafios para atender o sistema da nossa escola de alunos, de notas, etc. O desafio deste vídeo é adicionar alguns elementos a uma lista. Ou seja, temos um professor que deveria ter lançado quatro notas, de quatro bimestres de um aluno, por engano lançou só três. Então como fazemos para lançar a quarta nota em uma lista de notas?

[00:28] Juliana: Por enquanto temos as notas 10, 6 e 8, temos que inserir a nota 7 nessa lista e, agora sim, fazer o cálculo da média correta deste aluno. No vídeo anterior eu criei um arquivo chamado index.js, vamos renomear esse arquivo antes de qualquer coisa para sabermos direito com o que trabalhamos em cada vídeo. Vou chamar este vídeo de média.

[01:05] Juliana: Para esta aula, para este vídeo vou criar outro arquivo que vou chamar de adicionando nota. Vamos lá, Leo, como resolvemos esse desafio?

[01:20] Leonardo: Para resolver esse desafio vamos começar a mexer com alguns novos métodos das listas. Então vamos começar criando uma lista com as três notas que nós temos. Vou colocar o const notas = [10, 6, 8]. E agora vamos usar um novo método, que chamamos de push, ou seja, ele vai colocar no último local, no último elemento do nosso array uma nova nota. Ele vai criar esse elemento e colocar nota.

[02:12] Leonardo: Vamos colocar notas.push(7), vou dar um console.log para podermos ver como ficou nossa lista de notas. O que você acha, Ju?

[02:33] Juliana: Beleza.

[02:33] Leonardo: Pode ser? Você roda para nós?

[02:35] Juliana: Rodo sim. Já estou dentro da pasta, vou chamar o comando node com nosso arquivo adicionando nota e não aconteceu nada. Nós não salvamos o arquivo, normal, vamos lá, agora sim.

[03:00] Leonardo: Podemos ver que ele colocou a nota 7, ele criou um novo elemento para nós, que é o elemento de índice 3 e colocou nossa nota 7. Agora só precisamos fazer a conta para ver a média. Então vamos criar let media = (notas[0] + notas[1] + notas[2] + notas[3])/notas.length.

[03:54] Leonardo: Agora console.log(media).

[04:05] Juliana: Agora sim, não vou esquecer de salvar. Como não sou eu que estou digitando fiquei um pouco perdida, e vou rodar novamente com o node. Node trouxe para nós, primeiro o console.log da linha 3, que é nossa array de notas, e em seguida o resultado da nossa média, que é 7.75, sem nenhum arredondamento. É o que estávamos esperando, Leo?

[04:30] Leonardo: É o que estávamos esperando, Ju.

[04:34] Juliana: Beleza. Então resumindo novamente o que fizemos, usamos o que chamamos de método de array do Java script. O que é um método? Por enquanto podemos tratar como se fosse uma função que recebe um parâmetro, então o nome da função é push porque ela é uma função de array que já vem do Java script, já está na linguagem de programação, e nós passamos como parâmetro dessa função o que queremos que seja inserido na array.

[05:10] Juliana: Um detalhe que essa informação que passamos aqui, o dado que passamos, sempre vai ser inserido no final, como a última posição da array. Então quando passamos para o Java script o nome da variável onde temos essa array, no caso a variável notas, e dá para ela .push, passando como parâmetro um dado qualquer, o Java script vai pegar esta array e inserir como último elemento na última posição o que estamos passando dentro dos parênteses, que chamamos de parâmetro. Certo, Leo?

[05:44] Leonardo: Certo, Ju.

[05:48] Juliana: Mais alguma coisa para esse exercício ou podemos considerar esse desafio cumprido?

[05:52] Leonardo: Podemos considerar esse desafio cumprido. Só uma coisa antes de terminarmos que eu gostaria de fazer. Vamos ver o que acontece se não passarmos parâmetro nenhum para o push. Está vazio, só salvar e executar.

[06:06] Juliana: Salvando e executando, agora ele deu um resultado interessante para nós. Ele exibiu, continua exibindo o console.log anterior, mas agora no lugar da média o tipo de dado, teoricamente, ele deu not a number, ele não deu um número.

[06:25] Leonardo: Exatamente, porque como não temos nada no índice 3 da nossa lista, então ele está como undefined, e conta com undefined dá not a number. Precisamos tomar um pouco de cuidado quando estamos usando esses métodos e especificamos o que estamos fazendo.

[06:44] Juliana: Certo, Leo, bem lembrado. Agora sim, você pode praticar um pouco mais aí e nos vemos no próximo vídeo.

 */