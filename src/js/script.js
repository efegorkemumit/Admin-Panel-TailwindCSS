const userMenuButton = document.getElementById('user-menu-button');
const userMenu = document.getElementById('user-menu');

const userMenuButtonInbox = document.getElementById('user-menu-inbox-button');
const userMenuInbox = document.getElementById('user-menu-Inbox');

const userMenuButtonBell = document.getElementById('user-menu-bell-button');
const userMenuBell = document.getElementById('user-menu-bell');


function closeUserMenus(){
    userMenu.classList.add('hidden');
    userMenuInbox.classList.add('hidden');
    userMenuBell.classList.add('hidden');
}


function toggleUserMenu(menu){
    if(menu.classList.contains('hidden')){
        closeUserMenus();
        menu.classList.remove('hidden')
    }
    else{
        menu.classList.add('hidden')
    }

}


userMenuButton.addEventListener('click', ()=> {
    toggleUserMenu(userMenu)
})


userMenuButtonInbox.addEventListener('click', ()=> {
    toggleUserMenu(userMenuInbox)
})

userMenuButtonBell.addEventListener('click', ()=> {
    toggleUserMenu(userMenuBell)
})

document.addEventListener("DOMContentLoaded", function(){
    const toggleButtons  = document.querySelectorAll(".toggle-menu");

    toggleButtons.forEach((button)=>{
        button.addEventListener("click", function(){
            const submenu = button.nextElementSibling;
            submenu.classList.toggle("hidden");
        });
    });
});


let menuBar = document.querySelector('#menuBar')
let mobileMenu = document.querySelector('#mobileMenu')
let closeMenu = document.querySelector('#closeMenu')

menuBar.addEventListener('click', function(){
    mobileMenu.classList.remove('hidden')
})

closeMenu.addEventListener('click', function(){
    mobileMenu.classList.add('hidden')
})


