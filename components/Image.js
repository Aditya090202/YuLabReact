import React, { Component } from 'react';
import imageStyles from '../styles/ImageIn.module.css';


class ImageIn extends Component {
  render() {
    return (
    <div className='image'>
      <img src={"/FrontPhoto.svg"} alt="Main Image" className={imageStyles.imageBig} />
    </div>
    );
    
  }
}

export default ImageIn;