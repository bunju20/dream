/*
그냥  dfs돌리면서 최대 세로 최소 세로 최대 가로 최소 가로 구해놓고
길이 구하고 곱하면 될것같긴한데 그러면 하드가 아니겠죠..?
그 시간복잡도면 사쉴 그냥 다 돌면서 갱신하는거랑 다를게 없으니께?

우리가 필요한건,,, 움,,,  어짜피 이어져있다면서?
안끊긴다는거잖어?
그러면.... 훔.아예 막대기를 왔다갔다 하는건 어떰>
nlogm + mlogn가능할듯?

그니까 4방향 모두 바이너리를 돌려가지고 가장 바깥을 구하고 그걸로 값을 구하는거지.

solution:
-top = binary
-bottom
-left
-right
-return 넓이


binary(rowcol,direct){ //가론지 세론지, 왼쪽껀지 오른쪽 껀지
    -while
        -mid
        -if(mid에 뭐 있으면) l나 r 갱신
        - 뭐 없으면 l이나 r갱신
    뭐 있으면 그거 반환하고 뭐 없으면 그 전꺼 idx반환함.
}

checkLine(){
-그 줄에 뭐 있으면 return true;
return false;
}
time: O(nlogm + mlogn)
space: O(1)
*/

var minArea = function (image, x, y) {
  let top = binary("r", "l", image, x, y);
  let bottom = binary("r", "r", image, x, y);
  let left = binary("c", "l", image, x, y);
  let rigth = binary("c", "r", image, x, y);

  let row = rigth - left === 0 ? 1 : rigth - left;
  let col = bottom - top === 0 ? 1 : bottom - top;

  let result = row * col;
  return result < 0 ? 1 : result;
};

function binary(rowcol, direct, ar, x, y) {
  //r = 막대가 가로로있다.
  let l = 0;
  let r = rowcol === "r" ? ar.length : ar[0].length;
  let compare = rowcol === "r" ? x : y;

  while (l < r) {
    //console.log(l,r)
    let mid = l + Math.floor((r - l) / 2);
    if (checkLine(rowcol, ar, mid)) direct === "l" ? (r = mid) : (l = mid + 1);
    else {
      if (mid < compare) l = mid + 1;
      else r = mid;
    }
    //console.log(l,r)
  }
  return r;
}

function checkLine(rowcol, ar, curIJ) {
  let len = rowcol === "r" ? ar[0].length : ar.length;

  if (rowcol === "r") {
    for (let i = 0; i < len; i++) {
      // console.log(curIJ)
      if (ar[curIJ][i] === "1") return true;
    }
  } else {
    for (let i = 0; i < len; i++) {
      if (ar[i][curIJ] === "1") return true;
    }
  }
  return false;
}