var jsonfile = require('jsonfile');

const filename = '../__tests__/data/movies/single/movies.json'

const determineMovieFilename = ((movie) => {
  const title = movie.title.replace(/\W/g, '');
  return `${movie.year} - ${title}`;
})

jsonfile.readFileSync(filename).map(movie => {
  const movieFilename = determineMovieFilename(movie);
  console.log(movieFilename);
});

