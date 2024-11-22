let next = document.querySelector('.next');
let prev = document.querySelector('.prev');

next.addEventListener('click', function() {
    let items = document.querySelectorAll('.c'); // Ambil semua elemen dengan class 'c'
    document.querySelector('.b').appendChild(items[0]); // Pindahkan elemen pertama ke akhir
});

prev.addEventListener('click', function() {
    let items = document.querySelectorAll('.c'); // Ambil semua elemen dengan class 'c'
    document.querySelector('.b').insertBefore(items[items.length - 1], items[0]); // Pindahkan elemen terakhir ke awal
});
