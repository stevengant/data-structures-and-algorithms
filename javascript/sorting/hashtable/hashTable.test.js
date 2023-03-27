'use strict';
const { HashTable } = require('./hashtable');

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
});