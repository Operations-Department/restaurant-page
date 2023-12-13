//images
import GlassMilk from './imgs/reg-milk.jpg';
import BigGlassMilk from './imgs/big-milk.jpg';
import RawMilk from './imgs/raw-milk.jpg';
import SpoonMilk from './imgs/spoon-milk.jpg';
import OrangeMilk from './imgs/orange-milk.jpg';
import MugMilk from './imgs/mug-milk.jpg';
import CoffeeMilk from './imgs/milk-coffee.jpg';
import ChocyMilk from './imgs/chocy-milk.jpg';
import StrawMilk from './imgs/straw-milk.jpg';

export default function menuPage() {

    const content = document.getElementById('content');
    
    //body - menu page
    const bodyContainer = document.createElement('div');
    const menuContainer = document.createElement('div');

    const menuItem1 = document.createElement('div');
    const menuItem2 = document.createElement('div');
    const menuItem3 = document.createElement('div');
    const menuItem4 = document.createElement('div');
    const menuItem5 = document.createElement('div');
    const menuItem6 = document.createElement('div');
    const menuItem7 = document.createElement('div');
    const menuItem8 = document.createElement('div');
    const menuItem9 = document.createElement('div');
    
    //set imported images
    const regMilk = new Image();
    regMilk.src = GlassMilk;
    regMilk.alt = 'regular-sized glass of milk';

    const bigMilk = new Image();
    bigMilk.src = BigGlassMilk;
    bigMilk.alt = 'a very big glass of milk';

    const rawMilk = new Image();
    rawMilk.src = RawMilk;
    rawMilk.alt = 'milk from a cow'

    const spoonMilk = new Image();
    spoonMilk.src = SpoonMilk;
    spoonMilk.alt = 'milk splashing onto a spoon';

    const orangeMilk = new Image();
    orangeMilk.src = OrangeMilk;
    orangeMilk.alt = 'a glass of orange milk';

    const mugMilk = new Image();
    mugMilk.src = MugMilk;
    mugMilk.alt = 'a mug of milk'; 

    const coffeeMilk = new Image();
    coffeeMilk.src = CoffeeMilk;
    coffeeMilk.alt = 'a cup of coffee and milk';

    const chocyMilk = new Image();
    chocyMilk.src = ChocyMilk;
    chocyMilk.alt = 'a glass of chocolate milk';

    const strawMilk = new Image();
    strawMilk.src = StrawMilk;
    strawMilk.alt = 'a glass of strawberry milk';

    //add classes
    bodyContainer.classList.add('body-container');
    menuContainer.classList.add('body-menu');

    menuItem1.classList.add('menu-item');
    menuItem2.classList.add('menu-item');
    menuItem3.classList.add('menu-item');
    menuItem4.classList.add('menu-item');
    menuItem5.classList.add('menu-item');
    menuItem6.classList.add('menu-item');
    menuItem7.classList.add('menu-item');
    menuItem8.classList.add('menu-item');
    menuItem9.classList.add('menu-item');

    //add inner HTML
    menuItem1.innerHTML = `<strong>Regular Milk</strong>$20`;
    menuItem2.innerHTML = `<strong>Big Milk</strong>$15`;
    menuItem3.innerHTML = `<strong>Raw Milk</strong>$30`;
    menuItem4.innerHTML = `<strong>Spoon Milk</strong>$25`;
    menuItem5.innerHTML = `<strong>Orange Milk</strong>$40`;
    menuItem6.innerHTML = `<strong>Mug Milk</strong>$25`;
    menuItem7.innerHTML = `<strong>Covfefe Milk</strong>$30`;
    menuItem8.innerHTML = `<strong>Brown Milk</strong>$35`;
    menuItem9.innerHTML = `<strong>Berry Milk</strong>$30`;

    //append to page
    content.appendChild(bodyContainer);
    bodyContainer.appendChild(menuContainer);

    menuItem1.appendChild(regMilk);
    menuContainer.appendChild(menuItem1);

    menuItem2.appendChild(bigMilk);
    menuContainer.appendChild(menuItem2);

    menuItem3.appendChild(rawMilk);
    menuContainer.appendChild(menuItem3);

    menuItem4.appendChild(spoonMilk);
    menuContainer.appendChild(menuItem4)

    menuItem5.appendChild(orangeMilk);
    menuContainer.appendChild(menuItem5)

    menuItem6.appendChild(mugMilk);
    menuContainer.appendChild(menuItem6)

    menuItem7.appendChild(coffeeMilk);
    menuContainer.appendChild(menuItem7);

    menuItem8.appendChild(chocyMilk);
    menuContainer.appendChild(menuItem8);

    menuItem9.appendChild(strawMilk);
    menuContainer.appendChild(menuItem9);

    return content;
};