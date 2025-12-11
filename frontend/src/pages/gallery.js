import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Gallery = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/gallery/')
      .then(res => setImages(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h1>Gallery</h1>
      <div style={{ display: 'flex', gap: '10px' }}>
        {images.map(img => (
          <img key={img.id} src={img.url} alt="Gallery" width={200} />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
