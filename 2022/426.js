/*

I: 이진 트리
O: 정렬된 Circular Doubly-Linked List
C:
The number of nodes in the tree is in the range [0, 2000].
-1000 <= Node.val <= 1000
All the values of the tree are unique.
E: if(node가 한개면)return 그대로

ds: array
algo: dfs
solutione:
inorder로 돌면서 만들어놓고
그냥 두개씩 이어서 만들기
time: O(N)
space: O(N) //brute
*/

var treeToDoublyList = function(root) {
    if(!root)return Node(0,0,0)
    let ar = [];
    dfs(ar,root);

    let res = new Node(ar[0],0,0);
    let curNode = res;
    for(let i = 1; i < ar.length; i++){
        let nextNode = new Node(ar[i],curNode,0);
        curNode.right = nextNode;
        curNode = curNode.right;
    }
    res.left = curNode;
    curNode.right = res;

    
    return res;


};

function dfs(ar,curNode){
    if(!curNode)return;
    dfs(ar,curNode.left);
    ar.push(curNode.val);
    dfs(ar,curNode.right);
}