/* eslint-disable react/prop-types */
import React from 'react'
import './CategoryIcon.css'

function CategoryIcon (props) {
  return (
    <div className="create_post-container">
      <li className="categoryIcon" style={{ display: 'flex' }}>
        <span>{props.categoryName}</span><div onClick={() => {
          props.callBackFunc(props.categoryName)
        }}>&nbsp;{props.icon}</div>
      </li>
    </div>
  )
}

export default CategoryIcon
