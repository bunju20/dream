/*
I:
O:
C:
E:

ds: map
algo: 

solution:
위에서는 배열안에 넣고

아래
-받은 값 기준으로 map만들고
-map돌면서 우리가 찾는 애 있는지 찾음

time: O(1) O(N)
space: O(N)

*/

var TwoSum = function() {
    this.ar = [];
};

/** 
 * @param {number} number
 * @return {void}
 */
TwoSum.prototype.add = function(number) {
    this.ar.push(number);
};

/** 
 * @param {number} value
 * @return {boolean}
 */
TwoSum.prototype.find = function(value) {
    if(this.ar.length < 2)return false;
    let map = {};
    for(let i = 0; i < this.ar.length; i++){
        if(this.ar[i] in map)map[this.ar[i]]++;
        else map[this.ar[i]] = 1;
    }
    
    for(let i = 0; i < this.ar.length; i++){
        let curNum = this.ar[i];
        let need = value - curNum;
        if(curNum === need && map[need] < 2)continue;
        if(map[need])return true;
    }
    return false;
};