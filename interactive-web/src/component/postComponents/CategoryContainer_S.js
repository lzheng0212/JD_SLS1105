import React from "react";
import CategoryIcon from "./CategoryIcon";
import "./CategoryContainer.css"

function CategoryContainer_S(props) {
    const categoryList = props.categoryList
    return (
      <div className="S_category--container">
        {categoryList && categoryList.map((category) => (
          <CategoryIcon icon={props.icon} categoryName={category} callBackFunc={props.callBackFunc} />
        ))}
      </div>
    );
  }

  export default CategoryContainer_S;