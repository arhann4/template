document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.getElementById('toggle-dark-mode');
    const body = document.body;

    // Set ikon default sesuai dengan mode saat ini
    function updateIcons() {
        if (body.classList.contains('dark-mode')) {
            toggleButton.querySelector('.fa-sun').style.display = 'none';
            toggleButton.querySelector('.fa-moon').style.display = 'block';
        } else {
            toggleButton.querySelector('.fa-sun').style.display = 'block';
            toggleButton.querySelector('.fa-moon').style.display = 'none';
        }
    }

    // Perbarui ikon saat pertama kali dimuat
    updateIcons();

    toggleButton.addEventListener('click', function () {
        body.classList.toggle('dark-mode');
        updateIcons(); // Perbarui ikon saat mode diganti
    });


    hamburgerButton.addEventListener('click', function () {
    navMenu.classList.toggle('show'); // Toggle menu visibility
    });
});
