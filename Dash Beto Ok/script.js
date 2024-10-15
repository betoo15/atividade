// Alternar tema claro/escuro
const darkThemeToggle = document.getElementById("dark-theme-toggle");

// Adicionar o evento de clique ao link
darkThemeToggle.addEventListener("click", function(event) {
    event.preventDefault(); // Prevenir o comportamento padrão do link

    // Alternar a classe "dark-theme" no body
    document.body.classList.toggle("dark-theme");
});

// Geração de relatórios
document.querySelector("button[type='button']").addEventListener("click", function() {
    const selectedReport = document.querySelector("select").value;
    const reportOutput = document.querySelector(".report-output");

    if (selectedReport) {
        reportOutput.innerHTML = `<p>O relatório de ${selectedReport} foi gerado com sucesso!</p>`;
    } else {
        reportOutput.innerHTML = "<p>Por favor, selecione um tipo de relatório.</p>";
    }
});

// Prevenção de erros no formulário de configurações
const configForm = document.querySelector("form");
configForm.addEventListener("submit", function(event) {
    const email = document.getElementById("email").value;
    const password = document.getElementById("senha").value;

    if (!email || !email.includes("@")) {
        alert("Por favor, insira um e-mail válido.");
        event.preventDefault();
    } else if (password.length < 6) {
        alert("A senha deve ter pelo menos 6 caracteres.");
        event.preventDefault();
    } else {
        alert("Configurações salvas com sucesso!");
    }
});

// Adicionar tooltips
document.querySelectorAll("nav a").forEach(link => {
    link.title = `Ir para a seção ${link.textContent}`;
});

document.getElementById("email").setAttribute("title", "Digite seu endereço de e-mail");
document.getElementById("senha").setAttribute("title", "Digite sua senha (mínimo de 6 caracteres)");
document.querySelector("select").setAttribute("title", "Selecione um relatório para visualizar.");
