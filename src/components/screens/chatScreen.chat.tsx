'use client'

import conversation_dummy_data from '@/helpers/dummy-data';
import React, { useEffect, useRef } from 'react';
import ChatBubbles from '../ui/chat-bubbles';

interface ChatScreenChatProps {
    conversation: string
}

const ChatScreenChat: React.FC<ChatScreenChatProps> = ({ conversation }) => {
    const messages = conversation_dummy_data.find(data => data._id == conversation)?.messages;

    const chatEndRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);
    return (
        <div className='flex flex-col-reverse grow flex-1 min-h-0 rounded-md overflow-y-auto bg-base-300 p-3'>
            {messages?.map((message: Messages) => (
                <ChatBubbles key={message.msg_id} message={message} conversation={conversation} />
            ))}
            <div ref={chatEndRef} />
        </div>
    );
};

export default ChatScreenChat;