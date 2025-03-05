import HeaderChat from '@/components/header/header.chat';
import ChatScreenChat from '@/components/screens/chatScreen.chat';
import { type NextPage } from 'next';

// Define the params as potentially a Promise
interface PageProps {
    params: Promise<{ conversation: string }>; // Changed to Promise
    searchParams: { [key: string]: string | string[] | undefined };
}

// Use NextPage with async function
const Page: NextPage<PageProps> = async ({ params }) => {
    // Await the params since it's a Promise
    const { conversation } = await params;

    return (
        <>
            <HeaderChat conversation={conversation} />
            <ChatScreenChat conversation={conversation} />
        </>
    );
};

export default Page;