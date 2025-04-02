document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.btn-more').forEach(button => {
        button.addEventListener('click', function() {
            let card = this.previousElementSibling;
            card.classList.toggle('collapse');
            this.textContent = card.classList.contains('collapse') ? 'Más' : 'Menos';
        });
    });

    document.querySelectorAll('.btn-delete').forEach(button => {
        button.addEventListener('click', function() {
            let cardD = this.closest('.card');
            cardD.style.transition = 'opacity 0.5s ease';
            cardD.style.opacity = '0';
            
            setTimeout(() => {
                card.remove();
            }, 2000);
        });
    });
});

