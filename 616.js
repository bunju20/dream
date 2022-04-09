/*
맵을 만들고

*/

var addBoldTag = function(s, dict) {
    let hash = new Map();

    const searchBolds = function(sub) {
        let k = 0;
        while(k < s.length) {
            let subs = s.substring(k, k+sub.length);
            if (subs === sub) {
                for (let j = k; j < k+subs.length; j++) {
                    hash[j] = true;
                }
            }
            k++;
        }
    }

    for (let i = 0; i < s.length; i++)
        hash.set(i, false);
    
    for (let i = 0; i < dict.length; i++) {
        if (dict[i].length > s.length)
            continue;
        searchBolds(dict[i], s);
    }
    
    let len = 0;
    let stack = []
    while (len < s.length) {
        if (!hash[len]) {
            stack.push(s[len])
            len++;
        } else {
            stack.push("<b>");
            let k = len;
            while(hash[k] && k < s.length) {
                stack.push(s[k]);
                k++
            }
            stack.push("</b>")
            len = k;
        }
    }
    
    return stack.join('')
};