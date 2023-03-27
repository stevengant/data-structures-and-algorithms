'use strict';
const { HashTable, repeatedWord } = require('./hashtable');

const tableSize = 1024;
const table = new HashTable(tableSize);

const hashOne = table.hash('Ryan');
const hashTwo = table.hash('Marco');
const hashThree = table.hash('Mike');

table.set('Ryan', 'Instructor');
table.set('Marco', 'Student');
table.set('Mike', 'Student');

describe('HashTable', () => {
  it('sets a key/value pair to hashtable', () => {

    expect(table.has('Ryan')).toBeTruthy();
    expect(table.has('Steve')).toBeFalsy();
  });

  it('retreives a value of a specific key', () => {

    expect(table.get('Marco')).toEqual('Student');
  });

  it('returns null for a key that does not exist in table', () => {

    expect(table.get('Steve')).toEqual(null);
  });

  it('returns a list of all unique keys that exist in hashtable', () => {

    expect(table.keys()).toEqual(['Mike', 'Marco', 'Ryan']);
  });

  it ('handles a collision within the hashtable', () => {
    table.set('yRan', 'Banana');
    expect(table.get('yRan')).toEqual('Banana');
  });

  it('hashes a key to an in-range value', () => {

    expect(hashOne).toBeLessThan(tableSize);
    expect(hashTwo).toBeLessThan(tableSize);
    expect(hashThree).toBeLessThan(tableSize);

    expect(hashOne).toBeGreaterThanOrEqual(0);
    expect(hashTwo).toBeGreaterThanOrEqual(0);
    expect(hashThree).toBeGreaterThanOrEqual(0);
  });

  it('finds the first word to occur more than once in a string', () => {

    expect(repeatedWord('Once upon a time, there was a brave princess who...')).toEqual('a');

    expect(repeatedWord('It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us, we were all going direct to Heaven, we were all going direct the other way – in short, the period was so far like the present period, that some of its noisiest authorities insisted on its being received, for good or for evil, in the superlative degree of comparison only...')).toEqual('it');

    expect(repeatedWord('It was a queer, sultry summer, the summer they electrocuted the Rosenbergs, and I didn’t know what I was doing in New York...')).toEqual('summer');

    expect(repeatedWord('This is my friend, Null')).toEqual(null);

  })
});