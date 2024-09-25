document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.getElementById('toggle-dark-mode');
    const body = document.body;

    // Fungsi untuk memperbarui ikon
    function updateIcons() {
        if (body.classList.contains('dark-mode')) {
            toggleButton.querySelector('.fa-sun').classList.remove('active');
            toggleButton.querySelector('.fa-moon').classList.add('active');
        } else {
            toggleButton.querySelector('.fa-sun').classList.add('active');
            toggleButton.querySelector('.fa-moon').classList.remove('active');
        }
    }

    // Periksa apakah pengguna sudah pernah memilih mode sebelumnya
    if (localStorage.getItem('dark-mode') === 'true') {
        body.classList.add('dark-mode');
    }

    // Perbarui ikon saat halaman pertama kali dimuat
    updateIcons();

    // Tambahkan event listener pada tombol toggle
    toggleButton.addEventListener('click', function () {
        body.classList.toggle('dark-mode');

        // Simpan preferensi mode ke LocalStorage
        localStorage.setItem('dark-mode', body.classList.contains('dark-mode'));

        // Perbarui ikon saat mode diganti
        updateIcons();
    });
});