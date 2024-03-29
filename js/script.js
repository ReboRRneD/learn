const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '')
const personalMovieDB =  {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
}

let movieName = prompt('Один из последних просмотренных фильмов?', '')
let	score = prompt('На сколько оцените его?', '')
let movieNameSecond = prompt('Один из последних просмотренных фильмов?', '')
let	scoreSecond = prompt('На сколько оцените его?', '')
personalMovieDB.movies[movieName] = score
personalMovieDB.movies[movieNameSecond] = scoreSecond