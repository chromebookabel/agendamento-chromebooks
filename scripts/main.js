let btnCarrinho1 = document.querySelector('.carrinho1')
let btnCarrinho2 = document.querySelector('.carrinho2')
let btnCarrinho3 = document.querySelector('.carrinho3')

// Função para verificar se é um dispositivo móvel
function isMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

// Função para redirecionar para a página especificada
function redirecionar(pagina) {
    if(isMobile()) {
        setTimeout(function() {
            /* window.open(pagina, '_blank'); */
            window.location.href = pagina;
        }, 1500)
    }
    else {
        setTimeout(function() {
            window.open(pagina, '_blank');
        }, 800)
    }
}