import React from "react";
import { Button } from "../Button";
import { Link } from "react-router-dom";

function CreatePostButton() {
  return (
    <div className="create_post-container">
      <Button buttonStyle="btn--primary" buttonSize="btn--huge">
        <Link
          style={{ color: "white", textDecoration: "none" }}
          to={{ pathname: "./create", state: { update: false } }}
        >
          Create Post
        </Link>
      </Button>
    </div>
  );
}

export default CreatePostButton;
