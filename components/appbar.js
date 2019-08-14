import React, { Component } from 'react';
import { Container, Nav, Row, Col } from 'react-bootstrap';
import Link from 'next/link';
class AppBar extends Component {

    componentWillMount() {
        console.log('mounting');
    }

    render() {
        return (
            <Nav className="flex-column h-100 justify-content-center p-4">
                <img className="logo" src='/static/logo.png'/>
                <h4>LÀ <b>MỘT</b> TRANG WEB </h4>
                <h4>CỦA <b>NHỮNG</b> KẺ MỘNG MƠ</h4>
                <div className='links'>
                    <Nav.Item><Link href="/poems"><a>THƠ</a></Link></Nav.Item>
                    <Nav.Item><Link href='/literrature'><a>VĂN</a></Link></Nav.Item>
                    <Nav.Item><Link href='/about'><a>THÔNG TIN</a></Link></Nav.Item>
                </div>
                <Container className='warning-container p-0 m-0'>
                    <Row className='p-0 m-0'>
                        <Col lg={3} md={3} xl={3} className='p-0 m-0'><img className="warning" src='/static/warning-icon.png'/></Col>
                        <Col lg={8} md={8} xl={8} className='p-0 m-0' style={{display: 'flex', flexDirection: 'row'}}>
                            <div style={{background: "#ca5e42", width: "4px", marginTop: "4px", marginBottom: "4px", }}/>
                            <h6 style={{color: "#ca5e42", marginLeft: "2px"}}>Đọc quá 180 phút một ngày ảnh hưởng xấu đến sức khoẻ</h6>
                        </Col>
                    </Row>
                </Container>
                <style type="text/css">
                    {`
                        a{
                            color: #ebae8d;
                            margin: 0px;
                            padding: 0px
                        }
                        a:hover{
                            color: #ca5e42;
                        }
                        h4{
                            color: #42777f;
                            margin: 0px;
                        }
                        .logo{
                            height: auto;
                            width: 300px;
                            margin-bottom: 30px;
                        }
                        .warning{
                            height: auto;
                            width: 100%
                        }
                        .warning-container{
                            margin-top: 30%;
                            background: linear-gradient(90deg, rgba(235,187,141,1) 35%, rgba(245,232,215,1) 100%);
                            display: flex;
                            flex-direction: row;
                            width: 65%;
                            transform: translateY(190%)
                        }
                        .links{
                            margin-top: 40px;
                        }
                    `}
                </style>
            </Nav>
        );
    }

}

export default AppBar;
