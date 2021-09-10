import React, { useState, useEffect } from 'react';
import './postStyle.css';
import Footer from '../component/Footer';
import PostItem from '../component/PostItem';
import '../component/Posts.css';
import { projectFirestore } from '../firebase/config';
import CreatePostButton from '../component/postComponents/createPostButton';
import PostSearchContainer from '../component/postComponents/postSearchContainer';
import PostMoreButton from '../component/postComponents/PostMoreButton';

export default function PostSection() {
    const [button, setButton] = useState(true);
    const [docs, setDocs] = useState();
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

    useEffect(() => {
        projectFirestore.collection("posts").get().then((snapshot) => {
            setDocs(snapshot.docs)
        })
    }, [])

    return (
        <>
            <div className='container'>
                <CreatePostButton />
                <PostSearchContainer />
                <div className='post-container'>
                    {docs && docs.map(doc => (
                        <PostItem
                            src={doc.data().coverImage}
                            title={doc.data().title}
                            description={doc.data().content}
                            date={doc.data().createdAt}
                            label={doc.data().postCategory}
                            path='/specificPost'
                        />
                    ))}
                </div>
                <PostMoreButton />
                <Footer />
            </div>
        </>
    )
}
