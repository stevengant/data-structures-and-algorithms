const { Stack, Queue } = require('../stack-and-queue');
const PseudoQueue = require('./index');

describe('Stack', () => {
  it('Can successfully push onto a stack', () => {
    let stack = new Stack();
    stack.push(1);

    expect(stack.top.value).toEqual(1)
  });
  it('Can successfully push multiple values onto a stack', () => {
    let stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3);

    expect(stack.top.value).toEqual(3);
    expect(stack.top.next.value).toEqual(2);
    expect(stack.top.next.next.value).toEqual(1);

  });
  it('Can successfully pop off the stack', () => {
    let stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3);

    expect(stack.top.value).toEqual(3);
    expect(stack.top.next.value).toEqual(2);
    expect(stack.top.next.next.value).toEqual(1);

    let poppedValue = stack.pop();
    expect(poppedValue).toEqual(3)
    expect(stack.top.value).toEqual(2);
    expect(stack.top.next.value).toEqual(1);
    expect(stack.top.next.next).toBeNull();

  });
  it('Can successfully empty a stack after multiple pops', () => {
      let stack = new Stack();
      stack.push(1);
      stack.push(2);
      stack.push(3);
  
      stack.pop();
      stack.pop();
      stack.pop();
  
      expect(stack.top).toBeNull();

  });
  it('Can successfully peek the next item on the stack', () => {
    let stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3);

    expect(stack.peek()).toBe(3);

  });
  it('Can successfully instantiate an empty stack', () => {
    let stack = new Stack();

    expect(stack.top).toBeNull();

  });
  it('Calling pop or peek on empty stack raises exception', () => {
    let stack = new Stack();

    expect(stack.pop()).toBeNull();
    expect(stack.peek()).toBeNull();

  })

});

describe('Queue', () => {
  it('Can successfully enqueue into a queue', () => {
    let queue = new Queue();
    queue.enqueue(1);

    expect(queue.front.value).toEqual(1)

  });
  it('Can successfully enqueue multiple values into a queue', () => {
    let queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);

    expect(queue.front.value).toEqual(1);
    expect(queue.front.next.value).toEqual(2);
    expect(queue.front.next.next.value).toEqual(3);

  });
  it('Can successfully dequeue out of a queue the expected value', () => {
    let queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);

    expect(queue.front.value).toEqual(1);
    expect(queue.front.next.value).toEqual(2);
    expect(queue.front.next.next.value).toEqual(3);

    let dequedValue = queue.dequeue();
    expect(dequedValue).toEqual(1)
    expect(queue.front.value).toEqual(2);
    expect(queue.front.next.value).toEqual(3);
    expect(queue.front.next.next).toBeNull();

  });
  it('Can successfully peek into a queue, seeing the expected value', () => {
    let queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);

    expect(queue.peek()).toBe(1);

  });
  it('Can successfully empty a queue after multiple dequeues', () => {
    let queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);

    queue.dequeue();
    queue.dequeue();
    queue.dequeue();

    expect(queue.front).toBeNull();

  });
  it('Can successfully instantiate an empty queue', () => {
    let queue = new Queue();

    expect(queue.front).toBeNull();

  });
  it('Calling dequeue or peek on empty queue raises exception', () => {
    let queue = new Queue();

    expect(queue.dequeue()).toBeNull();
    expect(queue.peek()).toBeNull();
    
  });

});