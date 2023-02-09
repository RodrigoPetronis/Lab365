
const usuario = "admin";
const senha = 0000;

const user = document.querySelector("#user")
const password = document.querySelector("#password")
const button = document.querySelector("#button")



function logar(){
    console.log(user.value)    
    console.log(password.value)
    if(user.value == usuario && password.value == senha){
        alert("Você está logado!")
    }else{
        alert("Usuário ou senha incorreta")
    }
}





