/* Para saber mais: spread operator
PRÓXIMA ATIVIDADE

No vídeo anterior vimos um exemplo de uso do spread operator, também conhecido como sintaxe de espalhamento ou operador de espalhamento. Este operador copia as propriedades de objetos para outros, “espalhando” os conteúdos. Para entender melhor, vamos ver mais alguns exemplos:

const fichaGuerreiro = {
 nome: "Aragorn",
 classe: "guerreiro"
}

const equipoGuerreiro = {
 espada: "Andúril",
 capa: "capa élfica +2"
}COPIAR CÓDIGO
Ainda usando o exemplo acima, agora vamos tentar juntar esses dois objetos em apenas um, que vamos chamar de personagens. Em um primeiro teste, vamos criar um novo objeto literal com { } e passar para este objeto as variáveis de cada personagem:

const guerreiro = { fichaGuerreiro, equipoGuerreiro }
console.log(guerreiro)COPIAR CÓDIGO
O resultado no console não é exatamente o que queremos, pois os objetos ainda estão separados. Porém, agora o nome de cada variável é uma chave e o valor da chave é cada um dos objetos:

{
  fichaGuerreiro: { nome: 'Aragorn', classe: 'guerreiro' },
  equipoGuerreiro: { espada: 'Andúril', capa: 'capa élfica +2' }
}COPIAR CÓDIGO
Aqui é onde vamos utilizar o spread operator, adicionando a sintaxe de três pontos (reticências) antes do nome de cada objeto literal, separando-os com uma vírgula:

const guerreiro = { ...fichaGuerreiro, ...equipoGuerreiro }
console.log(guerreiro)COPIAR CÓDIGO
Após usar o spread operator, o console vai mostrar o resultado esperado, que é:

{
 nome: 'Aragorn',
 classe: 'guerreiro',
 espada: 'Andúril',
 capa: 'capa élfica +2'
}COPIAR CÓDIGO
Importante! Vale notar que, caso a sintaxe de espalhamento seja usada em objetos que tenham chaves/propriedades com o mesmo nome, o JavaScript vai sobrescrever o valor destas propriedades à medida que encontra novos valores com o mesmo nome de chave. Por exemplo:

const mago = {
 nome: "Gandalf",
 classe: "mago"
}
 const guerreiro = {
 nome: "Aragorn",
 classe: "guerreiro"
}

const ranger = {
 nome: "Legolas",
 classe: "ranger"
}COPIAR CÓDIGO
Os três objetos acima têm as mesmas propriedades. Mas o que acontece se tentarmos “espalhar” os dados em um único objeto com o spread operator? Vamos ver:

const personagens = { ...mago, ...guerreiro, ...ranger }
console.log(personagens)COPIAR CÓDIGO
Fazendo isso o resultado não será bem o que esperamos:

{ nome: 'Legolas', classe: 'ranger' }COPIAR CÓDIGO
Perceba que o JavaScript sobrescreve as chaves com o mesmo nome a cada ocorrência, fazendo com que o resultado final seja somente o último objeto declarado dentro do objeto personagens.

Apesar de prático, o uso da sintaxe de espalhamento pode gerar bastante processamento, então deve ser usado com cuidado em caso de loops ou funções recursivas.

Caso queira, temos outra explicação deste processo aqui no artigo ES6 - Desestruturando objetos presente na nossa plataforma.

Você sabia que também é possível utilizar esta sintaxe com arrays? Confira mais exemplos disso neste Alura+ abaixo.

https://www.youtube.com/watch?v=f8a-qwKC5yk&embeds_euri=https%3A%2F%2Fcursos.alura.com.br%2F&source_ve_path=MjM4NTE&feature=emb_title&ab_channel=Alura
 */