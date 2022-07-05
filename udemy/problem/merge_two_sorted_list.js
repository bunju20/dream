/*
I: 링크리스트 두개
O: 링크리스트 하나
C:
The number of nodes in both lists is in the range [0, 50].
-10 <= Node.val <= 10
Both list1 and list2 are sorted in non-decreasing order.
E:
if(둘중 하나가 없으면)있는쪽(아예없을땐 없는쪽) 반환


ds: linked list
algo:x

solution:
-새로운 노드 만듦
-둘중에 작거나 같은 노드 넣음.
-넣고 이동함
-남은 노드는 쌩으로 붙여줌
-반환

time: O(N) //max(n,m)
space: O(N) //n+m

var mergeTwoLists = function(list1, list2) {
  if(!list1 || !list2){
    return (list1) ? list1 : list2;
  }  

  let result = new ListNode(0);
  let res = result;
  let firNode = list1;
  let secNode = list2;
  while(firNode && secNode){
    if(firNode.val <= secNode.val){
        result.next = new ListNode(firNode.val);
        firNode = firNode.next;
    }else{
        result.next = new ListNode(secNode.val);
        secNode = secNode.next;
    }
    result = result.next;
  }
  if(!firNode || !secNode){
    if(firNode){
        result.next = firNode;
    }else {
        result.next = secNode;
    }
  }
  return res.next;
};

*/




var mergeTwoLists = function(list1, list2) {
    let head = new ListNode();
    let curNode = head;
    while(list1 && list2){
        if(list1.val <= list2.val){
            curNode.next = list1;
            list1 = list1.next;
        }else{
            curNode.next = list2;
            list2 = list2.next;
        }
        curNode = curNode.next;
    }
    if(list1 || list2){
        curNode.next = list1 || list2;
    }
    return head.next;
};