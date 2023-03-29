//var não é mais utiliada por ser extremanente versatil

/*var altura = 5;
var comprimento = 7;

area = altura * comprimento;
console.log (area);
var area;*/

// let forma = 'retangulo';
// let altura = 5;
// let comprimento = 7;
// let area;

// if (forma === 'retangulo'){
//     area = altura*comprimento;
// } else {
//     area = (altura*comprimento)/2
// }
// console.log(area)

const forma = 'quadrado';
const altura = 5;
const comprimento = 7;
let area; //pq o cosnt nao permite usar uma variavel sem um valor

if (forma === 'quadrado'){
    area = altura*comprimento;
} else {
    area = (altura*comprimento)/2
}
console.log(area)