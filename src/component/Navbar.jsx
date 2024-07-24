import React from 'react';

const Navbar = () => {
  return (
    <nav className='fixed top-0 left-0 w-full bg-white bg-opacity-5 backdrop-blur-lg flex items-center p-4'>
      <div className='flex items-center'>
      <video src="/isro_logo_video.mp4" className='h-10 w-auto mr-4' autoPlay loop muted />
        <span className='text-white text-lg font-semibold'>ISRO-Hackathon</span>
      </div>
      <div className='ml-auto flex space-x-4'>
        <a href="#about" className='text-white text-lg hover:underline'>About Us</a>
        <a href="#contact" className='text-white text-lg hover:underline'>Contact</a>
      </div>
    </nav>
  );
}

export default Navbar;
