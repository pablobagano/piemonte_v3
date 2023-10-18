console.log("Script loaded") 

const menuBt = document.querySelector(".dropbtn"); 
console.log("Menu button: ", menuBt);
const dropdowns = document.getElementsByClassName("conteudoMenu");

menuBt.addEventListener('click', () => {
    console.log("Button working")
    dropdown()
});


function dropdown() {
    console.log("Function properly triggered")
    document.getElementById('meuMenu').classList.toggle("show"); 
}; 

// 
window.onclick = function(event) { 
    if (!event.target.matches('.dropbtn') && !event.target.closest('.conteudoMenu')){ 
        for (i = 0; i < dropdowns.length; i++) {
            let openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show'); 
            }
        }
    }
}
