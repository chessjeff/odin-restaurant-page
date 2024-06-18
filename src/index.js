import printMenuPage from './menu.js'
import printHomePage from './home.js'
import printAboutPage from './about.js'
import style from './style.css'

const header = document.getElementById('header'),
    nav = document.getElementById('nav'),
    content = document.getElementById('content'),
    home = document.createElement('button'),
    menu = document.createElement('button'),
    about = document.createElement('button')
    
home.textContent = 'Home'
nav.appendChild(home)
home.addEventListener('click', () => {
    deleteContent();
    printHomePage(content);
});

menu.textContent = 'Menu'
nav.appendChild(menu)
menu.addEventListener('click', () => {
    deleteContent();
    printMenuPage(content);
});

about.textContent = 'About'
nav.appendChild(about)
about.addEventListener('click', () => {
    deleteContent()
    printAboutPage(content)
});

const deleteContent = function(){
    while (content.firstChild) {
        content.removeChild(content.lastChild);
    }
};

//home page on page load
printHomePage(content);