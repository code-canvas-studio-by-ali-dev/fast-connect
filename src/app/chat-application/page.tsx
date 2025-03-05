import SidebarChat from '@/components/sidebar/sidebar.chat';
import React from 'react';

const MobileSidebar = () => {
    return (
            <SidebarChat className='lg:hidden'/>
    )
}

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface PageProps {

}

const Page: React.FC<PageProps> = ({ }) => {
    return (
        <MobileSidebar />
    );
};

export default Page;