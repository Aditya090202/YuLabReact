import React from 'react'
import contentStyles from '../styles/Content.module.css';

export default function Content() {
  return (
    <div className={contentStyles.mainDiv}>
      <div className={contentStyles.innerDiv}>
        <h2 className={contentStyles.mainText}>
            What is Yu Lab?
        </h2>
        <p className={contentStyles.description}>
          Placeholder Text 
        </p>
      </div>
    </div>
  )
}
