
export default function homePage() {
    
    const content = document.getElementById('content');
    
    //header
    const header = document.createElement('div');
    const titleContainer = document.createElement('div');
    const title = document.createElement('div');
    const tabContainer = document.createElement('div');
    const home = document.createElement('button');
    const menu = document.createElement('button');
    const about = document.createElement('button');

    //body
    const bodyContainer = document.createElement('div');
    const body = document.createElement('div');
    const bodyTop = document.createElement('div');
    const bodyMid = document.createElement('div');
    const imgContainer = document.createElement('div');
    const bodyLow = document.createElement('div');


    //add class lists
    content.classList.add('content');
    header.classList.add('header');
    titleContainer.classList.add('title');
    tabContainer.classList.add('tabs');
    bodyContainer.classList.add('body-container');
    body.classList.add('body');
    imgContainer.classList.add('body-img-container');

    //add inner HTML
    title.innerHTML = 'Latte a la Lac';
    home.innerHTML = 'Home';
    menu.innerHTML = 'Menu';
    about.innerHTML = 'About';
    bodyTop.innerHTML = `The best milk hands down! 
    I've known milk for many years, we go way back. 
    I know all the best cows with all the best milk, 
    believe me`;
    bodyLow.innerHTML = `Our family was the first 
    to discover milk from cows.. 
    don't ask us how`;

    //append to components
    content.appendChild(header);
    header.appendChild(titleContainer);
    titleContainer.appendChild(title);
    header.appendChild(tabContainer);
    tabContainer.appendChild(home);
    tabContainer.appendChild(menu);
    tabContainer.appendChild(about);

    content.appendChild(bodyContainer);
    bodyContainer.appendChild(body);
    body.appendChild(bodyTop);
    body.appendChild(bodyMid);
    bodyMid.appendChild(imgContainer);
    body.appendChild(bodyLow);    

    return content;
}