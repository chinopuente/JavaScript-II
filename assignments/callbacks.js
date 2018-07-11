const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

function firstItem(arr, cb) {
  let frstItem = arr[0];
  cb(frstItem);
}

function getLength(arr, cb) {
  let leng = arr.length;
  cb(length);
}

function last(arr, cb) {
 let lastItem = arr.length-1;
 cb(last);
}

function sumNums(x, y, cb) {
  let numSums = x + y;
  cb(sum);
}

function multiplyNums(x, y, cb) {
  let multi = x * y;
  cb(multi);
}

function contains(item, list, cb) {
  // for each item in list
  for(elem in list) {
    // if
    cosole.log(elem);
    if(elem === item){
      cb(true);
    } else {
      cb(false);
    }
  }
}


/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
}
