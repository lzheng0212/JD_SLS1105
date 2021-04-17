import React, { useState, useEffect } from 'react';
import { Button } from '../component/Button';
import sunset from '../assets/sunset.jpg';
import apples from '../assets/apples.jpg';
import wheat from '../assets/wheat.jpg';
import './postStyle.css';
import Footer from '../component/Footer';
import PostItem from '../component/PostItem';
import '../component/Posts.css';
import { Link } from 'react-router-dom';


export default function PostSection() {
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
        <>
            <div className='container'>
                <div class="opening-container">
                    <h1 >Post Section</h1>
                </div>

                <div className='search-container'>
                    <input type="text" id='input' placeholder="Search for a post..."></input>
                </div>



                <div className='post-container'>

                    <PostItem
                        src={sunset}
                        title='Post Title'
                        description='description'
                        date='post date'
                        label='Adventure'
                        path='/services'
                    />
                    <PostItem
                        src={apples}
                        title='Post Title'
                        description='description'
                        date='post date'
                        label='Luxury'
                        path='/services'
                    />


                    <PostItem
                        src={wheat}
                        title='Post Title'
                        description='description'
                        date='post date'
                        label='Mystery'
                        path='/services'
                    />
                    <PostItem
                        src={sunset}
                        title='Post Title'
                        description='description'
                        date='post date'
                        label='Adventure'
                        path='/services'
                    />
                    <PostItem
                        src={apples}
                        title='Post Title'
                        description='description'
                        date='post date'
                        label='Luxury'
                        path='/services'
                    />


                    <PostItem
                        src={wheat}
                        title='Post Title'
                        description='description'
                        date='post date'
                        label='Mystery'
                        path='/services'
                    />
                    <PostItem
                        src={sunset}
                        title='Post Title'
                        description='description'
                        date='post date'
                        label='Adventure'
                        path='/services'
                    />
                    <PostItem
                        src={apples}
                        title='Post Title'
                        description='description'
                        date='post date'
                        label='Luxury'
                        path='/services'
                    />


                    <PostItem
                        src={wheat}
                        title='Post Title'
                        description='description'
                        date='post date'
                        label='Mystery'
                        path='/services'
                    />
                    <PostItem
                        src={sunset}
                        title='Post Title'
                        description='description'
                        date='post date'
                        label='Adventure'
                        path='/services'
                    />
                    <PostItem
                        src={apples}
                        title='Post Title'
                        description='description'
                        date='post date'
                        label='Luxury'
                        path='/services'
                    />


                    <PostItem
                        src={wheat}
                        title='Post Title'
                        description='description'
                        date='post date'
                        label='Mystery'
                        path='/services'
                    />
                    <PostItem
                        src={sunset}
                        title='Post Title'
                        description='description'
                        date='post date'
                        label='Adventure'
                        path='/services'
                    />
                    <PostItem
                        src={apples}
                        title='Post Title'
                        description='description'
                        date='post date'
                        label='Luxury'
                        path='/services'
                    />


                    <PostItem
                        src={wheat}
                        title='Post Title'
                        description='description'
                        date='post date'
                        label='Mystery'
                        path='/services'
                    />
                </div>

                <div class="button-container">
                    {button && <Button buttonStyle='btn--black' buttonSize="btn--large"><Link to='/' style={{color: 'white', textDecoration:'none'}}>More</Link></Button>}
                </div>

                <div className='footer-container'>
                    <Footer></Footer>
                </div>

            </div>


        </>
    )
}
