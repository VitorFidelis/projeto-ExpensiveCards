var panels = document.querySelectorAll('.panel');

/* O método forEach é uma ação de iteração que executa uma função para cada elemento, seja de arrays simples ou arrays de objetos. Ele também pode ser usado em Mapas e Conjuntos na matriz de dados */
panels.forEach(panel => {
    /* O método addEventListener() do JavaScript permite que você configure funções a serem chamadas quando um evento específico acontece, como, por exemplo, quando um usuário clica em um botão. */
    panel.addEventListener('click', () => {
        /* Remove todas as clases quando acontecer o evento click do panel */
        removeActiveClasses()
        /* Adiciona a classe panel quando for ativada */
        panel.classList.add('active')
    });
});

/*Qaundo  remover todas as clases quando acontecer o evento click do panel */
function removeActiveClasses(){
    /* pega todos o panel*/
    panels.forEach(panel => {
        /* Remove o panel active deixando pequeno */
        panel.classList.remove('active')
    });
}