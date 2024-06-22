const dropdown = document.querySelector('.nav-dropdown');
const modal = document.querySelector('.modal');
const elements = document.querySelectorAll('.ele'); // Corrected variable name

// Show the modal when the dropdown is clicked
dropdown.addEventListener('click', (event) => {
    // Your event handling code here
    console.log("Dropdown clicked");
    modal.style.display = "block";
});

for (let i = 0; i < elements.length; i++) { // Corrected method to get the number of elements
    elements[i].addEventListener('click', (event) => {
        // Your event handling code here
        console.log("Selected");
        modal.style.display = "none";
    }); // Added semicolon
}

document.addEventListener('click', (event) => {
  // Check if the clicked element is outside the modal
  if (!modal.contains(event.target) && !dropdown.contains(event.target)) {
      // Hide the modal
      modal.style.display = 'none';
  }
});