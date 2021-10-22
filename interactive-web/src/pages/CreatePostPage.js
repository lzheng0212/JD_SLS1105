import React, { useState, useEffect } from "react";
import "./CreatePostPage.css";
import ReactQuill, { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Button } from "../component/Button";
import ProgressBar from "../component/ProgressBar";
import { reactQuillToolbarModules as toolbarModules } from "../component/ReactQuillModules"
import { useLocation } from "react-router";
import FooterComponent from "../component/FooterComponent";
import {
  projectStorage,
  projectFirestore,
  timestamp,
} from "../firebase/config";
import CategoryContainer from "../component/postComponents/CategoryContainer";
import {message} from 'antd';




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

  const successPost = () => {
    message.success('Post Successfully!');
  };

  const successUpdate = () => {
    message.success('Update Successfully!');
  };

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
      successPost();
    } else {
      projectFirestore.collection("posts").doc(postID).update(data);
      successUpdate();
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
    <div>
    <post-form>
      <div className = "title-author">
      <input
        placeholder="Title"
        type="text"
        id="postTitle"
        name="postTitle"
        style={{ width: "100%" }}
        defaultValue={update ? updateData.title : ""}
      />
       <br></br>
      <input
        placeholder="Author"
        type="text"
        id="postAuthor"
        name="postAuthor"
        style={{ width: "100%"}}
        defaultValue={update ? updateData.author : ""}
      />
        <div id="coverImage">
          <div>
            <text style={{ paddingRight:"10px" }} id="coverImgText">Cover Image:   </text>
          </div>
        <div>
        <label>
          <input type="file" onChange={handleChange} />
          <span>+</span>
        </label>
        </div>
        </div>
      </div>
      <h3>Available Categories</h3>
      <CategoryContainer  id="availableCategories"icon="+" categoryList={availableCategories} callBackFunc={addToCategoryList} background = {true}/>
      {selectedCategories.length != 0 && (<><h3>Selected Categories</h3>
        <CategoryContainer icon="x" categoryList={selectedCategories} callBackFunc={removeFromCategoryList} /></>)}
      <div className="output">
        {error && <div className="error"> {error} </div>}
        {file && <div> {file.name} </div>}
        {file && <ProgressBar progress={progress}></ProgressBar>}
      </div>
      <div className="ql-editor" id="editor-container"></div>
      <div >
        <div style={{ marginTop: "30px", paddingLeft: "850px" }}>
          {update && (
            <Button
              style={{ paddingLeft: "300px" }}
              buttonStyle="btn--primary"
              buttonSize="btn--large"
              onClick={sendPost}
            >
              Update
            </Button>
          )}
          {!update && (
            <Button
              style={{ paddingLeft: "300px" }}
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
    </div>
  );
}

export default CreatePostPage;
