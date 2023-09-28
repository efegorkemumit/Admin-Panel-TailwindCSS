const userMenuButton = document.getElementById('user-menu-button');
const userMenu = document.getElementById('user-menu');

userMenuButton.addEventListener('click', ()=> {
    userMenu.classList.toggle('hidden');
})


const userMenuButtonInbox = document.getElementById('user-menu-inbox-button');
const userMenuInbox = document.getElementById('user-menu-Inbox');

userMenuButtonInbox.addEventListener('click', ()=> {
    userMenuInbox.classList.toggle('hidden');
})