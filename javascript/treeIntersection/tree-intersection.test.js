'use strict';

const { BinaryTree, Node } = require('../trees');
const { tree_intersection } = require('./tree-intersection');

let tree = new BinaryTree();
tree.root = new Node('3');
tree.root.left = new Node('1');
tree.root.right = new Node('4');

let tree2 = new BinaryTree();
tree2.root = new Node('6');
tree2.root.left = new Node('4');
tree2.root.right = new Node('7');

let tree3 = new BinaryTree();
tree3.root = new Node('7');
tree3.root.left = new Node('6');
tree3.root.right = new Node('9');
tree3.root.left.left = new Node('1');
tree3.root.left.right = new Node('10');

let tree4 = new BinaryTree();
tree4.root = new Node('7');
tree4.root.left = new Node('6');
tree4.root.right = new Node('2');


describe('tree-intersection', () => {
  it('finds common values', () => {
    let test = tree_intersection(tree,tree2);

    expect(test).toEqual(['4']);

  });
  it('finds common values', () => {
    let test = tree_intersection(tree,tree3);

    expect(test).toEqual(['1']);

  });
  it('returns an empty array', () => {
    let test = tree_intersection(tree,tree4);

    expect(test).toEqual([]);

  });
});