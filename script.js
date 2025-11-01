// Toggle dropdown when button clicked
document.querySelector('.dropbtn').addEventListener('click', function () {
    document.querySelector('.dropdown-content').classList.toggle('show');
});

// Close dropdown if clicked outside
window.addEventListener('click', function (event) {
    if (!event.target.matches('.dropbtn')) {
        const dropdowns = document.querySelectorAll('.dropdown-content');
        dropdowns.forEach(dropdown => {
            if (dropdown.classList.contains('show')) {
                dropdown.classList.remove('show');
            }
        });
    }
});