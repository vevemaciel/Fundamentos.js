/* 
O modelo de protótipo
PRÓXIMA ATIVIDADE

Durante esta aula, vimos como a orientação a objetos é implementada no JavaScript sem a utilização da sintaxe de classes, e demos atenção especial ao this e ao conceito de cadeia de protótipo.

Baseado nisso, podemos afirmar que:

Alternativa correta
A sintaxe de classe não existia no JavaScript até o ES6, e foi implementada como “açúcar sintático” por cima do modelo de protótipo nativo do JavaScript. Isso aconteceu por, entre outros fatores, uma demanda da comunidade dev que já estava acostumada a utilizar classes em orientação a objetos e preferia essa forma a ter que utilizar os protótipos.


Alternativa correta! Embora hoje em dia seja possível programar em JavaScript utilizando apenas a sintaxe de classe, é importante saber o que acontece “por baixo dos panos”, pois alguns aspectos da cadeia de protótipo (como o próprio objeto prototype) muitas vezes acabam aparecendo durante o dia a dia do desenvolvimento, especialmente quando temos que resolver bugs.

Alternativa correta
A palavra-chave this se refere ao contexto em que uma função está sendo executada; esse contexto só é determinado no momento da chamada da função e só é possível saber qual será o valor de this para uma função se soubermos em que contexto esta função será executada - em outras palavras, a que objeto ela fará referência.


Alternativa correta! O this é uma das palavras-chave mais importantes para se compreender como os objetos funcionam no javaScript, independente de ser um projeto orientado a objetos ou não. Para trabalharmos com this sempre precisamos ter em mente qual o contexto em que uma função é executada.

Alternativa correta
No modelo de protótipo, os objetos “herdam” recursos uns dos outros através da chamada propriedade protótipo. Quando criamos um objeto e definimos seu protótipo através de Object.setPrototypeOf(objetoQueHerda, objetoBase), estabelecemos uma cadeia de protótipos que começa no próprio tipo Object e vai até o último nível de objeto criado através dessa cadeia.


Alternativa correta! A cadeia de protótipos é a base original de programação orientada a objetos com JavaScript. Praticamente tudo, em JavaScript, é considerado um objeto, e estes objetos recebem um protótipo, de onde vêm as propriedades e métodos que todos os objetos do mesmo tipo compartilham. */

/* 4
O que aprendemos?
PRÓXIMA ATIVIDADE

Nessa aula, você aprendeu:
O que é a palavra-chave this e sua importância na manipulação de objetos com JavaScript, uma vez que o this representa o contexto em que determinada função ou método será executada, e como este contexto pode ser identificado e modificado utilizando os métodos bind(), call() e apply();
Como funciona a criação de objetos em JavaScript com o modelo de protótipo, que é a forma nativa do JavaScript trabalhar com o conceito de orientação a objetos conhecido como “herança”, quando objetos recebem propriedades e métodos de outros;
Como acessar as propriedades prototype e __proto__ e, através delas, identificar a cadeia de protótipos desde o nível mais baixo, normalmente um objeto do próprio tipo de dado, como Object ou Function;
As duas formas (anteriores às classes) que o JavaScript utiliza para criação de objetos a partir de modelos: Object.create() e funções construtoras com new; sendo o primeiro mais indicado para se trabalhar com protótipos utilizando as melhores práticas e o segundo mais próximo à sintaxe de classes. */