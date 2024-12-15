function updateCountdown() {
    const weddingDate = new Date('2025-09-15T16:00:00');
    const now = new Date();
    const difference = weddingDate - now;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    const countdownElement = document.getElementById('countdown');
    countdownElement.innerHTML = `
        Faltam: ${days} dias, ${hours} horas, 
        ${minutes} minutos e ${seconds} segundos
    `;
}

// Atualização de contagem regressiva
setInterval(updateCountdown, 1000);
updateCountdown(); // Chamada inicial

// Funcionalidade
const modal = document.getElementById('presenceModal');
const confirmBtn = document.getElementById('confirmPresenceBtn');
const cancelBtn = document.getElementById('cancelBtn');
const presenceForm = document.getElementById('presenceForm');

// Modal aberto
confirmBtn.addEventListener('click', () => {
    modal.style.display = 'block';
});

// Modal fechado
cancelBtn.addEventListener('click', () => {
    modal.style.display = 'none';
    presenceForm.reset();
});

// Fechar modal se clicado fora
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
        presenceForm.reset();
    }
});

// Envio de formulário
presenceForm.addEventListener('submit', (event) => {
    event.preventDefault();
    
    // Coletar dados do formulário
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        guests: document.getElementById('guests').value
    };

    // Envio de formulário simulado (substitua pela lógica de back-end real)
    alert(`Obrigado, ${formData.name}! 
Sua presença foi confirmada para ${formData.guests} pessoa(s).
Entraremos em contato pelo e-mail ${formData.email}.`);

    // Fechar modal
    modal.style.display = 'none';
    presenceForm.reset();
});