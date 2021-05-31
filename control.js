const display = document.getElementById("data-display");
display.style.visibility = "hidden";
const btn = document.getElementById("btn");
btn.addEventListener("click", () => {
    const query = document.getElementById("search").value;
    const url = `https://api.themoviedb.org/3/search/movie?api_key=22366911802bda751290b0cbef946774&query=${query}`

    fetch(url).then(response => response.text())
          .then(function getInfo(data) {
            data = JSON.parse(data);
            let title = data.results[0].title;
            let overview = data.results[0].overview;
            let releasedate = data.results[0].release_date;
            let poster_path = data.results[0].poster_path;
            display.style.visibility = "visible";

            display.innerHTML = `
                                <img src="https://image.tmdb.org/t/p/w500${poster_path}" alt="">
                                <div class="content">
                                <h1> Title: ${title} </h1>
                                
                                
                                <p> Overview: ${overview} </p>
                                <p> Release Date: ${releasedate} </p>
                                </div>
                              `

            });
})

          