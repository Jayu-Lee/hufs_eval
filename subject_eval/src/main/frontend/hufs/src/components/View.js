import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

function View(props) {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();
    const [selectedArticle, setSelectedArticle] = useState(null);
    const [password, setPassword] = useState('');

    useEffect(() => {
        axios.get(`/api/view/`)
            .then((response) => {
                setArticles(response.data.data);
                setLoading(false);
            })
            .catch((error) => {
                // 요청 실패하면 에러 처리
                console.error('데이터를 가져오는 중 오류 발생:', error);
                setLoading(false);
            });
    }, []);

    const handleDelete = (id) => {
        axios.delete(`/api/view/${id}`).then(() => {
            setArticles(articles.filter((article) => article.id !== id));
        });
    };

    const handleArticleClick = (id) => {
        console.log('Fetching article with ID:', id);
        axios.get(`/api/view/${id}`)
            .then((response) => {
                const fullArticle = response.data;
                console.log('Full Article:', fullArticle);
                setSelectedArticle(fullArticle);
            })
            .catch((error) => {
                console.error('글 내용을 가져오는 중 오류 발생:', error);
            });
    };

    const handlePasswordSubmit = async () => {
        try {
          await axios.post(`/api/view/${selectedArticle.id}/password`, {password});
          console.log('비밀번호가 전송되었습니다');
        } catch (error) {
          console.error('비밀번호 전송 중에 오류가 생겼습니다: ', error);
        }
    };
            
    const closeModal = () => {
        setSelectedArticle(null);
    };

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
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                        {articles.map((article) => (
                            <tr key={article.id} onClick={() => handleArticleClick(article.id)}>
                                <td>
                                    <Link to={`/view/${article.id}`}>{article.id}</Link>
                                </td>
                                <td>
                                    <Link to={`/view/${article.id}`}>{article.articleTitle}</Link>
                                </td>
                                <td>
                                    <Link to={`/view/${article.id}`}>{article.prfsrName}</Link>
                                </td>
                                <td>
                                    <button onClick={() => handleDelete(article.id)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {selectedArticle && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={closeModal}>&times;</span>
                        <h2>{selectedArticle.articleTitle}</h2>
                        <p>{selectedArticle.content}</p>

                        {/* 유저가 비밀번호 쓸 폼 */}
                        <input
                            type="password"
                            placeholder="비밀번호 입력"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <button onClick={handlePasswordSubmit}>결정</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default View;
