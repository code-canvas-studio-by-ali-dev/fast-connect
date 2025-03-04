import HeaderChat from '@/components/header/header.chat';
import ChatScreenChat from '@/components/screens/chatScreen.chat';
import React from 'react';

interface pageProps {
    params: {
        conversation: string
    }
}

const page: React.FC<pageProps> = async ({ params }) => {

    const { conversation } = params

    return (
        <>
            <HeaderChat conversation={conversation} />
            <ChatScreenChat conversation={conversation} />
        </>
    );
};

export default page;