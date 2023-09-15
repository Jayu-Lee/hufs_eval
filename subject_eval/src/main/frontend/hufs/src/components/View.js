import React from 'react';

function View(props) {
    return (
        <div className="container" style={{ maxWidth: '600px' }}>
            <div className="py-5 text-center">
                <h2>Content</h2>
                <a href="/write" className="btn btn-primary">게시글을 작성해보세요.</a>
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
                    {props.articles && props.articles.map((article) => (
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
