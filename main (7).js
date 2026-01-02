const nomeInput = document.getElementById("nome");
const obrigadorio = document.getElementById("mensagem");
nomeInput.addEventListener("input",function () {
if (nomeInput.value.length < 3) {
        obrigadorio.textContent = "o nome deve ter no mínimo 3 caracteres";
        nomeInput.style.borderColor = "red";
        obrigadorio.style.color = "red";
    } else {
        obrigadorio.textContent = "nome válido";
        obrigadorio.style.color = "green";
        

    }
    
});
const emailInput = document.getElementById("email");
const email = document.getElementById("mensag");


function validarEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

emailInput.addEventListener("input", function() {
    if (validarEmail(emailInput.value)) {
        emailInput.style.borderColor = "green";
        mensag.textContent = "e-mail valido";
    } else {
        emailInput.style.borderColor = "red";
        mensag.textContent = "e-mail inválido";
        
    }
    
});



