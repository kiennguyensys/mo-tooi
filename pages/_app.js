import React from 'react';
import axios from 'axios'
import {store} from '../redux/store';
import {Provider} from 'react-redux';
import withRedux from "next-redux-wrapper";
import App, {Container} from "next/app";

class MyApp extends App {

    static async getInitialProps({Component, ctx}) {

        // we can dispatch from here too

        const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};

        return {pageProps};

    }

    render() {
        const {Component, pageProps, store} = this.props;
        return (
            <Container>
                <Provider store={store}>
                    <Component {...pageProps} />
                </Provider>
            </Container>
        );
    }

}

export default withRedux(store)(MyApp);

