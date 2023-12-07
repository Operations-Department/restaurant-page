import './style.css';
import homePage from './home.js';

// function component() {
    
//     return homePage();
// }


document.addEventListener('DOMContentLoaded', function() {
    document.body.appendChild(homePage());
});
