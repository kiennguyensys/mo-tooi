import React from 'react';
import axios from 'axios'
import {store} from '../redux/store';
import {Provider} from 'react-redux';
import withRedux from "next-redux-wrapper";
import App, {Container} from "next/app";
import { PageTransition } from 'next-page-transitions'
import AppBar from '../components/appbar';
import { Row, Col } from 'react-bootstrap';
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
                    <div>
                        <Row className='p-0 m-0'>
                            <Col lg={4} md={4} xl={4} className='p-0 m-0'><AppBar/></Col>
                            <Col lg={8} md={8} xl={8} className='p-0 m-0'>
                                <PageTransition timeout={300} classNames="page-transition">
                                    <Component {...pageProps}/>
                                </PageTransition>

                            </Col>
                        </Row>
                        <style jsx global>
                            {`
                                body{
                                    background-color: #f5e8d7;
                                    height: 100vh;
                                }
                                .page-transition-enter {
                                   opacity: 1;
                                   transform: translate3d(+100%, 0 , 0);
                                 }
                                 .page-transition-enter-active {
                                     opacity: 1;
                                     transform: translate3d(0, 0, 0);
                                     transition: opacity 500ms, transform 300ms;
                                 }
                                 .page-transition-exit {
                                     opacity: 1;
                                     transform: translate3d(0, 0, 0);
                                     transition: opacity 500ms, transform 300ms;
                                 }
                                 .page-transition-exit-active {
                                     opacity: 1;
                                     transform: translate3d(+100%, 0 , 0);
                                 }

                            `}
                        </style>
                    </div>
                </Provider>
            </Container>
        );
    }

}

export default withRedux(store)(MyApp);
