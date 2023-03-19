/*
solution:
-while
    -m번 이동 curNode, preNode
    -whileans n번 curNode이동뒤에 preNode가 curNode가리키도록
-return head;

time: O(N)
space:O(1)
*/

var deleteNodes = function(head, m, n) {
    let curNode = new ListNode(0);
    curNode.next = head;
    let preNode = curNode;
    curNode = curNode.next;

    while(curNode){
        for(let i = 0; i < m; i++){
            if(!curNode)break;
            preNode = curNode;
            curNode = curNode.next;
        }
        for(let i = 0; i < n; i++){
            if(!curNode)break;
            curNode = curNode.next;
        }
        preNode.next = curNode;
    }
    return head;
    
};