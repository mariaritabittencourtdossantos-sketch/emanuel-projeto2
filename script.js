const botaoModo = document.getElementById('toggle-mode');

botaoModo.addEventListener('click', () => {
    // Liga ou desliga a classe 'light-mode' no corpo do site
    document.body.classList.toggle('light-mode');
    
    // Altera o texto do botão dependendo do modo ativo
    if (document.body.classList.contains('light-mode')) {
        botaoModo.textContent = 'Modo Escuro';
    } else {
        botaoModo.textContent = 'Modo Claro';
    }
});
