import React, { Component } from 'react';
import { Contain } from 'react-bootstrap';
import Card from 'react-bootstrap/Card'
class Post extends Component {

    render() {
        return (
            <Card className='slap' style={{background: "#42777f", border: 'none'}}>
                <Card.Title style={{color: '#f5e8d7'}}>HOÀNG VÂN</Card.Title>
                <Card.Text style={{color: '#f5e8d7', opacity: '0.7'}}>khôi yêu vân quá, yêu ghê, yêu cực yêu nề yêu nề yêu mề jeeeeeeeeeeeeeeee</Card.Text>
            </Card>
        );
    }

}

export default Post;
