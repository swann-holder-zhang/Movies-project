/*PART (0)
* Any prerequisite functions/keys/variables
* */

// $( document ).ready(function() {
    const movieKey = MOVIE_API; //
    const url = "https://invented-fantastic-sense.glitch.me/movies";


    /*PART (1) -button to get movies from omdbapi
    * add search button
    * put an id on the search bar and get the input va
    *
    * */

//Btn search by either value of the search, title, year, or plot.
    $('#submit-btn').click((event) => {
        event.preventDefault();
        let search = $('#search').val()
        getMovies(search);
    });




    const getMovies = (search) => {
        fetch(`https://www.omdbapi.com?apikey=${movieKey}&s=${search}`)
            .then(response => response.json())//then... return json
            .then(function (data) { //then return data
                console.log('get data', data);

                let movie = data.Search;
                let appendMovies = append(movie)
                $('#append-movies').html(appendMovies)  //I want to take the results and place it in the div w/ ID of movies
            })
            .catch((error) => {
                console.log(error);
            })
    }

    let append = function (data) {
        let html = ``
        for (let i in data) {
            console.log(" Get data: ", data[i])
            const {Title, Year, Poster, imdbID, Type} = data[i]
            html +=
                `<div class="container" id="parent">
                         <button type="button" class="btn-close remove-card" id="delete" onclick="deleteMovie(event)"></button> <br>
<!--                         <button type="button"  class="btn-close remove-card" id="delete" ></button> <br>-->
                         <img src="${Poster}">
                         <p>Movie name: ${Title}</p>
                         <p>Movie Year: ${Year}</p>
                         </div>`;


        }
        return html


    }



// function putMovie (movie) {
//     movie.preventDefault()
//
//     console.log("hello")
//     // movie.preventDefault()
//     const movieObj = {title: "Hello", body: '1'}
//     const option =   {
//         method: 'PUT',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(movieObj),
//     };
//     console.log('put option', option)
//     fetch(url, option)
//         .then(response => response.json())
//         .then(function (data) {
//             alert('movie was good to watch')
//             console.log('data', data);
//         })
//         .catch((error) => {
//             console.log(error);
//         })
//
// }
// let inputMovie= document.getElementById('new-movie')
// inputMovie.addEventListener('submit', putMovie)


        function deleteMovie(event) {
            event.preventDefault()
            console.log("hello")
            const movieObj = {title: "Hello", body: '1'}
            const option = {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(movieObj),
            };
            console.log('delete option', option)
            // fetch(`https://invented-fantastic-sense.glitch.me/movies/${id}`, option)
            fetch(url, option)
                .then(response => response.json())
                .then(function (data) {
                    alert('movie was deleted')
                    console.log(' delete data', data);
                })
                .catch((error) => {
                    alert('could not delete');
                    console.log(error);
                })

        }










// });
