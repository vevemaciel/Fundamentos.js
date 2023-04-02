/* a = []
b = 20
c = true 
d = '' */

/* if (b === 20 && c != false && d == 0) {
    console.log('Verdade')
} else {
    console.log('Falso')
} */

/* if (a == 0) {
    console.log('Verdade')
} else {
    console.log('Falso')
} */

/* if (b == '20') {
    console.log('Verdade')
} else {
    console.log('Falso')
} */

const nome = "Leo";
const idade = 23;
const bebidaMaior = "cerveja";
const bebidaMenor = "suco";

const pedido = `${nome} diz: "por favor, quero beber ${idade >= 18 ? bebidaMaior : bebidaMenor}"`
console.log(pedido)

/* Faça como eu fiz: Utilizando ternários e templates
PRÓXIMA ATIVIDADE

Nesta aula vimos alguns conteúdos diversos sobre JavaScript, mas como podemos juntar tudo o que foi estudado?

Retornando ao exemplo de bebidas para menores e maiores de idade, vamos criar algumas variáveis para identificar um cliente, sua idade e as opções de bebidas.

const nome = "Leo";
const idade = 23;
const bebidaMaior = "cerveja";
const bebidaMenor = "suco";COPIAR CÓDIGO
Os operadores - entre outras coisas - são usados para comparar condições, algo que é muito usado em lógica de programação. A notação ${} permite a inserção de valores de variáveis dentro de uma string de texto, mas não somente isso; vamos testar uma coisa nova:

const pedido = `${nome} diz: "por favor, quero beber ${idade >= 18 ? bebidaMaior : bebidaMenor}"`
console.log(pedido)COPIAR CÓDIGO
O resultado exibido no terminal é a frase completa:

Leo diz: "por favor, quero beber cerveja"COPIAR CÓDIGO
Isso porque no início do código foi atribuída à variável idade um valor 23, ou seja, maior do que 18.

Com este exemplo, usamos três ferramentas do JavaScript vistas durante esta aula:

1) O uso de operadores: >= como operador de comparação entre o valor da variável idade e 18 e também o operador ternário como condicional para retornar o valor da variável bebidaMaior ou bebidaMenor de acordo com o resultado da comparação.

2) Template strings: Utilizamos a sintaxe do acento grave + ${} em conjunto com as aspas duplas ””. Teste também com aspas simples!

3) Operador ternário: Vimos que é possível não apenas exibir o valor de variáveis utilizando o ${}, mas também fazer operações com JavaScript - por exemplo, condicionais - e inserir o correspondente ao true ou false na string de texto. */

/* Nesta aula vimos:
A diferença entre fazer comparações com ==, em que o JavaScript faz conversão entre os tipos de variáveis antes de fazer a comparação, e ===, em que tanto o valor quanto o tipo da variável deve ser o mesmo.
Como é escrito um operador ternário, com o qual fazemos uma comparação entre valores digitando um ?, seguido da possibilidade true, um : e a possibilidade false, ou seja, comparação ? true : false.
O porquê do nome “operador ternário”, que se deve ao fato de termos 3 operadores juntos em uma única linha para desempenhar uma tarefa e devolver um resultado.
O uso da template literal, que facilita a construção de strings que demandam concatenação (a operação em que se junta 2 strings), e foi introduzido no ES6.
Como usar a template literal, escrevendo o texto entre acentos graves (`) e colocando as variáveis com ${variavel} para que o valor deles fique nessa posição.
 */