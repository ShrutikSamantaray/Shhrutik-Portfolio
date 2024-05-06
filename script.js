function toggleMenu(){
    // targeting div class = menu-links
    const menu = document.querySelector(".menu-links")

     // targeting div class = hamurger-icon
    const icon = document.querySelector(".hamurger-icon")
    
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}