/* Percorrendo objetos
PRÓXIMA ATIVIDADE

Nas aulas anteriores aprendemos que o JavaScript traz uma série de métodos próprios que nos ajudam a trabalhar com objetos. Um exemplo disso é o método for … In que permite a iteração sobre as propriedades de um objeto como em um array. Sabendo disso, observe o código que define um objeto do tipo paciente: */

const paciente = {
    nome: "James T.",
    idade:30,
    email: "jt@email.com",
    identicacao: "Alpha01259859",
    funcao:"comandante",
    peso:80.1,
    altura:1.80,
    calcularIMC:function(){
          return (this.peso/(Math.pow(this.altura,2)))
    },
    nomeCompleto:function(){
      console.log(this.nome)
    }
    
}
let dados = "";
    for (let info in paciente) {
    if (typeof paciente[info] === "object" || typeof paciente[info] === "function") {
      continue
    } else {
      dados += `
      ${info} ==> ${paciente[info]}`
    }
};

console.log(dados)

   /* let relatorio = "";
 // typeof verifica qual tipo é se é objeto ou funçao, string..

for (let info in cliente){
    if(typeof cliente[info] === "object" || typeof cliente[info] === "function"){
        
        continue
    }else{
        relatorio += `
        ${info} => ${cliente[info]}
        `
    }
} */
   
  
 
