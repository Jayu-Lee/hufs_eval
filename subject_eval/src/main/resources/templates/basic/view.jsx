import React from 'react';

function ArticleList({ articles }) {
  const postsPerPage = 20;

  const [currentPage, setCurrentPage] = React.useState(1);
  // 일단은 1쪽으로 써뒀는데 데이터 개수에 따라 자동으로 2, 3, 4...로 넘어가게 해야 할 듯

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = articles.slice(indexOfFirstPost, indexOfLastPost);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="container" style={{ maxWidth: '600px' }}>
      <div className="py-5 text-center">
        <h2>Content</h2>
        <a href="/write" className="btn btn-primary">
          게시글을 작성해보세요.
        </a>
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
            {currentPosts.map((article) => (
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

      {/* 페이지네이션 */}
      <ul className="pagination justify-content-center">
        {Array.from({ length: Math.ceil(articles.length / postsPerPage) }, (_, index) => (
          <li key={index} className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}>
            <button className="page-link" onClick={() => handlePageChange(index + 1)}>
              {index + 1}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ArticleList;
