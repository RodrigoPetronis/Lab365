/* Utilizar o array de objetos:

`[`

   `{nome: "luis", idade: 26},`

   `{nome: "norma", idade: 16},`

   `{nome: "daiana", idade: 26},`

   `{nome: "jorge", idade: 16},`

   `{nome: "kauan", idade: 16},`

   `{nome: "charles", idade: 26},`

   `{nome: "marco", idade: 16},`

   `{nome: "bruno", idade: 16}`

`]`

‌

Retornar uma lista separada pelos usuários com idades menores de 18 e outra com os usuários maiores ou iguais a 18. */

const arrayObjetos = [

{nome: "luis", idade: 26},
{nome: "norma", idade: 16},
{nome: "daiana", idade: 26},
{nome: "jorge", idade: 16},
{nome: "kauan", idade: 16},
{nome: "charles", idade: 26},
{nome: "marco", idade: 16},
{nome: "bruno", idade: 16}

]

const menor = []
const maior = []

arrayObjetos.forEach((e)=>{
    if(e.idade < 18){
        menor.push(e)
    }else{
        maior.push(e)
    }
})

console.log(maior)
console.log(menor)