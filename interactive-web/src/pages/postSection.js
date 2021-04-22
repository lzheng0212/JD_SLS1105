import React, { useState, useEffect } from 'react';
import { Button } from '../component/Button';
// import sunset from '../assets/sunset.jpg';
// import apples from '../assets/apples.jpg';
// import wheat from '../assets/wheat.jpg';
import './postStyle.css';
import Footer from '../component/Footer';
import PostItem from '../component/PostItem';
import '../component/Posts.css';
import useFirestore from '../hooks/useFirestore';


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

    const { docs } = useFirestore('images');
    console.log(docs);


    return (
        <>
            <div className='container'>

                <div className="opening-container">
                    <div className='create_post-container'>
                        {button && <Button buttonStyle='btn--primary' buttonSize="btn--large" path='./create'>Create Post</Button>}
                    </div>
                    <h1>Post Section</h1>


                </div>

                <div className='search-container'>
                    <input type="text" id='input' placeholder="Search for a post..."></input>
                </div>



                <div className='post-container'>

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
                    
                </div>

                <div className="button-container">
                    {button && <Button buttonStyle='btn--black' buttonSize="btn--large">More</Button>}
                </div>

                <div className='footer-container'>
                    <Footer></Footer>
                </div>

            </div>


        </>
    )
}
