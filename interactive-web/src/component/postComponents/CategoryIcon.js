import React from "react";
import { Button } from "../Button";

function CategoryIcon(props) {
  return (
    <div className="create_post-container">
      <Button buttonStyle="btn--category" buttonSize="btn--medium" onClick={() => {
        props.callBackFunc(props.categoryName)
      }}>
        {props.categoryName}
      </Button>
    </div>
  );
}

export default CategoryIcon;