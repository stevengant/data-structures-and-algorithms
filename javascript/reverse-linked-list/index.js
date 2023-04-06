'use strict';

let head;

class Node {
  constructor(val) {
    this.data = val;
    this.next = null;
  }
}

function reverse(node) {
  let prev = null;
  let current = node;
  let next = null;
  while (current !== null) {
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  node = prev;
  return node;
}

function displayList(node) {
  while (node !== null) {
    console.log(node.data + " ");
    node = node.next;
  }

  return displayList;
}

head = new Node(92);
head.next = new Node(23);
head.next.next = new Node(46);
head.next.next.next = new Node(17);

console.log("=============");
console.log(head);
head = reverse(head);
console.log("===========");
console.log(head);

module.exports = Node;