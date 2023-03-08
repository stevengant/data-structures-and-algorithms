'use strict';

const { BinaryTree, Node } = require('../trees/index');
const { breadthFirst } = require('../tree-breadth-first');

describe('Breadth first tree', () => {
  let tree = new BinaryTree();
  tree.root = new Node(10);
  tree.root.left = new Node(5);
  tree.root.right = new Node(15);
  tree.root.left.left = new Node(1);
  tree.root.left.right = new Node(8);
  tree.root.right.right = new Node(17);
  tree.root.left.right.left = new Node(5);
  tree.root.left.right.right = new Node(16);
  tree.root.right.right.left = new Node(13);

  it('returns an array of values as expected', () => {
    expect(breadthFirst(tree)).toEqual([10, 5, 15, 1, 8, 17, 5, 16, 13]);
  });
});