"use strict"
 

// let btn1 = document.createElement("button");
// btn1.setAttribute("type", "button");
// btn1.setAttribute("id", "addToCart");
// btn1.classList.add("add-movie");

// let img = document.createElement("img");
// // ${Poster}
// // img.setAttribute("src","");
// img.setAttribute("width", "100px");
// img.setAttribute("alt", "image");

// let h2 = document.createElement("h2");
// h2.classList.add("justify-content-center");
// h2.classList.add("d-flex");
// h2.classList.add("c");

// let btn2 = document.createElement("button");
// btn2.setAttribute("type", "button");
// btn2.setAttribute("id", "addToCart");
// btn2.classList.add("add-movie");
// btn2.innerText = "Add Movie";
// btn2.addEventListener("click", postMovie);

// let div = document.createElement("div");
// div.setAttribute("id", "parent");
// div.classList.add("container");
// div.classList.add("parent");
// div.classList.add("card");

// div.appendChild(btn1);
// div.appendChild(img);
// div.appendChild(h2);
// div.appendChild(btn2);
// img.setAttribute("src", Poster);
// h2.innerHTML = Title + " " + Year;

// parentNode.remove()
const deleteMovie = element => {

    console.log(element.id);



    let option = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
    };
    console.log('delete option', option)
    fetch(`https://bedecked-tame-lavender.glitch.me/movies/${element.id}`, option)
        .then(response => response.json())
        .then(function (data) {
            console.log(' delete data', data);
        })
        .catch((error) => {
            console.log(error);
        })

}



const addhtml = (data) => {
    console.log("using append");
    console.log(data);

    let html = ``;
    for (let i in data) {
        // console.log("Data: ", data[i])
        const { title, year, poster, id} = data[i]

       
        html += `<div class="parent" id="parent">
        <div class="close w-100 d-flex justify-content-startc align-items-center"id="${id}" onclick="deleteMovie(this)"><button type="button" class="btn-close remove-card" >
        </button></div>
        <img class="d-flex border-0 w-75 h-75" width="300px" src="${poster}" alt='image'>
        <h5 class="c d-flex">
            ${title}
        </h5>
        <p class="year">${year}</p>
        <button type="button" class="btn btn-outline-primary " id="addToCart"
            onclick="postMovie('${title}','${year}','${poster} ${id}')" onclick="this.parentNode.remove()">Add Movie
        </button>
    </div> }
`;


    }
    return html
}
// let ob1 = {Title:"herb",Year:"1995",Poster: "US-en-20221128-popsignuptwoweeks-perspective_alpha_website_medium.jpeg"}
// let ob2 = {Title:"herb",Year:"1995",Poster: "US-en-20221128-popsignuptwoweeks-perspective_alpha_website_medium.jpeg"}
// let ob3 = {Title:"herb",Year:"1995",Poster: "US-en-20221128-popsignuptwoweeks-perspective_alpha_website_medium.jpeg"}



let content = document.getElementById("content-cont");
// content.innerHTML = append();