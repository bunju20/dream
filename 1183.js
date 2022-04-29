/*
solution:
- 남는 너비 = 너비 % side;
- 남는 높이 = 높이 % side;

- sizeA = 

var maximumNumberOfOnes = function(width, height, sideLength, maxOnes) {
  let xm = width % sideLength;
  let ym = height % sideLength;
  let xd = Math.floor(width / sideLength);
  let yd = Math.floor(height / sideLength);

  let p1 = xm * ym;
  let c1 = (xd + 1) * (yd + 1);

  let p2 = sideLength * (xd < yd ? xm : ym); // 더 좁은쪽의 나머지를 곱해준다.
  let c2 = xd*yd + Math.max(xd,yd);

  let p3 = sideLength * sideLength - (sideLength - xm) * (sideLength - ym);
  let c3 = xd * yd + Math.min(xd,yd);

  let c4 = xd * yd;

  let ans = 0;
  if(maxOnes <= p1)return maxOnes * c1;
  ans+= p1 * c1;
  if(maxOnes <= p2)return ans + (maxOnes - p1) * c2;
  ans += (p2 - p1) * c2;
  if(maxOnes <= p3) return ans + (maxOnes - p2) * c3;
  ans += (p3 - p2) * c3;
  return ans + (maxOnes - p3) * c4;

};
*/

