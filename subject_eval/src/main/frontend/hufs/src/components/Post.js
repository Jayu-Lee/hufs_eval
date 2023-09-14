import React, { Component } from 'react';

class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {
            articleTitle: '',
            prfsrName: '',
            content: '',
        };
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        // 이 부분에서 서버로 데이터를 전송하거나 다른 작업을 수행할 수 있습니다.
        console.log('Form data:', this.state);
    }

    render() {
        return (
            <div className="container">
                <div className="py-5 text-center">
                    <h1>Write a New Article</h1>
                </div>
                <form onSubmit={(e) => this.handleSubmit(e)}>
                    <div>
                        <label htmlFor="articleTitle">Article Title:</label>
                        <input
                            type="text"
                            id="articleTitle"
                            name="articleTitle"
                            className="form-control"
                            required
                            value={this.state.articleTitle}
                            onChange={this.handleChange}
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
                            value={this.state.prfsrName}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="content">Content:</label>
                        <textarea
                            id="content"
                            name="content"
                            className="form-control"
                            required
                            value={this.state.content}
                            onChange={this.handleChange}
                        ></textarea>
                    </div>
                    <br />
                    <div>
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default Post;
