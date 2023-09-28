import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Post() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        articleTitle: '',
        prfsrName: '',
        content: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // 서버로 데이터를 전송
        console.log('Form data:', formData);

        // /view 로 프로그래밍 방식으로 리디렉션
        navigate('/view');
    }

    return (
        <div className="container">
            <div className="py-5 text-center">
                <h1>Write a New Article</h1>
            </div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="articleTitle">Article Title:</label>
                    <input
                        type="text"
                        id="articleTitle"
                        name="articleTitle"
                        className="form-control"
                        required
                        value={formData.articleTitle}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="prfsrName">Professor Name:</label>
                    <input
                        type="text"
                        id="prfsrName"
                        name="prfsrName"
                        className="form-control"
                        required
                        value={formData.prfsrName}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="content">Content:</label>
                    <textarea
                        id="content"
                        name="content"
                        className="form-control"
                        required
                        value={formData.content}
                        onChange={handleChange}
                    ></textarea>
                </div>
                <br />
                <div>
                    <button type="submit">제출</button>
                </div>
            </form>
        </div>
    );
}

export default Post;
