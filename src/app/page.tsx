'use client'

import React from 'react';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { useRouter } from 'next/navigation';

interface PageProps {

}

const Page: React.FC<PageProps> = ({ }) => {

  const navigate = useRouter()

  const handleClick = () => {
    navigate.push('/chat-application')
  }

  return (
    <button className='btn btn-warning m-20' onClick={handleClick}>Go to application <ArrowRightAltIcon /> </button>
  );
};

export default Page;