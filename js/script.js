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
            axios.get(apiMoviesSrc).then(movies => {
                // this.movies = movie.data.results;
                let processed_movies = movies.data.results.map(item => {
                    //posso assegnare a chi voglio il valore che ritorna la funzione mettendo la variabile davanti
                    item.vote_average = this.rating(item.vote_average)
                        if (item.poster_path===null){
                          item.poster_path="img/keep-calm-poster-not-found.png";
                        }
                        else{
                            item.poster_path='https://image.tmdb.org/t/p/w185' + item.poster_path;
                        }
                    return item; //ritorno l'oggetto che verrà messo nell'array movies
                  })
                  this.movies = processed_movies;
         
            })

                     
        },

        searchSerie:function(){
            this.reset();
            apiTvSrc = apiTvSrc + this.search;
            axios.get(apiTvSrc).then(serie => {
                // this.series = serie.data.results;
                 
                let series = serie.data.results.map(item => {
                    //posso assegnare a chi voglio il valore che ritorna la funzione mettendo la variabile davanti
                    item.vote_average = this.rating(item.vote_average);
                    if (item.poster_path===null){
                        item.poster_path="img/keep-calm-poster-not-found.png";
                      }
                      else{
                          item.poster_path='https://image.tmdb.org/t/p/w342' + item.poster_path;
                      }
                    return item; //ritorno l'oggetto che verrà messo nell'array movies
                  })
                  this.series = series;
         
            })
        },

        rating:function(vote){
            return Math.ceil(vote/2)
        },

        reset:function(i){
            apiMoviesSrc='https://api.themoviedb.org/3/search/movie?api_key=f69a0829649e9f60281050c3f802d0c5&query='

            apiTvSrc='https://api.themoviedb.org/3/search/tv?api_key=f69a0829649e9f60281050c3f802d0c5&query='
        }
    }
    })