import { Component } from 'react';
import axios from 'axios'
import {connect} from 'react-redux';
import { Container, Row, Col } from 'react-bootstrap';
import AppBar from '../components/appbar';
import Link from 'next/link';
// import Background from './styles/images/foreground.png';
// import styles from './styles/index.css';

const Background = '/static/foreground3.png'
// const Background = 'https://res.cloudinary.com/giaphatocphamphu/image/upload/v1563523660/phadobg.png'
class Index extends Component {

    static async getInitialProps({store, isServer, pathname, query}) {
        let response = await axios.get('http://localhost:3000/api/posts');
        return { posts: response.data };
    }

    render() {
        return (
            <Container fluid
                style={{
                    height: '100vh',
                    backgroundImage: `url(${Background})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                }}
            >
            </Container>

        );
    };
}

export default connect(state => state)(Index);
