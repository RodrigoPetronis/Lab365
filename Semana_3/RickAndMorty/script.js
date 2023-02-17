/* const somaDoisNumeros = (a,b)=>{
 return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        if(a+b ===4){
            resolve(a+b)
        }else{
            reject

        }
        
    },2000)
 })   
}
console.log(somaDoisNumeros(3,5))

const somaDoisNumeros2 = (a,b)=>{
    return new Promise((resolve,reject)=>{
       setTimeout(()=>{
           reject(a+b)
       },2000)
    })   
   }
   console.log(somaDoisNumeros2(3,5)) */


const api = "https://rickandmortyapi.com/api/character/"
let id = "1"
const img = document.querySelector("#img")


async function showInformation() {
    try {
        for (let i = 1; i < 15; i++) {
            const response = await fetch(api + i)
            const dados = await response.json()
            function information() {
                document.querySelector("#id").innerHTML = (`Id: ${dados.id}`)
                document.querySelector("#name").innerHTML = (` Nome: ${dados.name}`)
                document.querySelector("#status").innerHTML = (`Status: ${dados.status}`)
                document.querySelector("#species").innerHTML = (`Espécie: ${dados.species}`)
                //document.querySelector("#img").setAttribute(href = dados.image)
            }
            const father = document.querySelector("#main")
            const element = document.createElement("article")
            const text = information()
            element.appendChild(text)
            father.appendChild(element)
        }
    } catch (e) {

    } finally {

    }
}
showInformation()









