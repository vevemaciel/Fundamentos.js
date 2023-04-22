/* Transcrição
Nós aprendemos a usar a função require() para ler um arquivo .json. Agora vamos aprender outras formas de receber um arquivo desse tipo, além de criar nossos próprios textos nesse formato.

"Stringficação"
Existe uma maneira de escrever um texto no formato JSON a partir de um objeto JavaScript comum.

Para isso, vamos voltar ao arquivo leitura.js no VSCode. Nele, escreveremos uma variável que chamaremos de const clienteEmString. Faremos com que ela receba uma forma de transformar um objeto em string, uma função que podemos chamar de "stringficação", em tradução livre.

Ou seja, essa variável receberá um objeto chamado JSON, um global no ambiente do Node. Nesse objeto, acessaremos a função stringify, que transforma o objeto em string. Passaremos dados, o arquivo contendo as informações de um cliente, como parâmetro dessa função.

Por fim, faremos o console.log(), passando clienteEmString, para verificar o que essa função nos retorna na tela. Conforme os nomes indicam, deveria ser uma string.

Teremos, então:

leitura.js

const dados = require("./cliente.json");

console.log(dados);
console.log(typeof dados);

const clienteEmString = JSON.stringify(dados);

console.log(clienteEmString);COPIAR CÓDIGO
Agora, vamos ao terminal executar o código. O retorno é o seguinte:

node aula4/leitura.js

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
object
{"nome":"Joao", "email":"joao@firma.com", "telefone":["11223344", "11922334453"], "endereco":{"rua":"R. Joseph Climber", "numero":404, "apartamento":true, "complemento":"ap 934"}}COPIAR CÓDIGO
Ou seja, temos os dois primeiros console.log() do arquivo leitura.js, retornando um objeto e o tipo do que foi salvo na variável, um objeto.

Em seguida, temos o console.log() que codamos agora, que retorna uma string com as mesmas informações daquele objeto, organizadas em uma linha só e sem a interatividade dos objetos. Ou seja, é apenas um conjunto de letras que não tem os comportamentos que um objeto teria.

Para não restarem dúvidas sobre isso, podemos inserir em leitura.js um novo console.log() pedindo o tipo de clienteEmString, assim como fizemos anteriormente:

//código omitido

console.log(typeof clienteEmString);COPIAR CÓDIGO
Vamos executar o código novamente no terminal, o que nos retornará:

node aula4/leitura.js

//retorno omitido

{"nome":"Joao", "email":"joao@firma.com", "telefone":["11223344", "11922334453"], "endereco":{"rua":"R. Joseph Climber", "numero":404, "apartamento":true, "complemento":"ap 934"}}
stringCOPIAR CÓDIGO
Ou seja, na última linha do retorno, temos o indicativo de que realmente estamos lidando com uma string. Sendo assim, não conseguimos interagir com ela da mesma forma que conseguimos com os objetos.

Por exemplo, as propriedades nela não estão marcadas. Para testar isso, podemos fazer mais um console.log() tentando extrair o valor da propriedade "nome":

//código omitido

console.log(clienteEmString.nome)COPIAR CÓDIGO
Vamos executar o código novamente:

node aula4/leitura.js

//retorno omitido

{"nome":"Joao", "email":"joao@firma.com", "telefone":["11223344", "11922334453"], "endereco":{"rua":"R. Joseph Climber", "numero":404, "apartamento":true, "complemento":"ap 934"}}
string
undefinedCOPIAR CÓDIGO
Se fosse um objeto, receberíamos "Joao" no retorno. Mas como é uma string que não tem acesso às propriedades do objeto, recebemos "undefined". Ou seja, realmente temos um comportamento de string.

Mas, qual a utilidade de transformar um objeto, com todas aquelas funcionalidades, em uma string?

Reiteramos que a grande função do JSON é salvar e transmitir informações em texto, de modo simples, algo bastante necessário para a infraestrutura da tecnologia.

Um objeto JavaScript comum é feito para operar dentro de um código JavaScript; já um código em JSON compartilha os dados de forma mais genérica e adaptável.

Mas e se nós tivéssemos recebido essas informações em forma de texto, ou como uma string, e quiséssemos transformar esse código de volta em objeto, para operar com ele? É possível?

"Traduzir" a string para objeto
Para transformar clienteEmString em um objeto novamente, usaremos a função .parse do objeto JSON que usamos no passo anterior.

Em português, essa função significaria algo como "traduzir" ou "adequar". Ou seja, ela lerá uma string e tentará montar o objeto a partir dela. Então teremos JSON.parse().

Como parâmetro dessa função, passaremos clienteEmString e declararemos seu resultado como const objetoCliente:

//código omitido

const objetoCliente = JSON.parse(clienteEmString);COPIAR CÓDIGO
Em tese, o que receberemos disso será igual ao que recebemos em dados, quando lemos o arquivo cliente.json. Para verificar isso, chamaremos:

//código omitido

console.log(objetoCliente);COPIAR CÓDIGO
Agora, ao executar o código novamente no terminal, recebemos:

node aula4/leitura.js

//retorno omitido

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
}COPIAR CÓDIGO
Conforme o esperado, temos o mesmo objeto que tinha sido salvo na leitura do arquivo JSON em dados.

Conclusões
Conseguimos percorrer todo o caminho:

Ler um arquivo .json;
Transformá-lo em uma string para podermos salvá-lo, transmiti-lo ou usá-lo em alguma outra operação que é comumente realizada com strings;
Por fim, transformamos essa string de volta em um objeto para podermos alterar as propriedades e realizar operações comuns do JavaScript.
 */