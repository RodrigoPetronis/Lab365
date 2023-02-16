/* Faça uma lista de tarefas diárias (strings), e crie 4 funções diferentes.
01. Função que busca se a tarefa existe na lista.
02. Função que altera um item da lista.
03. Função que deleta um item da lista
04. Função que adiciona um item na lista */

const inputData = document.querySelector("#inputData")
const btn = document.querySelector("#btn")
const list = document.querySelector("#list")
const searchBtn = document.querySelector("#searchBtn")
const alterar = document.querySelector("#alterar")
const remover = document.querySelector("#remover")

let entrada = [] 

function clearInput(){
  inputData.value = ""
  inputData.focus()
}

//Função para adicionar no array
btn.addEventListener("click",()=>{
  entrada.push(inputData.value)
  list.innerHTML = `${entrada}`
  clearInput()
})

//Função para pesquisar no array
searchBtn.addEventListener("click",()=>{
 entrada.filter((e)=>{
    if(inputData.value === e){
      alert(`A tarefa ${inputData.value} consta na lista`)
    }
  })
  list.innerHTML = `${entrada}`
  clearInput()

})

 //Função para alterar uma tarefa no array
alterar.addEventListener("click",()=>{
  let item = entrada.indexOf(inputData.value)
  let itemAdd = prompt("Qual o nome da nova tarefa?")
  entrada.splice(item,1,itemAdd)
  list.innerHTML = `${entrada}`
  clearInput()
}) 


remover.addEventListener("click",(e)=>{
  const newArray = entrada.filter((e)=>{
    if(inputData.value !== e ){
      return e
    }
  })
  entrada = newArray
  list.innerHTML = `${entrada}`
  clearInput()
})

/* function createElement(){
  var element = document.createElement("li")
  var text = document.createTextNode(`${inputData.value}`)
  element.appendChild(text)
  list.appendChild(element)
} */
  