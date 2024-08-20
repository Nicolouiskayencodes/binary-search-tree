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

let tree = Tree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]);
prettyPrint(tree.getRoot());
let find = tree.find(324);
console.log(tree.height(find));
console.log(tree.depth(find));
console.log(tree.isBalanced());
tree.insert(10);
prettyPrint(tree.getRoot());
console.log(tree.isBalanced());
// tree.remove(23);
// prettyPrint(tree.getRoot());
console.log(tree.isBalanced());
tree.rebalance();
prettyPrint(tree.getRoot());