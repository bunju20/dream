/*
그냥 네방향 모두 봤을때 고립되어있는 b를 찾으면 되겠당.
고럼 그냥 map만들어서 이 행에는 뭐가있고 이 열에는 몇개있는지
저장해놨다가
b찾을때마다 갱신해주면 될것같은디.

Time: O(nm)
Space:O(n+m)
*/

var findLonelyPixel = function(picture) {

    let row = new Array(picture[0].length).fill(0);
    let col = new Array(picture.length).fill(0);
    let result = 0;

    for(let i = 0; i < picture.length; i++){
        for(let j = 0; j < picture[0].length; j++){
            if(picture[i][j] === "B"){
                col[i]++;
                row[j]++;
            }
        }
    }

    for (let i = 0; i < picture.length; i++) {
      for (let j = 0; j < picture[0].length; j++) {
        if (picture[i][j] === "B" && col[i] === 1 && row[j] === 1) {
            result++;
        }
      }
    }

    return result;

};