
declare global {
    interface Messages {
        msg_id: string;
        sender_id: string;
        content: string;
        timestamp: string;
    }

    interface Conversation {
        _id: string;
        participants: {
            sender: {
                _id: string;
                fullname: string;
                email: string;
            };
            receiver: {
                _id: string;
                fullname: string;
                email: string;
            }
        }
        messages: Messages[]
    }
}

export { }