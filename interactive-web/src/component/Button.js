/* eslint-disable react/prop-types */
import React from 'react'
import './Button.css'

const STYLES = ['btn--primary', 'btn--outline', 'btn--round', 'btn--black', 'btn--donate', 'btn--circle', 'btn--category']

const SIZES = ['btn--medium', 'btn--large', 'btn--huge']

export const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
  path

}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0]

  return (
    <a href={path} className='btn-mobile' style={{ textDecoration: 'none' }}>
      <button
        className={`btn ${checkButtonStyle} ${checkButtonSize}`}
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
    </a>
  )
}
