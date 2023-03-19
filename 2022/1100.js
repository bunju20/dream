/*
I: string ,  k
O: 조건에 맞는 string의 갯수
C:
1 <= s.length <= 104
s consists of lowercase English letters.
1 <= k <= 104
E: if(s < k)return 0;
if(s.length === 1)return 1;

ds: set
algo: two pointer

"havefunonleetcode",

k = 5

solution:
-set만듦
-포인터 두개 만듬
-while
    - 오른쪽 포인터 이동시킴
    - 길이가 5넘었으면 5 안넘을때까지 이동시킴
    - 오른쪽 포인터에 있는 애가 이미 set에 있는 애면 while문으로 l이동시킴 
    - 길이가 5인상태면 res++;
-return res;

time: O(N)
space: O(M) // M < 26

*/

var numKLenSubstrNoRepeats = function(s, k) {
    if(s.length < k)return 0;
    let res = 0;
    let set = new Set();
    
    let l = 0, r = 0;

    while(r < s.length){
        let curLen = r - l + 1;
        let curChar = s[r];
        if(curLen > k){

            set.delete(s[l]);
            l++;
            
        }
        if(set.has(curChar)){

            while(s[l] !== curChar){
                
                set.delete(s[l]);
                l++;
                
            }
            set.delete(s[l]);
            l++;
            
        }
        set.add(curChar);
        curLen = r - l + 1;
        if(curLen === k){
            res++;

        }
        r++;
    }
    return res;
};