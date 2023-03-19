/*
I:
O:
C:
E:

ds:
algo:

solutino;
time: 
space:

*/
var smallestCommonElement = function(mat) {
    let countHash = {};
    for (let i=0, j=mat[0].length; i<j; i++) { // loop on indicies of each row
      for (let a=0, b=mat.length; a<b; a++) { //loop on each row
        countHash[mat[a][i]] = (countHash[mat[a][i]])?countHash[mat[a][i]]+1:1; // increment  or start our count
        if (countHash[mat[a][i]] == b) // no need to wait till the end, as soon as we find a number common to all rows, return it
          return mat[a][i];
      }
    }
    return -1; // checked all elements and don't have one that is common to all rows
  };