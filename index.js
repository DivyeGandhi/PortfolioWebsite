const dropdown = document.querySelector('.nav-dropdown');
const modal = document.querySelector('.modal');
const elements = document.querySelectorAll('.ele');
const pin =document.querySelector('.pin');
const toggleswitch = document.querySelector('.toggleswitch');
const mode = document.querySelector('.sun');
const root = document.documentElement;
const logo = document.querySelector('.logo');

dropdown.addEventListener('click', (event) => {
    console.log("Dropdown clicked");
    modal.style.display = "block";
});

for (let i = 0; i < elements.length; i++) {
    elements[i].addEventListener('click', (event) => {
        console.log("Selected");
        modal.style.display = "none";
    });
}
pin.addEventListener('click', (event) => {
    const computedStyle = getComputedStyle(pin);
    const leftValue = computedStyle.getPropertyValue('left');

    if (leftValue === '2px') {
        pin.style.background = 'purple';
        pin.style.left = '67%';
        toggleswitch.style.background = 'black';
        toggleswitch.style.boxShadow = '0px 0px 5px 4px purple';
        console.log("darkify");
        pin.style.boxShadow = '-1px -1px 5px purple';
        mode.style.fill='white';
        localStorage.setItem('mode', 'dark');
        root.style.setProperty('--mainPurple', '#800080');
        root.style.setProperty('--subHead', '#2d3b00');
        root.style.setProperty('--accent', '#cb429755');
        root.style.setProperty('--slate', '#00c5a9');
        root.style.setProperty('--white', '#1e1e1e');
        root.style.setProperty('--black', '#ffffff');
        root.style.setProperty('--secPurple', '#DDC277');
        root.style.setProperty('--projcol', '#444444');
        root.style.setProperty('--altcol', 'orange');
        logo.style.filter = 'invert(100%)';
    } else {
        pin.style.background = '#ff3a56';
        toggleswitch.style.background = '#d2c4ff';
        toggleswitch.style.boxShadow = '0px 0px 5px 2px black';
        pin.style.left = '2px';
        console.log("lightify");
        pin.style.boxShadow = '1px 1px 5px black';
        mode.style.fill='black';
        localStorage.setItem('mode', 'light');
        root.style.setProperty('--mainPurple', '#a917e8');
        root.style.setProperty('--subHead', '#343d68aa');
        root.style.setProperty('--accent', '#ff3a56');
        root.style.setProperty('--slate', '#e7e7e7');
        root.style.setProperty('--white', 'white');
        root.style.setProperty('--black', '#white');
        root.style.setProperty('--secPurple', '#343d68');
        root.style.setProperty('--projcol', 'rgb(231, 231, 231)');
        root.style.setProperty('--altcol', 'purple');
        logo.style.filter = 'invert(0%)';

    }
});

