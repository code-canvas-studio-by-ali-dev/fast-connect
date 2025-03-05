import FooterChat from '@/components/branding/footer.chat';
import SidebarChat from '@/components/sidebar/sidebar.chat';
import React from 'react';

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <section className='flex flex-col h-screen w-screen p-3 pb-0 gap-2'>
            <div className='flex-1 w-full overflow-hidden gap-2 lg:flex'>
                <aside className='hidden lg:block w-1/4 min-h-0'>
                    <SidebarChat />
                </aside>
                <main>
                    {children}
                </main>
            </div>
            <FooterChat />
        </section>
    );
};

export default Layout;
