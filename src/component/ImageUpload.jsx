import React, { useState } from 'react';

const ImageUpload = ({ onImageUpload, onExtractFeatures }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
      onImageUpload(file); // Pass the file to parent component
    }
  };

  return (
    <div className='flex flex-col items-center p-4 bg-white bg-opacity-50 rounded-lg shadow-md h-full'>
      <h2 className='text-xl font-semibold mb-4'>Feature Extraction</h2>
      <input type='file' onChange={handleImageChange} className='hidden' id='file-upload'/>
      <label htmlFor='file-upload' className='cursor-pointer bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300 mb-4'>
        Upload File
      </label>
      {selectedImage && (
        <div className='mb-4'>
          <img src={selectedImage} alt='Selected' className='max-h-32 object-contain' />
        </div>
      )}
      <button 
        onClick={onExtractFeatures}
        className='bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition duration-300'
      >
        Extract Features
      </button>
    </div>
  );
};

export default ImageUpload;
