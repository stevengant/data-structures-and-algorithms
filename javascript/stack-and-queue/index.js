'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }

  // adds new node with that value to the top of the stack with O(1) time performance
  push(value) {
    let newNode = new Node(value);
    newNode.next = this.top;
    this.top = newNode;
  }

  // returns the value of the node from top of the stack AND removes reference to that node
  pop() {
    let removedValue = null;
    if(this.top) {
      removedValue = this.top.value;
      this.top = this.top.next;
    }

    return removedValue
  }

  peek() {
    if(!this.top) return null;
    return this.top.value;
  }

  isEmpty() {
    // return this.top === null;
    if(!this.top) return true;
    return false;
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.back = null;
  }

  enqueue(value) {
    let newNode = new Node(value);
    if(this.front) {
      // getting ready to get in line
      this.back.next = newNode;
    } else {

      // you are at the front of the line
      this.front = newNode;
    }

    // back of the line
    this.back = newNode;
  }

  dequeue() {
    let removedValue = null;
    if(this.front) {
      removedValue = this.front.value;
      // if only one node in q
      if(this.front === this.back) {

        // verify back is null after removing last node
        this.back = null;
      }

      // no matter how many in line, front moves to next. If only one in line, it moves to null. If two or more in line, it moves to the next in line
      this.front = this.front.next;
    }

    return removedValue;
  }

  peek() {
    if(!this.front) return null;
    return this.front.value;
  }

  isEmpty() {
    return this.front === null;
  }


}

class Animal {
  constructor(name, species, next = null) {
    this.name = name;
    this.species = species;
    this.next = next;
  }
}

class AnimalShelter {
  constructor() {
    this.cats = new Queue();
    this.dogs = new Queue();
  }
  enqueue(name, species) {
    let newAnimal = new Animal(name, species);
    if (species === 'cat') {
      if (!this.cats.front) {
        this.cats.front = newAnimal;
        this.cats.back = newAnimal;
      } else {
        this.cats.back.next = newAnimal;
        this.cats.back = newAnimal;
      }
    }
    if (species === 'dog') {
      if (!this.dogs.front) {
        this.dogs.front = newAnimal;
        this.dogs.back = newAnimal;
      } else {
        this.dogs.back.next = newAnimal;
        this.dogs.back = newAnimal;
      }
    }
  }

  dequeue(species) {
    if (species === 'cat') {
      if (!this.cats.front) {
        return null;
      }
      let temp = this.cats.front;
      this.cats.front = this.cats.front.next;
      return temp;
    }
    if (species === 'dog') {
      if (!this.dogs.front) {
        return null;
      }
      let temp = this.dogs.front;
      this.dogs.front = this.dogs.front.next;
      return temp;
    }
    return null;
  }

}

let q = new Queue();
q.enqueue(1);
q.enqueue(2);
q.enqueue(3);
console.log(JSON.stringify(q));
console.log('--------------------');

q.dequeue();
console.log('one node removed',JSON.stringify(q));
q.dequeue();
console.log('two nodes removed', JSON.stringify(q));
q.dequeue();
console.log('three node removed',JSON.stringify(q));


module.exports = { Stack, Queue, AnimalShelter };


