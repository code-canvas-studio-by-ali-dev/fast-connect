import conversation_dummy_data from '@/helpers/dummy-data';
import React from 'react';

interface HeaderChatProps {
    conversation: string;
}

const HeaderChat: React.FC<HeaderChatProps> = ({ conversation }) => {
    const senderName = conversation_dummy_data.find(data => data._id == conversation)?.participants?.sender?.fullname ?? "Unknown Sender";
    
    return (
        <header className='flex items-center bg-base-200 rounded-md p-3'>
            <div className='flex items-center gap-3'>
                <div className='border-2 size-8 rounded-full'></div>
                <div className=''>
                    <h5 className='font-bold text-sm'>{senderName}</h5>
                    <p className='text-[10px]'>Online</p>
                </div>
            </div>
        </header>
    );
};

export default HeaderChat;