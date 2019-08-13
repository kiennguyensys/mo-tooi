import React, { Component } from 'react';
import axios from 'axios'
import {connect} from 'react-redux';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import AppBar from '../components/appbar';
import Link from 'next/link';

class About extends Component {

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
                    <h1>thongtin</h1>

                </Container>
                <style jsx>
                    {`
                        background: #42777f
                    `}
                </style>
            </div>
        );
    }

}

export default About;
