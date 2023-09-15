import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // 스타일 시트 파일 또는 스타일링 코드를 가져옵니다.
import App from './App'; // 렌더링할 최상위 컴포넌트를 가져옵니다.

// ReactDOM.render()를 사용하여 앱을 'root' 요소에 렌더링합니다.
ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);
