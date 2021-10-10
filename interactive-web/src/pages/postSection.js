import React, { useState, useEffect } from "react";
import { Radio } from 'antd';
import "./postStyle.css";
import FooterComponent from "../component/FooterComponent";
import PostItem from "../component/PostItem";
import "../component/Posts.css";
import useFirestore from "../hooks/useFirestore";

import PostSearchContainer from "../component/postComponents/postSearchContainer";
import PostMoreButton from "../component/postComponents/PostMoreButton";
import { projectFirestore } from "../firebase/config";
import { Content } from "antd/lib/layout/layout";
import { Layout } from "antd";
import NavigationBar from "../component/NavigationBar";
import { Button } from '../component/Button';

var docs;
export default function PostSection() {
  const [button, setButton] = useState(true);

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
  const [value, setValue] = React.useState(1);
    const [filterValue, setFilter] = React.useState(1);
    const [keyword, setKey] = React.useState("");
    const onChange = e => {
        setValue(e.target.value);
        setFilter(e.target.value);
      };
    const search = () => {
        setKey(document.getElementById("input").value);
        document.getElementById("input").value = "";
      }

  // useEffect(() => {
  //   projectFirestore
  //     .collection("posts")
  //     .get()
  //     .then((snapshot) => {
  //       setDocs(snapshot.docs);
  //     })
  // }, []);
  //({docs} = useFirestore("posts", filterValue, keyword));
  ({docs} = useFirestore("posts", filterValue, keyword));

  return (
    <Layout>
      <NavigationBar/>
      <Content >
        <div className="container">
        <div className='search-container'>
            <input type="text" id='input' placeholder="Search for a post..."></input>
            <Button
                buttonStyle='btn--black' buttonSize="btn--large" onClick={search}>Search
            </Button>
        </div>
        <div className="filter-options" style={{display: "flex", justifyContent:"center"}}>
          <Radio.Group onChange={onChange} value={value}>
              <Radio value={1}>Title</Radio>
              <Radio value={2}>Author</Radio>
          </Radio.Group>
        </div>

          <div className="post-container">
            {docs &&
              docs.map((doc) => (
                <PostItem
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
          <PostMoreButton />
        </div>
      </Content>
      <FooterComponent/>
    </Layout>
    
  );
}