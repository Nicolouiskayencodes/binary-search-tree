import './style.css';
import Tree from './binary-search.js';

const prettyPrint = (node, prefix = "", isLeft = true) => {
  if (node === null) {
    return;
  }
  if (node.right !== null) {
    prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
  }
  console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
  if (node.left !== null) {
    prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
  }
};

function randomArray() {
  let array = [];
  for(let i=0; i<20;i++){
    let x = Math.floor(Math.random()*100);
    array.push(x);
  }
  return array;
}
function display(callback){
  let array = [];
  callback(function(node){
    array.push(node.data);
  });
  console.log(array);
}


let tree = Tree(randomArray());
prettyPrint(tree.getRoot());
console.log(tree.isBalanced());
display(tree.levelOrder);
display(tree.preOrder);
display(tree.postOrder);
display(tree.inOrder);
tree.insert(107);
tree.insert(146);
tree.insert(114);
tree.insert(102);
tree.insert(120);
prettyPrint(tree.getRoot());
console.log(tree.isBalanced());
tree.rebalance();
console.log(tree.isBalanced());
display(tree.levelOrder);
display(tree.preOrder);
display(tree.postOrder);
display(tree.inOrder);
prettyPrint(tree.getRoot());