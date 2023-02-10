const btn = document.querySelector("#btn")
const res = document.querySelector("#res")



btn.addEventListener("click", ()=>{
    let num = 10
const intervalo = setInterval(cronometro, 1000)

function cronometro(){
    res.innerHTML = (num)
    if(num === 0){
        alert("O tempo acabou!!")
        clearInterval(intervalo)
    }else{
        num--
    }
    
}
})