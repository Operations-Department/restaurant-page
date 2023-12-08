export default function contanctPage() {
    
    const content = document.getElementById('content');
    
    //body - menu page
    const bodyContainer = document.createElement('div');
    const body = document.createElement('div');
    

    //add classes
    bodyContainer.classList.add('body-container');
    body.classList.add('body');

    //add inner HTML

    //append to page
    content.appendChild(bodyContainer);
    bodyContainer.appendChild(body);

    return content;
};