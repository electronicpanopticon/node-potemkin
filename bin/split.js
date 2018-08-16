const jsonfile = require('jsonfile');

const filename = '../__tests__/data/movies/single/movies.json'

const determineMovieFilename = ((movie) => {
  const title = movie.title.replace(/[^0-9a-zA-Z_ ]/g, '');
  return `${movie.year} - ${title}`;
})

jsonfile.readFileSync(filename).map(movie => {
  const movieFilename = determineMovieFilename(movie);
  console.log('Writing: ', movieFilename);
  jsonfile.writeFileSync(movieFilename, movie, {spaces: 2})
});
