/*
배열길이
젤 긴 string길이
O(N)
*/
var shortestDistance = function(words, word1, word2) {
  let idx1 = null, idx2 = null
  let min = Infinity
  for(let i=0;i<words.length;i++){
    let w = words[i]
    if(w === word1){
      idx1 = i
    }else if(w === word2){
      idx2 = i       
    }
    if(idx1 !== null && idx2 !== null){
     min = Math.min(Math.abs(idx1-idx2), min)  
    }    
  }
  return min
};