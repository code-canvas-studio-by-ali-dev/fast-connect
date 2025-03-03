import Image from 'next/image';
import React from 'react';
import ConversationList from '../ui/conversation-list';

interface SidebarProps {

}

const SidebarChat: React.FC<SidebarProps> = ({ }) => {
    return (
        <>
            <div className='flex items-start justify-between bg-base-200 w-full rounded-md p-4'>
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
            <div className='flex flex-col bg-base-200 rounded-md py-3 w-full space-y-4 overflow-hidden'>
                <h3 role='tablist' className='tabs tabs-xs p-2'>
                    <span role='tab' className='tab tab-active'>Conversations</span>
                    <span role='tab' className='tab'>Groups</span>
                </h3>
                <ConversationList />
            </div>
        </>
    );
};

export default SidebarChat;