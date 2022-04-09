/*
I: x
O: x
C:
1 <= wordsDict.length <= 3 * 104
1 <= wordsDict[i].length <= 10
wordsDict[i] consists of lowercase English letters.
word1 and word2 are in wordsDict.
word1 != word2
At most 5000 calls will be made to shortest.
E:

ds:
algo:
-받은 배열로 map만듦.(인덱스 담아두는 용)
-두개 값에서 두개의 차이가 가장 적게들도록 포인터 이동시키면서 최소 거리 구함.
solution:
-map만듦

-map에서 배열 두개 받아옴.
-while(l,r둘다 배열 안넘게)
    -min 갱신 (인덱스 두개로)
    -차이있으면 둘중에 더 작은애로 늘려라.
-return 거리


time: O(N)
space:O(N)

*/

var WordDistance = function (words) {
  this.map = {};
  for (let i = 0; i < words.length; i++) {
    this.map[words[i]] = this.map[words[i]] || [];
    this.map[words[i]].push(i);
  }
};


WordDistance.prototype.shortest = function (word1, word2) {
  let [idxs1, idxs2] = [this.map[word1], this.map[word2]];
  let [p1, p2] = [0, 0];
  let min = Number.POSITIVE_INFINITY;

  while (p1 < idxs1.length && p2 < idxs2.length) {
    min = Math.min(min, Math.abs(idxs1[p1] - idxs2[p2]));
    if (idxs1[p1] < idxs2[p2]) {
      p1++;
    } else {
      p2++;
    }
  }

  return min;
};
