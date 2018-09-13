const potemkin = require('../');

describe('Potemkin', () => {

  const DIR = 'data/movies/multiple';
  const FILE = 'data/movies/single/movies.json';

  it('knows if the passed in location is a directory', () => {
    expect(potemkin.isDirectory(DIR)).toBe(true);
  });

  it('knows if a passed in location is a file', () => {
    expect(potemkin.isDirectory(DIR)).toBe(false);
  })
});