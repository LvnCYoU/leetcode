var peakIndexInMountainArray = function(arr) {
  let right = arr.length - 2;
  let left = 1;
  let ans = 0;
  while(left <= right){
    let mid = Math.floor((left + right) / 2);
    if(arr[mid] > arr[mid + 1]){
      ans = mid;
      right = mid - 1;
    }else{
      left = mid + 1;
    }
  }
  return ans
};