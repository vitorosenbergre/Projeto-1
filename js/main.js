// Aguarda o carregamento completo do DOM antes de executar o script
document.addEventListener('DOMContentLoaded', function () {
    // Seleciona os botões de login e cadastro
    var btnLogin = document.getElementById('btn-login');
    var btnRegister = document.getElementById('btn-register');
    // Seleciona os formulários de login e cadastro
    var formLogin = document.getElementById('form-login');
    var formRegister = document.getElementById('form-register');
    // Seleciona o fundo animado dos botões
    var btnBg = document.querySelector('.btn-bg');
    // Seleciona o primeiro formulário da página
    var form = document.querySelector('form');
    // Seleciona todos os campos de entrada de texto, e-mail e senha
    var inputs = form.querySelectorAll('input[type="text"], input[type="email"], input[type="password"]');
    // Evento de clique para alternar para o formulário de login
    btnLogin.addEventListener('click', function () {
        // Exibe o formulário de login e esconde o de cadastro
        formLogin.classList.add('active');
        formRegister.classList.remove('active');
        // Altera o estilo dos botões para indicar o botão ativo
        btnLogin.classList.add('active');
        btnRegister.classList.remove('active');
        // Move o fundo animado para o botão de login
        btnBg.style.left = '0';
    });
    // Evento de clique para alternar para o formulário de cadastro
    btnRegister.addEventListener('click', function () {
        // Exibe o formulário de cadastro e esconde o de login
        formRegister.classList.add('active');
        formLogin.classList.remove('active');
        // Altera o estilo dos botões para indicar o botão ativo
        btnRegister.classList.add('active');
        btnLogin.classList.remove('active');
        // Move o fundo animado para o botão de cadastro
        btnBg.style.left = '50%';
    });
    // Evento de submissão do formulário
    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Impede o envio do formulário
        if (validateForm(this)) { // Valida o formulário
            showSubmissionFeedback(); // Exibe uma mensagem de feedback
        }
    });
    // Função para validar o formulário
    function validateForm(form) {
        var isValid = true;
        var inputs = form.querySelectorAll('input'); // Seleciona todos os campos de entrada
        // Itera sobre cada campo de entrada para validar
        inputs.forEach(function (input) {
            var _a;
            var errorElement = input.nextElementSibling;
            if (!errorElement || !errorElement.classList.contains('error-message')) {
                // Cria um elemento para exibir a mensagem de erro se ele não existir
                errorElement = document.createElement('div');
                errorElement.className = 'error-message';
                (_a = input.parentNode) === null || _a === void 0 ? void 0 : _a.insertBefore(errorElement, input.nextSibling);
            }
            // Verifica se o campo está vazio
            if (input.value.trim() === '') {
                input.classList.add('invalid'); // Marca o campo como inválido
                input.classList.remove('valid');
                errorElement.textContent = "O campo ".concat(input.placeholder.toLowerCase(), " n\u00E3o pode estar vazio.");
                isValid = false;
            }
            // Verifica se o campo de e-mail é válido
            else if (input.type === 'email' && !validateEmail(input.value)) {
                input.classList.add('invalid'); // Marca o campo como inválido
                input.classList.remove('valid');
                errorElement.textContent = "Por favor, insira um endereço de e-mail válido.";
                isValid = false;
            }
            // Verifica se a senha tem pelo menos 8 caracteres
            else if (input.type === 'password' && input.value.length < 8) {
                input.classList.add('invalid'); // Marca o campo como inválido
                input.classList.remove('valid');
                errorElement.textContent = "A senha deve ter pelo menos 8 caracteres.";
                isValid = false;
            }
            else {
                input.classList.remove('invalid');
                input.classList.add('valid'); // Marca o campo como válido
                errorElement.textContent = ''; // Limpa a mensagem de erro
            }
        });
        return isValid;
    }
    // Função para validar endereços de e-mail usando uma expressão regular
    function validateEmail(email) {
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    // Função para exibir uma mensagem de feedback após a submissão
    function showSubmissionFeedback() {
        alert('Formulário enviado com sucesso!');
    }
});
