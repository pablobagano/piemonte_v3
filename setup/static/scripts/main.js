function dropdown() {
    document.getElementById('meuMenu').classList.toggle("show"); 
}

window.onclick = function(event) { 
    if (!event.target.matches('dropbtn')){
        var dropdowns = document.getElementsByClassName("conteudoMenu");
        var i; 
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show'); 
            }
        }
    }
}