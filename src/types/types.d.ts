
declare global {
    interface Conversation {
        _id: number;
        participants: {
            sender: {
                _id: number;
                fullname: string;
                email: string;
            };
            receiver: {
                _id: number;
                fullname: string;
                email: string;
            }
        }
        messages: {
            msg_id: number;
            sender_id: number;
            content: string;
            timestamp: string;
        }[]
    }
}

export { }