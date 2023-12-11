//images
import GlassMilk from './imgs/reg-milk.jpg';

export default function menuPage() {

    const content = document.getElementById('content');
    
    //body - menu page
    const bodyContainer = document.createElement('div');
    const menuContainer = document.createElement('div');
    const menuItem1 = document.createElement('div');

    //set imported images
    const regMilk = new Image();
    regMilk.src = GlassMilk;
    regMilk.alt = 'regular glass of milk';
    

    //add classes
    bodyContainer.classList.add('body-container');
    menuContainer.classList.add('body-menu');
    menuItem1.classList.add('menu-item');

    //add inner HTML
    menuItem1.innerHTML = `<strong>Milk</strong>20`;

    //append to page
    content.appendChild(bodyContainer);
    bodyContainer.appendChild(menuContainer);

    menuItem1.appendChild(regMilk);
    menuContainer.appendChild(menuItem1);

    return content;
};