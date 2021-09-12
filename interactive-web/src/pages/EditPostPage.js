import React, { useState } from "react";
import "./CreatePostPage.css";

import ReactQuill, { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css";

import { Button } from "../component/Button";
import ProgressBar from "../component/ProgressBar";

import {
  projectStorage,
  projectFirestore,
  timestamp,
} from "../firebase/config";

// Resources: https://github.com/zenoamaro/react-quill
// License is also in the link above for react-quill

function EditPostPage() {
  const [content, setContent] = useState("");
  const editorChange = (value) => {
    setContent(value);
    console.log("content after: " + content);
  };

  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ indent: "-1" }, { indent: "+1" }],
      ["link", "image"],
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
  const sendPost = async (e) => {
    const postTitle = document.getElementById("postTitle").value;
    const authorName = document.getElementById("postAuthor").value;
    console.log(fileURL);
    var data = {
      author: authorName,
      createdAt: timestamp(),
      postCategory: "Quill Editor",
      title: postTitle,
      coverImage: fileURL,
      content: content,
    };
    console.log(data);
    document.getElementById("postAuthor").value = "";
    document.getElementById("postTitle").value = "";
    setContent("");
    setFile(null);
    setFileURL(null);
    projectFirestore.collection("posts").add(data);
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

  return (
    <postForm>
      <h3>Title</h3>
      <input
        placeholder="Title"
        type="text"
        id="postTitle"
        name="postTitle"
        style={{ width: "50%", alignSelf: "center" }}
      />
      <h3 style={{ marginTop: "30px" }}>Author</h3>
      <input
        placeholder="Author"
        type="text"
        id="postAuthor"
        name="postAuthor"
        style={{ width: "30%", alignSelf: "center" }}
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
      <div class="ql-editor" id="editor-container">
        <ReactQuill
          placeholder="Write blog..."
          theme="snow"
          value={content}
          modules={modules}
          formats={formats}
          onChange={editorChange}
        />
        <div style={{ marginTop: "30px" }}>
          <Button
            buttonStyle="btn--primary"
            buttonSize="btn--large"
            onClick={sendPost}
          >
            Post
          </Button>
        </div>
      </div>
    </postForm>
  );
}

export default EditPostPage;
