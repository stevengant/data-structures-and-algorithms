'use strict';

const { LinkedList } = require('../../linked-list/index');

class HashTable {
  constructor(size) {
    this.size = size;
    this.buckets = new Array(size);
  }

  hash(key) {
    let characters = key.split('');
    // use reducer pattern
    let asciiSum = characters.reduce((sum, character) => {
      return sum + character.charCodeAt(0);
    }, 0);

    // multiply ascii sum by a large primary number
    let initialHash = asciiSum * 599;
    return initialHash % this.size;
  }

  set(key, value) {
    // hash the key
    let position  = this.hash(key);
    // square bracket notation allows creation of obj prop dynamically
    // let data = {[key]: value};
    if(!this.buckets[position]) {
      this.buckets[position] = {};
    }
    this.buckets[position][key] = value;
  }
    // how to store in a linked list -- challenge will be different
    // using linked list:
      // does the bucket exist? If it does add to existing bucket
      // if not, create bucket and add it to correct position in the array
    // if(this.buckets[position]) {
    //   let bucket = this.buckets[position];
    //   bucket.add(data);

    // } else {
    //   let bucket = new LinkedList();
    //     bucket.add(data);
    //     this.buckets[position] = bucket;
    // }
  // }

  get(key) {
    let position = this.hash(key);
    // Returns: Value associated with that key in the table
    // this does not account for collisions
    if(this.buckets[position]) {
      // let bucket = this.buckets[position];
      // if no linked list, it is likely just bucket.value
      let value = this.buckets[position][key];
      return value; 
    } else {
      return null;
    }
  }

  has(key){
    let position = this.hash(key);

    let result = this.buckets[position] ? true : false
    return result;
  }

  keys() {
    let keysArr = [];
    for (let i = 0; i < this.buckets.length; i++) {
      if (this.buckets[i]) {
        for (let key in this.buckets[i]) {
          keysArr.push(key);
        }
      }
    }
    return keysArr;
  }
}

module.exports = { HashTable };

// const table = new HashTable(1024);

// const hashOne = table.hash('Ryan');
// const hashTwo = table.hash('Marco');
// const hashThree = table.hash('Mike');

// console.log('hashOne:', hashOne);
// console.log('hashTwo:', hashTwo);
// console.log('hashThree:', hashThree);

// table.set('Ryan', 'he/him');
// table.set('Marco', 'he/him');
// table.set('Mike', 'he/him');
// console.log(table);
// console.log(table.get('Ryan'));
// console.log('has: ', table.has('Ryan'));
// console.log('has: ', table.has('Steve'));
