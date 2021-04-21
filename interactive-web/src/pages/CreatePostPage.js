import React from 'react';
import '../App.css';
import UploadForm from '../component/UploadForm';
import './CreatePostPage.css';




function CreatePostPage() {
    return (
        <>
        <div className='createPost-container'>
            <div className='select-file-container'>
            <UploadForm></UploadForm>
            </div>
            
        </div>
           
            
            

        </>
    )
}

export default CreatePostPage
