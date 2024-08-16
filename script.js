// Constructor function for Movie instance with private properties
function Movie(title, director, rating) {
    let _title = title;
    let _director = director;
    let _rating = rating;

    this.getTitle = function() {
        return _title;
    };

    this.getDirector = function() {
        return _director;
    };

    this.getRating = function() {
        return _rating;
    };
}

// Method to display movie info added to the prototype
Movie.prototype.display = function() {
    return `${this.getTitle()}, directed by ${this.getDirector()}, rated ${this.getRating()}/10.`;
};

// New movie instances
let movie1 = new Movie("Interstellar", "Christopher Nolan", 10);
console.log(movie1.display());

let movie2 = new Movie("Inception", "Christopher Nolan", 8);
console.log(movie2.display());

let movie3 = new Movie("The Dark Knight", "Christopher Nolan", 9);
console.log(movie3.display());

// Using DOM to manage the HTML elements
document.getElementById('movie-form').addEventListener('submit', function(e) {
    e.preventDefault();

    let title = document.getElementById('title').value;
    let director = document.getElementById('director').value;
    let rating = document.getElementById('rating').value;

    let newMovie = new Movie(title, director, rating);
    addMovieToList(newMovie);

    // Clears the form
    document.getElementById('movie-form').reset();
});

    // Adds the completed Movie instace to the div element in the HTML
function addMovieToList(movie) {
    let movieList = document.getElementById('movie-list');
    let div = document.createElement('div');
    div.className = 'movie';
    div.appendChild(document.createTextNode(movie.display()));
    movieList.appendChild(div);
}
