import React, { useState, useEffect } from 'react';
import './Posts.css';
import PostItem from './PostItem';
import postIMG from '../assets/apples.jpg';
import { Button } from './Button';
import useFirestore from '../hooks/useFirestore';


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

    const { docs } = useFirestore('images');
    console.log(docs);




    return (
        <div className='posts'>
            <h1>Latest Posts</h1>
            <div className='posts__container'>
                { docs && docs.map(doc => (
                    <PostItem
                        src={doc.url}
                        title='Post Title'
                        description='description'
                        date='post date'
                        label='Adventure'
                        path='/specificPost'
                    />
                ))}
                <PostItem
                    src={postIMG}
                    title='Post Title'
                    description='description'
                    date='post date'
                    label='Luxury'
                    path='/specificPost'
                />


                <PostItem
                    src={postIMG}
                    title='Post Title'
                    description='description'
                    date='post date'
                    label='Mystery'
                    path='/specificPost'
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
