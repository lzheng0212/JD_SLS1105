import React, { useState, useEffect } from "react";
import "./CreatePostPage.css";
import ReactQuill, { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Button } from "../component/Button";
import ProgressBar from "../component/ProgressBar";
import { reactQuillToolbarModules as toolbarModules } from "../component/ReactQuillModules"
import { useLocation } from "react-router";

import {
  projectStorage,
  projectFirestore,
  timestamp,
} from "../firebase/config";
import CategoryContainer from "../component/postComponents/CategoryContainer";

// Resources: https://github.com/zenoamaro/react-quill
// License is also in the link above for react-quill

function CreatePostPage() {

  const [fileURL, setFileURL] = useState(null);
  const updateData = useLocation().state;
  const update = updateData.update;
  const postID = update ? updateData.postID : null;
  const [quill, setQuill] = useState(null)
  const [selectedCategories, setCategory] = useState([])
  const [availableCategories, setAvailableCategories] = useState([])

  const addToCategoryList = (categoryName) => {
    if (!selectedCategories.includes(categoryName)) {
      setCategory([...selectedCategories, categoryName])
    }
  }

  const removeFromCategoryList = (categoryName) => {
    if (selectedCategories.includes(categoryName)) {
      const index = selectedCategories.indexOf(categoryName)
      selectedCategories.splice(index, 1)
      setCategory([...selectedCategories])
    }
  }

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
      categories: selectedCategories,
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
    projectFirestore
      .collection("categories")
      .get()
      .then((snapshot) => {
        snapshot.docs.forEach(doc => {
          setAvailableCategories([...doc.data().CategoryList])
        });
      });
    let quill = new Quill(".ql-editor", {
      modules: {
        toolbar: toolbarModules.toolbar,
      },
      placeholder: "Write your text!",
      theme: "snow",
    });

    setQuill(quill)
    if (update) {
      let data = JSON.parse(updateData.content)
      quill.setContents(data)
      setCategory([...updateData.categories])
      setFileURL(updateData.coverImageURL)
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
      <CategoryContainer icon="+" categoryList={availableCategories} callBackFunc={addToCategoryList} />
      <CategoryContainer icon="x" categoryList={selectedCategories} callBackFunc={removeFromCategoryList} />
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
