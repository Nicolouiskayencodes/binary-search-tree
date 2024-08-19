export default function Node(val) {
  let obj = {};
  obj["value"] = val;
  obj.left = null;
  obj.right = null;
  return obj;
}