
import User from './User.js';
import Docente from "./docente.js";
import Admin from "./admin.js";



// const novoUser = new User('Mariana', 'm@m.com', '2010-02-02')
// console.log(novoUser.exibirInfos());

 const novoDocente = new Docente('Guilerme', 'g@g.com', '2006-02-02');
 console.log(novoDocente.exibirInfos());

const novoAdmin = new Admin('Rodrigo', 'r@r com', '2010-02-02');
console.log(novoAdmin.exibirInfos());
// novoAdmin.nome= ""; //  throw new Error ('Formato invalido')
// console.log(novoAdmin.nome);



// dessa forma esta exposto a alterar

/* transcricaoes 4.3 , 4.4 */