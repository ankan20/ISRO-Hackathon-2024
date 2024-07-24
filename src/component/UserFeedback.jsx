import React, { useState } from 'react';

const UserFeedback = () => {
  const [feedback, setFeedback] = useState('');

  const handleFeedbackChange = (event) => {
    setFeedback(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log('User feedback:', feedback);
  };

  return (
    <div className='flex flex-col items-center p-4 bg-white bg-opacity-50 rounded-lg shadow-md h-full mt-4'>
      <h2 className='text-xl font-semibold mb-4'>User Feedback</h2>
      <form onSubmit={handleSubmit} className='w-full'>
        <textarea
          value={feedback}
          onChange={handleFeedbackChange}
          className='w-full p-2 border rounded-lg mb-4'
          rows='4'
          placeholder='Enter your feedback here...'
        />
        <button type='submit' className='bg-purple-500 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition duration-300'>
          Submit Feedback
        </button>
      </form>
    </div>
  );
};

export default UserFeedback;
