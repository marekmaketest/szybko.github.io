document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
    const messageDiv = document.getElementById('message');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const phone = document.getElementById('phone').value;

        // Tutaj możesz dodać kod do wysyłania danych na serwer
        // Na potrzeby tego przykładu, wyświetlimy tylko komunikat
        messageDiv.textContent = `Dziękujemy, ${name}! Skontaktujemy się z Tobą pod numerem ${phone}.`;
        
        form.reset();
    });
});

// Rejestracja Service Workera dla PWA
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js')
            .then(registration => {
                console.log('Service Worker zarejestrowany pomyślnie:', registration);
            })
            .catch(error => {
                console.log('Błąd rejestracji Service Workera:', error);
            });
    });
}
