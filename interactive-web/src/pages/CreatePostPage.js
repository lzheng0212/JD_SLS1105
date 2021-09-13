import React, { useState, useEffect } from "react";
import "./CreatePostPage.css";

import ReactQuill, { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css";

import { Button } from "../component/Button";
import ProgressBar from "../component/ProgressBar";

import { useLocation } from "react-router";

import {
  projectStorage,
  projectFirestore,
  timestamp,
} from "../firebase/config";

// Resources: https://github.com/zenoamaro/react-quill
// License is also in the link above for react-quill

function CreatePostPage() {

  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ indent: "-1" }, { indent: "+1" }],
      ["link", "image"],
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
      ["clean"],
    ],
  };
  
  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "indent",
    "link",
    "image",
  ];

  const [fileURL, setFileURL] = useState(null);
  const updateData = useLocation().state;
  const update = updateData.update;
  const postID = update ? updateData.postID : null;
  const [quill, setQuill] = useState(null)
  const sendPost = async (e) => {
    const postTitle = document.getElementById("postTitle").value;
    const authorName = document.getElementById("postAuthor").value;
    console.log(fileURL);
    if (update && fileURL === null) {
      setFileURL(updateData.src);
    }
    var data = {
      author: authorName,
      createdAt: timestamp(),
      postCategory: "Quill Editor",
      title: postTitle,
      coverImage: fileURL,
      content: JSON.stringify(quill.getContents()),
    };
    console.log(data);
    document.getElementById("postAuthor").value = "";
    document.getElementById("postTitle").value = "";
    setFile(null);
    setFileURL(null);
    if (!update) {
      projectFirestore.collection("posts").add(data);
    } else {
      projectFirestore.collection("posts").doc(postID).update(data);
    }
  };

  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  const [progress, setProgress] = useState(0);

  const handleChange = async (e) => {
    let selected = e.target.files[0];

    const types = ["image/png", "image/jpeg"];

    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError("");
      const storageRef = projectStorage.ref();
      const fileRef = storageRef.child(selected.name);
      fileRef.put(selected).on(
        "state_changed",
        (snap) => {
          let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
          setProgress(percentage);
        },
        (err) => {
          setError(err);
        },
        async () => {
          const url = await fileRef.getDownloadURL();
          setFileURL(url);
        }
      );
      setFileURL(fileRef.getDownloadURL());
    } else {
      setFile(null);
      setError("Please select an image file of format (png or jpeg)");
    }
  };
  
  useEffect(() => {
      let quill = new Quill(".ql-editor", {
      modules: {
        toolbar: modules.toolbar,
      },
      placeholder: "Write your text!",
      theme: "snow",
    });
    
    setQuill(quill)
    if (update) {
      let data = JSON.parse(updateData.content)
      quill.setContents(data)
    }
  }, []);

  return (
    <post-form>
      <h3>Title</h3>
      <input
        placeholder="Title"
        type="text"
        id="postTitle"
        name="postTitle"
        style={{ width: "50%", alignSelf: "center" }}
        defaultValue={update ? updateData.title : ""}
      />
      <h3 style={{ marginTop: "30px" }}>Author</h3>
      <input
        placeholder="Author"
        type="text"
        id="postAuthor"
        name="postAuthor"
        style={{ width: "30%", alignSelf: "center" }}
        defaultValue={update ? updateData.author : ""}
      />

      <h3 style={{ marginTop: "30px" }}>Cover Image</h3>
      <label>
        <input type="file" onChange={handleChange} />
        <span>+</span>
      </label>
      <div className="output">
        {error && <div className="error"> {error} </div>}
        {file && <div> {file.name} </div>}
        {file && <ProgressBar progress={progress}></ProgressBar>}
      </div>
      <div className="ql-editor" id="editor-container"></div>
      <div>
        <div style={{ marginTop: "30px" }}>
          {update && (
            <Button
              buttonStyle="btn--primary"
              buttonSize="btn--large"
              onClick={sendPost}
            >
              Update
            </Button>
          )}
          {!update && (
            <Button
              buttonStyle="btn--primary"
              buttonSize="btn--large"
              onClick={sendPost}
            >
              Post
            </Button>
          )}
        </div>
      </div>
    </post-form>
  );
}

export default CreatePostPage;
