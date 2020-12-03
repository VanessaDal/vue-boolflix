// Creare un layout base con una searchbar (una input e un button) in cui possiamo scrivere completamente o parzialmente il nome di un film. Possiamo, cliccando il  bottone, cercare sull’API tutti i film che contengono ciò che ha scritto l’utente.
// Vogliamo dopo la risposta dell’API visualizzare a schermo i seguenti valori per ogni film trovato: 
// Titolo
// Titolo Originale
// Lingua
// Voto

let apiMoviesSrc='https://api.themoviedb.org/3/search/movie?api_key=f69a0829649e9f60281050c3f802d0c58&query="';

let  posterUrl = 'https://image.tmdb.org/t/p/w600_and_h900_bestv2';

var app = new Vue ({
    el: '#app',
    data: {

        movies=[],
        search=""
        },


    methods: {

        searchMovie: function() {
            apiMoviesSrc = apiMoviesSrc + this.search;
            axios.get(apiMoviesSrc)
            .then(movie => {
                this.movies = movie.data.results;
            })            
        }
    }
    })