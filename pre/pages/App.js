import React, {useState} from 'react';
import './App.css';

function App() {

  let [title_list,setTitle] = useState(['제목1','제목2','제목3']);
  let [clickIdx,setIdx] = useState(0);
  function UI(){
    var ui_array = [];
    for(let i = 0; i < 3; i++){
      ui_array.push(
        <div className='title' onClick={()=>{setIdx(i)}}>
          TITLE : {title_list[i]} / DETAIL : 내용
        </div>
      )
    }
    return ui_array

  }

  function Sub(props){
    return (
      <div className='Sub'>
        <div>
          <h2>내가 클릭한제목 : {props.title_list[props.clickIdx]}</h2>
        </div>
      </div>
    )
  }
  return (
    <div>
    <div className="App">
      {UI()}
    
    </div>
    <Sub title_list={title_list} clickIdx={clickIdx}/>
    </div>
  );
}

export default App;
