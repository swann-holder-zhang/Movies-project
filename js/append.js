"use strict"

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