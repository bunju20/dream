/*
time:O(N)
space:O(N)
*/
var goodNodes = function(root) {
    let res = 0;
    const dfs = (node, preMax) => {
        if(!node) return;
        if(node.val >= preMax) res++;
        dfs(node.left, Math.max(node.val, preMax));
        dfs(node.right, Math.max(node.val, preMax));
    }
    dfs(root, -Infinity);
    return res;
};


var goodNodes = function (root) {
    if(!root.left && !root.right)return 1;
    return dfs(-Infinity,root);
};

function dfs(curMax,curNode){
    if(!curNode)return 0;

    let goodNum = 0;
    if(curMax <=curNode.val) goodNum++;
    let max = Math.max(curMax,curNode.val);
    goodNum += dfs(max, curNode.left);
    goodNum += dfs(max, curNode.right);

    return goodNum;

}