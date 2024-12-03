import { Container } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

function Article(props) {
    return (
        <Container>
            <div className='Article'>
                   <Link
                    to="http://localhost:3000/Detail/dataPhone/2"
                    className=''
                    >
                           Samsung 
                   </Link>     
            </div>
        </Container>
    );
}

export default Article;