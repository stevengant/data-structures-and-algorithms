'use strict';

const { BinaryTree, Node } = require('../trees/index');

function breadthFirst(tree) {
  let results = [];
  let queue = [];

  queue.push(tree.root);
  results.push(tree.root.value);

  while(queue.length !== 0) {
    let tempNode = queue.shift();

    if (tempNode.left !== null) {
      queue.push(tempNode.left);
      results.push(tempNode.left.value);

    }

    if(tempNode.right !== null) {
      queue.push(tempNode.right);
      results.push(tempNode.right.value);

    }
  }

  return results;

}

module.exports = { breadthFirst };