/* Um banco contratou você para criar uma classe que opere as contas do banco utilizando orientação a objetos.

Crie uma classe chamada Conta

A classe conta recebe dois atributos: saldo e senha(privado), e dois métodos deposito e retirada. 
o método deposito adiciona valor ao saldo (o usuário deve passar a senha, e ela deve ser igual à senha 
    determinada no atributo), e o depósito retira valor do saldo.

Por fim, instancie um objeto chamado contaCorrente e teste as operações. */


export class Conta {
    saldo
    #senha
    valor
    constructor(saldo, senha) {
        this.saldo = saldo
        this.#senha = senha
    }

    setSaldo(valor){
        this.saldo = valor
    }
    
    getSaldo() {
        return this.saldo
    }

    deposito(quantia, senha) {

        if (senha === this.#senha) {
            this.valor = Number(quantia)
            this.saldo += this.valor
            //this.mostrarTotal()
        } else {
            alert("Senha Incorreta!")
        }
    }

    retirada(quantia, senha) {
        
        if (senha === this.#senha) {
            this.valor = Number(quantia)
            if(this.valor > this.saldo){
                alert("Saque não permitido. Saldo Insuficiente!")
            }else{
                this.saldo -= this.valor
               // this.mostrarTotal()
            }
        } else {
            alert("Senha Incorreta!")
        }
    }

    

}