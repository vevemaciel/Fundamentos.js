/* 11
Propriedades públicas e privadas
PRÓXIMA ATIVIDADE

Você está trabalhando em um sistema de gerenciamento de usuários e pediu a um colega que implementasse uma classe para o usuário padrão. Como todo cadastro de usuários sempre envolve dados sensíveis, a especificação da classe pede que as propriedades sejam privadas.

Um tempo depois, você recebe o seguinte código:
 */

class User {
    #nome
    #email
    #cpf
     constructor(nome, email, cpf) {
      this.#nome = nome
      this.#email = email
      this.#cpf = cpf
    }
   
    get nome() {
      return this.nome
    }
   }

   /* Você tem a impressão de que seu colega se distraiu na implementação, mas resolve testar e conferir. Se executarmos o código abaixo para testar a classe: */

   const novoUser = new User('Carol', 'c@c.com', '12312312312')
   console.log(novoUser.nome)


   /*  O terminal exibirá um erro do tipo RangeError: Maximum call stack size exceeded.


Alternativa correta! Você notou que o get retorna não a propriedade #nome, mas sim nome. Embora sejam consideradas como variáveis diferentes pelo JavaScript, esse código irá resultar em um stack overflow, pois a propriedade nome sendo chamada dentro do getter get nome() (ambas com a mesma nomenclatura) faz com que o getter seja chamado dentro dele mesmo, de forma recursiva, causando o “estouro” na pilha de processos do NodeJS.*/


/* 2
O que aprendemos?
PRÓXIMA ATIVIDADE

Nessa aula, você aprendeu:
O conceito de encapsulamento, que é a ação (ou ações) de “esconder” atributos de uma classe, para evitar acesso indevido a atributos importantes ou dados sensíveis, ou que métodos sejam utilizados de forma errada;
Como utilizar a sintaxe de atributos privados do JavaScript, através do prefixo #, para que a própria linguagem de programação faça a “segurança” da classe, impedindo o acesso externo a propriedades e métodos assinalados como privados com este prefixo;
A criar métodos assessors para “expôr” e permitir acesso e modificação de propriedades de forma controlada e restrita, através do uso das funções get para retornar dados específicos e set para definir dados específicos. */