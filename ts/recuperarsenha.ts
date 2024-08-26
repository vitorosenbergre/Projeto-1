// Aguarda o carregamento completo do DOM antes de executar o script
document.addEventListener('DOMContentLoaded', () => {
    // Seleciona o formulário de recuperação de senha usando o ID
    const recoverForm = document.getElementById('recover-form') as HTMLFormElement;

    // Seleciona o elemento de mensagem de confirmação usando o ID
    const confirmationMessage = document.getElementById('confirmation-message') as HTMLElement;

    // Verifica se o formulário de recuperação de senha foi encontrado
    if (recoverForm) {
        // Adiciona um ouvinte de evento para o envio do formulário
        recoverForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Impede o envio real do formulário

            // Esconde o formulário de recuperação de senha após o envio
            recoverForm.style.display = 'none';

            // Mostra a mensagem de confirmação
            confirmationMessage.style.display = 'block';
        });
    }
});
