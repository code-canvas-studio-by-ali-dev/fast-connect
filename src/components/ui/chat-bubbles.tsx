import conversation_dummy_data from '@/helpers/dummy-data';
import React from 'react';

interface ChatBubblesProps {
    message: Messages
    conversation: string
}

const ChatBubbles: React.FC<ChatBubblesProps> = ({ message, conversation }) => {
    const conversationDetail = conversation_dummy_data.find(data => data._id == conversation);

    return (
        <div className={`chat ${message.sender_id == conversationDetail?.participants.receiver._id ? 'chat-end' : 'chat-start'}`}>
            <div className="chat-image avatar">
                <div className='border-2 size-10 rounded-full'></div>
            </div>
            <div className="chat-header">
                {message.sender_id == conversationDetail?.participants.receiver._id ? 'You' : conversationDetail?.participants?.sender?.fullname}
                <time className="text-xs opacity-50">12:45</time>
            </div>
            <div className="chat-bubble bg-base-200 text-sm">{message.content}</div>
            <div className="chat-footer opacity-50">Delivered</div>
        </div>
    );
};

export default ChatBubbles;