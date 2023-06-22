/*
I:트리
O:똑같은 트리
C:
The depth of the n-ary tree is less than or equal to 1000.
The total number of nodes is between [0, 10^4].
E:
if(노드가 없으면)없는거 반환

ds: x
algo: dfs
solutino:
time: O(N)
space: O(N)

*/

var cloneTree = function(root) {
    return dfs(root);
};

function dfs(curNode){
    if(!curNode)return null;

    let {val,children} = curNode;
    let nodeCopy = new Node(val);

    for(let child of children){
        let newNode = dfs(child);
        nodeCopy.children.push(newNode);
    }
    return nodeCopy;
}