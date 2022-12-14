"use strict"
// <div class="container parent col-md card" id="parent">
//         <button type="button" class="btn-close remove-card" id="delete" onclick="parentNode.remove()"></button>
//         <img class="img-thumbnail mx-auto d-block border-0 w-75 h-75" width="100px" src="${Poster}" alt='image'>
//         <h5 class="justify-content-center d-flex">
//             ${Title} - <p class="year">${Year}</p>
//         </h5>
//         <button type="button" class="btn btn-outline-primary " id="addToCart"
//             onclick="postMovie('${Title}','${Year}','${Poster}')">Add Movie
//         </button>
//     </div>

let btn = document.createElement("button");
btn.setAttribute("type","button");
btn.setAttribute("id","addToCart");
btn.classList.add



const append = (data) => {
    console.log("using append");
    console.log(data);

    let html = ``;
    for (let i in data) {
        // console.log("Data: ", data[i])
        const { Title, Year, Poster } = data[i]
        html += ``


    }
    return html
}
// let ob1 = {Title:"herb",Year:"1995",Poster: "US-en-20221128-popsignuptwoweeks-perspective_alpha_website_medium.jpeg"}
// let ob2 = {Title:"herb",Year:"1995",Poster: "US-en-20221128-popsignuptwoweeks-perspective_alpha_website_medium.jpeg"}
// let ob3 = {Title:"herb",Year:"1995",Poster: "US-en-20221128-popsignuptwoweeks-perspective_alpha_website_medium.jpeg"}



let content = document.getElementById("content-cont");
// content.innerHTML = append([ob1,ob2,ob3]);