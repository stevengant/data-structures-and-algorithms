'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// useful for a later code challenge
// class KaryNode {
//   constructor(value, k) {
//     this.value = value;
//     this.children = new Array(k).fill(null);
//   }
// }

// useful for a later code challenge
// class KaryTree {
//   constructor() {
//     this.root = null;
//   }
// }

// binary tree
class BinaryTree {
  constructor() {
    this.root = null;
  }

  preOrder() {  // notice the pattern!!!!
    const results = [];

    // recursive helper funciton
    const traverse = (node) => {
      // do the thing FIRST if it's PRE-ORDER
      // base case!
      results.push(node.value);

      // left and right recursive cases
      if (node.left) {
        traverse(node.left);
      }
      if (node.right) {
        traverse(node.right);
      }
    };

    // GET THE PARTY STARTED!
    traverse(this.root);

    return results;
  }

  inOrder() {
    const results = [];

    const traverse = (node) => {
      // recursive left case
      if (node.left) traverse(node.left);

      // base case
      results.push(node.value);

      // recursive right case
      if (node.right) traverse(node.right);

    };
    // get the party started
    traverse(this.root);

    return results;
  }

  postOrder() {
    const results = [];

    const traverse = (node) => {
      // recursive left case
      if (node.left) traverse(node.left);

      // recursive right case
      if (node.right) traverse(node.right);

      // base case
      results.push(node.value);

    };
    // get the party started
    traverse(this.root);

    return results;
  }

  getMax()
  {
    let maxVal = this.root.value;

    const traverse = (node) => {
      // recursive left case
      if (node.left) traverse(node.left);

      // base case
      if(node.value > maxVal)
      {
        maxVal = node.value;
      }

      // recursive right case
      if (node.right) traverse(node.right);

    };
    // get the party started
    traverse(this.root);

    return maxVal;
  }

}

class BinarySearchTree
{
  constructor() {
    this.root = null;
  }

  add(value)
  {
    const addNode = (node, newNode) => {
      if(newNode.value < node.value){
        if(node.left === null){
          node.left = newNode;
        }
        else{
          addNode(node.left, newNode);
        }
      }
      else{
        if(node.right === null){
          node.right = newNode;
        }
        else {
          addNode(node.right, newNode);
        }
      }
    };

    let newNode = new Node(value);

    if(this.root === null)
    {
      this.root = newNode;
    }
    else
    {
      addNode(this.root, newNode);
    }

  }

  contains(value, node = this.root){
    if(node === null){
      return null;
    }
    else if(value < node.value){
      return this.contains(value, node.left);
    }
    else if (value > node.value){
      return this.contains(value, node.right);
    }
    else if(value === node.value) {
      return true;
    }
    else {
      return false;
    }

  }

}

// let tree = new BinaryTree();
// tree.root = new Node(10);
// tree.root.left = new Node(5);
// tree.root.right = new Node(15);
// tree.root.left.left = new Node(1);
// tree.root.left.right = new Node(8);
// tree.root.right.right = new Node(17);

// console.log(tree.getMax());

// const results = tree.postOrder();
// console.log('results:', results);

module.exports = { Node, BinaryTree, BinarySearchTree };