/*
그냥 맵핑합시당.
I:string 1,2
O: 총 이동 횟수
C:
keyboard.length == 26
keyboard contains each English lowercase letter exactly once in some order.
1 <= word.length <= 10^4
word[i] is an English lowercase letter.
E:
x

ds:hash map
algo:x

a: 0
b: 1...

solution:
-map만들고
-curIdx = 0;
-lengthSum = 0;
-for(word)
    -curChar;
    -curLen = map이용해서 값 구함.
    - lengthSum+=curLen;
-return lengthSum;

word의 길이: N
time: O(N)
space: O(1)
*/

var calculateTime = function(keyboard, word) {
    let map = {};
    for(let i = 0; i < keyboard.length; i++){
        let curChar = keyboard[i];
        map[curChar] = i;
    }//맵 생성.

    let curIdx = 0;
    let lengthSum = 0;

    for(let i = 0; i < word.length; i++){
        let curChar = word[i];
        let curLen = Math.abs(curIdx - map[curChar]);
        lengthSum+=curLen;
        curIdx = map[curChar];
    }
    return lengthSum;
};
