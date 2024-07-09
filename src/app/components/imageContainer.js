import React from 'react';
import styles from '../css/imageContainer.module.css'; // Import CSS for styling (optional)

const ImageContainer = ({ imagePath }) => {
  const containerStyle = {
    backgroundImage: `url(${imagePath})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '100%',
    paddingTop: '56.25%', // 16:9 aspect ratio (adjust as needed)
    position: 'relative',
  };

  return (
    <div className={styles.imageContainer} style={containerStyle}>
      {/* Optional: Add content or overlay elements */}
    </div>
  );
};

export default ImageContainer;