import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

function View(props) {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();
    const [selectedArticle, setSelectedArticle] = useState(null);

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
        axios.get(`/api/view/${id}`)
            .then((response) => {
                const fullArticle = response.data;
                setSelectedArticle(fullArticle);
            })
            .catch((error) => {
                console.error('글 내용을 가져오는 중 오류 발생:', error);
            });
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
                                    <Link to={`/article/${article.id}`}>{article.id}</Link>
                                </td>
                                <td>
                                    <Link to={`/article/${article.id}`}>{article.articleTitle}</Link>
                                </td>
                                <td>
                                    <Link to={`/article/${article.id}`}>{article.prfsrName}</Link>
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
                    </div>
                </div>
            )}
        </div>
    );
}

export default View;
