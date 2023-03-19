/*
I: 과목갯수, 선행나타내는 2d배열
O: 모든과정을 수강하는데 필요한 최소 학기수
C:
1 <= n <= 5000
1 <= relations.length <= 5000
relations[i].length == 2
1 <= prevCoursei, nextCoursei <= n
prevCoursei != nextCoursei
All the pairs [prevCoursei, nextCoursei] are unique.

E: x


[[1,3],[2,3]]

3(2) 1(0) 2(0)
얘네의 레벨을 확인하면 되는드쇼

2(1) 3(1) 1(1) => 첫학기를 끝낼수 없음.

ds: 
algo:
solution:
time:
space:

*/