// Creare un layout base con una searchbar (una input e un button) in cui possiamo scrivere completamente o parzialmente il nome di un film. Possiamo, cliccando il  bottone, cercare sull’API tutti i film che contengono ciò che ha scritto l’utente.
// Vogliamo dopo la risposta dell’API visualizzare a schermo i seguenti valori per ogni film trovato: 
// Titolo
// Titolo Originale
// Lingua
// Voto

let apiMoviesSrc='https://api.themoviedb.org/3/search/movie?api_key=f69a0829649e9f60281050c3f802d0c5&query=';

let apiTvSrc='https://api.themoviedb.org/3/search/tv?api_key=f69a0829649e9f60281050c3f802d0c5&query='


var app = new Vue ({
    el: '#app',
    data: {
        movies:[],
        series:[],
        search:""

        },
    methods: {

        searchMovie: function() {
            this.reset();
            apiMoviesSrc = apiMoviesSrc + this.search;
            axios.get(apiMoviesSrc).then(movie => {
                this.movies = movie.data.results;
                 
                this.rating(this.movies.vote_average)
            })
                     
        },

        searchSerie:function(){
            this.reset();
            apiTvSrc = apiTvSrc + this.search;
            axios.get(apiTvSrc).then(serie => {
                this.series = serie.data.results;
                 
                this.rating(this.movies.vote_average)
            })
        },

        rating:function(vote){
            return vote=Math.ceil(vote/2)
        },

        reset:function(i){
            apiMoviesSrc='https://api.themoviedb.org/3/search/movie?api_key=f69a0829649e9f60281050c3f802d0c5&query='

            apiTvSrc='https://api.themoviedb.org/3/search/tv?api_key=f69a0829649e9f60281050c3f802d0c5&query='
        }
    }
    })