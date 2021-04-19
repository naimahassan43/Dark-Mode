const toggleSwitch = document.querySelector('input[type = "checkbox"]');
const nav = document.getElementById('nav');
const toggleIcon = document.querySelector('.toggle-icon');
const imageOne = document.getElementById('image1');
const imageTwo = document.getElementById('image2');
const imageThree = document.getElementById('image3');
const testBox = document.getElementById('test-box');

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