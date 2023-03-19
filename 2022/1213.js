/*
I:배열 세개 
O: 공통적으로 등장하는 애
C:
1 <= arr1.length, arr2.length, arr3.length <= 1000
1 <= arr1[i], arr2[i], arr3[i] <= 2000
E:x

ds: x
algo: two pointer

solution:
-포인터 세개 만듬
-for(한 배열){
    -curNum
    -while(두번째꺼)
    -while(세번째꺼)
    - 셋다 같으면 그 값은 res에 푸시;
}
-return res
time: O(N)
space: O(1)

*/

var arraysIntersection = function(arr1, arr2, arr3) {
    let one = 0, two = 0, th = 0;
    let res = [];

    for(one = 0; one < arr1.length; one++){
        let curNum = arr1[one];
        while(arr2[two] < curNum)two++;
        while(arr3[th] < curNum)th++;
        if(one >= arr1.length||two >= arr2.length || th >=arr3.length)break;
        if(curNum === arr2[two] && curNum === arr3[th])res.push(curNum);
    }
    return res;
};