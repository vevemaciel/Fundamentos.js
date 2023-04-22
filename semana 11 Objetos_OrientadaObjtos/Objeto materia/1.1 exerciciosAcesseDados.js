const pet = {
    nome: "Rex",
    dataDeNascimento: "12/03/2017",
    brinquedoFavorito: "bolinha",
    cor: "cinza",
  };

  console.log(pet["brinquedoFavorito"])

  /* 06
Acesse os dados
PRÓXIMA ATIVIDADE

No JavaScript, vimos que objetos são estruturas de dados compostas por chave e valor, informações que ajudam a representar algo da vida real ou um conjunto de informações que faz sentido quando agrupado. Observe a representação abaixo:

const pet = {
  nome: "Rex",
  dataDeNascimento: "12/03/2017",
  brinquedoFavorito: "bolinha",
  cor: "cinza",
};COPIAR CÓDIGO
Usando a representação desse objeto armazenado na variável pet, assinale as alternativas que retornam com sucesso o valor de alguma de suas propriedades:

Alternativa correta
Ao tentar acessar pet.nome() iremos obter a string ”Rex”.


Alternativa correta
Ao tentar acessar pet[0] iremos obter a string ”Rex”.


Alternativa correta
Ao tentar acessar pet[cor] iremos obter a string ”cinza”.


Alternativa correta
Ao tentar acessar pet.dataDeNascimento iremos obter a string ”12/03/2017”.


Podemos usar o operador . para acessar as propriedades que já conhecemos de um objeto.

Alternativa correta
Ao tentar acessar pet[“brinquedoFavorito”] iremos obter a string ”bolinha”.


Podemos utilizar o nome da propriedade como string dentro de colchetes [“propriedade”] para acessar as propriedades de um objeto de forma mais dinâmica. */