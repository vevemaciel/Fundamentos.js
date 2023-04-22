 /* Transcrição
Vamos entender melhor a importância de conhecer essa nova ferramenta, assim como aprender a ler esse tipo de arquivo, na prática.

Por que o formato JSON existe?
Esse formato é muito utilizado quando temos um conjunto de configurações ou um padrão que queremos inserir no nosso código, acessando-o em outros lugares.

Além disso, essa notação permite transformar um objeto em uma string e transmitir esses dados de um sistema para outro, no formato em que todas as strings são transmitidas.

Ou seja, uma das maiores funcionalidades desse formato é tornar o objeto em algo mais fácil de manipular por outros sistemas que não apenas um código em JavaScript. É por isso, inclusive, que esse formato tem aquelas restrições sobre as quais comentamos anteriormente.

Como usar esse arquivo?
Para começar, vamos voltar ao Visual Studio e criar um arquivo JSON.

No menu lateral esquerdo, criaremos uma nova pasta chamada "aula4" na raiz do nosso projeto. Nela, criamos um novo arquivo chamado "cliente.json". Vemos que o ícone que surge do lado esquerdo do nome do arquivo são chaves, diferente dos arquivos .js, demonstrando que esse formato tem uma ampla adoção.

Nesse arquivo, colaremos o seguinte código (o mesmo que analisamos na aula anterior):

cliente.json

{
  "nome": "Joao",
  "email": "joao@firma.com",
  "telefone": ["11223344", "11922334453"],
  "endereco": {
    "rua": "R. Joseph Climber",
    "numero": 1337,
    "apartamento": true,
    "complemento": "ap 934"
  }
}COPIAR CÓDIGO
Na pasta "aula4", criaremos um novo arquivo que chamaremos de "leitura.js", em que estabeleceremos uma interação com o nosso arquivo cliente.json.

Para isso, criamos uma nova variável chamada "dados" que vai armazenar o valor daquele objeto escrito em JSON. Ou seja, passaremos o arquivo local "./cliente.json" como parâmetro da função require() recebida por dados.

leitura.js

const dados = require("./cliente.json");COPIAR CÓDIGO
Em seguida, pedimos para que o console.log retorne o que recebemos desse arquivo, passando a variável dados como seu parâmetro.

const dados = require("./cliente.json");

console.log(dados);COPIAR CÓDIGO
Agora podemos voltar para o terminal e executar node aula4/leitura.js. Com isso, retornamos o objeto que criamos em cliente.json. Ou seja, nós utilizamos esse objeto no nosso código por meio do arquivo JSON.

Para isso, usamos o require(). Basicamente, essa é uma função que o Node.js nos permite usar para, dentre outras finalidades, utilizar o código de outro lugar, assim como acabamos de fazer.

Para aprofundar seus conhecimentos, deixamos algumas fontes de leitura sobre a função require() no Para saber mais desta aula, que você também pode acessar por este link.

Conclusões
Para verificar que o que recebemos não é apenas uma string bem formatada, mas realmente um objeto, pediremos para que o console.log() nos retorne o tipo desse objeto. Para isso, usamos typeof e passamos dados:

const dados = require("./cliente.json");

console.log(dados);
console.log(typeof dados);COPIAR CÓDIGO
Executando novamente node aula4/leitura.js no terminal, observaremos o tipo retornado na última linha:

{
  "nome": 'Joao',
  "email": 'joao@firma.com',
  "telefone": ['11223344', '11922334453'],
  "endereco": {
    "rua": 'R. Joseph Climber',
    "numero": 1337,
    "apartamento": true,
    "complemento": 'ap 934'
  }
}
objectCOPIAR CÓDIGO
Ou seja, o tipo retornado foi "object", o que significa que realmente retornamos um objeto do arquivo JSON. Usamos a notação com sucesso!

Por fim, verificaremos a leitura do conteúdo do arquivo. Para isso, podemos mudar algum parâmetro desse objeto, executar o código novamente e ver se as informações retornadas são atualizadas.

Então, voltamos ao arquivo cliente.json e alteramos, por exemplo, o parâmetro "numero" para "404". Salvamos o arquivo.

Em seguida, vamos para o terminal e executamos node aula4/leitura.js novamente, tendo alterado apenas o arquivo JSON. Retorna-se o seguinte:

{
  "nome": 'Joao',
  "email": 'joao@firma.com',
  "telefone": ['11223344', '11922334453'],
  "endereco": {
    "rua": 'R. Joseph Climber',
    "numero": 404,
    "apartamento": true,
    "complemento": 'ap 934'
  }
}
objectCOPIAR CÓDIGO
O parâmetro "numero" retornado está diferente, mostrando "404" ao invés de "1337" como antes.

Isso significa que, de fato, estamos buscando uma determinada informação no arquivo JSON, transformando-a em um objeto comum do JS e realizando as operações desejadas.

Na próxima aula, veremos o que mais podemos fazer com esse novo formato.

Até lá!

 */