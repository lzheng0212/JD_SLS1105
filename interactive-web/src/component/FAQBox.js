/* eslint-disable react/prop-types */
import React from 'react'
import './FAQBox.css'

function FAQBox (props) {
  return (
        <div className="FAQContainer">
            <div className="FAQQuestionContainer">
                <p>Q.</p>
                <span>{props.faqQuestion}</span>
            </div>
            <div className="FAQAnswerContainer">
                <p>A.</p>
                <span>{props.faqAnswer}</span>
            </div>
        </div >
  )
}

export default FAQBox
