/*
null 1 2 3 4 5
     ^ 
       ^
         ^
1  null  2 3 4 5
^  
         ^ ^


*/

var reverseList = function(head) {
    let prev = null
    let curr = head
    let next = null
    
    while(curr!== null){
        next = curr.next
        curr.next = prev
        prev = curr
        curr = next
    }
    return prev;
};
