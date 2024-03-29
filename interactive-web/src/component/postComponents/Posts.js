import React, { useState, useEffect } from 'react'
import './Posts.css'
import PostItem from './PostItem'

import { Button } from './Button'
import useFirestore from '../hooks/useFirestore'

function Posts () {
  const [button, setButton] = useState(true)
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false)
    } else {
      setButton(true)
    }
  }
  useEffect(() => {
    showButton()
  }, [])

  const { docs } = useFirestore('posts')

  return (
    <div className="posts">
      <h1>Latest Posts</h1>
      <div className="posts__container">
        {docs &&
          docs.map((doc) => (
            <PostItem
            key={doc.createdAt}
              src={doc.coverImage}
              title={doc.title}
              author={doc.author}
              description={doc.content}
              date={doc.createdAt}
              label={doc.postCategory}
              path="/specificPost"
            />
          ))}
      </div>

      <div className="posts__button">
        {button && (
          <Button buttonStyle="btn--black" buttonSize="btn--large" path="/post">
            Read More Posts
          </Button>
        )}
      </div>

      <div className="posts__line"></div>
    </div>
  )
}

export default Posts
