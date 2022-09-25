import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let post = '강남 우동 맛집';
  let [글제목, 글제목변경]= useState(['남자 코트 추천', '강남 우동맛집', '파이썬독학']);
  let [날짜]= useState('2월 28일')
  let [좋아요, 좋아요개수] = useState(0);


  return (
    <div className="App">
      <div className="black-nav">
        <h4 style ={{color : 'red', fontSize : '16px'}}>블로그</h4>
      </div>


      <div className ="list">
        <h4 onClick={()=>{ 글제목[0] = '여자코트 추천'; 글제목변경(글제목) }}>{ 글제목[0] }
        <span onClick={()=>{ 좋아요개수(좋아요+1) }}>👍좋아요</span> {좋아요} 
        </h4>
        <p>2월 17일 발행</p>
      </div>


      <div className='list'>
        <h4>{ 글제목[1] }</h4>
        <p> { 날짜 }</p>
      </div>
      <div className='list'>
        <h4>{ 글제목[2] }</h4>
        <p>{ 날짜 }</p>
      </div>
    </div>
  );
} 


export default App;
