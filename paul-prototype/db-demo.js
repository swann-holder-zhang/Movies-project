(function () {
    "use strict"

    let form = document.getElementById("search-movies");
    form.addEventListener("submit", function (event) {
        event.preventDefault();


        const reviewObj = {
            restaurant_id: 1,
            name: event.target[0].value,
            rating: 5,
            comments: "This is a really good place for coding and eating"
        };
        const url = 'http://localhost:3000/posts';
        const options = {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(reviewObj),
        };
        fetch(url, options)
            .then(response => console.log(response)) /* review was created successfully */
            .catch(error => console.error(error)); /* handle errors */

    })


})();