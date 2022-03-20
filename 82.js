/*
solution:
-edge 처리
-원래 리스트앞에 0붙임.
-pre와 cur두고

-while(cur)
    -if(cur와 뒤에거가 중복이면)
        -while문으로 다를때까지 cur이동
        -pre가 cur다음거 가리킴.
    -else 중복아니면
        -pre 옆으로 이동

    -cur 옆으로 이동

-return result.next;

time: O(N)
space: O(1)
*/

var deleteDuplicates = function (head) {
  if (!head || !head.next) return head;
  let result = new ListNode(0, head);
  let pre = result;
  let cur = result.next;

  while (cur) {
    if (cur.next != null && cur.val == cur.next.val) {
      while (cur.next && cur.val == cur.next.val) cur = cur.next;
      pre.next = cur.next;
    } else pre = pre.next;
    cur = cur.next;
  }
  return result.next;
};


/*
1:50 ~ 2:11

I: linked list(정렬되어있음) 
O: 중복되는걸 지운 linked list
C:
The number of nodes in the list is in the range [0, 300].
-100 <= Node.val <= 100
The list is guaranteed to be sorted in ascending order.
E:
if(!head || !head.next)return head;

[1,2,3,3,4,4,5]
             ^
              ^
[1,2,5]
[1,2,5]

ds: x
algo: two pointer 

solution:
- head앞에 노드 하나 붙임.
- curNode, preNode만듬
- while(curNode)
    - if(curNode랑 다음거가 같으면)
        -while 둘이 다를때까지 이동. (이동하다가 끝까지 갔으면 null로 만들고 리턴)
        -pre 를 중복안되는데까지 붙이고 이동
    - else pre랑 cur이동
- return reuslt.next;

list의 크기 : N
time: O(2N) => O(N)
space: O(1)


var deleteDuplicates = function (head) {
  if (!head || !head.next) return head;
  let result = new ListNode(0);
  result.next = head;

  let preNode = result;
  let curNode = result.next;

  while (curNode.next) {
    if (curNode.val === curNode.next.val) {
      while (curNode.val === curNode.next.val) {
        curNode = curNode.next;
        if (!curNode.next) {
          preNode.next = null;
          return result.next;
        }
      }
      preNode.next = curNode.next;
      curNode = curNode.next;
    } else {
      preNode = curNode;
      curNode = curNode.next;
    }
  }
  return result.next;
};

*/
