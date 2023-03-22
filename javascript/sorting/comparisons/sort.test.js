'use strict';

const { Movies } = require("./movies");
const { sortTitle, sortYear, compareTitle, compareYear } = require("./sort");

describe("Sorters", () => {
  it("can sort movies by year", () => {
    const movies = sortYear(Movies);
    expect(movies.map((m) => m.title)).toEqual([
      "The Intouchables",
      "Valkyrie",
      "Ratatouille",
      "Stardust",
      "City of God",
      "Memento",
      "The Shawshank Redemption",
      "Beetlejuice",
      "Crocodile Dundee",
      "The Cotton Club",
    ]);
  });

  it("can sort movies by title", () => {
    const movies = sortTitle(Movies);
    expect(movies.map((m) => m.title)).toEqual([
      "Beetlejuice",
      "City of God",
      "The Cotton Club",
      "Crocodile Dundee",
      "The Intouchables",
      "Memento",
      "Ratatouille",
      "The Shawshank Redemption",
      "Stardust",
      "Valkyrie",
    ]);
  });
  it('compares years properly', () => {
    let compare = compareYear(Movies[0], Movies[1]);

    expect(compare).toBe(14);
  });

  it('compares titles properly', () => {
    let compare = compareTitle(Movies[0], Movies[1]);
    
    expect(compare).toBe(-1);
  });
});