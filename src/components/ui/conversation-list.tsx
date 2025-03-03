import React from 'react';

interface ConversationListProps {

}

const ConversationList: React.FC<ConversationListProps> = ({ }) => {
    return (
        <ul className='text-sm space-y-2 flex-1 min-h-0 overflow-y-auto scrollbar-thin scrollbar-thumb-rounded-full scrollbar-thumb-base-100 hover:scrollbar-thumb-base-300 scrollbar-track-transparent p-3'>
            {Array.from({ length: 10 }).map((_, index) => (
                <li className='list-wrap' key={index}>
                    <div className='list-wrap-child'>
                        <div className='border-2 size-12 rounded-full'></div>
                        <div className='list-wrap-child-two'>
                            <div>
                                <h5 className='font-bold'>Lorem, ipsum.</h5>
                                <p className='text-[10px]'>Lorem, ipsum dolor sit...</p>
                            </div>
                            <time className='text-[9px]'>12:00 PM</time>
                        </div>
                    </div>
                </li>
            ))}
        </ul>
    );
};

export default ConversationList;