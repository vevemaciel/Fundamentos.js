const listaDeChamada = ['joao','Ana','Caio','lara','Marjorie', 'Leo']


//listaDeChamada.splice(1,2, 'Rodrigo'); //remove ANA E CAIO  e ADICIONA RODRIGO
listaDeChamada.splice(2,0, 'Rodrigo') //NÃO EXCLUI NINGUEM, ADICIONA RODRIGO antes do caio


console.log(`Lista de chamada : ${listaDeChamada}`)


/* Transcrição
[00:00] Juliana: Neste vídeo vamos continuar a trabalhar com alterações de arrays. Vamos ver qual o desafio neste vídeo. Aqui temos uma lista de chamada com uma lista de alunos e o desafio é tirar alguns alunos que saíram dessa turma e colocar mais um aluno no lugar deles. O que vimos até agora? Conseguimos incluir itens em um array, porém sempre ou incluir no último índice, ou retirar o último, que é o push e o pop.

[00:33] Juliana: O que vamos fazer para resolver esse desafio? Vou criar mais um arquivo, vou chamar de atualizando lista. Léo, vamos ver como resolvemos esse desafio.

[00:58] Leonardo: Vamos lá, como estamos mexendo com lista, vou de novo criar uma const para podermos mexer. Só que dessa vez vai ser uma lista de chamadas. Vamos ter alguns nomes de alguns alunos, então vou criar a listaDeChamada, e vou colocar os alunos que já tínhamos no desafio, os nomes dos alunos, aqui dentro dessa lista. Então João, Ana, Caio, Lara, Marjorie e Léo.

[01:30] Leonardo: O que o nosso desafio pede? Ele fala que a Ana e o Caio mudaram de escola, e o Rodrigo entrou nessa sala, então temos que atualizar a lista de chamadas. Para fazer isso vamos usar um novo método, que é o splice dessa vez, cuidado para não confundir com o slice, ele tem um peso a mais e já vamos ver isso.

[01:58] Leonardo: Então listaDeChamda.splice, e o que esse splice vai fazer? Vai permitir que removamos alguns elementos de qualquer lugar dentro do array e coloque novos elementos em qualquer lugar dentro desse array também. Ele agora vai pedir três parâmetros. O primeiro parâmetro é em qual índice ele vai começar. No caso, a Ana e o Caio que temos que remover. A Ana é o índice número 1, lembrando que o array começa no 0.

[02:30] Leonardo: Então o índice 1, vamos remover a partir desse índice quantos elementos? A Ana e o Caio. E por fim vamos colocar algum elemento nesse lugar? Se quisermos colocar podemos falar agora. Vou querer, no meu caso vai ser o Rodrigo.

[02:52] Leonardo: Teoricamente está pronto. Isso já vai fazer com que nós consigamos atualizar nossa lista. Vamos só imprimir a lista para ver se ela foi realmente atualizada. Então console.log, e vou abrir de novo com template string, uma lista de chamada, e agora vou colocar dólar, os bigodes, e vamos chamar a lista aqui dentro.

[03:22] Leonardo: Pronto, Ju, teoricamente esse é o código que nós precisamos, para remover dois alunos e colocar no lugar. Vamos testar?

[03:30] Juliana: Beleza, vamos salvar, e aqui na mesma pasta rodar com node atualizando lista. Nossa lista de chamada agora tem João, Rodrigo, não tem nem a Ana, nem o Caio, Lara, Marjorie e Léo, está certo. Então o splice, lembrando a primeira coisa que o Léo falou, que ele diferente do slice tem um “p” a mais, mas não só isso, o splice está aceitando três parâmetros, primeiro parâmetro é o índice onde vamos começar a alterar incluindo.

[04:11] Juliana: O primeiro índice na nossa lista de chamada é o 0, então João está com índice 0. Vou puxar a lista para ficar um pouco mais por extenso. No índice 0 está João, no índice 1 está Ana. Ou seja, vamos começar a alterar a partir do índice 1 e incluindo índice 1.

[04:38] Juliana: Segundo parâmetro é o número de elementos que vamos remover, vamos remover dois elementos, ou seja, o elemento que está no índice 1 e o seguinte, vamos remover Ana e Caio, e o terceiro é o que vai ser colocado no lugar, então retira Ana e Caio e coloca Rodrigo no lugar dele.

[05:02] Juliana: Tem mais um detalhe aqui, o splice pode ser utilizado sem o terceiro parâmetro. Se você quiser somente retirar um pedaço da array, retirar Ana e Caio sem colocar o Rodrigo no lugar, você não precisa passar o terceiro parâmetro, mas nesse caso não é necessário porque o desafio pedia para colocarmos mais um aluno.

[05:25] Leonardo: O desafio é isso. Eu queria só tentar o seguinte. Nós podemos se colocarmos no segundo parâmetro valor 0, ele não vai apagar ninguém, mas podemos começar a colocar novos elementos dentro do nosso array em qualquer posição. Então, também tem essa função o splice.

[05:41] Leonardo: Vamos fazer um teste. Vamos só adicionar mais um elemento aqui. Vou chamar de novo a lista de chamada, vou colocar o splice e vamos comentar o primeiro para não nos confundirmos com a questão dos índices. Agora estamos trabalhando com a lista de chamada padrão. Então João, Ana, Caio, Lara, Marjorie e assim por diante.

[06:11] Leonardo: Vamos colocar a partir do entre a Ana e o Caio, não vamos apagar ninguém, e vamos só colocar o Rodrigo. Vamos ver se deu certo isso.

[06:28] Juliana: Vou salvar, rodar. O que esperamos que aconteça? Que não apague nem Ana, nem Caio, e depois do Ana, venha o Rodrigo. Vamos ver se deu certo. Lista de chamada João, Ana, Rodrigo, Caio, está certo. Perfeito. Então se você não quiser que seja retirado, removido, nenhum elemento do seu array você pode passar 0 como parâmetro.

[07:00] Juliana: Uma questão importante é essa questão de parâmetros, que as funções ou métodos aceitam e pode trabalhar. Dependendo do que estamos fazendo, por exemplo, estamos utilizando o método splice, isso pode mudar muito. Nós temos vários usos dos parâmetros. Posso passar três parâmetros, dois parâmetros, o que acontece em cada caso, vamos deixar para vocês no material adicional algumas documentações desses métodos e nas documentações tem mais opções, porque é muita coisa, e você pode fazer vários testes nos seus estudos para ver o que acontece em cada caso.

[07:36] Juliana: Outra coisa interessante que nós sempre temos que ter em mente quando trabalhamos com arrays é o que acontece com o array original quando utilizamos esses métodos. No caso, o método splice está alterando a array original, ou seja, começamos com a lista de chamada e ela está sendo alterada, ao contrário de outros casos, onde criamos variáveis para salvar os resultados das alterações das arrays que fazíamos.

CONTINUAR LENDO*/
