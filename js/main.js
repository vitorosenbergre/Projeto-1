document.addEventListener('DOMContentLoaded', function () {
    var btnLogin = document.getElementById('btn-login');
    var btnRegister = document.getElementById('btn-register');
    var formLogin = document.getElementById('form-login');
    var formRegister = document.getElementById('form-register');
    var btnBg = document.querySelector('.btn-bg');
    var form = document.querySelector('form');
    var inputs = form.querySelectorAll('input[type="text"], input[type="email"], input[type="password"]');
    btnLogin.addEventListener('click', function () {
        formLogin.classList.add('active');
        formRegister.classList.remove('active');
        btnLogin.classList.add('active');
        btnRegister.classList.remove('active');
        btnBg.style.left = '0';
    });
    btnRegister.addEventListener('click', function () {
        formRegister.classList.add('active');
        formLogin.classList.remove('active');
        btnRegister.classList.add('active');
        btnLogin.classList.remove('active');
        btnBg.style.left = '50%';
    });
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        if (validateForm(this)) {
            showSubmissionFeedback();
        }
    });
    // Validação dos formulários com mensagens de erro detalhadas
    function validateForm(form) {
        var isValid = true;
        var inputs = form.querySelectorAll('input');
        inputs.forEach(function (input) {
            var _a;
            var errorElement = input.nextElementSibling;
            if (!errorElement || !errorElement.classList.contains('error-message')) {
                errorElement = document.createElement('div');
                errorElement.className = 'error-message';
                (_a = input.parentNode) === null || _a === void 0 ? void 0 : _a.insertBefore(errorElement, input.nextSibling);
            }
            if (input.value.trim() === '') {
                input.classList.add('invalid');
                input.classList.remove('valid');
                errorElement.textContent = "O campo ".concat(input.placeholder.toLowerCase(), " n\u00E3o pode estar vazio.");
                isValid = false;
            }
            else if (input.type === 'email' && !validateEmail(input.value)) {
                input.classList.add('invalid');
                input.classList.remove('valid');
                errorElement.textContent = "Por favor, insira um endereço de e-mail válido.";
                isValid = false;
            }
            else if (input.type === 'password' && input.value.length < 8) {
                input.classList.add('invalid');
                input.classList.remove('valid');
                errorElement.textContent = "A senha deve ter pelo menos 8 caracteres.";
                isValid = false;
            }
            else {
                input.classList.remove('invalid');
                input.classList.add('valid');
                errorElement.textContent = '';
            }
        });
        return isValid;
    }
    function validateEmail(email) {
        var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
    inputs.forEach(function (input) {
        input.addEventListener('input', function () {
            var inputElement = input;
            inputElement.classList.remove('invalid');
            inputElement.classList.remove('valid');
            var errorElement = inputElement.nextElementSibling;
            if (errorElement && errorElement.classList.contains('error-message')) {
                errorElement.textContent = '';
            }
        });
    });
    function showSubmissionFeedback() {
        var feedbackElement = document.createElement('div');
        feedbackElement.className = 'submission-feedback';
        feedbackElement.textContent = 'Formulário enviado com sucesso!';
        document.body.appendChild(feedbackElement);
        setTimeout(function () {
            feedbackElement.classList.add('fade-out');
            setTimeout(function () {
                feedbackElement.remove();
            }, 1000);
        }, 2000);
    }
});
