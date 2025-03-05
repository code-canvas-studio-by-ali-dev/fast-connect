import React from 'react';
import SendIcon from '@mui/icons-material/Send';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface SendChatProps {

}

const SendChat: React.FC<SendChatProps> = ({ }) => {
    return (
        <label className="input input-sm rounded w-full focus-within:outline-none focus-within:outline-offset-0 focus-within:border-success caret-none" >
            <input type="text" />
            <SendIcon className='cursor-pointer hover:text-success' />
        </label>
    );
};

export default SendChat;