
const vogais = ["a","e","i","o","u"]
let cont =0
function contarVogais(valor){
    vogais.forEach((e)=>{
        if(valor.includes(e)){
            cont++
        }
    })
}

contarVogais("resultado")
console.log(cont)