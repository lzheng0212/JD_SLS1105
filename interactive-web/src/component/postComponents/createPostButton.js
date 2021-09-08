import React from 'react';
import { Button } from '../Button';

function CreatePostButton() {
    return (
        <div className="opening-container">
            <div className='create_post-container'>
                <Button
                    buttonStyle='btn--primary'
                    buttonSize="btn--large"
                    path='./create'>
                    Create Post</Button>
            </div>
            <h1>Post Section</h1>
        </div>
    )
}

export default CreatePostButton