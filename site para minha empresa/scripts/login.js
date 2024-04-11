const btnLogin = document.getElementById("entrar")

btnLogin.addEventListener("click",(event)=>{
    event.preventDefault()
    console.log("oi")
    const senha = document.getElementById("password").value
    const email = document.getElementById("email").value
    autenticar(email,senha)
})

function autenticar(email,senha) {
    firebase.auth().signInWithEmailAndPassword(email,senha)
        .then((userCredential)=>{
            const user = userCredential.email
            console.log(user)
            window.location = "home.html"

        })
        .catch((error)=>{
            const errorCode = error.code
            const  errorMensage = error.message
            alert("Erro de autenticaçao" + errorMensage)

        })
}