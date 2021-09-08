import React, { useState } from 'react';
import './CreatePostPage.css'

import ReactQuill, { Quill } from 'react-quill';
import 'react-quill/dist/quill.snow.css'

import { projectStorage, projectFirestore } from '../firebase/config';

// Resources: https://github.com/zenoamaro/react-quill
// License is also in the link above for react-quill

function CreatePostPage() {
    const [content, setContent] = useState('');
    const editorChange = (value) => {
        setContent(value)
        console.log("content after: " + content)
    }

    const modules = {
        toolbar: [
            [{ 'header': [1, 2, false] }],
            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
            [{ 'indent': '-1' }, { 'indent': '+1' }],
            ['link', 'image'],
            ['clean']
        ],
    };
    const formats = [
        'header',
        'bold', 'italic', 'underline', 'strike', 'blockquote', 'indent',
        'link', 'image'
    ];

    const [fileURL, setFileURL] = useState()
    const sendPost = async (e) => {
        const postTitle = document.getElementById("postTitle").value
        const authorName = document.getElementById("postAuthor").value

        var data = {
            author: authorName,
            createdAt: "date created",
            postCategory: "Quill Editor",
            title: postTitle,
            coverImage: fileURL,
            content: content
        }
        console.log(data)
        var docu = document.getElementById('randomBody').innerHTML = content
        projectFirestore.collection("posts").add(data)
    }

    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);

    const handleChange = async (e) => {
        let selected = e.target.files[0];

        const types = ['image/png', 'image/jpeg'];

        if (selected && types.includes(selected.type)) {
            setFile(selected);
            setError('');
            const storageRef = projectStorage.ref()
            const fileRef = storageRef.child(selected.name)
            await fileRef.put(selected)
            setFileURL(await fileRef.getDownloadURL())
        } else {
            setFile(null);
            setError('Please select an image file of format (png or jpeg)');
        }
    }

    return (
        <>
            <br />
            <h1>Text Editor</h1>
            <form>
                <label for="Title">Title</label>
                <input type="text" id="postTitle" name="postTitle"></input>
                <br></br>
                <label for="Author">Author</label>
                <input type="text" id="postAuthor" name="postAuthor"></input>
                <br />
                <label>
                    <label for="CoverImage">Cover Image: </label>
                    <input type="file" onChange={handleChange} />
                </label>
                <div className='output'>
                    {error && <div className='error'> {error} </div>}
                    {file && <div> {file.name} </div>}
                </div>
            </form>
            <div id='editor-container'>
                <ReactQuill
                    placeholder="Write blog..."
                    theme='snow'
                    value={content}
                    modules={modules}
                    formats={formats}
                    onChange={editorChange}
                />
                <button onClick={sendPost}>click</button>
                <div id="randomBody"></div>
            </div>
        </>
    )
}

export default CreatePostPage
