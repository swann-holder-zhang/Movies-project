(function () {
  "use strict";
  let menu = document.getElementById("menu-cont");
  menu.addEventListener("keydown", function (e) {
    console.log(e.key);
    if (e.key === "Enter") {
      menu.click();
    }
  });

  const tooltipTriggerList = document.querySelectorAll(
    '[data-bs-toggle="tooltip"]'
  );
  const tooltipList = [...tooltipTriggerList].map(
    (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
  );
  const popoverTriggerList = document.querySelectorAll(
    '[data-bs-toggle="popover"]'
  );
  const popoverList = [...popoverTriggerList].map(
    (popoverTriggerEl) => new bootstrap.Popover(popoverTriggerEl)
  );
  // this is the element that appends the html elements
  let offcanvas = document.getElementById("offc");

  // Here for every click js creates one element and uses bootstap ion-icon attributes to render elements and icons
  window.addEventListener("load", function () {
    fetch(`https://freckle-fuzzy-objective.glitch.me/movies`)
      .then((response) => response.json())
      .then(function (data) {
        console.log(data);

        // Render each movie
        data.map((movie) => {
          let t = movie.title;
          let y = movie.year;
          let id = movie.id;
          offcanvas.appendChild(movieInterface(t, y, id));
        });
      })
      .catch((error) => {
        // loadingAnimation();
        console.log(error);
      }); // end fetch

    // Bootstrap Hovering Tooltip
    const tooltipTriggerList = document.querySelectorAll(
      '[data-bs-toggle="tooltip"]'
    );
    const tooltipList = [...tooltipTriggerList].map(
      (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
    );
  });

  // Creates HTML elements with pure JavaScript
  function movieInterface(title, year, id) {
    let myMovies = document.createElement("div");

    myMovies.classList.add("myMovies");
    myMovies.setAttribute("id", id);
    myMovies.setAttribute("data-bs-content", "hello");

    let h2 = document.createElement("h2");
    // h2.innerText = `Movie${i}`;
    h2.innerText = `${title} ${year}`;
    // h2.textContent
    let popopt = {
      html: true,
      content: "<img width='150px' src='assets/defualtMovie.png' >",
      placement: "left",
      trigger: "hover focus",
    };
    const popover = new bootstrap.Popover(myMovies, popopt);
    let modContainer = document.createElement("div");
    modContainer.classList.add("mod");

    let edit = document.createElement("ion-icon");
    edit.setAttribute("name", "create-outline");
    edit.setAttribute("data-bs-title", "Edit");
    edit.setAttribute("id", "edit");

    let like = document.createElement("ion-icon");
    like.setAttribute("name", "heart");
    like.setAttribute("data-bs-title", "Like");
    like.setAttribute("id", "edit");
    like.addEventListener("click", function () {
      like.classList.toggle("like");
    });

    let del = document.createElement("ion-icon");
    del.setAttribute("name", "trash-outline");
    del.setAttribute("id", "delete");
    let delOptions = {
      html: true,
      content: "Delete",
      placement: "bottom",
      trigger: "hover focus",
    };
    const delpopover = new bootstrap.Popover(del, delOptions);

    del.addEventListener("click", function () {
      myMovies.remove();
      popover.dispose();
      delpopover.dispose();
      let option = {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      };
      fetch(
        `https://freckle-fuzzy-objective.glitch.me/movies/${myMovies.id}`,
        option
      )
        .then((response) => response.json())
        .then(function (data) {
          console.log("DELETE: ", data);
        })
        .catch((error) => {
          // loadingAnimation();
          console.log(error);
        }); // end fetch

      // window.location.href= "#offc";
    });

    // class="myMovies" id="myMovies"  data-bs-container="body" data-bs-toggle="popover" data-bs-placement="left" data-bs-content="Left popover"

    let icons = [edit, like];
    icons.map((icon) => {
      icon.setAttribute("type", "button");
      icon.setAttribute("data-bs-toggle", "tooltip");
      icon.setAttribute("data-bs-placement", "bottom");
    });

    modContainer.appendChild(edit);
    modContainer.appendChild(like);
    modContainer.appendChild(del);
    myMovies.appendChild(h2);
    myMovies.appendChild(modContainer);

    let rename = document.createElement("input");
    rename.classList.add("rename");
    rename.setAttribute("placeholder", h2.textContent);
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
        let movieObj = {
            title: e.target.value
        }


        let editOption = {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(movieObj),
          };
        fetch(`https://freckle-fuzzy-objective.glitch.me/movies/${myMovies.id}`,editOption)
          .then((response) => response.json())
          .then(function (data) {
            console.log("patch: ", data);
          })
          .catch((error) => {
            // loadingAnimation();
            console.log(error);
          }); // end fetch
        if (e.key === "Escape") {
          rename.remove();
          h2.style.display = "flex";
          myMovies.insertBefore(h2, modContainer);
        }
      });
      // +++++++ EDIT +++++++++++++++++++++++++++++

      rename.classList.add("rename");
      rename.setAttribute("placeholder", h2.textContent);
      rename.setAttribute("type", "search");
      myMovies.insertBefore(rename, modContainer);
    });
    // here it appends myMovies which has children of modContainer and h2
    myMovies.addEventListener("mouseleave", function () {
      console.log("mouseleave!");

      rename.remove();
      h2.style.display = "flex";
      myMovies.insertBefore(h2, modContainer);
    });
    myMovies.addEventListener("dblclick", function () {
      console.log(" ln 109 hello");
      h2.style.display = "none";
      myMovies.insertBefore(rename, modContainer);
    });
    // ^this is all just UI/UX manipulation no API Calls

    return myMovies;
  }
})();
