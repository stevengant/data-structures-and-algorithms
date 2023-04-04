'use strict';

const { Node, BinaryTree, BinarySearchTree } = require('./index');

describe('BinaryTree', () => {
  let tree = new BinaryTree();
  tree.root = new Node(10);
  tree.root.left = new Node(5);
  tree.root.right = new Node(15);
  tree.root.left.left = new Node(1);
  tree.root.left.right = new Node(8);
  tree.root.right.right = new Node(17);

  it('can be created as expected', () => {

    expect(tree.root.value).toEqual(10);
    expect(tree.root.right.left).toBeNull();

  });

  it('returns pre-order array as expected', () => {
    const results = tree.preOrder();

    expect(results).toEqual([10, 5, 1, 8, 15, 17]);
  });

  it('returns in-order array as expected', () => {
    const results = tree.inOrder();

    expect(results).toEqual([1, 5, 8, 10, 15, 17]);
  });

  it('returns in-order array as expected', () => {
    const results = tree.postOrder();

    expect(results).toEqual([1, 8, 5, 17, 15, 10]);
  });

  it('returns max value in a tree', () => {
    let tree = new BinaryTree();

    tree.root = new Node(17);
    tree.root.right = new Node(20);
    tree.root.right.right = new Node(29);

    tree.root.left = new Node(1);
    tree.root.left.left = new Node(25);
    tree.root.left.right = new Node(24);

    let max = tree.getMax();

    expect(max).toEqual(29);
  });

  it('inverts the binary tree', () => {
    let tree = new BinaryTree();
    tree.root = new Node(10);
    tree.root.left = new Node(5);
    tree.root.right = new Node(15);
    tree.root.left.left = new Node(1);
    tree.root.left.right = new Node(8);
    tree.root.right.right = new Node(17);

    const actualOutput = invert(tree);

    expect(actualOutput).toEqual([10, 5, 15, 1, 8, 17]);
  });



});

describe('BinarySearchTree', () => {
  let BTS = new BinarySearchTree();
  BTS.add(10);
  BTS.add(5);
  BTS.add(15);
  BTS.add(1);
  BTS.add(8);
  BTS.add(17);

  it('can be create a Binary Search Tree as expected', () => {

    expect(BTS.root.value).toEqual(10);
    expect(BTS.root.left.value).toEqual(5);
    expect(BTS.root.right.value).toEqual(15);

  });

  
  it('fizzbuzz tree', () => {
    let tree = new BinaryTree();
    tree.add(10);
    tree.add(5);
    tree.add(15);
    tree.add(1);
    tree.add(8);

    let newTree = tree.fizzBuzzTree(tree);
    expect(newTree).toEqual(['Buzz','Buzz','FizzBuzz','1','8']);
  

  });
});