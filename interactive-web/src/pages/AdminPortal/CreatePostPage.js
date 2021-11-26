import React, { useState, useEffect } from "react";
import "./CreatePostPage.css";
import { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css";
import { reactQuillToolbarModules as toolbarModules } from "../../component/ReactQuillModules"
import { useLocation } from "react-router";
import {
  projectStorage,
  projectFirestore,
  timestamp,
} from "../../firebase/config";
import CategoryContainer from "../../component/postComponents/CategoryContainer";
import { Form, Input, Button, Select, message, Row, Col, Upload } from 'antd';
import ImageResize from "quill-image-resize-module--fix-imports-error"
Quill.register('modules/imageResize', ImageResize);


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

  const layout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 18 },
  };

  const tailLayout = {
    wrapperCol: { span: 4 },
  };

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
    const upperCaseAuthorName = authorName.toUpperCase().split(" ")
    const postTitleUpperCase = postTitle.toUpperCase().split(" ")
    console.log(upperCaseAuthorName)
    console.log(fileURL);
    if (update && fileURL === null) {
      setFileURL(updateData.src);
    }
    var data = {
      author: authorName,
      authorToUpper: upperCaseAuthorName,
      createdAt: timestamp(),
      postCategory: "Quill Editor",
      title: postTitle,
      titleToUpper: postTitleUpperCase,
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
        imageResize: {
          modules: ['Resize', 'DisplaySize']
        }
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
    <Row style={{ minHeight: "100vh" }} justify="center" align="middle">
      <Col xs={22} sm={20} md={16} lg={15} xl={15} xxl={15} align="middle">
        <Form style={{ minWidth: "100%" }}>
          <Form.Item
            name="title"
            rules={[
              {
                required: true,
                message: 'Please input your Title!',
              },
            ]}
          >
            <Input
              placeholder="Title"
              type="text"
              id="postTitle"
              name="postTitle"
              defaultValue={update ? updateData.title : ""}
            />
          </Form.Item>
          <Form.Item name="author"
            rules={[
              {
                required: true,
                message: 'Please input the Author!',
              },
            ]}
          >
            <Input
              placeholder="Author"
              type="text"
              id="postAuthor"
              name="postAuthor"
              defaultValue={update ? updateData.author : ""}
            />
          </Form.Item>
          <Form.Item label="Cover Image" name="coverImage">
            <input type="file" onChange={handleChange} style={{ float: 'left' }} />
          </Form.Item>
          <Form.Item>
            <p>Available Categories</p>
            <CategoryContainer id="availableCategories" icon="+" categoryList={availableCategories} callBackFunc={addToCategoryList} background={true} />
            {selectedCategories.length != 0 && (<><p>Selected Categories</p>
              <CategoryContainer icon="x" categoryList={selectedCategories} callBackFunc={removeFromCategoryList} /></>)}
          </Form.Item>
          <Form.Item>
            <div className="ql-editor" id="editor-container"></div>
          </Form.Item>
          <Form.Item labelAlign="right">
            {update && (
              <Button type="primary" htmlType="submit" style={{ backgroundColor: "#234144", borderColor: "#1a3133" }} onClick={sendPost}>
                Update
              </Button>
            )}
            {!update && (
              <Button type="primary" htmlType="submit" style={{ backgroundColor: "#234144", borderColor: "#1a3133" }} onClick={sendPost}>
                Post
              </Button>
            )}
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
}

export default CreatePostPage;