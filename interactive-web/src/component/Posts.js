import React from 'react';
import './Posts.css';
import PostItem from './PostItem';
import postIMG from '../assets/apples.jpg';

function Posts() {
  return (
    <div className='cards'>
      <h1>Latest Posts</h1>
      <div className='posts__container'>
      
            <PostItem
              src={postIMG}
              text='What is regenerative landuse'
              label='Adventure'
              path='/services'
            />
            <PostItem
              src={postIMG}
              text='Travel through the Islands of Bali in a Private Cruise'
              label='Luxury'
              path='/services'
            />
    
    
            <PostItem
              src={postIMG}
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='Mystery'
              path='/services'
            />
            <PostItem
              src={postIMG}
              text='Experience Football on Top of the Himilayan Mountains'
              label='Adventure'
              path='/products'
            />
            <PostItem
              src={postIMG}
              text='Ride through the Sahara Desert on a guided camel tour'
              label='Adrenaline'
              path='/sign-up'
            />
       
        
      </div>
    </div>
  );
}

export default Posts;
