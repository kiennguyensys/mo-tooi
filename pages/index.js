import { Component } from 'react';
import axios from 'axios'
import {connect} from 'react-redux';
import { Container, Row, Col } from 'react-bootstrap';

class Index extends Component {

    static async getInitialProps({store, isServer, pathname, query}) {
        let response = await axios.get('http://localhost:3000/api/posts');
        return { posts: response.data };
    }

    render() {
        return (
            <Container fluid>
                <Row className='flex-grow-1'>
                    <Col className="bg-primary"></Col>
                    <Col className="bg-info "></Col>
                    <Col className="bg-danger"></Col>
                </Row>
            </Container>
        );
    };
}

export default connect(state => state)(Index);
