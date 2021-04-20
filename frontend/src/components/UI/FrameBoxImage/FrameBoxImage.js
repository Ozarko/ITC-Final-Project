import React from 'react'

const FrameBoxImage = ({ frameBoxImage, frameBoxAlt }) => {
  return (
    <div className="FrameBoxImage">
      <div className="FrameBoxImage-line cursorHoverEffect"></div>
      <div className="FrameBoxImage-image">
        <img className="coverImage" src={frameBoxImage} alt={frameBoxAlt} />
      </div>
    </div>
  );
};

export default FrameBoxImage
