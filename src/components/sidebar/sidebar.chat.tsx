import React from 'react';
import ConversationList from '../ui/conversation-list';
import BrandingChat from '../branding/branding.chat';

interface SidebarProps {
    className?: string;
}

const SidebarChat: React.FC<SidebarProps> = ({ className }) => {
    return (
        <nav className={`flex flex-col space-y-2 h-screen ${className}`}>
            <BrandingChat />
            <div className='flex flex-col bg-base-200 rounded-md py-3 w-full h-full space-y-4 overflow-hidden'>
                <h3 role='tablist' className='tabs tabs-xs p-2'>
                    <span role='tab' className='tab tab-active'>Conversations</span>
                    <span role='tab' className='tab'>Groups</span>
                </h3>
                <ConversationList />
            </div>
        </nav>
    );
};

export default SidebarChat;