import React, { Component } from 'react';
import { Contain } from 'react-bootstrap';
import Card from 'react-bootstrap/Card'
class Post extends Component {

    render() {
        const {title, content} = this.props.post
        return (
            <Card className='slap' style={{background: "#42777f", border: 'none'}}>
                <Card.Body>
                    <Card.Title style={{color: '#f5e8d7'}}>{title}</Card.Title>
                    <div style={{justifyContent: 'space-between'}}>
                        <Card.Text style={{color: '#f5e8d7', opacity: '0.7'}}><div dangerouslySetInnerHTML={{ __html: content.brief }}/></Card.Text>
                        <Card.Text>11/20/2012</Card.Text>
                    </div>
                </Card.Body>
            </Card>
        );
    }

}

export default Post;
