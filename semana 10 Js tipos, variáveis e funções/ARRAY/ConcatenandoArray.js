const salaPyton =['melissa', 'helena','rodrigo'  ]

const salaJavaScript=['ju', 'leo', 'Raquel' ]
const salasUnificadas= salaPyton.concat(salaJavaScript)

console.log(salasUnificadas)

/* Transcrição
[00:00] Juliana: Neste vídeo então vamos continuar a trabalhar com nossas listas de alunos e fazendo alterações, os alunos vão, os alunos vêm, vamos ver qual o desafio desta aula, que é juntar duas salas. Vai ter uma palestra sobre padrões de projeto para os alunos da sala de Java script e de Python. Vamos juntar ambas as salas em uma única lista para ir conferir a presença dessas duas turmas.

[00:25] Juliana: Voltando ao nosso editor de código vou criar um novo arquivo, vou chamar de juntando turmas, e Léo, agora é com você.

[00:42] Leonardo: No caso aqui vou começar de novo criando as duas salas, e vamos dar um pouco de contexto aqui, vamos colocar uma sala de Python, que é uma linguagem de programação, e vamos colocar alguns nomes aqui dentro. Então, vamos colocar Melissa, Helena e Rodrigo. Três pessoas na sala de Python.

[01:28] Leonardo: Vamos também criar uma sala de Java script, então const salaDeJavaScript = [‘Ju’,‘Léo’,‘Raquel’], pronto, temos as duas salas, uma de Python e uma de Java script, e agora vamos juntar essas duas salas. Para fazer isso vou criar mais uma const para poder armazenar nossa nova sala. E vamos chamar de salasUnificadas. Virou uma só, então estamos unificando tudo.

[02:25] Leonardo: Agora vamos passar aqui um dos nossos arrays que vou chamar, por exemplo, a sala de Python primeiro, e agora vem nosso método, que nesse caso vai ser um método chamado concat. Ele faz a concatenação entre os dois arrays. E como passamos o segundo array para ele concatenar? Como parâmetro.

[02:55] Leonardo: No lugar do parâmetro vou colocar que vamos passar a sala de Java script. E por fim vamos exibir no console para poder verificar se deu tudo certo. Então console.log(salasUnificadas), e é isso, Ju.

[03:20] Juliana: Já salvei para não esquecer. Vamos rodar com node, e agora nosso arquivo chama juntando turmas, e esperamos receber exatamente o que chegou, uma array somente com todos os nomes das duas salas. Então concat, de concatenação, o que fizemos foi pegar. Aqui no caso não faria muita diferença a array de onde partimos. Partimos da array sala de Python e estamos concatenando e passando como parâmetro de concat uma outra array, o Java script fez o resto, juntou tudo em uma array somente com todos os elementos dentro.

[04:06] Juliana: Eu acho que essa parte de concatenação já por enquanto está feita, né, Léo? O desafio está cumprido, temos uma única lista que exiba todo mundo.

[04:20] Leonardo: O desafio está cumprido, Ju. Só tem que tomar cuidado com uma coisa. O concat não mexe na nossa lista que chamamos ele, temos que salvar esse valor em algum outro local, por isso criei outra lista para nós.

[04:33] Juliana: Sim, bem lembrado, aquilo que nós inclusive comentamos anteriormente, sobre alguns métodos mexerem nas arrays originais e outros não, para alguns outros temos que salvar o resultado numa nova const para ter a array nova, modificada. Sempre temos que ter isso em mente, bem lembrado. Até o próximo vídeo.

CONTINUAR LENDO
 */