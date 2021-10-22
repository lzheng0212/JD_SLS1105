import React from "react";
import CategoryIcon from "./CategoryIcon";
import "./CategoryContainer.css"

function CategoryContainer(props) {
  const categoryList = props.categoryList
  return (
    <div className={props.background? "S_category--container" : "category--container"}>
      {categoryList && categoryList.map((category) => (
        <CategoryIcon icon={props.icon} categoryName={category} callBackFunc={props.callBackFunc} />
      ))}
    </div>
  );
}



export default CategoryContainer;
