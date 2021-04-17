import React, { useState, useEffect } from 'react';
import './Posts.css';
import PostItem from './PostItem';
import postIMG from '../assets/apples.jpg';
import { Button } from './Button';


function Posts() {

    const [button, setButton] = useState(true);
    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
    }, []);


    return (
        <div className='posts'>
            <h1>Latest Posts</h1>
            <div className='posts__container'>

                <PostItem
                    src={postIMG}
                    title='Post Title'
                    description='description'
                    date='post date'
                    label='Adventure'
                    path='/services'
                />
                <PostItem
                    src={postIMG}
                    title='Post Title'
                    description='description'
                    date='post date'
                    label='Luxury'
                    path='/services'
                />


                <PostItem
                    src={postIMG}
                    title='Post Title'
                    description='description'
                    date='post date'
                    label='Mystery'
                    path='/services'
                />
                <PostItem
                    src={postIMG}
                    title='Post Title'
                    description='description'
                    date='post date'
                    label='Adventure'
                    path='/products'
                />
                <PostItem
                    src={postIMG}
                    title='Post Title'
                    description='description'
                    date='post date'
                    label='Adrenaline'
                    path='/sign-up'
                />
            </div>

            <div className='posts__button'>
                {button && <Button buttonStyle='btn--black' buttonSize="btn--large" path='/post'>Read More Posts</Button>}
            </div>

            <div className='posts__line'></div>


        </div>
    );
}

export default Posts;
