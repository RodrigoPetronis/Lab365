const campo = document.querySelector("#campo")
const btn = document.querySelector("#btn")
const lista = document.querySelector("#lista")


btn.addEventListener("click", calc)

function calc(){
    lista.innerHTML = `Lista com o preço das unidades abaixo`
    for (let i = 1; i <= 50; i++) {
       let resultado= campo.value * i; 
       
       let elemento = document.createElement("li")
       let texto = document.createTextNode(`${i}: R$:${resultado}`)
       elemento.appendChild(texto)
       lista.appendChild(elemento)
       
    }
}