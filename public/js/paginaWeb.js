    // gLeo el estado del dicumento con ID "id01"
    var modal = document.getElementById('id01');
    
    // si hago click fuera del modal, lo cierro
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }