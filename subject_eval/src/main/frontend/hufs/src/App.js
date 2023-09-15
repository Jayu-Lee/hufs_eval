import React from 'react';
import logo from './logo.svg';
import './App.css';
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

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>

            {/* Post 컴포넌트 추가 */}
            <Post />

            {/* View 컴포넌트 추가 */}
            <View articles={articlesData} />
        </div>
    );
}

export default App;
