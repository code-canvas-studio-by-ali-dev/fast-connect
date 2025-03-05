'use client'

import conversation_dummy_data from '@/helpers/dummy-data';
import React, { useEffect, useRef } from 'react';
import ChatBubbles from '../ui/chat-bubbles';
import SendChat from '../search/SendChat';

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
        <div className="flex flex-col h-full min-h-0 bg-base-300 rounded-md p-3">
            <div className="flex flex-col-reverse grow overflow-y-auto">
                {messages?.map((message: Messages) => (
                    <ChatBubbles
                        key={message.msg_id}
                        message={message}
                        conversation={conversation}
                    />
                ))}
                <div ref={chatEndRef} />
            </div>
            <div className="mt-3">
                <SendChat />
            </div>
        </div>
    );
};

export default ChatScreenChat;