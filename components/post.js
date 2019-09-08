import React, { Component } from 'react';
import { Contain } from 'react-bootstrap';
import Card from 'react-bootstrap/Card'
class Post extends Component {

    render() {
        const { title, content, publishedDate } = this.props.post
        const formatedDate = new Date(publishedDate).toISOString().replace(/\T..+/, '').replace(/-/g, ' ');
        return (
            <Card className='slap' style={{background: "#42777f", border: 'none'}}>
                <Card.Body>
                <Card.Title style={{color: '#f5e8d7', fontSize: '25px'}}>{title}</Card.Title>
                    <div style={{justifyContent: 'space-between'}}>
                        <Card.Text style={{color: '#f5e8d7', opacity: '0.7'}}><div dangerouslySetInnerHTML={{ __html: content.brief }}/></Card.Text>
                    <Card.Text style={{color: '#f5e8d7', opacity: '0.7', textAlign: 'center', fontStyle: 'italic'}}>{formatedDate}</Card.Text>
                    </div>
                </Card.Body>
            </Card>
        );
    }

}

export default Post;
