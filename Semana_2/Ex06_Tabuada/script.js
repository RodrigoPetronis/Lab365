const num = document.querySelector("#num")
const btn = document.querySelector("#btn")
//const res = document.querySelector("#res")

btn.addEventListener("click", () =>{
    
    for(i=1;i<=10;i++){
        let resultado = (num.value) * i;
        console.log(resultado)

        const elemento = document.createElement("li")
        const text = document.createTextNode(`${num.value} X ${i} = ${resultado}`)
        elemento.appendChild(text)
        document.querySelector("#res").appendChild(elemento)
        
    }
})