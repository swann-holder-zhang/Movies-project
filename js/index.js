(function () {
    "use strict"
    let menu = document.getElementById("menu-cont");
    menu.addEventListener("keydown",function(e){
        console.log(e.key);
        if (e.key === "Enter"){
            menu.click();
        }
    })


    const btn = document.createElement('button');
    let i = 0;

    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
    const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
    const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))
    {/* <div class="offcanvas-backdrop fade show"></div> */ }



    let offcanvas = document.getElementById("offc");
    let test = document.getElementById("test");

    // TODO Turn Event function into a separate function called CreateElement params should me user type input 
    
    // Here for every click js creates one element and uses bootstap ion-icon attributes to render elements and icons 
    window.addEventListener("load", function () {
       
       

            fetch(`https://freckle-fuzzy-objective.glitch.me/movies`)
            .then(response => response.json())
                .then(function (data) {
                    console.log(data);
                    
                    data.forEach(movie =>{
                        let t = movie.title;
                        let y = movie.year;
                        offcanvas.appendChild(movieInterface(t,y))

                    })
                    

                }).catch((error) => {
                    // loadingAnimation();
                    console.log(error);
                })// end fetch
        

        // Bootstrap Hovering Tooltip
        const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
        const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

    })


    function movieInterface(title,year){

        let myMovies = document.createElement("div");
        
        myMovies.classList.add("myMovies");
        myMovies.setAttribute("id", "myMovies");
        myMovies.setAttribute("data-bs-content","hello")

        let h2 = document.createElement("h2");
        i = i+1;
        // h2.innerText = `Movie${i}`;
        h2.innerText = `${title} ${year}`;
        // h2.textContent
        let popopt = {
            html: true,
            content:"<img width='150px' src='assets/defualtMovie.png' >",
            placement: "left",
            trigger: "hover focus"
        }
        const popover = new bootstrap.Popover(myMovies,popopt);
        let modContainer = document.createElement("div");
        modContainer.classList.add("mod");

        let edit = document.createElement("ion-icon");
        edit.setAttribute("name", "create-outline");
        edit.setAttribute("data-bs-title", "Edit")
        edit.setAttribute("id", "edit");

        let like = document.createElement("ion-icon");
        like.setAttribute("name", "heart");
        like.setAttribute("data-bs-title", "Like");
        like.setAttribute("id", "edit");
        like.addEventListener("click", function(){
            like.classList.toggle("like");
        })

        let del = document.createElement("ion-icon");
        del.setAttribute("name", "trash-outline");
        del.setAttribute("id", "delete");
        let delOptions = {
        html: true,
        content:"Delete",
        placement: "bottom",
        trigger: "hover focus"
    }
    const delpopover = new bootstrap.Popover(del,delOptions);


        del.addEventListener("click",function(){
            myMovies.remove();
            popover.dispose();
            delpopover.dispose();
            // window.location.href= "#offc";
        })

        // class="myMovies" id="myMovies"  data-bs-container="body" data-bs-toggle="popover" data-bs-placement="left" data-bs-content="Left popover"

        let icons = [edit, like];
        icons.map(icon => {

            icon.setAttribute("type", "button");
            icon.setAttribute("data-bs-toggle", "tooltip");
            icon.setAttribute("data-bs-placement", "bottom");
            

        });

        modContainer.appendChild(edit);
        modContainer.appendChild(like);
        modContainer.appendChild(del);
        myMovies.appendChild(h2);
        myMovies.appendChild(modContainer);


        let rename = document.createElement("input")
        rename.classList.add("rename")
        rename.setAttribute("placeholder",h2.textContent)
        // +++++++ EDIT +++++++++++++++++++++++++++++
        edit.addEventListener("click", function () {
            h2.style.display = "none";
            let options = { focusVisible: true };
            rename.focus(options);
            // rename.focus();

            // rename.setAttribute("tabindex", "-2");
            rename.addEventListener("keydown", function (e) {
                rename.focus();
                // console.log(e.key);
                console.log(e.target.value);
                if (e.key === "Escape") {
                    rename.remove();
                    h2.style.display = "flex";
                    myMovies.insertBefore(h2, modContainer)
                }
            })
            // +++++++ EDIT +++++++++++++++++++++++++++++

            rename.classList.add("rename");
            rename.setAttribute("placeholder", h2.textContent);
            rename.setAttribute("type", "search");
            myMovies.insertBefore(rename, modContainer);


        })
        // here it appends myMovies which has children of modContainer and h2
        myMovies.addEventListener("mouseleave", function () {
            console.log('mouseleave!');

            rename.remove();
            h2.style.display = "flex";
            myMovies.insertBefore(h2, modContainer)
        })
        myMovies.addEventListener("dblclick", function(){
            console.log(' ln 109 hello');
            h2.style.display = "none";
            myMovies.insertBefore(rename, modContainer)
            
            
        }) 
        // ^this is all just UI/UX manipulation no API Calls


        return myMovies;

    }
   




















})();