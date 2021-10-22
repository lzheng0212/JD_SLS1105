import React, { useState, useEffect } from "react";
import { Col, Radio, Row } from 'antd';
import "./postStyle.css";
import FooterComponent from "../component/FooterComponent";
import "../component/Posts.css";
import useFirestore from "../hooks/useFirestore";
import { Content } from "antd/lib/layout/layout";
import { Layout, Input, Space } from "antd";
import NavigationBar from "../component/NavigationBar";
import PostList from "../component/PostList";

var docs;

export default function PostSection() {

  const [button, setButton] = useState(true);
  const { Search } = Input;

  // const showButton = () => {
  //   if (window.innerWidth <= 960) {
  //     setButton(false);
  //   } else {
  //     setButton(true);
  //   }
  // };

  // useEffect(() => {
  //   showButton();
  // }, []);

  // const [value, setValue] = React.useState(1);
  // const [filterValue, setFilter] = React.useState(1);
  // const [keyword, setKey] = React.useState("");
  // const onChange = e => {
  //     setValue(e.target.value);
  //     setFilter(e.target.value);
  //   };
  // const search = () => {
  //     setKey(document.getElementById("input").value);
  //     document.getElementById("input").value = "";
  //   }

  // ({docs} = useFirestore("posts", filterValue, keyword));

  return (
    <Layout>
      <NavigationBar/>
      <Content style={{padding: '24px', paddingBottom: '0px'}}>
          <Row justify="center"> 
            <Col xs={22} sm={20} md={16} lg={15} xl={15} xxl={15}>
              <PostList/>
            </Col>
          </Row>
      </Content>
      <FooterComponent/>
    </Layout>
    
  );
}


 {/* <div className="container"> */}
        {/* <div className='search-container'>
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
        </div> */}

          {/* <div className="post-container">
            {docs &&
              docs.map((doc) => (
                <PostItem
                  src={doc.coverImage}
                  title={doc.title}
                  author={doc.author}
                  description={doc.content}
                  date={doc.createdAt}
                  label={doc.postCategory}
                  categories = {doc.categories}
                  path="/specificPost"
                />
              ))
              
            }
          </div> */}