import Image from 'next/image';
import React from 'react';

interface BrandingChatProps {
    className?: string;
}

const BrandingChat: React.FC<BrandingChatProps> = ({ className }) => {
    return (
        <div className={`flex items-start justify-between bg-base-200 w-full rounded-md p-4 ${className}`}>
            <h1 className='flex items-center gap-2 text-lg'>
                <Image
                    src='/LOGO.png'
                    alt='Logo'
                    width={24}
                    height={24}
                />
                Fast-Connect
            </h1>
            <div className='text-[10px] '>v 1.0.0</div>
        </div>
    );
};

export default BrandingChat;