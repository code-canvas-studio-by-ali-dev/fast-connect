'use client'

import React from 'react';
import conversation_dummy_data from '../../helpers/dummy-data';
import { useRouter } from 'next/navigation';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface ConversationListProps {

}

const ConversationList: React.FC<ConversationListProps> = ({ }) => {
    const navigate = useRouter()

    const handleClick = (id: number) => {
        navigate.push(`/chat-application/${id}`)
    }
    
    return (
        <ul className='text-sm space-y-2 flex-1 min-h-0 overflow-y-auto scrollbar-thin scrollbar-thumb-rounded-full scrollbar-thumb-base-100 hover:scrollbar-thumb-base-300 scrollbar-track-transparent p-3'>
            {conversation_dummy_data.map((conversation: Conversation) => (
                <li className='list-wrap' key={conversation._id} onClick={() => handleClick(conversation._id)}>
                    <div className='list-wrap-child'>
                        <div className='border-2 size-12 rounded-full'></div>
                        <div className='list-wrap-child-two'>
                            <div>
                                <h5 className='font-bold'>{conversation.participants.sender.fullname}</h5>
                                <p className='text-[10px]'>{conversation.messages[conversation.messages.length - 1].content}</p>
                            </div>
                            <time className='text-[9px]'>{conversation.messages[conversation.messages.length - 1].timestamp}</time>
                        </div>
                    </div>
                </li>
            ))}
        </ul>
    );
};

export default ConversationList;