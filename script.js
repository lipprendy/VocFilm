// Toggle
const navbarNav = document.querySelector('.navbar-nav');

document.querySelector('#hamburger-menu').onclick = () => {
  navbarNav.classList.toggle('active');
};

const hamburger = document.querySelector('#hamburger-menu');

document.addEventListener('click', function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove('active');
  }
});

// search film
// const searchInput = document.getElementById('searchInput');
// const films = document.querySelectorAll('.film-link');

// searchInput.addEventListener('input', function () {
//   const searchText = searchInput.value.toLowerCase();

//   films.forEach((film) => {
//     const filmName = film.getAttribute('data-name').toLowerCase();

//     if (filmName.includes(searchText)) {
//       film.classList.add('show');
//     } else {
//       film.classList.remove('show');
//     }
//   });
// });


// search film
const searchInput = document.getElementById('searchInput');
const films = document.querySelectorAll('.film-link');

searchInput.addEventListener('input', function () {
  const searchText = searchInput.value.toLowerCase();

  films.forEach((film) => {
    const filmName = film.getAttribute('data-name').toLowerCase();

    if (filmName.includes(searchText)) {
      film.style.display = "block";  // Tampilkan jika cocok
    } else {
      film.style.display = "none";   // Sembunyikan jika tidak cocok
    }
  });
});
