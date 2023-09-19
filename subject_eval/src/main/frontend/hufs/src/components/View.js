import React from 'react';
import {Link} from "react-router-dom";

function View(props) {
    if (!props.articles) {
        // props.articles가 정의되지 않았거나 null인 경우 처리
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
                    {props.articles.map((article) => (
                        <tr key={article.id}>
                            <td>
                                <a href={`/article/${article.id}`}>{article.id}</a>
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
