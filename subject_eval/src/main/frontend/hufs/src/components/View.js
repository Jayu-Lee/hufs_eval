import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function View(props) {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Axios를 사용하여 데이터 가져오기
        axios.get('/api') // 실제 API 엔드포인트로 변경해야 합니다.
            .then((response) => {
                // 요청이 성공하면 데이터를 상태에 저장합니다.
                setArticles(response.data);
                setLoading(false);
            })
            .catch((error) => {
                // 요청이 실패하면 에러를 처리합니다.
                console.error('데이터를 가져오는 중 오류 발생:', error);
                setLoading(false);
            });
    }, []); // 빈 배열을 전달하여 컴포넌트가 마운트될 때 한 번만 실행

    if (loading) {
        return <p>데이터를 로딩 중입니다...</p>;
    }

    if (articles.length === 0) {
        return (
            <div className="container" style={{ maxWidth: '600px' }}>
                <div className="py-5 text-center">
                    <h2>Content</h2>
                    <Link to="/post">게시글을 작성해보세요.</Link>
                </div>
                <hr className="my-4" />
                <p>게시글이 없습니다</p>
            </div>
        );
    }

    return (
        <div className="container" style={{ maxWidth: '600px' }}>
            <div className="py-5 text-center">
                <h2>Content</h2>
                <Link to="/post">게시글을 작성해보세요.</Link>
            </div>

            <hr className="my-4" />

            <div>
                <table className="table">
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>articleTitle</th>
                        <th>PrfsrName</th>
                    </tr>
                    </thead>
                    <tbody>
                    {articles.map((article) => (
                        <tr key={article.id}>
                            <td>
                                <Link to={`/article/${article.id}`}>{article.id}</Link>
                            </td>
                            <td>{article.articleTitle}</td>
                            <td>{article.prfsrName}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default View;
