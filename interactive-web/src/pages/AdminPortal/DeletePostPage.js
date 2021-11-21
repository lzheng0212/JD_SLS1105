import React, { useState, useEffect } from "react";
import "../../component/Posts.css";
import { Row, Col } from "antd";
import PostList from "../../component/ListViews/PostList";

// Resources: https://github.com/zenoamaro/react-quill
// License is also in the link above for react-quill

function DeletePostPage() {

  return (
    <Row justify="center"> 
      <Col xs={22} sm={20} md={16} lg={15} xl={15} xxl={15}>
        <PostList admin={true}/>
      </Col>
    </Row>
    
  );
}

export default DeletePostPage;


{/* <div className="container" style={{marginTop: "5%"}}>
<div className="post-container" style={{marginLeft: "10%"}}>
  {docs &&
    docs.map((doc) => (
      <div
        style={{
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          alignSelf: "center",
        }}
      >
        <PostItem
          src={doc.coverImage}
          title={doc.title}
          author={doc.author}
          description={doc.content}
          date={doc.createdAt}
          label={doc.postCategory}
          path="/specificPost"
        />
        <Button
          buttonStyle="btn--round"
          buttonSize="btn--small"
          onClick={() => {
            const res = projectFirestore
              .collection("posts")
              .doc(doc.PostId)
              .delete();
          }}
        >
          DELETE
        </Button>
        <Button buttonStyle="btn--primary" buttonSize="btn--small">
          <Link
            style={{ color: "white", textDecoration: "none" }}
            to={{
              pathname: "./create",
              state: {
                update: true,
                postID: doc.PostId,
                src: doc.coverImage,
                title: doc.title,
                content: doc.content,
                label: doc.postCategory,
                author: doc.author,
                categories: doc.categories,
                coverImageURL: doc.coverImage
              },
            }}
          >
            EDIT
          </Link>
        </Button>
      </div>
    ))}
</div>
<PostMoreButton />
</div> */}
