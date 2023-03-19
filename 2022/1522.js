/*
solution:

dfs:(curLen,curNode.maxLen)
-if(!curNode)return 0;
-for
    -자식으로 dfs으로 모두 돌려서 가장 긴 두개를 받아옴.
-left = 가장긴 1
-right  = 가장긴 2

-maxLen을 l,과 r로 갱신
-return (l과 r중에 더 큰애 + 1)

노드의 개수 : N
트리의 높이: M
time: O(N)
space: O(M)
*/

var diameter = function(root) {
    let max = [0];
    dfs(root,max);
    return max[0];
};

function dfs(curNode, maxLen){
    if(!curNode)return 0;

    let children = curNode.children;
    let left = -Infinity, right = -Infinity;
    for(let child of children){
        let childLen = dfs(child, maxLen);
        if(left < childLen){
            right = left;
            left = childLen;
        }else if(right < childLen)right = childLen;
    }
    if(left < 0)left = 0 ;
    if(right < 0)right = 0;

    let curDi = left + right;
    maxLen[0] = Math.max(maxLen[0],curDi);

    return Math.max(left, right) + 1;
}
