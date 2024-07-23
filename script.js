document.addEventListener('DOMContentLoaded', () => {
    // Funcionalidad de los modales
    const modals = document.querySelectorAll('.modal');
    const closeButtons = document.querySelectorAll('.close');

    closeButtons.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            modals[index].style.display = 'none';
        });
    });

    window.addEventListener('click', (event) => {
        if (event.target.classList.contains('modal')) {
            event.target.style.display = 'none';
        }
    });

    // Modal de razones
    const reasonsBtn = document.getElementById('reasons');
    const reasonsModal = document.getElementById('reasonsModal');

    reasonsBtn.addEventListener('click', () => {
        reasonsModal.style.display = 'flex';
    });

    // Modal de tiempo juntas
    const timeBtn = document.getElementById('time');
    const timeModal = document.getElementById('timeModal');
    const timeTogether = document.getElementById('timeTogether');

    timeBtn.addEventListener('click', () => {
        timeModal.style.display = 'flex';
        updateTime();
    });

    function updateTime() {
        const startDate = new Date('2023-06-02T00:00:00');
        const now = new Date();
        const diff = now - startDate;

        const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
        const months = Math.floor((diff % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));
        const days = Math.floor((diff % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        
        timeTogether.innerText = `Llevamos juntas ${years} años, ${months} meses, ${days} días, ${hours} horas y ${minutes} minutos.`;
    }

    // Modal de regalo sorpresa
    const giftBtn = document.getElementById('gift');
    const giftModal = document.getElementById('giftModal');
    const mariachiAudio = document.getElementById('mariachiAudio');

    giftBtn.addEventListener('click', () => {
        giftModal.style.display = 'flex';
        mariachiAudio.play();
    });

    // Función para cerrar los modales con el botón de "Regresar"
    window.closeModal = function(modalId) {
        document.getElementById(modalId).style.display = 'none';
        if (modalId === 'giftModal') {
            mariachiAudio.pause();
            mariachiAudio.currentTime = 0;
        }
    }
});
