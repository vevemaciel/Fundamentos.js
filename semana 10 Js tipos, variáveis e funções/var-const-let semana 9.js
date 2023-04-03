//var não é mais utiliada por ser extremanente versatil

/*var altura = 5;
var comprimento = 7;

area = altura * comprimento;
console.log (area);
var area;*/

// let forma = 'retangulo';
// let altura = 5;
// let comprimento = 7;
// let area;

// if (forma === 'retangulo'){
//     area = altura*comprimento;
// } else {
//     area = (altura*comprimento)/2
// }
// console.log(area)

const forma = 'quadrado';
const altura = 5;
const comprimento = 7;
let area; //pq o cosnt nao permite usar uma variavel sem um valor

if (forma === 'quadrado'){
    area = altura*comprimento;
} else {
    area = (altura*comprimento)/2
}
console.log(area)

/* [00:00] Ju: Nessa aula, eu e o Léo vamos conversar um pouco sobre outro bloco fundamental das linguagens de programação, que são as variáveis.

[00:08] Ju: O JavaScript tem uma particularidade, que são três formas de escrever variáveis: var, let e const.

[00:14] Ju: Você deve ter ouvido falar; ouvido falar, não, pode ter visto documentação com uma, com outra. E como sabemos quando usar cada uma dessas três e porquê elas existem, é o que vamos ver nesse vídeo. Eu vou compartilhar a minha tela.

[00:31] Ju: Fala para nós um pouco sobre o que são essas três variáveis e por quê elas existem.

[00:38] Leonardo: Vamos começar falando da var. A var é a primeira que surgiu no JavaScript e ela funciona, basicamente, em qualquer parte do código. Então, podemos escrever ela e sair utilizando.

[00:54] Leonardo: Ju, vamos fazer um pequeno programa para conseguirmos calcular a área de um retângulo. Cria, para mim, uma variável de altura e uma variável de cumprimento e põe o valor nelas. Pode ser o valor de 5 para altura e o valor 7 para comprimento, por exemplo.

[01:22] Ju: Ok. Eu escrevi car na linha 4, é var e não car. Pronto.

[01:30] Leonardo: Agora, vamos calcular a nossa área, em si. Então, põe para mim que a área é igual à altura vezes o cumprimento.

[01:39] Ju: Eu posso só escrever area ou eu tenho que escrever sempre var na frente?

[01:43] Leonardo: Por enquanto, vamos escrever só área. Vamos ver o que vai acontecer.

[01:47] Ju: Certo! Então, vou dizer que area é uma variável que vai guardar o resultado da variável altura multiplicado pela variável comprimento area = altura * cumprimento, então, 5 vezes 7, não é?

[02:02] Leonardo: Isso! Vamos, agora, no console e vamos ver qual vai dar a saída disso. Então, console.log(area).

[02:12] Ju: Eu vou só usar os comandos do terminal para entrar na pasta onde está o meu “arquivo script.js”, ‘alura/2206’ é o nome desse curso. E agora, eu posso rodar o programa com Node e o nome do meu arquivo que é script.js e vamos ver o que acontece. Vou rodar e resultou em 35, cinco vezes sete.

[02:32] Leonardo: Tudo bem, ele funcionou certo. Nesse caso, não precisamos declarar a variável área. Mas, por quê? Porque o Node já fez isso para nós. Porém, é boa prática declararmos ela e o var tem uma função especial que podemos usar ela antes de declarar.

[02:55] Leonardo: Então, declaramos a área junto da linha 6, mas, também podemos colocar ela, por exemplo, na linha 8 e declarar ela lá. Então, usamos na linha 6 var area = altura * comprimento e na linha 8 nós declararíamos var area. Pode fazer isso para mim, Ju?

[03:14] Ju: Então, eu vou deixar a linha 6 como estava (área = atura * comprimento), posso deixar o console.log na linha 7 e na linha 8 eu vou criar uma var, vou chamar de area e eu posso deixar ela só declarada, sem valor nenhum, não é?

[03:32] Leonardo: Pode deixar. Quando o JavaScript começa a ser executado, ele vai ler todo o seu programa, vai achar todas as variáveis que são do tipo var e vai carregar elas primeiro. Então, podemos começar a usar elas antes de declarar. Essa é uma vantagem da var.

[03:49] Leonardo: Porém, isso pode causar algumas complicações. Porque podemos, por exemplo, acabar usando mesmo nome de variável em duas partes, acabar não nos atentando a isso e vamos ter problemas.

[04:01] Leonardo: O que podemos fazer para resolver isso? Podemos usar a let.

[04:06] Ju: Certo! Eu vou testar no terminal, só para ver se funcionou tudo direito. Está funcionando!

[04:10] Ju: Vamos testar com o let.

[04:14] Ju: O let não existia, no começo do JavaScript (o JavaScript foi criado nos anos 90), só existia a var, não existia nem let, nem const.

[04:28] Ju: Eles surgiram a partir da versão 2015 no JavaScript, para resolver, justamente, esses problemas que o Léo falou. Que o fato da var poder ser declarada e depois usada, substituída, ela não tem muitas regras, ela é solta. O uso dela é muito liberado.

[04:48] Ju: E isso acaba fazendo com que certos comportamentos não previstos aconteçam. Comportamento não previsto é só um jeito de falar que dá bug, na verdade.

[05:02] Ju: Vamos lá! Eu vou comentar tudo que criamos como var e vamos criar como let?

[05:11] Leonardo: Vamos criar, agora, como let. Vamos criar a mesma estrutura que criamos antes.

[05:18] Ju: Certo! Também vamos fazer um exercício de área?

[05:21] Leonardo: Vamos fazer um exercício de área, também.

[05:24] Ju: Então, let altura e let cumprimento. Vou botar os mesmos valores, let altura = 5 e let altura = 7. Ok. E eu posso, também, deixar a área sem declarar o let antes, só com área?

[05:42] Leonardo: Vamos testar para ver se funciona?

[05:44] Ju: Então, area = altura * cumprimento e console.log em (area), que eu vou só copiar da linha 7. Vamos ver o que acontece. Salvar e rodar o nosso programa.

[06:03] Ju: Continua funcionando. Acho que não estou vendo ainda muita diferença entre let e var, por enquanto.

[06:11] Leonardo: Por enquanto, não. Mas, vamos fazer o seguinte, vamos colocar um if e vamos fazer, para calcular a área, tanto de um retângulo quanto de um triângulo? E vamos ver como isso pode alterar o nosso programa?

[06:25] Ju: Certo! Já tenho let altura e let cumprimento e vamos querer, tanto calcular a área de um, mas, calcular a área de um triângulo é diferente de calcular a área do quadrado, que eu me lembro da escola. Então, nosso programa tem que, primeiro, ver qual é o tipo de forma que queremos fazer o cálculo.

[06:50] Leonardo: Sim, exatamente. Vamos declarar outra variável que vamos chamar de forma. Então, let forma e vamos colocar ela com uma string retangulo, por exemplo.

[07:03] Leonardo: Vamos começar com retângulo, porque sabemos que funciona.

[07:09] Ju: Agora podemos fazer o nosso if e imagino que nós vamos fazer uma comparação nesse valor da nossa let, ou é um retângulo ou é um triângulo, é isso?

[07:25] Leonardo: Exatamente! Vamos comparar a nossa variável forma com a string retângulo.

[07:34] Ju: Lembrando que tem que escrever sempre direito, então, se você botou um circunflexo no retângulo, quando declarou a variável, tem que colocar na comparação também.

[07:47] Ju: O hífen é um bloco de código, nós abrimos chaves.

[07:50] Ju: O que acontece se forma === ‘retângulo’, o que temos que fazer?

[07:56] Leonardo: Nesse caso, vamos usar a mesma fórmula que usamos antes. Então, area = altura * comprimento.

[08:05] Ju: E se a nossa forma, se o valor de string que estiver guardado dentro da variável forma não for retângulo, for qualquer outra coisa? No caso, o mais legal seria se conferíssemos se é triângulo, mas, podemos deixar dessa forma, por enquanto.

[08:24] Leonardo: Sim! Como estamos só usando retângulo e triângulo nesse exemplo, então, a área do triângulo é altura vezes o comprimento, dividido por 2.

[08:35] Ju: altura * comprimento / 2. Ainda bem que você me salvou nessa, porque eu não me lembrava.

[08:44]Ju: Eu vou colocar uns parênteses em (altura * comprimento), mas, isso é da matemática, para garantirmos que esse cálculo seja feito antes de tentar dividir qualquer coisa por 2.

[08:56] Leonardo: Agora, como última coisa que temos que fazer, vamos declarar a nossa variável. Então, cria mais uma linha, para mim, e declara o let area e vamos ver como ele vai ser executado.

[09:08] Ju: Salvando. Deixa eu abrir um pouco o terminal e apareceram erros.

[09:19] Leonardo: Erros. Vamos ver o que esse erro está nos falando.

[09:24] Leonardo: Esse erro está nos mostrando que ele não conseguiu acessar a variável área.

[09:28] Leonardo: Nós vimos que conseguimos usar o let, mas, por que não usamos o var e deixamos como estava antes?

[09:33] Leonardo: Por que? Porque dentro do nosso programa temos vários blocos de código e esses blocos são definidos pelas chaves. Como é, por exemplo, o caso do if.

[09:45] Leonardo: E não é interessante nós termos uma variável que consigamos mexer no valor dela dentro dos blocos. Não, pelo menos, com certo controle, já que o var é muito solto dentro do nosso programa e podemos acabar reutilizando o nome dessa variável em alguns outros locais, dentro de outros blocos de código. Por segurança, é bom mantermos como let.

[10:11] Ju: Certo. O que fizemos é; o let, na verdade, vai conseguir acessar o bloco de código.

[10:21] Ju: O bloco de código é sempre definido no JavaScript por chaves, então, o que está dentro de chaves é um bloco e ele é feito para ser fechado. Ele é feito para limitar esse acesso e o processamento que ocorre dentro dele, fica lá dentro.

[10:37] Ju: O que está acontecendo? Ele acessa let do lado de fora, que está na linha 13, e como não escrevemos a palavra *let8, novamente, dentro do bloco, ele considera; ele vai fora buscar essa variável e reatribui um valor a ela. Ela começou vazia, começou sem valor nenhum.

[11:00] Ju: Dentro do bloco estamos fazendo uma conta (altura * comprimento) e atribuindo esse valor à variável let, que está lá fora. Certo, Léo?

[11:12] Leonardo: Sim! Isso mesmo.

[11:14] Ju: Sim! A let é um pouco mais solta. Nós conseguimos fazer mais reatribuições, ela aceita que mudemos os valores, do que a terceira forma, o terceiro tipo de variável que existe no JavaScript, que é a const.

[11:35] Leonardo: Isso! A const é uma constante. Ou seja, uma vez que a colocamos no programa, não conseguimos alterá-la.

[11:42] Leonardo: Vamos fazer esse programa utilizando const em alguns locais, que é para manter a nossa aplicação concisa. Ou seja, impedir que, durante a execução da aplicação, alguém coloque uma linha que mude o valor de uma variável que estamos trabalhando em cima. Protegendo, assim, o fluxo de trabalho da nossa aplicação.

[12:05] Leonardo: Vamos fazer o mesmo esquema de código, só que, dessa vez, declarando a forma como const. Já que, enquanto estamos fazendo o nosso processamento, não podemos mudar a nossa forma.

[12:20] Leonardo: Vamos reconstruir a nossa aplicação.

[12:25] Ju: Eu vou criar uma const forma e vou dizer que ela é = ‘quadrado’.

[12:34] Leonardo: Perfeito!

[12:37] Ju: Posso dar altura e comprimento, a mesma coisa?

[12:40] Leonardo: Pode! Pode fazer igual estava a outra.

[12:44] Ju: Vamos fazer o seguinte, vou criar tudo como const. const altura = 5 e const comprimento = 7.

[12:55] Ju: Agora, o mesmo esquema. Nós vamos dizer que; eu tenho que criar, também, uma const area?

[13:05] Leonardo: Vamos criar uma const area também, para vermos a atribuição.

[13:10] Ju: const area = altura * comprimento e console.log(area). Vamos ver agora, rodar.

[13:28] Ju: Nós não estamos fazendo nada com a const forma, não é? Por enquanto, não.

[13:33] Leonardo: Por enquanto, não. Vamos usar daqui a pouco.

[13:35] Ju: Eu vou deixar ela comentada; uma boa prática, já que você não está usando a variável. Eu vou deixar ela comentada. Ok? 35. Sem surpresas.

[13:45] Leonardo: 35. Como esperávamos, deu certo na nossa conta.

[13:50] Leonardo: Vamos colocar, de novo, o nosso if e vamos fazer a conta para a área tanto para o quadrado quanto para o triângulo.

[14:01] Ju: Ok. Vou fazer um novo if (forma === ‘quadrado’). Nós fazemos a conta de quadrado, que é altura * comprimento e else {, que é area = (altura * comprimento) / 2.

[14:26] Leonardo: Isso, sobre 2.

[14:33] Ju: Vou apagar a nossa const area, vou fechar a janela, apagar a const area e deixar só console.log(area), rodar o comando e sair testando e resultou 35. Por enquanto, está ok.

[14:49] Leonardo: A questão, agora, é que não temos declarada a const area em local nenhum, então, o Node está declarando área como um var para nós, só para impedir que o nosso programa dê um erro.

[15:00] Leonardo: Vamos declarar a const area na linha 26, nesse caso, que é um espaço que temos para declarar as variáveis.

[15:09] Ju: const area. Vamos fazer o seguinte, primeiro eu vou declarar const area sem valor nenhum, porque, por enquanto não tem como, ela não tem nenhum valor para entrar. Ainda vai ser definido depois que fizermos o if.

[15:22] Ju: node script.js e apareceram erros. Vamos ver esse erro.

[15:31] Ju: Esse erro está sendo acusado no meu arquivo, na linha 26, justamente, com const area, que foi o que acabei de criar.

[15:42] Ju: A palavra-chave “Error”, que é o que procuramos sempre, está dando um erro que ele diz que é um erro de syntax. Eu vou traduzir, mas, você pode, se tiver qualquer problema, jogar no Google Translate.

[15:55] Ju: O erro está falando que está faltando um inicializador na declaração da const. Ou seja, nós já temos uma ideia do que pode estar acontecendo com esse erro.

[16:06] Ju: Ele diz que sempre que criamos, sempre que inicializamos uma variável (pode parecer engraçado), eu vou falar variável constante, mas, é realmente isso, porque computacionalmente nós chamamos de variável esse espaço na memória, onde guardamos um dado, mas, ela é constante, porque nós, justamente, não podemos mudar o valor dela);

[16:34] Ju: E sempre que criamos uma nova constante ela já tem que ter um valor, ao contrário da let e da var, não dá para, simplesmente, criar e dar um nome e deixar ela sem valor nenhum atribuído.

[16:44] Ju: Então, o comando já parou nisso, não fez o resto e diz que const area tem que ter um valor para começar, ele nem terminou de executar. O que podemos fazer para corrigir esse erro?

[16:59] Leonardo: Nesse caso, nós poderíamos inicializar ela com algum valor, porém, não sabemos qual valor vai ser. Então, não seria uma boa prática. E, além disso, sabemos que vamos mexer no valor dela lá na frente, então, não pode ser uma constante. Se vamos alterar o valor dela não pode ser algo fixo, algo preso naquele valor que já inicializamos. Nesse caso, ela tem que ser um let.

[17:24] Ju: Esse é um caso de quando se usa let e quando não dá, às vezes, para usar const.

[17:34] Leonardo: Essa é uma das coisas que ocorrem.

[17:36] Leonardo: Vamos tentar rodar com ele assim, com o let e os consts nas partes fixas da nossa aplicação?

[17:43] Ju: Vamos, vou rodar agora. Deu 35.

[17:48] Leonardo: 35. Só para nós termos certeza que está funcionando o nosso if, vamos trocar de quadrado para triângulo na nossa forma?

[17:55] Ju: Certo. Vou trocar const forma = ‘quadrado’ para const forma = ‘triângulo’. Vamos salvar, rodar e deu 17.5, que está certo, também.

[18:11] Ju: Ou seja, o if está funcionando.

[18:15] Leonardo: O if está funcionando e agora temos como calcular a área, tanto do quadrado quanto do triângulo.

[18:21] Leonardo: E acabamos de ver como conseguimos utilizar tanto a var, que não é muito recomendada de se utilizar, hoje em dia, por ela ser muito solta; a let, que nos permite trocar os valores dela, porém, nós sempre temos que declarar ela antes de ser utilizada; e a const que é fixa, o valor dela, uma vez declarado, fica preso nela e também tem que ser declarado antes.

[18:46] Leonardo: Tem mais alguma coisa que você gostaria de colocar, Ju?

[18:48] Ju: Não. Na verdade, o var, como ele criado no começo do JavaScript quando não existia let e const, era a única opção e todo mundo só podia usar var, então, pode ser que algumas documentações mais antigas ainda utilizem essa forma.

[19:06] Ju: Hoje em dia, a var não é mais utilizada, justamente, porque ela é muito propensa à bugs, então, hoje em dia usamos o let, quando sabemos que o valor da variável vai precisar mudar, vai precisar ser reatribuído; para todos os outros casos, vocês podem usar const, sempre.

[19:27] Ju: Nós vamos voltar a falar de let e const um pouco mais para a frente nesse curso, mas, por enquanto, eu acho que já foi bastante coisa.

[19:36] Leonardo: Sim, eu acho que foi bem completo, por enquanto.

[19:39] Ju: Nos vemos no próximo vídeo! */