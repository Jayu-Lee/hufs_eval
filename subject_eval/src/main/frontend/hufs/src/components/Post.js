import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

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

        // Axios로 서버로 데이터 전송
        axios.post('/api/article', formData)
            .then((response) => {
                console.log('서버 응답:', response.data);
                navigate('/view');
            })
            .catch((error) => {
                console.error('데이터를 전송하는 중 오류 발생:', error);
            });
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
