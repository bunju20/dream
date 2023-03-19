/*
I:Node
O:Node
C:
The number of nodes in the tree is in the range [0, 212 - 1].
-1000 <= Node.val <= 1000
E:if(!node)return node;

ds:x
algo:bfs

solution:
bfs{
    let 큐 = [[부모노드, level]];
    
    while(큐 있는동안)
    curNode = shift
    if(curNode 뒤에 노드가 레벨이 같으면)
    curNode.next = 뒤 노드;

    if(왼자식 있으면)큐.push(왼)
    if(오른자식있으면)큐.push(오른)

}
N : 트리의 길이
time: O(N)
space:O(N)

2->3....
[2(2) 3(2)]
*/

var connect = function(root) {
    if(!root)return root;
    let queue = [[root,0]];
    while(queue.length){
        let [curNode,curLevel] = queue.shift();
        let nextNode = null;
        let nextlevel = -1;
        if(queue.length > 0)[nextNode,nextlevel] = queue[0];
        if(nextlevel === curLevel)curNode.next = nextNode;

        if(curNode.left)queue.push([curNode.left,curLevel+1]);
        if(curNode.right)queue.push([curNode.right,curLevel+1]);        
    }    
    return root;
};

/*

dfs
solution:
dfs(root){
    if(없으면)return root;

    root.left.next = root.right;
    root.right.next = root.next.left;
    dfs(left)
    dfs(right)

    return root;
}
*/

var connect = function(root) {
    if (root == null || root.left == null) return root;
    root.left.next = root.right;
    root.right.next = root.next ? root.next.left:null;
    connect(root.left);
    connect(root.right);
    return root;
}

