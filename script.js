const botaoModo = document.getElementById('toggle-mode');

botaoModo.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    
    if (document.body.classList.contains('light-mode')) {
        botaoModo.textContent = 'Modo Escuro';
    } else {
        botaoModo.textContent = 'Modo Claro';
    }
});
