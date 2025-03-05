import React from 'react';

interface FooterChatProps {
    className?: string;
}

const FooterChat: React.FC<FooterChatProps> = ({ className }) => {
    return (
        <footer className={`text-[10px] text-center bg-base-200 w-full py-1 rounded-t-md ${className}`}>
            &copy; Copyright 2024, Ali Sulman
        </footer>
    );
};

export default FooterChat;