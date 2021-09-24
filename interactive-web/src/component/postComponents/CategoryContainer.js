import React from "react";
import CategoryIcon from "./CategoryIcon";
import "./CategoryContainer.css"

function CategoryContainer(props) {
  const categoryList = props.categoryList
  return (
    <div className="category--container">
        {categoryList && categoryList.map((category) => (
            <CategoryIcon categoryName={category} callBackFunc={props.callBackFunc}/>
        ))}
    </div>
  );
}

export default CategoryContainer;