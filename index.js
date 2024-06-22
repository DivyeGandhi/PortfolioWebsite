const dropdown = document.querySelector('.nav-dropdown');
const modal = document.querySelector('.modal');
const elements = document.querySelectorAll('.ele');

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

document.addEventListener('click', (event) => {
  if (!modal.contains(event.target) && !dropdown.contains(event.target)) {
      modal.style.display = 'none';
  }
});
