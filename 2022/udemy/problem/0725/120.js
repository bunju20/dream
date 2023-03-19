/*
뒤에서 두개짜리중에 더 작은값을 위에 더해주는 형식
solution:
-for(삼각형 높이 ~ 0)
    -for(0부터 배열길이)
    - dp[i][j] += min(dp[i+1][j],dp[i+1][j+1]);
return dp[0][0];
*/

var minimumTotal = function(triangle) {
  if(triangle.length === 1)return triangle[0][0];
  let height = triangle.length - 2;
  for(i = height; i >= 0; i--){
    for(j = 0; j < triangle[i].length; j++){
        triangle[i][j] += Math.min(triangle[i+1][j] , triangle[i+1][j + 1])
    }
  }
  return triangle[0][0];
};
