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