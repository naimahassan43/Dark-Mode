const toggleSwitch = document.querySelector('input[type = "checkbox"]');

//Switch theme 
function switchTheme(event) {
    const target = event.target.checked;
}
//Events 

toggleSwitch.addEventListener('change', switchTheme);