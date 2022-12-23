"use strict"
let container = document.getElementById("content-cont");
let form1 = document.getElementById("search-movies");
form1.addEventListener("submit", function (e) {
    e.preventDefault();
    // range for random number generator for element IDs
    let minm = 10000;
    let maxm = 999999999;


    fetch(`https://www.omdbapi.com?apikey=${movieKey}&s=${e.target[0].value}`)
        .then(response => response.json())
        .then(function (data) {
            console.log(data.Search);
            let arrObj = [];
            let mov = {};
            // Runs through the API array of objects, constructs a new object on every iteration and then assigns it our local array of objects
            for (let i = 0; i < data.Search.length; i++) {
                let random = Math.floor(Math
                    .random() * (maxm - minm + 1)) + minm;

                const { Title, Year, Poster } = data.Search[i]

                mov = {
                    title: Title,
                    year: Year,
                    poster: Poster,
                    id: random
                }
                
                arrObj[i] = mov;

            }
            // addhtml is found in append.js it takes the data from the object and places it in html format
            container.innerHTML = addhtml(arrObj);
        })
        .catch((error) => {
            // loadingAnimation();
            console.log(error);
        })
})


