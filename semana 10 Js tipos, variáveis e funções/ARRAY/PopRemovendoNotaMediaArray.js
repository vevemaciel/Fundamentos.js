const notas = [10, 7 , 8 ,5, 10];
notas.pop(); //não coloca valor, pois só remove a ultima nota
console.log(notas);
let media = (notas[0] + notas[1] + notas[2] + notas[3] )/notas.length;

console.log(media);

/* Transcrição
[00:00] Juliana: Neste vídeo nós vamos trabalhar com um desafio um pouco parecido com o vídeo anterior, mas o contrário. No vídeo anterior, nós adicionamos notas e nesse vamos ter que deletar uma nota. O professor acidentalmente lançou 5 notas de um aluno e nós temos que tirar a última nota que foi lançada no sistema, que foi uma nota lançada a mais.

[00:22] Juliana: Para corrigir temos que ter uma lista de notas e dar um jeito de remover o último elemento, e então, sim, fazer o cálculo da nota correta. Vou criar mais um arquivo que vou chamar de removendoNota.js . Leo, o que fazemos para resolver esse desafio?

[00:44] Leonardo: Vamos começar de novo criando uma lista com as notas, então const notas = [10, 7, 8, 5, 10]. Agora vamos usar de novo um método, só que vamos usar agora um método diferente, vamos usar o método .pop(), que vai tirar o último elemento da nossa lista com notas.pop() . Vamos dar um console também para ver como fica nossa lista. Então console.log(notas). Vamos já calcular a média também que já temos ideia que vai cair a última nota. Vamos fazer o cálculo da média, executa uma única vez.

[01:42] Leonardo: Então media = (notas[0] + notas[1] + notas[2] + notas[3]). Como vamos tirar o último índice, que seria o índice 4, só esperamos calcular até o 3, que é o cálculo correto, digamos assim, da média desse aluno. Dividido pelas notas.length, que é o tamanho, e de novo com console.log, no valor da média. Pronto, Ju, teoricamente esse é o desafio.

const notas = [10, 7, 8, 5, 10]
notas.pop()
console.log(notas)

let media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length
console.log(media)
COPIAR CÓDIGO
Vamos executar e ver como fica.

[02:41] Juliana: Vamos, vou salvar primeiro, para garantir que vai rodar, e lá no terminal chamar com node e o nome do arquivo, removendo nota. Certo, primeiro ele exibiu array já consertado, digamos assim, sem o último elemento, que é o de valor 10, e a nota é 7.5.

[03:02] Juliana: Só uma coisa, Leo, na linha 5 o Java script tem essa particularidade, você vê que na linha 5 o Leo chamou uma variável chamada média sem usar o let, mas mesmo assim funcionou.

[03:15] Leonardo: Exatamente, Ju, aqui eu esqueci de colocar o let, só que o que acontece? Quando não informamos nada ele declara como sendo uma var, então isso faz com que nosso código funcione, mas não é boa prática, então vou até arrumar aqui e sempre tomem cuidado com isso, porque pode causar bugs em alguns códigos.

[03:33] Juliana: Certo. Então só repassando de novo o que aconteceu, olha a diferença entre o notas.pop() e o notas.push(), no caso aqui o método .pop() que utilizamos para tirar o último elemento não tem nenhum parâmetro, entre os parênteses nós não passamos nenhuma informação, porque isso é uma particularidade dessa função, desse método, ele não aceita nenhum parâmetro.

[04:05] Juliana: Automaticamente quando utilizamos esse método, o JavaScript interpreta que tem que tirar o último elemento da array, é sempre o último elemento, e como é só tirar o último elemento, não precisamos passar nenhuma informação, você não precisa dizer nada mais no parâmetro, então só .pop() sem nada ele já vai interpretar que é para tirar o 10 e fazer todo o trabalho para nós.

[04:30] Leonardo: Outra coisa, Ju, que é interessante fazer. Aqui estamos exibindo só a média, 7.5, só que vamos tornar isso um pouco mais humano, vamos dizer assim, vou colocar uma frase antes. Para isso vou usar uma template string que já vimos anteriormente também, vou colocar que "a média é" e agora vamos usar a template string. Usa o símbolo de dólar, abre e fecha chaves, e vamos passar nossa variável aqui dentro. Vai ser uma frase melhor para podermos ler.

console.log(`A média é ${media}`)COPIAR CÓDIGO
[05:15] Juliana: Vou rodar isso novamente então. "A média é 7.5." Perfeito, podemos fechar por aqui, já temos dois métodos de arrays em JavaScript para usarmos, e bora para o próximo. */