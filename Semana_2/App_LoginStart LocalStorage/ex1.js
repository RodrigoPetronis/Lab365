/*Utilizar a pagina de login para criar um sistem ade autenticação utilizando localStorage.
Quando o usuário logar, salvar as credenciais localmente. Se as credenciais existirem localmente, ir
para uma pagina com um botão de logout, se elas não existirem, ir para a pagina de login.
*/




const user = document.querySelector("#user")
const password = document.querySelector("#password")
const button = document.querySelector("#button")
const login = document.querySelector("#login")
const logoutPage = document.querySelector("#logoutPage")

const createUser = document.querySelector("#createUser")
const createPassword = document.querySelector("#createPassword")
const btnCadastro = document.querySelector("#btnCadastro")

const showHide = document.querySelector("#show")

const clear = document.querySelector("#clear")



//Evento para usar ou não usuario e senha do localStorage
showHide.addEventListener("click", () => {
    if (user.value === "") {
        user.value = localStorage.user
        password.value = localStorage.password
    } else {
        user.value = ""
        password.value = ""
    }
})



//Evento na tela de login (Se senha estiver correta entra na pagina de logout)
login.addEventListener("click", () => {

    if (user.value !== localStorage.user | password.value !== localStorage.password) {
        alert("Senha Incorreta!")
    } else if (user.value == "" | password.value == "") {
        alert("Digite uma senha valida ou clique em Criar Senha!")
    } else {
        location.href = "./logout.html"
    }
})

//Evento na tela de cadastro de senha(Guarda a senha no localStorage para utliizar no login.html)
function cadastro() {
    if (createUser.value === "" | createPassword === "") {
        alert("O usuário e senha não podem estar vazios")
    } else {
        localStorage.user = createUser.value
        localStorage.password = createPassword.value
        location.href = "./login.html"

        alert("Senha cadastrada com sucesso!")
    }

}

//Evento para limpar o localStorage
clear.addEventListener("click", () => {
    localStorage.clear()
    localStorage.user = ""
    localStorage.password = ""
    console.log("Teste clear")
})

const fileInput = document.querySelector("#inputImg")
const profileImage = document.querySelector("#imgPerfil")
const changePhoto = document.querySelector("#btnChangeImg")

profileImage.addEventListener("click", () => {



})



profileImage.addEventListener("click", function () {

    fileInput.click()
    changePhoto.removeAttribute("hidden", "hidden")
})



changePhoto.addEventListener("click", () => {

    let reader = new FileReader(); //instancia o objeto FileReader que é necessário para o upload.

    reader.readAsDataURL(fileInput.files[0]); // Pega o arquivo armazenado pelo input e transforma em URL

    reader.onload = function () {
        profileImage.src = reader.result; //Faz o carregamento e Atribui o resultado do reader no profileImage(IMG)

    }

    changePhoto.setAttribute("hidden", "hidden")

})











