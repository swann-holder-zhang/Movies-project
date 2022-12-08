function editMovie(id) {
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
