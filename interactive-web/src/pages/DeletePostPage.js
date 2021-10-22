import React, { useState, useEffect } from "react";
import "./postStyle.css";
import FooterComponent from "../component/FooterComponent";
import PostItem from "../component/PostItem";
import "../component/Posts.css";
import useFirestore from "../hooks/useFirestore";
import PostSearchContainer from "../component/postComponents/postSearchContainer";
import PostMoreButton from "../component/postComponents/PostMoreButton";
import { Button } from "../component/Button";
import { projectFirestore } from "../firebase/config";
import { Link } from "react-router-dom";
import { Layout, Menu } from "antd";

// Resources: https://github.com/zenoamaro/react-quill
// License is also in the link above for react-quill

const { Header, Content, Sider } = Layout;
function DeletePostPage() {

  const { docs } = useFirestore("posts");

  return (

          <div className="container" style={{marginTop: "5%"}}>
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
          </div>

  );
}

export default DeletePostPage;