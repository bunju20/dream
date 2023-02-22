/*
보통 현업에서는 주석을 적는게 좋지 않음. 코드보면서 이해가능하기 때문
이 함수가 뭐고 어떤의도고 어케써야하는지 왜 일케 작성했는지
왜를 설명할수 있어야함, 코드를 그대로 설명하는 주석은필요없고 의도를
설명해야 함.
*/

const items = document.querySelector('.items');
const input = document.querySelector('.footer__input');
const addBtn = document.querySelector('.footer__button');

function onAdd(){
  //1. 사용자가 입력한 텍스트를 받아옴.
  const text = input.value;
  
  if(text == ''){
    input.focus;
    return;
  }
  //2. 새로운 아이템을 만듦(텍스트 + 삭제버튼)
  const item = createItem(text);
  //3. items 컨테이너 안에 새로운 아이템을 추가한다.
  items.appendChild(item);
  //4.새로 추가한 곳으로 스크롤링
  item.scrollIntoView({block : 'center'})
  //5. 인풋을 초기화 한다. (텍스트가 없어져야하므로)
  input.value = '';
  input.focus(); //추가해도 다시 바로 input에 추가하기 위함.


}

function createItem(text){
  const itemRow = document.createElement('li');
  itemRow.setAttribute('class','item__row');

  const item = document.createElement('div');
  item.setAttribute('class','item');

  const name = document.createElement('span');
  name.setAttribute('class','item__name');
  name.innerHTML = text;

  const deleteBtn = document.createElement('button');
  deleteBtn.setAttribute('class','item__delete');
  deleteBtn.innerHTML = `<i class="fa-solid fa-trash-can"></i>`;
  deleteBtn.addEventListener('click', () => {
    items.removeChild(itemRow);
  });

  const itemDivider = document.createElement('div');
  itemDivider.setAttribute('class','item__divider');

  item.appendChild(name);
  item.appendChild(deleteBtn);

  itemRow.appendChild(item);
  itemRow.appendChild(itemDivider);
  return itemRow;

}
addBtn.addEventListener('click', () =>{
  onAdd();
});

input.addEventListener('keypress', (event)=>{
  if(event.key = 'Enter'){
    onAdd();
  }
});