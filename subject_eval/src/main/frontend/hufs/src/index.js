import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Post from './components/Post.js';
import View from './components/View.js';

const articlesData = [
    {
        id: 1,
        articleTitle: '사람은 무엇으로 사는가',
        prfsrName: '윤일동',
    },
    {
        id: 2,
        articleTitle: '세상에서 제일 재미없는 자료구조',
        prfsrName: '신찬수',
    },
    // 추가 게시글 데이터
];

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
    document.getElementById('root')
);

// ReactDOM.render(
//     <React.StrictMode>
//         <Post />
//     </React.StrictMode>,
//     document.getElementById('post-root')
// );
//
// ReactDOM.render(
//     <React.StrictMode>
//         <View articles={articlesData} /> {/* articlesData는 게시글 데이터 배열*/}
//     </React.StrictMode>,
//     document.getElementById('view-root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
