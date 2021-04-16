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
              title='Post Title'
              description = 'description'
              date='post date'
              label='Adventure'
              path='/services'
            />
            <PostItem
              src={postIMG}
              title='Post Title'
              description = 'description'
              date='post date'
              label='Luxury'
              path='/services'
            />
    
    
            <PostItem
              src={postIMG}
              title='Post Title'
              description = 'description'
              date='post date'
              label='Mystery'
              path='/services'
            />
            <PostItem
              src={postIMG}
              title='Post Title'
              description = 'description'
              date='post date'
              label='Adventure'
              path='/products'
            />
            <PostItem
              src={postIMG}
              title='Post Title'
              description = 'description'
              date='post date'
              label='Adrenaline'
              path='/sign-up'
            />
       
        
      </div>
    </div>
  );
}

export default Posts;
