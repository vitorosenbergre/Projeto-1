document.addEventListener('DOMContentLoaded', () => {
    const btnLogin = document.getElementById('btn-login') as HTMLButtonElement;
    const btnRegister = document.getElementById('btn-register') as HTMLButtonElement;
    const formLogin = document.getElementById('form-login') as HTMLElement;
    const formRegister = document.getElementById('form-register') as HTMLElement;
    const btnBg = document.querySelector('.btn-bg') as HTMLElement;
    const form = document.querySelector('form') as HTMLFormElement;
    const inputs = form.querySelectorAll('input[type="text"], input[type="email"], input[type="password"]');
    

    btnLogin.addEventListener('click', () => {
        formLogin.classList.add('active');
        formRegister.classList.remove('active');
        btnLogin.classList.add('active');
        btnRegister.classList.remove('active');
        btnBg.style.left = '0';
    });

    btnRegister.addEventListener('click', () => {
        formRegister.classList.add('active');
        formLogin.classList.remove('active');
        btnRegister.classList.add('active');
        btnLogin.classList.remove('active');
        btnBg.style.left = '50%';
    });

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        if (validateForm(this as HTMLFormElement)) {
            showSubmissionFeedback();
        }
    });

    // Validação dos formulários com mensagens de erro detalhadas
    function validateForm(form: HTMLFormElement): boolean {
        let isValid = true;
        const inputs = form.querySelectorAll('input');

        inputs.forEach(input => {
            let errorElement = input.nextElementSibling as HTMLElement;
            if (!errorElement || !errorElement.classList.contains('error-message')) {
                errorElement = document.createElement('div');
                errorElement.className = 'error-message';
                input.parentNode?.insertBefore(errorElement, input.nextSibling);
            }

            if (input.value.trim() === '') {
                input.classList.add('invalid');
                input.classList.remove('valid');
                errorElement.textContent = `O campo ${input.placeholder.toLowerCase()} não pode estar vazio.`;
                isValid = false;
            } else if (input.type === 'email' && !validateEmail(input.value)) {
                input.classList.add('invalid');
                input.classList.remove('valid');
                errorElement.textContent = "Por favor, insira um endereço de e-mail válido.";
                isValid = false;
            } else if (input.type === 'password' && input.value.length < 8) {
                input.classList.add('invalid');
                input.classList.remove('valid');
                errorElement.textContent = "A senha deve ter pelo menos 8 caracteres.";
                isValid = false;
            } else {
                input.classList.remove('invalid');
                input.classList.add('valid');
                errorElement.textContent = '';
            }
        });

        return isValid;
    }

    function validateEmail(email: string): boolean {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    inputs.forEach(input => {
        input.addEventListener('input', function () {
            const inputElement = input as HTMLInputElement;
            inputElement.classList.remove('invalid');
            inputElement.classList.remove('valid');
            let errorElement = inputElement.nextElementSibling as HTMLElement;
            if (errorElement && errorElement.classList.contains('error-message')) {
                errorElement.textContent = '';
            }
        });
    });

    function showSubmissionFeedback() {
        const feedbackElement = document.createElement('div');
        feedbackElement.className = 'submission-feedback';
        feedbackElement.textContent = 'Formulário enviado com sucesso!';
        document.body.appendChild(feedbackElement);

        setTimeout(() => {
            feedbackElement.classList.add('fade-out');
            setTimeout(() => {
                feedbackElement.remove();
            }, 1000);
        }, 2000);
    }
});
