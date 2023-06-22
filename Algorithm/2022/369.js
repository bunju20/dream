/*
I: 연결리스트
O: 연결리스트
C: 
The number of nodes in the linked list is in the range [1, 100].
0 <= Node.val <= 9
The number represented by the linked list does not contain leading zeros except for the zero itself. 

E: 9가 맨 앞에 달렸으면은 앞에 1 추가해서 반환해야함.

ds: x
algo: x
그냥 지나가면서 9를 세는거지.
한번돌고 마지막 9가 몇개인지 샘.
9가 없으면은 뒤에 1더한거 반환하면 되고.
있으면은 9의 맨 처음거에 + 1해주고
나머지 지나가면서 다 0으로만들어줌.
solution:

- list 앞에 뭐 하나 붙임.
while(list)
  -if(9를 발견했으면)while(9가 없을떄까지)nineNum++;
  -else nineNum = 0;

-if(9가 없음) while()끝에만 1 더해줌.
-else
  while(9 앞에있는애 1 더해주고 9있는곳 0만들음)

return (9의 개수에 따라)head던지 head.next던지 반환.

time: O(N)
space: O(1)

*/

var plusOne = function (head) {
  let list = new ListNode(0);
  list.next = head;

  let nineNum = 0;
  let allNodeNum = 0;
  let curNode = head;

  while(curNode){
    if(curNode.val === 9){
    while(curNode.next&&curNode.next.val === 9){
        nineNum++;
        allNodeNum++;
        curNode = curNode.next;
    }
    }else nineNum = 0;
    if(curNode.val === 9){
        nineNum++;
        allNodeNum++;
    }
    if(curNode){
        if(curNode.val !== 9)allNodeNum++;
        curNode = curNode.next;
        
    }
  }

  if(nineNum === 0)makeNewList(list, allNodeNum);
  else makeNewList(list, allNodeNum - nineNum);

  return (nineNum === allNodeNum) ? list : list.next;
};

function makeNewList(list,startIdx){
  let curNode = list;
  while(curNode){
    if(startIdx === 0)curNode.val+=1;
    else if(startIdx < 0)curNode.val = 0;
    startIdx--;
    curNode = curNode.next;
  }
}