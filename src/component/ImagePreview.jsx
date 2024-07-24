import React from 'react';

const ImagePreview = ({ images, onSave }) => {
  const { objectDetection, masking, segmentation } = images;

  return (
    <div className='flex flex-col p-4 bg-white bg-opacity-50 rounded-lg shadow-md h-full overflow-auto ml-2'>
      <h2 className='text-xl font-semibold mb-4'>Results</h2>
      <div className='flex flex-row space-x-4 h-full'>
        {/* Object Detection Section */}
        {objectDetection && (
          <div className='flex flex-col w-1/3'>
            <h3 className='text-lg font-semibold mb-2 text-center'>Object Detection using YOLOv8</h3>
            <div className='flex-grow flex items-center justify-center mb-2'>
              <img 
                src={objectDetection} 
                alt='Object Detection' 
                className='max-w-full max-h-60 object-contain'
              />
            </div>
            <button 
              onClick={() => onSave(objectDetection, 'object_detection.png')}
              className='bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition duration-300 text-center'
            >
              Save Object Detection
            </button>
          </div>
        )}
        {/* Masking Section */}
        {masking && (
          <div className='flex flex-col w-1/3'>
            <h3 className='text-lg font-semibold mb-2 text-center'>Mask Detection</h3>
            <div className='flex-grow flex items-center justify-center mb-2'>
              <img 
                src={masking} 
                alt='Masking' 
                className='max-w-full max-h-60 object-contain'
              />
            </div>
            <button 
              onClick={() => onSave(masking, 'masking.png')}
              className='bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition duration-300 text-center'
            >
              Save Mask Detection
            </button>
          </div>
        )}
        {/* Segmentation Section */}
        {segmentation && (
          <div className='flex flex-col w-1/3'>
            <h3 className='text-lg font-semibold mb-2 text-center'>Segmentation</h3>
            <div className='flex-grow flex items-center justify-center mb-2'>
              <img 
                src={segmentation} 
                alt='Segmentation' 
                className='max-w-full max-h-60 object-contain'
              />
            </div>
            <button 
              onClick={() => onSave(segmentation, 'segmentation.png')}
              className='bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition duration-300 text-center'
            >
              Save Segmentation
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ImagePreview;








// Object Detection using YOLOv8



