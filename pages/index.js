import { Component } from 'react';
import axios from 'axios'
import {store} from '../redux/store';
import {Provider} from 'react-redux';
class App extends Component {

    static async getInitialProps() {
        let response = await axios.get('http://localhost:3000/api/posts');
        return { posts: response.data };
    }

    render() {
        return (
            <Provider store={store}>
                <h1>yolo</h1>
            </Provider>
        );
    };
}

export default App;
