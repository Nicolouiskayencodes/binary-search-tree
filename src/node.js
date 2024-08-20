export default function Node(val) {
  let obj = {};
  obj["data"] = val;
  obj.left = null;
  obj.right = null;
  function setLeft(value) {
    obj.left = value;
  }
  function setRight(value){
    obj.right = value;
  }
  function node(){
    return obj;
  }
  return {node, setLeft, setRight}
}