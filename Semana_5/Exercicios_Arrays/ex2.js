/* Dada a seguinte lista, de forma decrescente, retorne os dados das 2 listas de forma agrupada, 
pela seguinte ordem.

usuarios - Crescente: ['Pedro', ‘José', ‘Aderbal', ‘Danilo', 'Luisa', 'Vitoria']

frutas - Descrescente:[ “Banana”, “Morango”, “Maçã”, “Uva”, “Pêra” , “Laranja“]

Resultado esperado: ['Pedro - Laranja', ‘José - Pêra’, 'Aderbal - Uva', 'Danilo - Maçã', 'Luisa - Morango', 'Vitoria - Banana' ] */

const usuarios = ["Pedro", "José", "Aderbal", "Danilo", "Luisa", "Vitoria"]

const frutas = [ "Banana", "Morango", "Maçã", "Uva", "Pêra" , "Laranja"]

const frutas2 = frutas.reverse()

let newArray = []

for(let i=0; i<usuarios.length;i++){
    newArray.push(usuarios[i])
    newArray.push(frutas2[i])
}

console.log(newArray)