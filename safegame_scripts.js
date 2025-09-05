// Lógica principal do site
document.addEventListener('DOMContentLoaded', () => {

    // Inicializa o Swiper para o carrossel de serviços
    const swiper = new Swiper('.mySwiper', {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            768: {
                slidesPerView: 2,
            }
        }
    });

    // Lógica para a demonstração da IA
    const aiForm = document.getElementById('ai-form');
    const aiInput = document.getElementById('ai-input');
    const aiResponseContainer = document.getElementById('ai-response');
    const aiResponseText = document.getElementById('ai-response-text');

    aiForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const userInput = aiInput.value.toLowerCase();
        aiResponseContainer.classList.add('hidden');
        aiResponseText.innerHTML = '<span class="text-gray-400">Analisando...</span>';
        aiResponseContainer.classList.remove('hidden');

        // Simulação de uma chamada de API para um modelo de IA
        setTimeout(() => {
            let analysisResult = '';
            // Verifica palavras-chave para simular a análise de risco
            if (userInput.includes('perigo') || userInput.includes('ameaça') || userInput.includes('encontrar-me')) {
                analysisResult = `<span class="text-red-500">AVISO:</span> O texto contém palavras-chave de alto risco. Um alerta foi enviado aos responsáveis.`;
            } else if (userInput.includes('olá') || userInput.includes('jogo')) {
                analysisResult = `<span class="text-green-500">SEGURO:</span> O texto parece ser uma interação normal de jogo.`;
            } else {
                analysisResult = `<span class="text-yellow-500">MODERADO:</span> O texto não contém ameaças diretas, mas recomendamos cautela.`;
            }
            aiResponseText.innerHTML = analysisResult;
        }, 1500); // Atraso para simular o tempo de processamento da IA
    });
});
