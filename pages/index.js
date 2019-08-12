import { Component } from 'react';
import axios from 'axios'
import {store} from '../redux/store';
import {Provider} from 'react-redux';
import { Container, Row, Col } from 'react-bootstrap';
class App extends Component {

    static async getInitialProps() {
        let response = await axios.get('http://localhost:3000/api/posts');
        return { posts: response.data };
    }

    render() {
        return (
            <Provider store={store}>
                <Container fluid>
                    <Row className='flex-grow-1'>
                        <Col className="bg-primary"></Col>
                        <Col className="bg-info "></Col>
                        <Col className="bg-danger"></Col>
                    </Row>
                </Container>
            </Provider>
        );
    };
}

export default App;
