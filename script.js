const toggleSwitch = document.querySelector('input[type = "checkbox"]');
const nav = document.getElementById('nav');
const toggleIcon = document.querySelector('.toggle-icon');
const imageOne = document.getElementById('image1');
const imageTwo = document.getElementById('image2');
const imageThree = document.getElementById('image3');
const textBox = document.getElementById('text-box');
//Dark mode 
function darkMode() {
    nav.style.backgroundColor = 'rgb(0 0 0 / 50%)';
    textBox.style.backgroundColor = 'rgb(255 255 255 / 50%)';
    toggleIcon.children[0].textContent = 'Dark Mode';
    toggleIcon.children[1].classList.remove('fa-sun');
    toggleIcon.children[1].classList.add('fa-moon');
    imageOne.src = 'img/undraw_proud_coder_dark.svg';
    imageTwo.src = 'img/undraw_feeling_proud_dark.svg';
    imageThree.src = 'img/undraw_conceptual_idea_dark.svg';
}
//Light mode 
function lightMode() {
    nav.style.backgroundColor = 'rgb(255 255 255 / 50%)';
    textBox.style.backgroundColor = 'rgb(0 0 0 / 50%)';
    toggleIcon.children[0].textContent = 'Light Mode';
    toggleIcon.children[1].classList.remove('fa-moon');
    toggleIcon.children[1].classList.add('fa-sun');
    imageOne.src = 'img/undraw_proud_coder_light.svg';
    imageTwo.src = 'img/undraw_feeling_proud_light.svg';
    imageThree.src = 'img/undraw_conceptual_idea_light.svg';
}
//Switch theme 
function switchTheme(event) {
    const target = event.target.checked;
    if (target == true) {
        document.documentElement.setAttribute('data-theme', 'dark');
        darkMode();
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        lightMode();
    }
}
//Events 

toggleSwitch.addEventListener('change', switchTheme);