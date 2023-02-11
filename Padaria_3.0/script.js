const price = document.querySelector("#preco")
const product = document.querySelector("#produto")
const btn = document.querySelector("#btn")
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