import React from "react";
import CategoryIcon from "./CategoryIcon";
import "./CategoryContainer.css"
import { Space } from 'antd';

function CategoryContainer(props) {
  const categoryList = props.categoryList
  return (
    <Space wrap>
       {categoryList && categoryList.map((category) => (
        <CategoryIcon icon={props.icon} categoryName={category} callBackFunc={props.callBackFunc} />
      ))}
    </Space>
  );
}

export default CategoryContainer;
