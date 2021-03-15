import React from 'react'

const FrameImage = ({image, alt}) => {
  return (
    <div className="FrameImage">
      <img src={image} alt={alt} />
      <div className="FrameImage-line"></div>
    </div>
  );
}

export default FrameImage
