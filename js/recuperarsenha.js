document.addEventListener('DOMContentLoaded', function () {
    var recoverForm = document.getElementById('recover-form');
    var confirmationMessage = document.getElementById('confirmation-message');
    if (recoverForm) {
        recoverForm.addEventListener('submit', function (event) {
            event.preventDefault(); // Impede o envio real do formulário
            recoverForm.style.display = 'none'; // Esconde o formulário
            confirmationMessage.style.display = 'block'; // Mostra a mensagem de confirmação
        });
    }
});
