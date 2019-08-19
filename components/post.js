import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card'
class Post extends Component {

    render() {
        const {title, content} = this.props.post
        return (
	    <Container style={{flexDirection: 'column', justifyContent: 'space-between', display: 'flex'}}>
		<div>		
		<h4 className="title">{title.toUpperCase()}</h4>
		<div style={{color: "#f5e8d7", opacity: '0.7'}} dangerouslySetInnerHTML={{ __html: content.brief }}></div>
		</div>
		<p className='time'>20 11 2019</p>
		<style jsx>
		    {`
			.title{
			    color: #f5e8d7;
			}	    
			.time{
			    color: #f5e8d7;
			    align-self: end;
			}
			    
		
		    `}	
		</style>
	    </Container>
        );
    }

}

export default Post;
