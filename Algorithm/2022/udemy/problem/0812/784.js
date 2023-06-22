/*

*/
const letterCasePermutation = (s) => {
    const output = new Set();
    permute('', s, output);
    return [...output];
}

const permute = (cur, rest, output) => {
    if (rest.length === 0) {
        output.add(cur);
    } else {
        const ch = rest.charAt(0);
        permute(cur + ch.toLowerCase(), rest.substr(1), output);
        permute(cur + ch.toUpperCase(), rest.substr(1), output);
    }
}