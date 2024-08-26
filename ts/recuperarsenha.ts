document.addEventListener('DOMContentLoaded', () => {
    const recoverForm = document.getElementById('recover-form') as HTMLFormElement;
    const confirmationMessage = document.getElementById('confirmation-message') as HTMLElement;

    if (recoverForm) {
        recoverForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Impede o envio real do formulário
            recoverForm.style.display = 'none'; // Esconde o formulário
            confirmationMessage.style.display = 'block'; // Mostra a mensagem de confirmação
        });
    }
});
