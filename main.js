const numbersOfFilms = prompt("How much films you see?", "");

const personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

personalMovieDB.count = numbersOfFilms;

const question1 = prompt("Last film you see?");
const question2 = +prompt("Score last film?");
const question3 = prompt("Last film you see?");
const question4 = +prompt("Score last film?");

personalMovieDB.movies[question1] = question2;
personalMovieDB.movies[question3] = question4;

console.log(personalMovieDB);
