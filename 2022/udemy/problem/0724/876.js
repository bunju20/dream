/*
0 0 0
    ^ 
  ^
0 0 0 0
         ^
    ^
*/
var middleNode = function(head) {
   let result = head;
   let curNode = head;
   let number = 1;
   while(curNode){
       curNode = curNode.next;
       if(number % 2 === 0)result = result.next;
       number++;
   }
   return result;
}