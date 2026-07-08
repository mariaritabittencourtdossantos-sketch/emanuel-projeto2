const botaoModo = document.getElementById('toggle-mode');

botaoModo.addEventListener('click', () => {
    // Alterna a classe do modo claro no body
    document.body.classList.toggle('light-mode');
    
    // Verifica qual modo está ativo para atualizar o texto do botão
    if (document.body.classList.contains('light-mode')) {
        botaoModo.textContent = 'Modo Escuro';
    } else {
        botaoModo.textContent = 'Modo Claro';
    }
});
