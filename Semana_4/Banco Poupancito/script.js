import { Conta } from "./conta.js"
import { ContaPoupanca } from "./contaPoupanca.js"
import {PoupancaPremium} from "./contaPoupancaPremium.js"


//Campo para adicionar quantia
let quantia = document.querySelector("#quantia")

//intanciando a classe Conta
const conta = new Conta(0, "1234")
const contaPoupanca = new ContaPoupanca(conta.getSaldo())
const contaPoupancaPremium = new PoupancaPremium(conta.getSaldo)

let saldo = contaPoupanca.getSaldo()

mostrarTotal()
quantia.focus()

//Efetuando deposito
let deposito = document.querySelector("#deposito")
deposito.addEventListener("click", () => {
    let password = prompt("Digite a senha para confirmar o depósito: ")
    conta.deposito(quantia.value, password)
    mostrarTotal()
    limpaCampo()
    console.log("Teste")
})

//Efetuando Saque
let saque = document.querySelector("#saque")
saque.addEventListener("click", () => {
    let password = prompt("Digite a senha para confirmar o saque")
    conta.retirada(quantia.value, password)
    mostrarTotal()
    limpaCampo()
})

//limpar Campo
function limpaCampo(){
    quantia.focus()
    quantia.value = ""
}

//Atualizando juros
const atualizarJuros = document.querySelector("#atualizarJuros")

atualizarJuros.addEventListener("click",()=>{
   contaPoupanca.atualizarJuros(conta.getSaldo())
   conta.setSaldo(contaPoupanca.getSaldo())
   mostrarTotal()
})

//Atualizando juros Premium
const atualizarJurosPremium = document.querySelector("#atualizarJurosPremium")

atualizarJurosPremium.addEventListener("click", ()=>{
    contaPoupancaPremium.atualizarJuros(conta.getSaldo())
    conta.setSaldo(contaPoupancaPremium.getSaldo())
    mostrarTotal()
})

//Mostrando o saldo em tela
function mostrarTotal() {
    let res = document.querySelector("#res")
    res.innerHTML = `Saldo Total R$${conta.getSaldo()}`
}
