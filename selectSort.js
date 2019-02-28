let arr = [23, 45, 12, 7, 9, 19, 84];

// arr = [2];

function selectsort(arr) {

  for (let i = 0; i < arr.length; i++) {
    let j = i + 1, k = i, temp;
    for (j; j < arr.length; j++) {
      if (arr[j] < arr[k]) {
        k = j
      }
    }

    if (i != k) {
      temp = arr[k];
      arr[k] = arr[i];
      arr[i] = temp;
    }

  }
}

selectsort(arr);
console.log(arr);
