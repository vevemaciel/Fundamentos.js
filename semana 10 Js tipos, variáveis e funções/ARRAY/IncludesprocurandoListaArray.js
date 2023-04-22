
         //0     //0    
const alunos = ['Joao','Juliana','caio','Ana']

            //1                       //3      
const mediasDosAlunos = ['10','7','9','6']


//let  listaDeNotasEAlunos [['Joao','Juliana','caio','Ana'], ['10','7','9','6'] ]
                         //0         //1
let listaDeNotasEAlunos = [alunos , mediasDosAlunos]

const exibeNomeNota = (nomeDoAluno) => {
    if(listaDeNotasEAlunos[0].includes(nomeDoAluno)){ // includes retorna booleano se é falso ou verdadeiro, se achar "Ana" executa
        let indice = listaDeNotasEAlunos[0].indexOf(nomeDoAluno) // indexOf busca "Ana" retorna o numero referente ao indice ->[3]
                                //[0][3]
        return listaDeNotasEAlunos[0] [indice] + ', Sua media é: ' + listaDeNotasEAlunos[1][indice]
    }else{
        return 'Aluno nao está cadastrado'
    }
}

console.log(exibeNomeNota ("Ana"))

/* Transcrição
[00:00] Juliana: Continuando então nosso trabalho com estruturas de dados e com nossas listas de alunos, vamos ver qual o desafio deste vídeo. Nós temos que criar uma função que vai receber o nome de um aluno, procurar esse aluno em uma lista de alunos e caso o aluno esteja presente nessa lista retornar a média deste aluno, ou retornar uma mensagem se o aluno não foi encontrado na lista, ou seja, se o aluno não fizer parte daquela lista de classe, por exemplo, nós temos que dar uma mensagem de retorno dizendo que o aluno não foi localizado.

[00:38] Juliana: Nós vamos trabalhar também a partir do que fizemos anteriormente com essa lista de alunos, João, Juliana, Caio e Ana, mas eu vou criar, vou copiar o que fizemos, essa const de alunos só, precisa copiar mais alguma coisa, Léo?

[00:55] Leonardo: Nós vamos precisar dos alunos, das médias dos alunos e da nossa lista de duas dimensões.

[01:02] Juliana: Beleza. Eu vou então copiar tudo, passar para um novo arquivo que vou chamar de localizando aluno e não vamos precisar por enquanto do console.log nem dos comentários, vamos só começar com a nossa lista de alunos. Deu um problema na minha lista de alunos na hora de copiar, vou copiar novamente, então agora nós temos nossa lista de alunos, lista de médias dos alunos, e o array de duas dimensões que nós trabalhamos anteriormente. Como fazemos esse desafio que já tem um pouco mais de passos do que os anteriores?

[01:58] Leonardo: Primeiro o que o desafio pede é que criemos uma função para fazer isso para nós. Então vamos começar fazendo isso, vamos criar uma const e vou chamar de exibeNomeNota, temos nossa função. Ela vai precisar receber o nome do aluno.

[02:30] Leonardo: Vamos criar uma arrow function para nos ajudar, para ficar mais fácil. Agora podemos escrever dentro dela. A primeira coisa que precisamos ver é se o aluno existe, se ele está cadastrado no sistema. Então vamos fazer essa verificação dentro do if, e aqui vou usar sempre nossa lista de duas dimensões para acostumar com ela.

[03:02] Leonardo: A lista de notas e alunos e queremos procurar pelo nome do aluno, então queremos entrar na lista de alunos, que está no índice 0 da lista de notas e alunos. Vamos usar um novo método aqui, o includes, ou seja, ele vai ver se o que estamos procurando está incluso dentro dela.

[03:25] Leonardo: Então includes(nomeDoAluno), se isso for verdade, o que ela vai fazer? Ela vai buscar por um índice, que índice? É o índice que temos o nome desse aluno e a nota desse aluno também vai estar nesse índice, já que fizemos essa lista de duas dimensões e temos a nota e o nome.

[03:58] Leonardo: Vou colocar que queremos o índice e vamos ver como vamos fazer para buscar, por esse aluno dentro do índice. Vamos buscar dentro da lista de notas e alunos e vamos usar um novo método também aqui, que é o indexOf, seria o índice de, e vamos buscar o índice do quê? Do nome do aluno.

[04:38] Leonardo: Do jeito que eu escrevi vamos ter um problema. Se buscarmos dentro da lista de notas e alunos pelo nome do aluno não vamos encontrar, porque dentro dela só temos alunos e as médias, então temos que procurar de novo dentro da lista de alunos. E agora temos nosso índice, podemos dar um return nesse índice.

[05:15] Leonardo: Só que voltar só o índice é meio ruim. Vamos voltar a mensagem inteira que nós queremos. Pode ser? Então nossa mensagem vai ser a lista de notas e alunos no 0, que é para trazer os nomes, e queremos o nome que acabamos de achar, então já trazemos do índice.

[05:47] Leonardo: Vamos acessar primeiro a lista de alunos e depois achar o nome desse aluno utilizando o segundo índice que acabamos de pegar. Vamos só concatenar a string para ser mais rápido, quero falar que sua média é, e agora vamos atrás da média do aluno.

[06:08] Leonardo: Vamos acessar de novo a lista de notas e alunos, as notas estão no índice 1, então vou colocar esse índice, e de qual aluno queremos pegar? Queremos pegar o mesmo aluno que achamos o nome, então é o índice que acabamos de buscar.

[06:33] Leonardo: Vamos retornar então o nome do aluno, a sua média é, e a nota do aluno.

[06:36] Juliana: Léo, só na linha 9 você acabou escrevendo “indece”, então vamos corrigir isso antes de continuar.

[06:48] Leonardo: Pronto. Obrigado, Ju. Temos aqui o nosso if se der certo. Se der certo temos esse resultado. Porém, e se nós procurarmos o nome do aluno e ele não estiver cadastrado? Precisamos retornar alguma coisa. Então vamos colocar um else e vamos mandar ele dar um return. O que ele vai retornar para nós? Vamos colocar que o aluno não está cadastrado.

[07:25] Leonardo: E agora se acharmos o nome do aluno ele vai trazer nome do aluno, sua média é, nota do aluno, e se ele não achar o aluno não está cadastrado. Vamos chamar isso agora para ver como vai acontecer. Então console.log(exibeNomeNota(‘Ana’)), vamos tentar rodar agora.

[08:06] Juliana: Vamos salvar, vou rodar com node, o nome desse arquivo é localizando aluno. Ana, sua média é 6. Segundo o que estamos vendo nas nossas arrays está tudo certo. Então vamos dar uma olhada no que foi feito, que fizemos bastante coisa dessa vez. Usamos dois métodos diferentes, o includes e o indexOf, e, além disso, ainda trabalhamos com o array em duas dimensões, tudo isso dentro de uma função.

[08:42] Juliana: Lembrando, funções precisam de parâmetros, então no caso o Léo fez uma arrow function, que é um dos tipos de função do Java script, e essa função está recebendo, tem que receber como parâmetro um nome de aluno que nós passamos a hora que chamamos a função, lembrando que a função primeiro escrevemos, definimos o que ela faz, mas ela só é executada se nós chamarmos, se pedirmos para executar passando parâmetro, passou aqui Ana.

[09:18] Juliana: Todos os lugares desse código, todas as instâncias onde está nome de aluno vai ser substituído por Ana, que é o que passamos para o parâmetro. O que acontece nesse método includes? Parecido com o português, nós estamos perguntando para o Java script se inclui.

[09:41] Juliana: Uma coisa muito importante, o includes pega um array e faz uma busca pelo que estamos passando, ele faz uma busca pelo valor, pelo tipo de dado. Ele está fazendo uma busca por Ana, está indo na array alunos, que é a primeira array da nossa array de duas dimensões, então ele está indo no índice 0 dentro de alunos, buscando por um valor de dado que seja Ana, que bata com o que passamos para o parâmetro.

[10:22] Juliana: Se isso acontece, que é o que passamos como parâmetro no if, se isso é verdadeiro, o Léo, na verdade, criou uma variável, posso colocar um let índice aqui, Léo? Como já vimos anteriormente, ele vai funcionar sem, mas é sempre boa prática colocar, porque senão ele vira um vá.

[10:46] Juliana: O Léo criou a let índice para salvar, e o que a let índice vai salvar? O que vamos guardar dentro dela caso Ana exista dentro dessa array? Vai gravar o resultado de lista de notas e alunos no índice 0, ou seja, ainda estamos trabalhando dentro da mesma array. Mas agora estamos usando outro método, que é um método que chama indexOf, também um método de array.

[11:14] Juliana: O que faz o indexOf? O indexOf vai trazer qual o número do índice também fazendo uma pesquisa por ano. Então o primeiro método includes retorna um verdadeiro ou falso, sempre lembrando que é interessante entender o que cada função, cada método retorna para nós.

[11:36] Juliana: O includes sempre vai retornar verdadeiro ou falso. Ele retorna um booleano para nós. O código entra no if caso a condição seja verdadeira. Então aqui é verdadeiro porque Ana existe nessa array, ele retornou true, porém outro método que usamos, o indexOf, não retorna booleano, ele retorna um número, que é um número referente ao número do índice.

[12:15] Juliana: Ele vai buscar por Ana e vai trazer para nós qual o número do índice onde Ana se localiza nessa array. O João está no índice 0, Juliana no índice 1, Caio no índice 2, Ana no índice 3. Ele vai retornar 3 e guardar esse valor na variável índice.

[12:35] Juliana: Ou seja, então o que vai ser retornado na função? Nosso retorno vai ser valor de lista de notas e alunos no índice 0, e a segunda informação aqui é 3. Índice 0 vou colocar um comentário para ficar mais fácil de entender. Na verdade é índice 0, índice 3, que é onde Ana se localiza dentro dessa array de três dimensões.

[13:11] Juliana: Então Ana, sua média é, mesma coisa para a linha de baixo. Porém lembrando que a lista de notas e alunos tem duas arrays dentro dela. A segunda array é média dos alunos, então no índice 1 e 3. Foi dentro de média dos alunos procurar o índice 3 que é Ana.

[13:40] Juliana: Então a nota da Ana é 6. O que fazemos aqui com as variáveis é uma espécie de substituição. Sempre lembrar que as variáveis guardam valores, e no final o que está sendo representado pela variável índice é um valor número. Quando for feita essa substituição o Java script vai entender que no nossa lista de notas e alunos, índice, na verdade, é 0 e 3, e lista de notas e alunos o índice é 1 e 3. Deu tudo certo.

[14:14] Leonardo: É isso, Ju. Vamos só testar mais um pouco para ver se não por acaso não funcionou só para o Ana. Eu vou pegar Juliana, que está cadastrado nos nossos alunos e vamos rodar com Juliana também. Você pode salvar e executar para nós?

[14:26] Juliana: Vamos lá. Rodar com Juliana, vamos ver se bate. A nota é 7, então tem que modificar isso também. Vamos ver se vai. Juliana, sua média é 7, perfeito. E o que acontece então se nós passarmos um nome de aluno que não exista?

[14:44] Leonardo: Na teoria ele vai vir para o “alunos”, não está cadastrado. Vamos tentar. Vamos procurar o Nemo.

[14:54] Juliana: Beleza, vamos procurar o Nemo então, rodando novamente o arquivo. Infelizmente este aluno Nemo não está cadastrado, então está certo, entrou no else, ou seja, o includes funcionou, ele não localizou o Nemo na array. E entrou no return e exibiu para nós.

[15:15] Leonardo: Perfeito, nosso código funciona e nosso desafio está resolvido.

CONTINUAR LENDO
 */