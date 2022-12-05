/*PART (0)
* Any prerequisite functions/keys/variables
* */

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



/*PART (2)
* maybe create a function that renders a loading animation
*BONUS
 */


/*PART (3)
* Fetch API to derive Search results
*
* */


const getMovies = (search) => {
    fetch(`https://www.omdbapi.com?apikey=${movieKey}&s=${search}`)
        .then(response => response.json())//then... return json
        .then(function (data) { //then return data
            console.log('data', data);

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
        console.log("Data: ", data[i])
        const {Title, Year, Poster, imdbID, Type} = data[i]
        html += `<div>
                         <img src="${Poster}">
                         <p>Movie name: ${Title}</p>
                         <p>Movie Year: ${Year}</p>
                         <button id="delete">delete me</button> 
                 
            </div>`//create a pop method to remove this from array
    }
    return html
}

/*PART (3)
* maybe create a function that changes the method that updates options.
*
 */


function option (method){
  const option =   {
        method: `${method.stringify()}`,
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(),
    };
}

/* Part (4)

* POST/DELETE request
*
* */
const postDeleteMovies = (search) => {
    fetch(url, option)
        .then(response => response.json())
        .then(function (data) {
            console.log('data', data);
        })
        .catch((error) => {
            console.log(error);
        })
}

/*
* NOTES:
*
* (1)  API Follow Along
* https://www.youtube.com/watch?v=67eJTr6_ylY
*
* (2) API WEBSITE
* https://www.omdbapi.com/
*
*
* (4) Maybe as a substitute for background
* https://codepen.io/sarazond/pen/LYGbwj
*
* */