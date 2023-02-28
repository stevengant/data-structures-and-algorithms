'use strict';

const { Stack } = require('../stack-and-queue');

class PseudoQueue {
  constructor() {
    this.stack1 = new Stack();
    this.stack2 = new Stack();
  }

  enqueue(value) {
    while(this.stack1.top) {
      this.stack2.push(this.stack1.pop());
    }
    this.stack2.push(value);
    while(this.stack2.top) {
      this.stack1.push(this.stack2.pop());
    }
  }

  dequeue() {
    return this.stack1.pop();
  }
}

module.exports = PseudoQueue;