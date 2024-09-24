window.addEventListener('scroll', function() {
    var navbar = document.querySelector('.navbar');
    if (window.scrollY > 300) { // Ubah nilai 50 sesuai dengan kebutuhanmu
      navbar.classList.add('navbar-scrolled'); // Tambahkan kelas ketika di-scroll
    } else {
      navbar.classList.remove('navbar-scrolled'); // Hapus kelas jika di atas threshold
    }
  });

document.getElementById('scrollToTop').addEventListener('click', function() {
    window.scrollTo({
      top: 0, // Menggulung ke posisi paling atas
      behavior: 'smooth' // Scroll halus
    });
  });