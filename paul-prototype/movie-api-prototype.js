/*PART (0)
* Any prerequisite functions/keys/variables
* */
function promiseState(promise, callback) {
    // Symbols and RegExps are never content-equal
    var uniqueValue = window['Symbol'] ? Symbol('unique') : /unique/

    function notifyPendingOrResolved(value) {
        if (value === uniqueValue) {
            return callback('pending')
        } else {
            return callback('fulfilled')
        }
    }

    function notifyRejected(reason) {
        return callback('rejected')
    }

    var race = [promise, Promise.resolve(uniqueValue)]
    Promise.race(race).then(notifyPendingOrResolved, notifyRejected)
}



<<<<<<< HEAD
$(document).ready(function () {
    "use strict"

    alert("I am alive")
=======
>>>>>>> 55f60dfb4084a5659b62d4ea425f1bea65ab74d2
    const movieKey = MOVIE_API; //
    const url = "https://invented-fantastic-sense.glitch.me/movies";


    /*PART (1) -button to get movies from omdbapi
    * add search button
    * put an id on the search bar and get the input va
    *
    * 
    * */

    //Btn search by either value of the search, title, year, or plot.
    $('#submit-btn').click((event) => {
        event.preventDefault();
        let search = $('#search').val()
        // getOmdMovies(search);
        getGlitchMovies(search);


    });


//+++++++++++++++++++++++++++++++++++++++++++++GET ME +++++++++++++++++++++++++++++++++++++++++++++
function saveMovies (){
   let searchResult = [];

}

    const getOmdMovies = (search) => {
        console.log(search);
        // alert('getOmdMovies get request works')
         let promise = fetch(`https://www.omdbapi.com?apikey=${movieKey}&s=${search}&Plot=Short`)

            .then(response => response.json())//then... return json
            .then(function (data) { //then return data
                console.log('get data', data);

                let movie = data.Search;
                // console.log("getOmdMovies first: ", data.Search[0].Title);
                for (let i=0;i<data.Search.length;i++){

                    const movieObj = {title: `${data.Search[i].Title.toString() }`, year:data.Search[i].Year.toString() }

                    postMovie(movieObj);
                }
                let appendMovies = append(movie) //cards are made
                $('#append-movies').html(appendMovies)  //I want to take the results and place it in the div w/ ID of movies
            })
            .catch((error) => {
                console.log(error);
            })
    }


<<<<<<< HEAD
    function deleteMovie(event){
        alert("hello")
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

=======
>>>>>>> 55f60dfb4084a5659b62d4ea425f1bea65ab74d2





    let append = function (data) {
        let html = ``
        for (let i in data) {
            console.log(" Get data: ", data[i])
            const { Title, Year, Poster, imdbID, Type } = data[i]
            html +=
<<<<<<< HEAD
                `<div class="container" id="parent">
<<<<<<< HEAD
                      <button type="button" data-dismiss="alert" class="btn-close remove-card" id="delete" onclick="deleteMovie(event);"></button> <br>
=======
                         <button type="button" class="btn-close remove-card" id="delete" onclick="deleteMovie(event)"></button> <br>
>>>>>>> 55f60dfb4084a5659b62d4ea425f1bea65ab74d2
=======
                `<div class="container parent${i++}" id="parent${i++}">
                         <button type="button" class="btn-close remove-card" id="delete" onclick="deleteMovie(event);parentNode.remove()"></button> <br>
>>>>>>> 01d61b1346208be28a4140d19720be233f398d9c
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

<<<<<<< HEAD
    

    $("#delete").on("click", function(){
        console.log();
    });

    



    //
    /*PART (3)
    * maybe create a function that changes the method that updates options.
    *
     */


    // function option (method){
    //   const option =   {
    //         method: `${method.stringify()}`,
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify(),
    //     };
    // }

    /* Part (4)

    * POST/DELETE request
    *
    * */
    // const postDeleteMovies = (search) => {
    //     fetch(url, option)
    //         .then(response => response.json())
    //         .then(function (data) {
    //             console.log('data', data);
    //         })
    //         .catch((error) => {
    //             console.log(error);
    //         })
    // }


    function putMovie(movie) {
        movie.preventDefault()

        console.log("hello")
        // movie.preventDefault()
        const movieObj = { title: "Hello", body: '1' }
        const option = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(movieObj),
        };
        console.log('put option', option)
        fetch(url, option)
            .then(response => response.json())
            .then(function (data) {
                alert('movie was good to watch')
                console.log('data', data);
            })
            .catch((error) => {
                console.log(error);
            })

    }
    let inputMovie = document.getElementById('new-movie')
    inputMovie.addEventListener('submit', putMovie)



    // function deleteMe(){
    //     let del = document.getElementById("delete");
    //     console.log('del: ',del);

    // }
    // let deleteMe = document.getElementsByElement('delete');
    // deleteMe.addEventListener('click', deleteMe)

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
    * (5) removing once clicked
    https://www.youtube.com/watch?v=0aWGMxrdUZE*
    * */
=======
function postMovie (movie) {
//TODO: get the length of database (data)
    console.log(movie)
    // movie.preventDefault()
    const movieObj = movie;
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
            // alert('Post successful')
            console.log('data', data);
        })
        .catch((error) => {
            console.log(error);
        })

}
let post= document.getElementById('new-movie')


//GET MOVIES IN 'DATABASE'
//NOT READY-WAITING ON THE FRONT-END TO BE MORE DEVELOP
const getGlitchMovies = (title, year) => {
        title = title.toString().toUpperCase();
    console.log(title, year);
    fetch(`https://invented-fantastic-sense.glitch.me/movies`)
        .then(response => response.json())//then... return json
        .then(function (data) { //then return data
            console.log('getGlitchMovies: ', data.filter(function(item){

                return item.title.toString().toUpperCase() === title;
                    // && item.year === search.year;  //DEVELOP MORE HERE
            }));




            // let movie = data.Search.title;
            // let appendMovies = append(movie)
            // $('#append-movies').html(appendMovies)  //I want to take the results and place it in the div w/ ID of movies
        })
        .catch((error) => {
            console.log(error);
        })
}


//+++++++++++++++++++++++++++++++++++++++++++++PUT ME+++++++++++++++++++++++++++++++++++++++++++++



function putMovie (id) {
    id.preventDefault()

    console.log("hello")
    // movie.preventDefault()
    const movieObj = {title: "Hello", body: '3'}
    const option =   {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(movieObj),
    };
    console.log('put option', option)
    fetch(`https://invented-fantastic-sense.glitch.me/movies/${id}`, option)
        .then(response => response.json())
        .then(function (data) {
            alert('movie was good to watch')
            console.log('data', data);
        })
        .catch((error) => {
            console.log(error);
        })

}


let inputMovie= document.getElementById('new-movie')

//+++++++++++++++++++++++++++++++++++++++++++++DELETE ME+++++++++++++++++++++++++++++++++++++++++++++
function deleteMovie(title,year) {

    title = title.toString().toUpperCase();
    console.log(title, year);
    fetch(`https://invented-fantastic-sense.glitch.me/movies`)
        .then(response => response.json())//then... return json
        .then(function (data) { //then return data
            console.log('getGlitchMovies: ', data.filter(function(item){

                return item.title.toString().toUpperCase() === title;
                // && item.year === search.year;  //DEVELOP MORE HERE
            }));




            // let movie = data.Search.title;
            // let appendMovies = append(movie)
            // $('#append-movies').html(appendMovies)  //I want to take the results and place it in the div w/ ID of movies
        })
        .catch((error) => {
            console.log(error);
        })

}


        // function deleteMovie(search) {
        //     search.preventDefault()
        //     console.log("delete works!")
        //     const movieObj = {title: "Hello", body: '1'}
        //     const url = "https://invented-fantastic-sense.glitch.me/movies/"
        //     const option = {
        //         method: 'DELETE',
        //         headers: {
        //             'Content-Type': 'application/json',
        //         },
        //         body: JSON.stringify(movieObj),
        //     };
        //     console.log('delete option', option)
        //     fetch(`${url}${search}`, option)
        //     // fetch(url, option)
        //         .then(response => response.json())
        //         .then(function (data) {
        //             // alert(`was deleted`)
        //             console.log(' delete data', data);
        //         })
        //         .catch((error) => {
        //             // alert('could not delete');
        //             console.log(error);
        //         })
        //
        // }
inputMovie.addEventListener('submit', postMovie)



/* STEPS TO SEND A DELETE REQUEST
* (1) GET Movie
* (2) Click [x]
* (3) deletes from view
* (4) Sends a message to server with the ID
*
*
* */

>>>>>>> 55f60dfb4084a5659b62d4ea425f1bea65ab74d2





