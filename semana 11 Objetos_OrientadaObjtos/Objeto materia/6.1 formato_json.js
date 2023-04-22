

/* Transcrição
Estamos nos aprofundando no funcionamento e formas de utilizar os objetos do JavaScript. Para continuar esse estudo, é importante conhecer um novo formato com que podemos salvar objetos, chamado JSON.

JSON é uma sigla para JavaScript Object Notation, ou "Notação de Objeto JavaScript" em português. Ou seja, é um formato que permite a escrita de objetos do JavaScript.

Para entender esse formato de notação, tomaremos como exemplo o seguinte trecho do arquivo cliente.js, que já conhecemos:

const cliente = {
  nome: "Joao",
  email: "joao@firma.com",
  telefone: ["11223344", "11922334453"],
  endereco: {
    rua: "R. Joseph Climber",
    numero: 1337,
    apartamento: true,
    complemento: "ap 934",
  },
};COPIAR CÓDIGO
Temos a variável const cliente, em que abrimos chaves para a inserção de diversas propriedades. Algumas dessas propriedades, além de poderem ser apenas tipos primitivos como uma string ou um número, também podem ser arrays ou mesmo outros objetos.

Se fôssemos escrever esse mesmo trecho na nova notação, uma versão cliente.json, teríamos algo bastante similar:

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
Notamos algumas diferenças na forma de escrita desse mesmo objeto no arquivo .js e no arquivo .json.

Analisando detalhadamente o formato JSON, percebemos algumas particularidades que desconhecemos:

Não existem variáveis
Nessa nova notação, não precisamos dar o nome para onde vamos guardar esse objeto.

Chaves das propriedades têm aspas duplas (" ")
As chaves são escritas de modo parecido com o da string, mas são estritamente aspas duplas, como "nome".

Arrays e objetos aninhados podem existir
Como em "telefone" e "endereco".

Restrição de trailing comma
Nesse formato, é proibido ter vírgula no último item de um bloco, como em "complemento": "ap 934", diferente do JavaScript comum. Precisamos sempre nos atentar a essa limitação e não deixar vírgulas sobrando.

Além dessas diferenças que percebemos no trecho de exemplo, temos algumas outras:

Funções não são permitidas, precisamos omiti-las do nosso objeto;
Comentários não são permitidos;
Suporta apenas tipos primitivos (string, number, boolean, null);
O undefined também não é permitido;
Algumas estruturas mais complexas, como datas ou a escrita em Regex, também podem não ser aceitas.
Na próxima aula, veremos como interagir com esse novo formato na prática! */