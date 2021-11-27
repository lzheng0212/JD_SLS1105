/* eslint-disable react/prop-types */
import React from 'react'
import CategoryIcon from './CategoryIcon'
import './CategoryContainer.css'
import { Space } from 'antd'

function CategoryContainer (props) {
  const categoryList = props.categoryList
  return (
    <Space wrap>
       {categoryList && categoryList.map((category) => (
        <CategoryIcon key={category} icon={props.icon} categoryName={category} callBackFunc={props.callBackFunc} />
       ))}
    </Space>
  )
}

export default CategoryContainer
