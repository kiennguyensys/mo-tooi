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
