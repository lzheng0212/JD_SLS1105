import React from 'react';
import { Button } from '../Button';

function CreatePostButton() {
    return (
        <div className='create_post-container'>
            <Button
                buttonStyle='btn--primary'
                buttonSize="btn--huge"
                path='./create'>
                Create Post</Button>
        </div>
    )
}

export default CreatePostButton