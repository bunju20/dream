/*
O(3N) == O(N)
O(N*P) P의 값이 늘어나도 된다 
1. O(2N) !== O(N)
2. string 불변성
-s.substr() => O(N) //N : s의 길이
-반복문안에 최대한 안들어가 or  중첩되지않게

*/

class Solution {
    public:
        string longestCommonPrefix(vector<string>& strs) {
            //가장 짧은 단어 찾기
            int shortest=strs[0].length();
            int shortest_index=0;
            for(int i=1;i<strs.size();i++){
                if(shortest>strs[i].length()){
                    shortest=strs[i].length();
                    shortest_index=i;
                }
            }
            
            //짧은 단어에서 긴 것부터 prefix 만들기
            string prefix;
            for(int i=strs[shortest_index].length(); i>0;i--){
                bool find=false;
                for(int j=0;j<strs[0].length()-i+1;j++){
                    prefix=strs[shortest_index].substr(j, i); //O(N)
                    for(int k=0;k<strs.size();k++){
                        if(k==shortest_index) continue;
                        find=findPrefix_in_str(strs[k], prefix);
                        if(find==false) break;
                    }
                }
            }
            return prefix;
        }
        bool findPrefix_in_str(string str, string prefix){
            for(int i=0;i<str.length()-prefix.length();i++){
                if(str.substr(i, prefix.length())==prefix) return true;
            }
            return false;
        }
    };

/*
I: string배열
O: 중복되는 단어
C:
1 <= strs.length <= 200
0 <= strs[i].length <= 200
strs[i] consists of only lowercase English letters.
E:
if(str.length === 1)return str[0];
중간) 만약 공백이 있으면 공백반환

solution:
-result = 첫단어를 배열로 만듦
-index = 몇번째 인덱스까지 자를지
for
    -for 두번째 단어 비교하면서 다른부분이 있으면 index고치고 break;
-return result를 index길이로 자름

N : 배열의 길이
M : string의 가장 긴 길이
time: O(NM)
space: O(M)

["flower","flow"]

배열크기: N
string: M
time: O(NM)
space: O(M)
*/

var longestCommonPrefix = function(strs) {
    if(strs.length == 1)return strs[0]; //edge

    let pre = strs[0];
    let resultIdx = strs[0].length;

    for(let i = 1; i < strs.length; i++){
        let curWord = strs[i];
        if(curWord=== "")return ""
        let forRepeat = Math.min(resultIdx,curWord.length);
        for(let j = 0; j < forRepeat; j++){
            if(curWord[j] !== pre[j]){
                resultIdx = j;
                break;
            }
            if(j === forRepeat - 1)resultIdx = j + 1;
        }
    }
    return pre.substring(0,resultIdx);
}