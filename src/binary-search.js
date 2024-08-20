import Node from "./node.js";
import mergeSort from "./mergesort.js";
export default function Tree(array) {
  let sorted = mergeSort(array);
  return sorted;
}

