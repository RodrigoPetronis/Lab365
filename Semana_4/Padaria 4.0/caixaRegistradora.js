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

export class CaixaRegistradora {
    totalCaixa = 0;


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
        this.estoque.forEach(e => {
            if (estoque.codigoBarra === e) {
                console.log("Teste")
                return caixa = estoque.preco * quantidade
            }
        })
    }

    /* 6. Defina um método que você consiga verificar o valor total da conta do cliente. */

    valorTotal() {
        totalCaixa += caixa
    }

    /* 7. Defina um método fecharConta, no qual você passa o dinheiro e ele calcula o troco e zera a caixa registradora.*/

    fecharConta() {
        pagamento = prompt(`O total foi R$ ${this.totalCaixa}. O total recebido do cliente foi quanto?:  `)

        if (pagamento >= this.totalCaixa) {
            return (`O troco será de ${this.pagamento - this.totalCaixa}`)
        } else {
            return (` O total recebido não é o suficiente para pagar a conta`)
        }

    }

}

let estoque = new CaixaRegistradora()

btnAdicionar.addEventListener("click", () => {
    estoque.adicionarProdutos(addCodigoBarra.value, addPreco.value, addProduto.value, addQuantidade.value)
})
console.log(estoque)

btnCaixa.addEventListener("click", () => {
    estoque.leitor(codigoBarra.value, quantidade.value)
    
})
