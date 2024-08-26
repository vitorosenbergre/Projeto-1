// Aguarda o carregamento completo do DOM antes de executar o script
document.addEventListener('DOMContentLoaded', () => {
    // Seleciona os botões de login e cadastro
    const btnLogin = document.getElementById('btn-login') as HTMLButtonElement;
    const btnRegister = document.getElementById('btn-register') as HTMLButtonElement;

    // Seleciona os formulários de login e cadastro
    const formLogin = document.getElementById('form-login') as HTMLElement;
    const formRegister = document.getElementById('form-register') as HTMLElement;

    // Seleciona o fundo animado dos botões
    const btnBg = document.querySelector('.btn-bg') as HTMLElement;

    // Seleciona o primeiro formulário da página
    const form = document.querySelector('form') as HTMLFormElement;

    // Seleciona todos os campos de entrada de texto, e-mail e senha
    const inputs = form.querySelectorAll('input[type="text"], input[type="email"], input[type="password"]');

    // Evento de clique para alternar para o formulário de login
    btnLogin.addEventListener('click', () => {
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
    btnRegister.addEventListener('click', () => {
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
        if (validateForm(this as HTMLFormElement)) { // Valida o formulário
            showSubmissionFeedback(); // Exibe uma mensagem de feedback
        }
    });

    // Função para validar o formulário
    function validateForm(form: HTMLFormElement): boolean {
        let isValid = true;
        const inputs = form.querySelectorAll('input'); // Seleciona todos os campos de entrada

        // Itera sobre cada campo de entrada para validar
        inputs.forEach(input => {
            let errorElement = input.nextElementSibling as HTMLElement;
            if (!errorElement || !errorElement.classList.contains('error-message')) {
                // Cria um elemento para exibir a mensagem de erro se ele não existir
                errorElement = document.createElement('div');
                errorElement.className = 'error-message';
                input.parentNode?.insertBefore(errorElement, input.nextSibling);
            }

            // Verifica se o campo está vazio
            if (input.value.trim() === '') {
                input.classList.add('invalid'); // Marca o campo como inválido
                input.classList.remove('valid');
                errorElement.textContent = `O campo ${input.placeholder.toLowerCase()} não pode estar vazio.`;
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
    function validateEmail(email: string): boolean {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Função para exibir uma mensagem de feedback após a submissão
    function showSubmissionFeedback(): void {
        alert('Formulário enviado com sucesso!');
    }
});
