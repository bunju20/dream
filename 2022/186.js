/*
I:  char배열
O:  순서바꾼 배열
C: 
1 <= s.length <= 105
s[i] is an English letter (uppercase or lowercase), digit, or space ' '.
There is at least one word in s.
s does not contain leading or trailing spaces.
All the words in s are guaranteed to be separated by a single space.

E:if(s.length === 1)return s;

3, 3, 2, 4
4  2  3  3

["t","h","e"," ","s","k","y"," ","i","s"," ","b","l","u","e"]


["b","l","u","e"," ","i","s"," ","s","k","y"," ","t","h","e"]


ds: x
algo: ...pointer?
solution:
-string을 아예 뒤집고
-공백기준으로 단어들끼리 스와핑하고.


time: O(N)
space:O(1)
*/


var reverseWords = function (s) {
    if(s.length === 1)return s;
    chaging(s,0,s.length-1);

  console.log(s)
    let l = 0, r = 0;
    while(r <= s.length){
        console.log(s.length)
        console.log(l,r)
        if(r === s.length||s[r] === ' '){
            chaging(s,l,r-1);
            while(s[r] === " ")r++;
            l = r;
            r--;
        }
        r++;
    }
    return s;
};

function chaging(ar,i,j){
    let l = i, r = j;

    while(l < r){
        let temp = ar[l];
        ar[l] = ar[r];
        ar[r] = temp;
        l++;r--;
    }
}