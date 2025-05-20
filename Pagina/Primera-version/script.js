// Esperamos a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded',()=>{
// Seleccionamos todos los botones más y menos y agregamos funcionalidad de expandir y contraer
    document.querySelectorAll('.btn-more').forEach(button => {
        button.addEventListener('click', function() {
            let card = this.previousElementSibling;
            card.classList.toggle('collapse');
            this.textContent = card.classList.contains('collapse') ? 'Más' : 'Menos';
        });
    });

// Se agrega la función para eliminar la cardD y agregar un efecto
    document.querySelectorAll('.btn-delete').forEach(button => {
        button.addEventListener('click', function(){
            let cardD = this.closest('.card');
            setTimeout(function(){
                cardD.style.transition = 'opacity 0.5s ease';
                cardD.style.opacity = '0';
                
//Se agrega un Event para eliminar al 1.5 segundos la CardD
                cardD.addEventListener('transitionend',()=>{
                    this.remove();
                });
            }, 1500);
        });
    });
});

