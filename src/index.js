//css
import './style.css';

//images
import Milk from './imgs/milk-pale.gif';

//modules
import homePage from './home.js';
import menuPage from './menu.js';
import contactPage from './contact.js';

function component() {

    const content = document.getElementById('content');

    //set header
    const header = document.createElement('div');            //header

    const title = document.createElement('div');            //title
    const homeTab = document.createElement('button');       //append to header
    const menuTab = document.createElement('button');       //append to header
    const contactTab = document.createElement('button');    //append to header

    //add header icon
    const milkImage = document.createElement('a');
    milkImage.href = 'https://www.flaticon.com/free-animated-icons/dairy-products';
    milkImage.title = 'Dairy products animated icons created by Freepik - Flaticon';

    const milkIcon = new Image();
    milkIcon.src = Milk;
    milkIcon.alt = 'milk header icon';

    //assign css
    content.classList.add('content');
    header.classList.add('header');

    title.classList.add('title');

    homeTab.classList.add('header-buttons');
    menuTab.classList.add('header-buttons');
    contactTab.classList.add('header-buttons');

    milkIcon.classList.add('header-milk');

    //set innerHTML
    title.innerHTML = 'Latte a la Leche';
    homeTab.innerHTML = 'Home';
    menuTab.innerHTML = 'Menu';
    contactTab.innerHTML = 'Contact';

    //append to page
    content.appendChild(header);

    header.appendChild(milkImage);
    milkImage.appendChild(milkIcon);
    header.appendChild(title);
    header.appendChild(homeTab);
    header.appendChild(menuTab);
    header.appendChild(contactTab);

    //event listeners - call imported modules when clicked
    document.addEventListener('DOMContentLoaded', function() {
        document.body.appendChild(menuPage());
        menuTab.classList.add('selected-tab');
        menuTab.disabled = true;
    });

    homeTab.addEventListener('click', function() {
        const bodyContainer = document.querySelector('.body-container');
        const allTabs = document.querySelectorAll('button');

        allTabs.forEach(tab => {
            tab.classList.remove('selected-tab');
            tab.disabled = false;
        });

        homeTab.classList.add('selected-tab');
        homeTab.disabled = true;
        bodyContainer.remove();
        document.body.appendChild(homePage()); 
    });

    menuTab.addEventListener('click', function() {
        const bodyContainer = document.querySelector('.body-container');
        const allTabs = document.querySelectorAll('button');

        allTabs.forEach(tab => {
            tab.classList.remove('selected-tab');
            tab.disabled = false;
        });

        menuTab.classList.add('selected-tab');
        menuTab.disabled = true;
        bodyContainer.remove();
        document.body.appendChild(menuPage());
    });

    contactTab.addEventListener('click', function() {
        const bodyContainer = document.querySelector('.body-container');
        const allTabs = document.querySelectorAll('button');

        allTabs.forEach(tab => {
            tab.classList.remove('selected-tab');
            tab.disabled = false;
        });

        contactTab.classList.add('selected-tab');
        contactTab.disabled = true;
        bodyContainer.remove();
        document.body.appendChild(contactPage());
    });

    return content;
};

component();