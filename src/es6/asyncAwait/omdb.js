const omdbapi = 'https://www.omdbapi.com/';
const spinner = document.querySelector('.spinner');
const form = document.querySelector('form');

async function fetchMovie(url) {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`An error has occurred: ${response.status}  ${response.statusText}`); // check for errors
    }
    const movie = await response.json();
    // info if movie not found
    let info = `
          <div class="card warning full-width">
            <p>No info found for <b>${title.value}</b></p>
          </div>`;
    // overwrite info if the movie is found
    if (movie.Response === 'True') {
        const poster = movie.Poster && movie.Poster.length > 10 ? `<img src="${movie.Poster}">` : '';
        info = `
            <div class="row">
              <div class="col-sm-6">${poster}</div>
              <div class="col-sm-6">
                <h2>${movie.Title}</h2>
                <p><b>Genre: </b>${movie.Genre}<br>
                <b>Released: </b>${movie.Released}<br>
                <b>Actors: </b>${movie.Actors}<br>
                <b>Director: </b>${movie.Director}<br></p>
                <hr>
                <p class="text-justify">${movie.Plot}</p>
              </div>
            </div>`;
    }
    document.getElementById('movieContainer').innerHTML = info;
    // hide the spinner
    spinner.classList.add('hidden');
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    // get all field data from the form
    const data = new FormData(form);
    // convert data to a query string
    const queryString = new URLSearchParams(data).toString();
    // console.log(queryString);
    // fetch data from OMDb
    fetchMovie(`${omdbapi}?${queryString}`).catch((error) => {
        spinner.classList.add('hidden');
        console.log(error);
    });
});
form.dispatchEvent(new Event('submit'));
