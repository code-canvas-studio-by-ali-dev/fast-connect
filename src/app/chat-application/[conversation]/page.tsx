import HeaderChat from '@/components/header/header.chat';
import ChatScreenChat from '@/components/screens/chatScreen.chat';
import { type NextPage } from 'next';

// Define the props type properly
interface PageProps {
    params: {
        conversation: string;
    };
    searchParams: { [key: string]: string | string[] | undefined };
}

const Page: NextPage<PageProps> = ({ params }) => {
    const { conversation } = params;

    return (
        <>
            <HeaderChat conversation={conversation} />
            <ChatScreenChat conversation={conversation} />
        </>
    );
};

export default Page;