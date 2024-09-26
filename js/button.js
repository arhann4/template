const users = [
    { email: "riyasa01@gmail.com", password: "riyasa123" },
    { email: "diestamahza899@gmail.com", password: "situbondo" },
    { email: "arhannn16@gmail.com", password: "situbondo123" }
    // Tambahkan pengguna lainnya di sini
];
function validateForm(event) {
    event.preventDefault(); // Mencegah form dari pengiriman default

    // Mengambil nilai dari input menggunakan document.getElementById
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");

    // Pastikan elemen tidak null sebelum mengakses nilai
    if (emailInput && passwordInput) {
        const email = emailInput.value; // Ambil nilai email
        const password = passwordInput.value; // Ambil nilai password

        // Cek apakah email dan password sesuai dengan salah satu pengguna
        const user = users.find(user => user.email === email && user.password === password);

        if (user) {
            // Jika cocok, arahkan ke halaman baru
            window.location.href = "index.html"; // Ganti dengan halaman yang diinginkan
        } else {
            // Jika tidak cocok, tampilkan pesan kesalahan
            alert("Email atau Password tidak sesuai!");
        }
    } else {
        // Tampilkan pesan kesalahan jika elemen tidak ditemukan
        alert("Input email atau password tidak ditemukan!");
    }
}