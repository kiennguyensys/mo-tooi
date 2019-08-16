import React, { Component } from 'react';
import axios from 'axios'
import {connect} from 'react-redux';
import { Container, Row, Col, Nav, CardColumns } from 'react-bootstrap';
import AppBar from '../components/appbar';
import Link from 'next/link';
import Post from '../components/post';
import {fetchPoemsData} from '../containers/Poems/actions.js'

class Poems extends Component {

    static getInitalProps ({ reduxStore, req }) {
        return {}
    }

    componentDidMount() {
        this.props.fetchPoemsData()
    }

    render() {
        return (
            <div>
                <Container fluid
                    style={{
                        height: '100vh',

                    }}
                    className='container'
                >
                    <Nav.Item><Link href="/"><a>quay lại</a></Link></Nav.Item>
                    <div className="grid-container h-100">
                        {this.props.posts.map(post => <Post post={post}/>)}

                    </div>

                </Container>
                <style jsx>
                    {`
                        background: #42777f
                        .grid-container{
                            display: grid;
                            grid-template-columns: 30% 30% 30%;
                            grid-template-rows: 30% 30% 30%;
                            align-content: center;
                            justify-content: center;
                        }
                    `}
                </style>
            </div>
        );
    }

}

const mapStateToProps = (state) => {
  return {
    posts: state.poem
  }
}

const mapDispatchToProps = { fetchPoemsData }

export default connect(
  mapStateToProps,
  mapDispatchToProps)(Poems)
