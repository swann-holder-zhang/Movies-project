(function(){
"use strict"





   window.onload = setTimeout(function () {
        console.log("works")
        let loader = document.getElementById("onload");
        loader.style.display = 'none'},2000);




// window.onload = function () {
//     console.log("works")
//     let loader = document.getElementById("onload");
//     loader.style.display = 'none';



    const movieKey = MOVIE_API;
const url = "https://invented-fantastic-sense.glitch.me/movies"; //Paul's DB
// const url = "https://vintage-sulky-aluminum.glitch.me/movies"; //Herb's DB
// const url= "https://subdued-lizard-notebook.glitch.me/movies"; //zhang's DB



    const getMovies = (search) => {
    search.preventDefault()
    // console.log(search.target[0].value)
    // console.log('hello')
        fetch(`https://www.omdbapi.com?apikey=${movieKey}&s=${search.target[0].value}`)
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
                         <button id="delete">Delete</button>
                 
            </div>`
        }
        return html
    }

    let form = document.getElementById('search');
    form.addEventListener('submit', getMovies)



    function putMovie (movie) {
        movie.preventDefault()

        console.log("hello")
        // movie.preventDefault()
    const movieObj = {title: "Hello", body: '1'}
    const option =   {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(movieObj),
        };
        console.log('option', option)
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
    let inputMovie= document.getElementById('new-movie')
    inputMovie.addEventListener('submit', putMovie)




// sorting table
    function sortTable() {
        let table, rows, switching, i, x, y, shouldSwitch;
        table = document.getElementById("myTable");
        switching = true;
        /*Make a loop that will continue until
        no switching has been done:*/
        while (switching) {
            //start by saying: no switching is done:
            switching = false;
            rows = table.rows;
            /*Loop through all table rows (except the
            first, which contains table headers):*/
            for (i = 1; i < (rows.length - 1); i++) {
                //start by saying there should be no switching:
                shouldSwitch = false;
                /*Get the two elements you want to compare,
                one from current row and one from the next:*/
                x = rows[i].getElementsByTagName("TD")[0];
                y = rows[i + 1].getElementsByTagName("TD")[0];
                //check if the two rows should switch place:
                if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                    //if so, mark as a switch and break the loop:
                    shouldSwitch = true;
                    break;
                }
            }
            if (shouldSwitch) {
                /*If a switch has been marked, make the switch
                and mark that a switch has been done:*/
                rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
                switching = true;
            }
        }
    }



})()