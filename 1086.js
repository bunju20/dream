/*
뒤에있는거 기준으로 정렬하고
앞에있는 5개씩만 찾으면서 평균 찾으면 됨.

solution:
아이디 별로 맵에다가 배열로 넣어놓고
그 배열 내림차순으로 정렬한 뒤에
앞에 5개만 더하고 평균 구하고 result에 넣고.

배열의길이 : N
ID갯수: M
time: O(NlogN) // 정렬을 하는데 5를 한번에 정렬하는거>= 2 3을 따로따로 정렬하는거라서
NlogN했는디 아닐수도?
space: O(N)

10log10 = 10
5log5 + 5log5 = 6.9... 더 작은수가 나옴. 그래서 고냥 일케 풀었음.


minHeap이랑 maxHeap사용하면 줄일수 있대서 요거 앞으로 쓸라고용
*/

var highFive = function(items) {
    let scores = {};

      for (let i = 0; i < items.length; i++) {
        let student_id = items[i][0];
        let marks = items[i][1];
	       if (!scores[student_id]) scores[student_id] = [];
           scores[student_id].push(marks);
      }
	  
      let result = [];

      for(let key of Object.keys(scores)){
          let avg = 0;
          scores[key].sort((a, b) => b - a);
          for (let i = 0; i < 5; i++) {
            avg += scores[key][i];
          }
          avg = Math.floor(avg / 5);
          result.push([key, avg]);
      }	  
      return result;
};  