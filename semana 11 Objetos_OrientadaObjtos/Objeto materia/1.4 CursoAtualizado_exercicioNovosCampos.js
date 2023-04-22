
/* 
Novos campos Usando a representação do objeto pessoa, foi solicitado que adicionássemos os campos seguro social e cpf no formato string. Além disso, quando forem exibidas as informações da pessoa em um relatório, deverão aparecer somente os 4 primeiros dígitos do CPF e da carteira de identidade.

Sabendo disso, analise as afirmações abaixo e selecione a verdadeira: 
Considere o seguinte código:*/
const pessoa = {
    nome:"Bruce Banner",
    dataNascimento:"25/01/1980",
    carteiraIdentidade:"997776-X",
    email:"profbanner@email.com",
    telefone:"+552877776666",
    cidade:"Cachoeiro de Itapemirim",
    estado:"ES"
}
pessoa.SeguroSocial= "1234567";
pessoa.CPF="12345678901";

console.log(pessoa, pessoa.CPF.substring(0,4))

/* Para adicionar as novas propriedades precisamos somente informar o novo campo e o seu valor, ou seja,pessoa.cpf="15346626522-65" e pessoa.seguroSocial="854321985-9" .Para exibir os 4 primeiros dígitos da identidade e CPF, podemos chamar uma função de string chamada substring() e passar início e o fim da string que queremos como pessoa.cpf.substring(0,4).


É isso mesmo! Podemos usar a notação de ponto para adicionar novos campos a objetos já criados, lembrando de iniciar o campo adicionado. Como os campos identidade e CPF são do tipo string, podemos invocar o método substring() passando para a função a faixa da string que queremos retornar. */