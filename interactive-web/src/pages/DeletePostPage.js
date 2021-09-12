import React, { useState, useEffect } from "react";
import "./postStyle.css";
import Footer from "../component/Footer";
import PostItem from "../component/PostItem";
import "../component/Posts.css";
import useFirestore from "../hooks/useFirestore";
import PostSearchContainer from "../component/postComponents/postSearchContainer";
import PostMoreButton from "../component/postComponents/PostMoreButton";
import { Button } from "../component/Button";
import { projectFirestore } from "../firebase/config";

// Resources: https://github.com/zenoamaro/react-quill
// License is also in the link above for react-quill

function DeletePostPage() {
  const [button, setButton] = useState(true);

  // useEffect(() => {
  //     projectFirestore.collection("posts").get().then((snapshot) => {
  //         setDocs(snapshot.docs)
  //     })
  // }, [])
  const { docs } = useFirestore("posts");

  return (
    <>
      <div className="container">
        <PostSearchContainer />
        <div className="post-container">
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
                  content={doc.content}
                  date={doc.createdAt}
                  label={doc.postCategory}
                  author={doc.author}
                  path="/specificPost"
                />
                <Button
                  buttonStyle="btn--round"
                  buttonSize="btn--small"
                  onClick={() => {
                    console.log(doc);
                    const res = projectFirestore
                      .collection("posts")
                      .doc(doc.PostId)
                      .delete();
                  }}
                >
                  DELETE
                </Button>
                <Button
                  buttonStyle="btn--primary"
                  buttonSize="btn--small"
                  onClick={() => {
                    console.log(doc);
                    const res = projectFirestore
                      .collection("posts")
                      .doc(doc.PostId)
                      .delete();
                  }}
                >
                  EDIT
                </Button>
              </div>
            ))}
        </div>
        <PostMoreButton />
        <Footer />
      </div>
    </>
  );
}

export default DeletePostPage;
