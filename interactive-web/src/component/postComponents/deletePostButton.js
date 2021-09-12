import React from "react";
import { Button } from "../Button";

function DeletePostButton() {
  return (
    <div className="delete_post-container">
      <Button buttonStyle="btn--primary" buttonSize="btn--huge" path="./delete">
        Delete Post
      </Button>
    </div>
  );
}

export default DeletePostButton;
