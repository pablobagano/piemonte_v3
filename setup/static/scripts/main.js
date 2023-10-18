console.log("Script loaded") 

const menuBt = document.querySelector(".dropbtn"); 
console.log("Menu button: ", menuBt)

menuBt.addEventListener('click', () => {
    console.log("Button working")
    dropdown()
})

function dropdown() {
    console.log("Function properly triggered")
    document.getElementById('meuMenu').classList.toggle("show"); 
}

// 
window.onclick = function(event) { 
    if (!event.target.matches('.dropbtn') && !document.getElementById('meuMenu').classList.contains('show')){
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
