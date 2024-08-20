import Node from "./node.js";
import mergeSort from "./mergesort.js";
export default function Tree(array) {
  let sorted = mergeSort(array);
  function buildTree(array){
    if (array.length === 0) return null;
    let mid = Math.floor((array.length-1)/2);
    console.log(mid);
    let root = Node(array[mid]);
    root.setLeft(buildTree(array.slice(0,mid)));
    root.setRight(buildTree(array.slice((mid+1))))
    return root.node();
  }
  let root = buildTree(sorted);
  function getRoot(){
    return root;
  }
  function insert(value) {
    if (value === null){
      return;
    }
    function findBranch(branch){
      if (branch.data > value) {
        if (branch.left === null) {
          branch.left = Node(value).node();
        } else {
          findBranch(branch.left)
        }
      } else if (branch.data < value) {
        if (branch.right === null) {
          branch.right = Node(value).node();
        } else {
          findBranch(branch.right);
        }
      } else if (branch.data === value) {
        console.log(value + " is already in tree")
        return;
      }
    }
    findBranch(root);
  }
  function remove(value) {
    function findNode(branch) {
      function replace(node){
        if (node === null) {
          return
        } else {
          insert(node.data);
          replace(node.right);
          replace(node.left);
        } 
      }
      if (branch.right === null && branch.left === null){
        console.log(value + " is not in tree");
        return
      } else if (branch.data === value) {
        console.log("node is root")
        let rightChild = branch.right;
        let leftChild =  branch.left;
        root = rightChild;
        replace(leftChild);
      } else if (branch.left === null){
        if (branch.right.data === value){
          let rightChild = branch.right.right;
          let leftChild =  branch.right.left;
          branch.right = null;
          replace(rightChild);
          replace(leftChild);
      } else if (branch.data > value) {
        console.log(value + " is not in tree");
        return
      } else if (branch.data < value) {
        findNode(branch.right);
      }
    } else if (branch.right === null){
        if (branch.left.data === value){
          let rightChild = branch.left.right;
          let leftChild =  branch.left.left;
          branch.left = null;
          replace(rightChild);
          replace(leftChild);
      } else if (branch.data > value) {
        findNode(branch.left)
      } else if (branch.data < value) {
        console.log(value + " is not in tree");
        return
      }
    } else if (branch.right && branch.left){
      if (branch.right.data === value){
        let rightChild = branch.right.right;
        let leftChild =  branch.right.left;
        branch.right = null;
        replace(rightChild);
        replace(leftChild);
      } else if (branch.left.data === value) {
        let rightChild = branch.left.right;
        let leftChild =  branch.left.left;
        branch.left = null;
        replace(rightChild);
        replace(leftChild);
      } else if (branch.data > value) {
        findNode(branch.left);
      } else if (branch.data < value) {
        findNode(branch.right);
      }
    }
  }
  findNode(root);
  }
  function find(value) {
    function findNode(branch){
      if (branch.data === null){
        return (value + " is not in tree");
      } else if (branch.data === value) {
        return branch;
      } else if (branch.data > value) {
        return findNode(branch.left)
      } else if (branch.data < value) {
        return findNode(branch.right)
      }
    }
    
    let found = findNode(root);
    return found;
  }
  function levelOrder(callback) {
    let queue = [];
    if (!callback) {
      throw "levelOrder must be passed function";
    }
    if (root === null) return;
    queue.push(root);
    while (queue.length !==0) {
      let current = queue.shift();
      callback(current.data);
      if (current.left !== null) {
        queue.push(current.left);
      }
      if (current.right !== null) {
        queue.push(current.right);
      }
    }
  }
  function inOrder(callback){
    if (!callback) {
      throw "levelOrder must be passed function";
    }
    function inOrd(node){
      if (node === null) return;
      inOrd(node.left);
      callback(node.data);
      inOrd(node.right);
    }
    inOrd(root);
  }
  function preOrder(callback){
    if (!callback) {
      throw "levelOrder must be passed function";
    }
    function preOrd(node){
      if (node === null) return;
      callback(node.data);
      preOrd(node.left);
      preOrd(node.right);
    }
    preOrd(root);
  }
  function postOrder(callback){
    if (!callback) {
      throw "levelOrder must be passed function";
    }
    function postOrd(node){
      if (node === null) return;
      postOrd(node.left);
      postOrd(node.right);
      callback(node.data);
    }
    postOrd(root);
  }
  return {getRoot, insert, remove, find, levelOrder, inOrder, preOrder, postOrder}
}

