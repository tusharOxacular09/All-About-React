import React from 'react';
import { useContext } from 'react';
import { userContext } from '../context/context';

const HeroSection = () => {
  const userData = useContext(userContext);
  return (
    <div className='p-10 bg-blue-600 text-white hover:scale-105 duration-300'>
        Email id is <span className='hover:text-gray-300 cursor-pointer'>{userData.email}</span>
    </div>
  )
}

export default HeroSection