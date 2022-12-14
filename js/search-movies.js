"use strict"
let container = document.getElementById("content-cont");
let form = document.getElementById("search-movies");
form.addEventListener("submit", function(e){
    e.preventDefault(); 
    
    //     // loadingAnimation()
        fetch(`https://www.omdbapi.com?apikey=${movieKey}&s=${e.target[0].value}`)
            .then(response => response.json())
            .then(function (data) {
                console.log(data.Search);
                let movie = data.Search;
                container.innerHTML = append(movie);
                
    
            })
            .catch((error) => {
                // loadingAnimation();
                console.log(error);
            })

})


