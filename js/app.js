//firebase configurations
const firebaseConfig = {
    apiKey: "AIzaSyCumFJmhXKahLhQ52WQ8wqeI4d3bVGXQZs",
    authDomain: "movie-list-itp.firebaseapp.com",
    databaseURL: "https://movie-list-itp-default-rtdb.firebaseio.com",
    projectId: "movie-list-itp",
    storageBucket: "movie-list-itp.firebasestorage.app",
    messagingSenderId: "444096948010",
    appId: "1:444096948010:web:711937c11cd159de486053"
};

//initialize firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.database();

// DOM elements
const movieForm = document.getElementById('movieForm');
const movieIdInput = document.getElementById('movieId');
const titleInput = document.getElementById('title');
const yearInput = document.getElementById('year');
const directorInput = document.getElementById('director');
const genreInput = document.getElementById('genre');
const statusRadios = document.getElementsByName('status');
const ratingInput = document.getElementById('rating');
const notesInput = document.getElementById('notes');
const saveBtn = document.getElementById('saveBtn');
const cancelBtn = document.getElementById('cancelBtn');
const searchInput = document.getElementById('searchInput');
const filterStatus = document.getElementById('filterStatus');
const filterGenre = document.getElementById('filterGenre');
const moviesList = document.getElementById('moviesList');
const totalMovies = document.getElementById('totalMovies');
const watchlistCount = document.getElementById('watchlistCount');
const watchedCount = document.getElementById('watchedCount');

const stars = document.querySelectorAll('.rating-stars i');

//Initialize the app
function init(){
    stars.forEach(star => {
        star.addEventListener('click', handleStarClick);
        star.addEventListener('mouseover', handleStarHover);
        star.addEventListener('mouseout', handleStarOut);
    });
}

// star rating functionalities
function handleStarClick(e) { 
    const rating = parseInt(e.target.dataset.rating);
    ratingInput.value = rating;
    updateStarRating(rating);
}

function handleStarHover(e) {
    const rating = parseInt(e.target.dataset.rating);
    highlightStars(rating);
}

function handleStarOut() {
    const currentRating = parseInt(ratingInput.value);
    highlightStars(currentRating);
 }

function highlightStars(cont) {
    stars.forEach((star, index) => {
        if(index < cont){
            star.classList.add('active');
        } else{
            star.classList.remove('active');                                                                                                        
        }
    })
}

function updateStarRating(rating){
    stars.forEach((star, index) => {
        if(index < rating){
            star.classList.add('active');
            star.classList.remove('far');
            star.classList.add('fas');
        } else{
            star.classList.remove('active');
            star.classList.remove('fas');
            star.classList.add('far');
        }
    });
}

document.addEventListener('DOMContentLoaded', init);