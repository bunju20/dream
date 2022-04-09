/*
time:
O(N)
space:
O(N)
solution:
재귀로 현재 노드가 null이면 종료하고
다음 노드로 함수 계속 돌리고
현재 노드 출력하고.
*/

var printLinkedListInReverse = function (head) {
    if(head === null)return;
    printLinkedListInReverse(head.getNext());
    head.printValue();
};