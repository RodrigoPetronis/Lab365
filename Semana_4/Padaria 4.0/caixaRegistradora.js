/* Defina um atributo que armazene vários produtos no estoque contendo os seguintes campos:
   [{
   codigoBarra:number;
   preco:number;
   nome:string;
   }] */

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

export class CaixaRegistradora {

    estoque = [{

    }]

    constructor(codigoBarra, preco, nome, quantidade) {
        this.estoque.codigoBarra = codigoBarra
        this.estoque.preco = preco
        this.estoque.nome = nome
        this.estoque.quantidade = quantidade
    }

    /* 3. Defina um método no qual o seu Manoel consiga adicionar novos produtos no estoque.
Esse método recebe os mesmos campos do produto, e todos eles são obrigatórios.
*/

    adicionarProdutos(codigoBarra, preco, nome, quantidade) {
        if (!codigoBarra || !preco || !nome || !quantidade) {
            throw new Error("É necessário informar todos os dados do produto!")
        } else {
            this.estoque.push(
                {
                    codigoBarra,
                    preco,
                    nome,
                    quantidade
                }
            )
        }
    }


    /* 4. Defina um método que inicie o atendimento ao cliente, você deve passar o nome do cliente para iniciar. */

    nomeCliente() {
        nomeCliente = prompt("Qual o nome do cliente? ")
    }

    /* 5. Defina um método que receba codigoBarra: number; e quantidade: number; para o seu Manoel conseguir 
    adicionar itens na caixa registradora. 
    Importante: A aplicação só poderá adicionar itens na caixa, se o código de barra dele existir. */

    leitor(codigoBarra, quantidade) {

        for (let i = 0; i < produtos.estoque.length; i++) {

            if (produtos.estoque[i].codigoBarra == codigoBarra) {
                caixa = produtos.estoque[i].preco * quantidade
                totalCaixa += caixa
                return caixa
            }


        }
    }

    /* 6. Defina um método que você consiga verificar o valor total da conta do cliente. */

    valorTotal() {

        return totalCaixa
    }

    /* 7. Defina um método fecharConta, no qual você passa o dinheiro e ele calcula o troco e zera a caixa registradora.*/

    fecharConta() {
        let fechandoConta = prompt(`A sua conta deu um total de R$${this.valorTotal()}  Quanto vai dar de dinheiro?`)
        let troco = fechandoConta - this.valorTotal()
        if (troco > 0) {
            alert(` O troco vai ser de R$${troco}`)
        } else {
            alert(`Dinheiro não é suficiente`)
        }

    }

}

let produtos = new CaixaRegistradora()

btnAdicionar.addEventListener("click", () => {
    produtos.adicionarProdutos(addCodigoBarra.value, addPreco.value, addProduto.value, addQuantidade.value)
})


btnCaixa.addEventListener("click", () => {
    valorTotal.innerHTML = `R$${produtos.valorTotal()}`
})

fecharConta.addEventListener("click", () => produtos.fecharConta())
