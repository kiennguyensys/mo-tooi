import React, {Component} from "react";
import {connect} from "react-redux";
import axios from "axios";

class Home extends Component {

    static getInitialProps({store, isServer, pathname, query}) {
        return {custom: 'custom'};
    }

    render() {
        return (
            <div>
                <h1>yolo</h1>
            </div>
        )
    }
}

export default connect(state => state)(Home);