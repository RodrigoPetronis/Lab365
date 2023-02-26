/* Um banco contratou você para criar uma classe que opere as contas do banco utilizando orientação a objetos.

Crie uma classe chamada Conta

A classe conta recebe dois atributos: saldo e senha(privado), e dois métodos deposito e retirada. 
o método deposito adiciona valor ao saldo (o usuário deve passar a senha, e ela deve ser igual à senha 
    determinada no atributo), e o depósito retira valor do saldo.

Por fim, instancie um objeto chamado contaCorrente e teste as operações. */

class Conta {
    saldo
    senha


    constructor(saldo, senha) {
        this.saldo = saldo
        this.senha = senha
    }

    getSaldo() {
        return this.saldo
    }

    deposito(quantia, senha) {
        if (senha == this.senha) {
            this.saldo += quantia.value
            console.log(this.saldo)
        } else {
            alert("Senha Incorreta!")
        }
    }

    retirada(quantia, senha) {
        if (senha == this.senha) {
            this.saldo -= quantia.value
            
        } else {
            alert("Senha Incorreta!")
        }
    }
}

//Campo para adicionar quantia
let quantia = document.querySelector("#quantia")

//Iniciando o sistema com saldo e senha pré-definidos
let saldo = 0
let senha = 1234

//intanciando a classe
const conta = new Conta(saldo, senha)


//Efetuando deposito
let deposito = document.querySelector("#deposito")
deposito.addEventListener("click", () => {
    let password = prompt("Digite a senha para confirmar o depósito: ")
    conta.deposito(quantia.value, password)
})

//Efetuando Saque
let saque = document.querySelector("#saque")
saque.addEventListener("click", () => {
    let password = prompt("Digite a senha para confirmar o saque")
    conta.retirada(quantia.value, password)

})

//Mostrando o saldo em tela
let res = document.querySelector("#res")
res.innerHTML = `Saldo Total R$${conta.saldo}`