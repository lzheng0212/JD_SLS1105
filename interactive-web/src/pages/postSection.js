import React, { useState, useEffect } from "react";
import "./postStyle.css";
import Footer from "../component/Footer";
import PostItem from "../component/PostItem";
import "../component/Posts.css";
import useFirestore from "../hooks/useFirestore";
import PostSearchContainer from "../component/postComponents/postSearchContainer";
import PostMoreButton from "../component/postComponents/PostMoreButton";

export default function PostSection() {
  const [button, setButton] = useState(true);
  //const [docs, setDocs] = useState();
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
              <PostItem
                src={doc.coverImage}
                title={doc.title}
                description={doc.content}
                date={doc.createdAt}
                label={doc.postCategory}
                path="/specificPost"
              />
            ))}
        </div>
        <PostMoreButton />
        <Footer />
      </div>
    </>
  );
}
