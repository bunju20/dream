/*
I: string , substring 배열
O: string
C: 
1 <= s.length <= 1000
0 <= words.length <= 100
1 <= words[i].length <= 1000
s and words[i] consist of English letters and digits.
All the values of words are unique.
E:
if(words.length === 0 )return s;

ds: trie
algo:two pointer

solution:
trie만들어주는 함수

main
-범위 구하고
-같은 범위는 합치고
-stirng 새로 생성하고(배열로)
-return string

s = S
배열길이 : M
가장 긴 문자열의 길이: N
time: O(N(M+S))
space: O(NM)
*/

var addBoldTag = function(s, words) {
    if(words.length === 0)return s;
  
    let trie = {};
    let result = [];
    for(let i = 0; i < words.length; i++){
        makeTrie(trie,words[i]);
  
    }//trie 생성
    for(let i = 0; i < s.length; i++){
        let j = i;
        let curIChar = s[i];
        let curNode = trie[curIChar];
        while(j <= s.length&& curNode){
            if(curNode["*"])fixAr(result,[i,j]);
            j++;
            let curJChar = s[j];
            curNode = curNode[curJChar];
        }
    }//범위 생성, 수정
    let str = [];
    let arIdx = 0;
    for(let i = 0; i < s.length; i++){
        let bold = result[arIdx];
        if(arIdx < result.length && bold[0] === i)str.push("<b>");
        str.push(s[i]);
        if(arIdx < result.length && bold[1] === i){
            str.push("</b>");
            arIdx++;
        }
    }
    return str.join("");
    
  };
  
  function fixAr(ar,newRange){
      if(ar.length === 0)ar.push(newRange);
      let n = ar.length - 1;
      let lastNum = ar[n][1];
      if(newRange[0] <= lastNum + 1)ar[n][1] = Math.max(ar[n][1],newRange[1]);
      else ar.push(newRange);
  }
  
  function makeTrie(root,word){
      let curNode = root;
      for(let i = 0; i < word.length; i++){
          let curChar = word[i];
          if(!curNode[curChar])curNode[curChar] = {};
          curNode = curNode[curChar];
      }
      curNode["*"] = true;
  }