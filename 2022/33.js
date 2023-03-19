/*
solution:

-while(l,r)
    -mid
    -if(mid값 === target)return mid;
    -if(왼쪽, mid사이가 오름차순)
        -target이 사이에있으면 r 갱신
        -없으면 l 갱신
    -if(왼쪽하고 mid가 오름차순이 아님
        - target이 mid와 오른쪽 사이에 있으면 l갱신
        - 없으면 r 갱신

-return 왼쪽값이 타겟이면 왼쪽 반환하고 아니면 -1반환
*/

var search = function (nums, target) {
  if (nums.length === 1) return nums[0] === target ? 0 : -1;

  let l = 0;
  let r = nums.length - 1;

  while (l < r) {
    let mid = l + Math.floor((r - l) / 2);
    if (nums[mid] === target) return mid;
    let sorted = nums[l] <= nums[mid]; //이 사이는 정렬되었다.
    if (sorted) {
      if (nums[l] <= target && nums[mid] > target) r = mid - 1;
      else l = mid + 1;
    } else {
      if (nums[mid] < target && nums[r] >= target) l = mid + 1;
      else r = mid - 1;
    }
  }

  return nums[l] === target ? l : -1;
};


