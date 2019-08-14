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
            <div
                style={{
                    height: '100vh',
                    backgroundImage: `url(${Background})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    display: 'flex',
                    justifyContent: 'flex-end',
                    alignItems: 'flex-end',
                    padding: '10px',
                }}
            >
                <a className="link" href='https://www.facebook.com/khooi.dng'><img className='icon' alt='fb' src="/static/fb-icon.png"/></a>
                <a href="https://www.instagram.com/khoi.dng/"><img className='icon' src="/static/ins-icon.png"/></a>
                <style jsx>
                    {`
                        .icon{
                            width: auto;
                            height: 50px;
                            -webkit-transform: rotate(270deg);
                            -moz-transform: rotate(270deg);
                            -o-transform: rotate(270deg);
                            -ms-transform: rotate(270deg);
                            transform: rotate(270deg);
                        }
                    `}
                </style>
            </div>

        );
    };
}

export default connect(state => state)(Index);
