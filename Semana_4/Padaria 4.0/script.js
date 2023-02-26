import { CaixaRegistradora } from "./caixaRegistradora";

const addCodigoBarra = document.querySelector("#addCodigoBarra")
const addPreco = document.querySelector("#addPreco")
const addProduto = document.querySelector("#addProduto")
const addQuantidade = document.querySelector("#addQuantidade")
const btnAdicionar = document.querySelector("#btnAdicionar")

const codigoBarra = document.querySelector("#codigoBarras")
const quantidade = document.querySelector("#quantidade")
const btnCaixa = document.querySelector("#btnCaixa")
let caixa = 0
let totalCaixa = 0

const valorTotal = document.querySelector("#valorTotal")

const fecharConta = document.querySelector("#fecharConta")




let produtos = new CaixaRegistradora()

btnAdicionar.addEventListener("click", () => {
    produtos.adicionarProdutos(addCodigoBarra.value, addPreco.value, addProduto.value, addQuantidade.value)
})
console.log(produtos)

btnCaixa.addEventListener("click", () => {
   console.log(produtos.leitor(codigoBarra.value, quantidade.value))
  
   valorTotal.innerHTML = `R$${produtos.valorTotal()}`
})

fecharConta.addEventListener("click", ()=>{
   let fechandoConta = prompt(`A sua conta deu um total de R$${produtos.valorTotal()}  Quanto vai dar de dinheiro?`)
   let troco = fechandoConta - produtos.valorTotal()
   if(troco > 0){
    alert(` O troco vai ser de ${troco}`)
   }else{
    alert(`Dinheiro não é suficiente`)
   }
   
})
