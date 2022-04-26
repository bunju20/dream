/*
Trie: 1065

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
