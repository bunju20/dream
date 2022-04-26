/*
I: string
O: string의 substring 배열
C:
1 <= text.length <= 100
1 <= words.length <= 20
1 <= words[i].length <= 50
text and words[i] consist of lowercase English letters.
All the strings of words are unique.
E:
x

ds: x
algo: x

solution:
-for(words)
    - start = curword , text indexOf
    - if(존재하면)result.push
-배열 앞, 뒤 기준으로 정렬해줌.
-return result;

text=  N
words.length = M
words[i].length = P
time: O(NPM)
space: O(M)

브루트 포스
*/
var indexPairs = function(text, words) {
    
    let result = [];

    for(let i = 0; i < words.length; i++){
        let curWord = words[i];
        let curIdx = 0;
        while(text.indexOf(curWord,curIdx) >= 0){
        let start = text.indexOf(curWord,curIdx);
        if(start >= 0)result.push([start , start + curWord.length - 1]);
        curIdx = start + 1; 
        }
    }

    result.sort((a,b)=>{
        if(a[0] < b[0])return -1;
        else if(a[0] > b[0])return 1;
        else{
            if(a[1] < b[1])return -1;
            else if(a[1] > b[1])return 1;
            return 0;
        }
    })

    return result;
};



/*
배열길이: P
가장긴 문자열의길이 : M
text길이 : N
optimal
time: O(M*P + N*M)
space: O(MP)
*/

var indexPairs = function(text, words) {
    let trie = {};
    let result = [];
    for(let i = 0; i < words.length; i++){
        traversing(trie,words[i]);
    }

    for(let i = 0; i < text.length; i++){
        let j = i;
        let iChar = text[i];
        let curNode = trie[iChar];
        while(j <= text.length && curNode){
            if(curNode["*"])result.push([i,j]);
            j++;
            let jChar = text[j];
            curNode = curNode[jChar];
        }
    }
    return result;

}

function traversing(root,curWord){
    let curNode = root;
    
    for(let i = 0; i < curWord.length; i++){
        let curChar = curWord[i];
        if(!curNode[curChar]) curNode[curChar] = {};
        curNode = curNode[curChar];
    }
    curNode["*"] = true;
}
