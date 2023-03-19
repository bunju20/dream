var minimumTotal = function(triangle) {
    if(triangle.length === 1)return triangle[0][0];
    let height = triangle.length - 2;
  
    for( let i = height; i >= 0; i--){
      for( let j = 0; j < triangle[i].length; j++){
          triangle[i][j] += Math.min(triangle[i+1][j] , triangle[i+1][j + 1])
      }
    }
    return triangle[0][0];
};