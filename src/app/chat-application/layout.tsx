import SidebarChat from '@/components/sidebar/sidebar.chat';
import React from 'react';

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <section className='flex flex-col h-screen w-screen p-3 pb-0 gap-2'>
            <div className='flex flex-1 w-full overflow-hidden gap-2'>
                <aside className='flex flex-col space-y-2 w-1/4 min-h-0'>
                    <SidebarChat />
                </aside>
                <main className='flex flex-col flex-1 min-h-0 overflow-y-auto gap-3'>
                    {children}
                </main>
            </div>
            <footer className='text-[10px] text-center bg-base-200 w-full py-1 rounded-t-md'>
                &copy; Copyright 2024, Ali Sulman
            </footer>
        </section>
    );
};

export default Layout;
