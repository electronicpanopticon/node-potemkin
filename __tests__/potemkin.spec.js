const potemkin = require('../');

describe('Potemkin', () => {

  const DIR = 'dta/movies/multiple';

  it('knows if the passed in location is a directory', () => {
    expect(potemkin.isDirectory(DIR)).toBe(true);
  });
});