/*PART (0)
* Any prerequisite functions/keys/variables
* */

// $( document ).ready(function() {
    const movieKey = MOVIE_API; //
    const url = "https://invented-fantastic-sense.glitch.me/movies";

//This gets the live update of the POST request
    fetch(url).then(res => res.json()).then(data => console.log(data));

//Btn search by either value of the search, title, year, or plot.
    $('#submit-btn').click((event) => {
        event.preventDefault();
        let search = $('#search').val()
        getMovies(search);
    });


//+++++++++++++++++++++++++++++++++++++++++++++GET ME +++++++++++++++++++++++++++++++++++++++++++++


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
                `<div class="container parent${i++}" id="parent${i++}">
                         <button type="button" class="btn-close remove-card" id="delete" onclick="deleteMovie(event);parentNode.remove()"></button> <br>
                         <img src="${Poster}">
                         <p>Movie name: ${Title}</p>
                         <p>Movie Year: ${Year}</p>
                         <p>Movie ID: ${imdbID}</p>
                         <p>Movie type: ${Type}</p>
                         
                         </div>`;

        }
        return html
    }



//+++++++++++++++++++++++++++++++++++++++++++++POST ME+++++++++++++++++++++++++++++++++++++++++++++

function postMovie (movie) {
    movie.preventDefault()
//TODO: get the length of database (data)
//     console.log("hello")
    // movie.preventDefault()
    const movieObj = {title: `${movie.target[0].value}`, body: '2'}
    const option =   {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(movieObj),
    };
    console.log('post option', option)
    fetch(url, option)
        .then(response => response.json())
        .then(function (data) {
            alert('Post successful')
            console.log('data', data);
        })
        .catch((error) => {
            console.log(error);
        })

}
let post= document.getElementById('new-movie')
post.addEventListener('submit', postMovie)



//+++++++++++++++++++++++++++++++++++++++++++++PUT ME+++++++++++++++++++++++++++++++++++++++++++++



// function putMovie (id) {
//     movie.preventDefault()
//
//     console.log("hello")
//     // movie.preventDefault()
//     const movieObj = {title: "Hello", body: '3'}
//     const option =   {
//         method: 'PUT',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(movieObj),
//     };
//     console.log('put option', option)
//     fetch(`https://invented-fantastic-sense.glitch.me/movies/${id}`, option)
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
//
//
// let inputMovie= document.getElementById('new-movie')
// inputMovie.addEventListener('submit', putMovie)

//+++++++++++++++++++++++++++++++++++++++++++++DELETE ME+++++++++++++++++++++++++++++++++++++++++++++

        function deleteMovie(search) {
            search.preventDefault()
            console.log("hello")
            const movieObj = {title: "Hello", body: '1'}
            const url = "https://invented-fantastic-sense.glitch.me/movies/"
            const option = {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(movieObj),
            };
            console.log('delete option', option)
            fetch(`${url}${search}`, option)
            // fetch(url, option)
                .then(response => response.json())
                .then(function (data) {
                    alert(`was deleted`)
                    console.log(' delete data', data);
                })
                .catch((error) => {
                    alert('could not delete');
                    console.log(error);
                })

        }



/* STEPS TO SEND A DELETE REQUEST
* (1) GET Movie
* (2) Click [x]
* (3) deletes from view
* (4) Sends a message to server with the ID
*
*
* */






// });
