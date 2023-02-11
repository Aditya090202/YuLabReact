import React from 'react'
import backgroundStyles from '../styles/Background.module.css';

function Backgorund({ children }) {
  return (
    <div className={backgroundStyles.background}>
      {children}
    </div>
  )
}

export default Backgorund