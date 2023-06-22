/*
solution:
맨 앞숫자 기준으로 정렬하고.
앞에있는거의 뒤가 뒤에있는거의 앞을 넘으면 false반환.

Time:O(NlogN + N)
Space: O(1)
*/

var canAttendMeetings = function (intervals) {
  intervals.sort((a, b) => a[0] - b[0]);

  for (let i = 0; i < intervals.length - 1; i++) {
    if (intervals[i][1] > intervals[i + 1][0]) return false;
  }
  return true;
};
