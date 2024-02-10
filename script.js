function validarForm() {
    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var senha = document.getElementById("senha").value;

    // Validação simples
    if (nome === "" || email === "" || senha === "") {
        alert("Por favor, preencha todos os campos.");
        return false;
    }

    // Redireciona para a página de boas-vindas se o formulário for válido
    window.location.href = "welcome.html";
    return false;
}

