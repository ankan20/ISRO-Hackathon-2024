import React, { useState } from 'react';
import Navbar from './Navbar';
import ImageUpload from './ImageUpload';
import ImagePreview from './ImagePreview';
import UserFeedback from './UserFeedback';

const Home = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [images, setImages] = useState({
    objectDetection: null,
    masking: null,
    segmentation: null,
  });

  const handleImageUpload = (file) => {
    setSelectedImage(URL.createObjectURL(file));
  };

  const handleExtractFeatures = async () => {
    if (selectedImage) {
      // Simulate backend response with images from the public folder
      setImages({
        objectDetection: '/object_detection.jpg', 
        masking: '/mask_detection.jpg',                   
        segmentation: '/segmentation.jpg'         
       });

      // Optional: make an actual fetch call to your backend
      // const formData = new FormData();
      // formData.append('file', selectedImage);
      // try {
      //   const response = await fetch('/api/extract-features', {
      //     method: 'POST',
      //     body: formData,
      //   });
      //   const data = await response.json();
      //   setImages(data); // Adjust according to your backend response
      // } catch (error) {
      //   console.error('Error extracting features:', error);
      // }
    }
  };

  const handleSaveImage = (imageUrl, filename) => {
    const link = document.createElement('a');
    link.href = imageUrl;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className='h-screen w-screen m-0 bg-cover bg-no-repeat' style={{ backgroundImage: 'url("../../public/isro_img.jpg")' }}>
      <Navbar />
      <div className='flex flex-row justify-between p-8 pt-20 h-full'>
        <div className='w-1/4 flex flex-col justify-between h-full'>
          <ImageUpload 
            onImageUpload={handleImageUpload} 
            onExtractFeatures={handleExtractFeatures} 
          />
          <UserFeedback />
        </div>
        <div className='w-3/4 h-full'>
          <ImagePreview images={images} onSave={handleSaveImage} />
        </div>
      </div>
    </div>
  );
}

export default Home;



