import User from "./3.2 herancaClasse _User";


class Admin extends User{
    constructor(nome, email,nascimento,role='admin',ativo =true) {
       super(nome, email,nascimento,role,ativo)
    }
}
const novoAdmin =new Admin ('joao', 'J@J.com', '2010-02-02')
console.log(novoAdmin)
console.log(novoAdmin.exibirInfos())
