
import React from 'react'
import { useContext } from 'react';
import { StoreContext } from '../contextStore/contextStore';
import { useNavigate } from 'react-router-dom';

function Header() {

  const {setToken} = useContext(StoreContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setToken(null);
    navigate('/login');
  }
  return (
    <div className='flex h-16 z-10 bg-red-300 fixed top-0 w-full flex-row justify-between px-15 items-center'>
      <span className='text-2xl font-bold'>BodyFuel</span> 
      <span className='flex flex-row gap-4'>
        <p >Home</p>
        <p>Page1</p>
        <p>Page2</p>
        <p className='cursor-pointer' onClick={handleLogout}>Logout</p>
      </span>
    </div>
  )
}

export default Header