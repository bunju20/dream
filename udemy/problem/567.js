/*
최대 너비
 s1 = "ab", 
 a:1
 b:1
 


"eidbaooo"
   ^ 
      ^

 len: 0

 a:0
 b:0

*/

var checkInclusion = function (s1, s2) {

	if (s1.length > s2.length) return false;
	let map = {};
	for (let i = 0; i < s1.length; i++) {
		map[s1[i]] = (map[s1[i]] || 0) + 1;
	}
	let l = 0, r = 0, len = s1.length;

	while (r < s2.length) {
		if (map[s2[r]] > 0) len--;
		map[s2[r]]--;
		r++;
		if (len === 0) return true;
		if (r - l === s1.length) {
			if (map[s2[l]] >= 0) len++;
			map[s2[l]]++;
			l++;
		}
	}
	return false;
};