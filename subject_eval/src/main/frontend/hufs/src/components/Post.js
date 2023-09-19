import React, { Component } from 'react';
import {Link, Route, Routes} from "react-router-dom";


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
        //서버로 데이터를 전송
        console.log('Form data:', this.state);

        // /view 로 리다이렉트
        this.props.history.push('/view');
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
                        <Link to="/view">제출 </Link>
                    </div>
                </form>
            </div>
        );
    }
}

export default Post;
