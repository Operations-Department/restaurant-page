import './style.css';
import homePage from './home.js';
import menuPage from './menu.js';
import contactPage from './contact.js';

function component() {

    const content = document.getElementById('content');

    //set header
    const header = document.createElement('div');
    const titleContainer = document.createElement('div');
    const title = document.createElement('div');
    const tabContainer = document.createElement('div');
    const homeTab = document.createElement('button');
    const menuTab = document.createElement('button');
    const contactTab = document.createElement('button');

    //assign css
    content.classList.add('content');
    header.classList.add('header');
    titleContainer.classList.add('title');
    tabContainer.classList.add('tabs');

    //set innerHTML
    title.innerHTML = 'Latte a la Lac';
    homeTab.innerHTML = 'Home';
    menuTab.innerHTML = 'Menu';
    contactTab.innerHTML = 'Contact';

    //append to page
    content.appendChild(header);
    header.appendChild(titleContainer);
    titleContainer.appendChild(title);
    header.appendChild(tabContainer);
    tabContainer.appendChild(homeTab);
    tabContainer.appendChild(menuTab);
    tabContainer.appendChild(contactTab);

    //event listeners - set content between tabs
    document.addEventListener('DOMContentLoaded', function() {
        document.body.appendChild(menuPage());
        menuTab.classList.add('selected-tab');
    });

    homeTab.addEventListener('click', function() {
        const bodyContainer = document.querySelector('.body-container');
        const allTabs = document.querySelectorAll('button');

        allTabs.forEach(tab => {
            tab.classList.remove('selected-tab');
        });

        homeTab.classList.add('selected-tab');
        bodyContainer.remove();
        document.body.appendChild(homePage()); 
    });

    menuTab.addEventListener('click', function() {
        const bodyContainer = document.querySelector('.body-container');
        const allTabs = document.querySelectorAll('button');

        allTabs.forEach(tab => {
            tab.classList.remove('selected-tab');
        });

        menuTab.classList.add('selected-tab');
        bodyContainer.remove();
        document.body.appendChild(menuPage());
    });

    contactTab.addEventListener('click', function() {
        const bodyContainer = document.querySelector('.body-container');
        const allTabs = document.querySelectorAll('button');

        allTabs.forEach(tab => {
            tab.classList.remove('selected-tab');
        });

        contactTab.classList.add('selected-tab');
        bodyContainer.remove();
        document.body.appendChild(contactPage());
    });

    return content;
};

component();