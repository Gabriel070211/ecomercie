
const registerUser = document.getElementById("register-user")

registerUser.addEventListener("click",(event)=>{
    event.preventDefault()
    const email = document.getElementById("email").value
    const password = document.getElementById("password-register").value
    const  confirmePassword = document.getElementById("password-confirme").value

    if(password !== confirmePassword){
        alert("As senhas não coincidem")
        return;
    }
    auth.createUserWithEmailAndPassword(email,password)
        .then((userCredential)=>{
            alert("Usuário registrado com sucesso!!! ")
            window.location = "index.html"
        })
        .catch((error)=>{
            let errorMessage = error.message 
            alert(errorMessage)
        })
})
