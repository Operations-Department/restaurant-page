import './style.css';



function component() {
    const content = document.getElementById('content');
    const header = document.createElement('div');
    const titleContainer = document.createElement('div');
    const title = document.createElement('div');
    const tabContainer = document.createElement('div');
    const home = document.createElement('button');
    const menu = document.createElement('button');
    const about = document.createElement('button');

    content.classList.add('content');
    header.classList.add('header');
    titleContainer.classList.add('title');
    tabContainer.classList.add('tabs');

    title.innerHTML = 'Latte a la Lac';
    home.innerHTML = 'Home';
    menu.innerHTML = 'Menu';
    about.innerHTML = 'About';

    content.appendChild(header);
    header.appendChild(titleContainer);
    titleContainer.appendChild(title);
    header.appendChild(tabContainer);
    tabContainer.appendChild(home);
    tabContainer.appendChild(menu);
    tabContainer.appendChild(about);


    return content;
}

document.body.appendChild(component());