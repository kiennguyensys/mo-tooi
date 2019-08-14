import React, { Component } from 'react';
import { Container, Nav } from 'react-bootstrap';
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
                <div className='warning-container'>
                    <img className="warning" src='/static/warning-icon.png'/>
                    <div style={{background: "#ca5e42", width: "2px", margin: "2px"}}></div>
                    <h6 style={{color: "#ca5e42"}}>Đọc quá 180 phút mỗi ảnh hưởng xấu đến sức khoẻ</h6>
                </div>
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
                            width: 80px;
                        }
                        .warning-container{
                            background: linear-gradient(90deg, rgba(235,187,141,1) 35%, rgba(245,232,215,1) 100%);
                            display: flex;
                            flex-direction: row;
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
