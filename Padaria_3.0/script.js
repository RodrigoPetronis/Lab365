const price = document.querySelector("#preco")
const product = document.querySelector("#produto")
const btn = document.querySelector("#btn")
const finalize = document.querySelector("#finanizar")
const list = document.querySelector("#lista")

var totalPrice = 0;

btn.addEventListener("click",()=>{
  
    totalPrice+= Number(price.value)

    let element = document.createElement("li")
    let text = document.createTextNode(`Produto : ${product.value} | R$${price.value}`)
    element.appendChild(text)
    list.appendChild(element)

    document.querySelector("#res").innerHTML = `Valor Total: R$${totalPrice}`

    product.value = ""
    price.value = ""

    product.focus()
    
})

finalize.addEventListener('click',()=>{
    let calcChange = prompt(`O Total da Compra deu R$${totalPrice}!  Digite quanto o cliente deu em dinheiro:`)
    alert(`O Cliente pagou R$${calcChange}. Devolva R$${calcChange-totalPrice} de troco.`)
})