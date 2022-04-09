/*
I:
O:
C:
E:

ds:
algo:
solution: 
준 함수가 거기에 한개짜리 정수 있는지 확인하는거
한개짜리 있을때 그 정수 받는거
nest있을때 그 안에 리스트 받는거

helper
-sum
-for(배열)
    -if(현재거에 정수 하나짜리 있으면)그거 sum에다가 level곱해서 더하고
    -else sum+= helper(안에있는 배열, level+1)
-return sum;



*/

var depthSum = function (nestedList) {
  return helper(nestedList, 1);
};

function helper(list, level) {
  let sum = 0;
  for (let i = 0; i < list.length; i++) {
    if (list[i].isInteger()) {
      let curVal = list[i].getInteger();
      sum += curVal * level;
    } else {
      let newList = list[i].getList();
      sum += helper(newList, level + 1);
    }
  }
  return sum;
}
