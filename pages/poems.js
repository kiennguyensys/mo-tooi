import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col, Nav, CardColumns, Pagination } from 'react-bootstrap';
import Link from 'next/link';
import Router from 'next/router';
import Post from '../components/post';
import { fetchPoemsData } from '../containers/Poems/actions.js';

class Poems extends Component {

    static async getInitialProps ({ query: { page = 1 } }) {
        return {
            page: parseInt(page, 10),
        }
    }

    componentDidMount () {
        this.props.fetchPoemsData(this.props.page);
    }

    render () {
        return (
            <div>
                <Container fluid
                    style={{
                        height: '100vh',
                    }}
                    className="container"
                >
                    <div className="grid-container h-100">
                        {this.props.posts.map(post => <Post post={post}/>)}
                    </div>
                </Container>

                <div className="pagination-bar">
                    <button
                        className="pagination-button"
                        onClick={() => Router.push(`/poems?page=${this.props.page - 1}`)}
                        disabled={this.props.page <= 1}
                    >
                        &#8249;
                    </button>
                    <button
                        className="pagination-button"
                        disabled
                    >
                        {this.props.page}
                    </button>
                    <button
                        className="pagination-button"
                    >
                        ...
                    </button>
                    <button
                        className="pagination-button"
                        onClick={() => Router.push(`/poems?page=${this.props.page + 5}`)}
                    >
                        {this.props.page + 5}
                    </button>
                    <button
                        className="pagination-button"
                        onClick={() => Router.push(`/poems?page=${this.props.page + 6}`)}
                    >
                        {this.props.page + 6}
                    </button>
                    <button
                        className="pagination-button"
                        onClick={() => Router.push(`/poems?page=${this.props.page + 1}`)}
                    >
                        &#8250;
                    </button>
                </div>

                <style jsx>
                    {`
                        background: #42777f
                        .grid-container {
                            display: grid;
                            grid-template-columns: 40% 40%;
                            grid-template-rows: 30% 30% 30%;
                            align-items: center;
                            justify-content: center;
                        }
                        .pagination-bar {
                            position: absolute;
                            bottom: 40px;
                            left: 35%;
                            max-width: 100%;
                        }
                        .pagination-button {
                            color: #f5e8d7;
                        }
                    `}
                </style>
            </div>
        );
    }

}

const mapStateToProps = (state) => {
    return {
        posts: state.poem,
    }
}

const mapDispatchToProps = { fetchPoemsData };

export default connect(
    mapStateToProps,
    mapDispatchToProps)(Poems);
