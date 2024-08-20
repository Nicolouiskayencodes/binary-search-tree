export default function mergeSort(array) {
  if (array.length <= 1) {
    return array;
  } else {
    let left = array.slice(0,Math.round(array.length/2));
    let right = array.slice(Math.round(array.length/2), (array.length));
    let sortedLeft = mergeSort(left);
    let sortedRight = mergeSort(right);
    function merge(leftSide, rightSide){
      let newArray = [];
      let i = 0;
      let j = 0;
      let k = 0;
      while (i<leftSide.length && j<rightSide.length){
        if (leftSide[i]<rightSide[j]){
          newArray[k++] = leftSide[i++];
        } else if (leftSide[i]>rightSide[j]){
          newArray[k++] = rightSide[j++];
        } else if (leftSide[i]===rightSide[j]){
          newArray[k++] = leftSide[i++];
          j++;
        }
      }
      for (; i<leftSide.length; i++) {
        newArray[k++] = leftSide[i]
      }
      for (; j<rightSide.length; j++) {
        newArray[k++] = rightSide[j]
      }
      return newArray;
    }
    return merge(sortedLeft, sortedRight);
  }
}