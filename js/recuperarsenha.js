// Aguarda o carregamento completo do DOM antes de executar o script
document.addEventListener('DOMContentLoaded', function () {
    // Seleciona o formulário de recuperação de senha usando o ID
    var recoverForm = document.getElementById('recover-form');
    // Seleciona o elemento de mensagem de confirmação usando o ID
    var confirmationMessage = document.getElementById('confirmation-message');
    // Verifica se o formulário de recuperação de senha foi encontrado
    if (recoverForm) {
        // Adiciona um ouvinte de evento para o envio do formulário
        recoverForm.addEventListener('submit', function (event) {
            event.preventDefault(); // Impede o envio real do formulário
            // Esconde o formulário de recuperação de senha após o envio
            recoverForm.style.display = 'none';
            // Mostra a mensagem de confirmação
            confirmationMessage.style.display = 'block';
        });
    }
});
