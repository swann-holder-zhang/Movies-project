"use strict"
let url = "https://freckle-fuzzy-objective.glitch.me/movies";
let form2 = document.getElementById("addM");
const postMovie = (event,y,p) => {
    let Title = ""
    let  Year = ""
    let poster = "/Users/herbertholder/Desktop/projects/movie-project/assets/defualtMovie.png";




    if (event.type == "submit"){
        event.preventDefault();
        alert("Form submit!!!!")
        Title = event.target[0].value;
        Year = event.target[1].value;
        poster = "/Users/herbertholder/Desktop/projects/movie-project/assets/defualtMovie.png";

    }else {
        Title = event;
        Year = y;
        poster = p;

    
    }
    if (Title == "" || Year == ""){
        alert('Please input valid information');
        location.reload();
        exit(1);
    }

    // Todo validate that the year does not have a decimal number to it 
    if (isNaN(Year) || Year != parseInt(Year) ){
        console.log(' Year: ',Year);
        
        alert("Please input a valid Year 1");
        exit(1);
    }
    if (Year.toString().length !== 4){
        alert("Please insert a valid year 2");
        location.reload();
        exit(1);
    }

    
    const movieObj = {
        title: Title,
        year: Year,
        // TODO Change this path if needed based on your file structure
        poster: p
    };
    let option = {
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
        alert('Post successful');
        location.reload();
    })
    .catch((error) => {
        console.log(error);
    })
    
    
    
}
form2.addEventListener("submit", postMovie)

