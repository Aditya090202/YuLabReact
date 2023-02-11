import React from 'react'
import textStyles from '../styles/Text.module.css';

function Text() {
  return (
    <>
      <div className={textStyles.mainImage}>
        Put something in here
      </div>
      <div className={textStyles.overlayDiv}>
        hello
      </div>
    </>
    // <div className={textStyles.mainDiv}>
    //    hello
    // </div>
  )
}

export default Text