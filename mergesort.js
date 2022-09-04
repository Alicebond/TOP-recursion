function mergeSort(arr) {
  if (arr.length < 2) return arr;
  /* 👇 Wiki version
  let left = [], right = [];
  for (let i = 0; i < arr.length; i++) {
    if (i < arr.length / 2)
      left.push(arr[i]);
    else
      right.push(arr[i]);
  } */

  // 👇My version
  let left = arr.slice(0, arr.length / 2);
  let right = arr.slice(arr.length / 2);

  left = mergeSort(left);
  right = mergeSort(right);

  return merge(left, right);
}

function merge(left, right) {
  let result = [];
  while (left.length > 0 && right.length > 0) {
    if (left[0] <= right[0]) result.push(left.shift());
    else result.push(right.shift());
  }
  while (left.length > 0) result.push(left.shift());
  while (right.length > 0) result.push(right.shift());
  return result;
}
