/*
time:O(N)
space:O(N)
*/
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


var goodNodes = function(root) {
    let good = 0;
    function trav(node, max){
        if(!node) return;
        if(node.val >= max) ++good;
        max = Math.max(max, node.val);
        trav(node.left, max);
        trav(node.right, max); 
    }
    trav(root, root.val);
    return good;
    
};