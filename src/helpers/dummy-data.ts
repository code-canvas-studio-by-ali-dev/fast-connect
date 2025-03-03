
const conversation_dummy_data: Conversation[] = [
    {
        _id: 1001,
        participants: {
            sender: {
                _id: 101,
                fullname: "Alice Johnson",
                email: "alice@example.com"
            },
            receiver: {
                _id: 102,
                fullname: "Bob Carter",
                email: "bob@example.com"
            }
        },
        messages: [
            {
                msg_id: 1,
                sender_id: 101,
                content: "Hey Bob, how’s it going?",
                timestamp: "2025-03-01T10:00:00Z"
            },
            {
                msg_id: 2,
                sender_id: 102,
                content: "Hi Alice! Doing great, you?",
                timestamp: "2025-03-01T10:01:00Z"
            }
        ]
    },
    {
        _id: 1002,
        participants: {
            sender: {
                _id: 103,
                fullname: "Charlie Brown",
                email: "charlie@example.com"
            },
            receiver: {
                _id: 104,
                fullname: "Diana Lee",
                email: "diana@example.com"
            }
        },
        messages: [
            {
                msg_id: 1,
                sender_id: 103,
                content: "Diana, got the report ready?",
                timestamp: "2025-03-01T11:00:00Z"
            },
            {
                msg_id: 2,
                sender_id: 104,
                content: "Almost done, Charlie!",
                timestamp: "2025-03-01T11:02:00Z"
            }
        ]
    },
    {
        _id: 1003,
        participants: {
            sender: {
                _id: 105,
                fullname: "Eve Parker",
                email: "eve@example.com"
            },
            receiver: {
                _id: 106,
                fullname: "Frank Davis",
                email: "frank@example.com"
            }
        },
        messages: [
            {
                msg_id: 1,
                sender_id: 105,
                content: "Frank, movie tonight?",
                timestamp: "2025-03-01T12:00:00Z"
            },
            {
                msg_id: 2,
                sender_id: 106,
                content: "Sure, Eve! 7 PM?",
                timestamp: "2025-03-01T12:01:00Z"
            }
        ]
    },
    {
        _id: 1004,
        participants: {
            sender: {
                _id: 107,
                fullname: "Grace Kim",
                email: "grace@example.com"
            },
            receiver: {
                _id: 108,
                fullname: "Henry Lopez",
                email: "henry@example.com"
            }
        },
        messages: [
            {
                msg_id: 1,
                sender_id: 107,
                content: "Henry, did you see the game?",
                timestamp: "2025-03-01T13:00:00Z"
            },
            {
                msg_id: 2,
                sender_id: 108,
                content: "Yeah, Grace, what a finish!",
                timestamp: "2025-03-01T13:03:00Z"
            }
        ]
    },
    {
        _id: 1005,
        participants: {
            sender: {
                _id: 109,
                fullname: "Isabella Moore",
                email: "isabella@example.com"
            },
            receiver: {
                _id: 110,
                fullname: "James Taylor",
                email: "james@example.com"
            }
        },
        messages: [
            {
                msg_id: 1,
                sender_id: 109,
                content: "James, lunch plans?",
                timestamp: "2025-03-01T14:00:00Z"
            },
            {
                msg_id: 2,
                sender_id: 110,
                content: "Let’s do tacos, Isabella!",
                timestamp: "2025-03-01T14:02:00Z"
            }
        ]
    },
    {
        _id: 1006,
        participants: {
            sender: {
                _id: 111,
                fullname: "Kelly White",
                email: "kelly@example.com"
            },
            receiver: {
                _id: 112,
                fullname: "Liam Green",
                email: "liam@example.com"
            }
        },
        messages: [
            {
                msg_id: 1,
                sender_id: 111,
                content: "Liam, project update?",
                timestamp: "2025-03-01T15:00:00Z"
            },
            {
                msg_id: 2,
                sender_id: 112,
                content: "On track, Kelly!",
                timestamp: "2025-03-01T15:01:00Z"
            }
        ]
    },
    {
        _id: 1007,
        participants: {
            sender: {
                _id: 113,
                fullname: "Mia Adams",
                email: "mia@example.com"
            },
            receiver: {
                _id: 114,
                fullname: "Noah Clark",
                email: "noah@example.com"
            }
        },
        messages: [
            {
                msg_id: 1,
                sender_id: 113,
                content: "Noah, party invite sent!",
                timestamp: "2025-03-01T16:00:00Z"
            },
            {
                msg_id: 2,
                sender_id: 114,
                content: "Thanks, Mia, I’ll be there!",
                timestamp: "2025-03-01T16:02:00Z"
            }
        ]
    },
    {
        _id: 1008,
        participants: {
            sender: {
                _id: 115,
                fullname: "Olivia Scott",
                email: "olivia@example.com"
            },
            receiver: {
                _id: 116,
                fullname: "Peter Evans",
                email: "peter@example.com"
            }
        },
        messages: [
            {
                msg_id: 1,
                sender_id: 115,
                content: "Peter, meeting at 3?",
                timestamp: "2025-03-01T17:00:00Z"
            },
            {
                msg_id: 2,
                sender_id: 116,
                content: "Yes, Olivia, see you there!",
                timestamp: "2025-03-01T17:01:00Z"
            }
        ]
    },
    {
        _id: 1009,
        participants: {
            sender: {
                _id: 117,
                fullname: "Quinn Harris",
                email: "quinn@example.com"
            },
            receiver: {
                _id: 118,
                fullname: "Rachel Young",
                email: "rachel@example.com"
            }
        },
        messages: [
            {
                msg_id: 1,
                sender_id: 117,
                content: "Rachel, new book rec?",
                timestamp: "2025-03-01T18:00:00Z"
            },
            {
                msg_id: 2,
                sender_id: 118,
                content: "Try ‘The Last Light,’ Quinn!",
                timestamp: "2025-03-01T18:03:00Z"
            }
        ]
    },
    {
        _id: 1010,
        participants: {
            sender: {
                _id: 119,
                fullname: "Sam Wilson",
                email: "sam@example.com"
            },
            receiver: {
                _id: 120,
                fullname: "Tara Brooks",
                email: "tara@example.com"
            }
        },
        messages: [
            {
                msg_id: 1,
                sender_id: 119,
                content: "Tara, gym tomorrow?",
                timestamp: "2025-03-01T19:00:00Z"
            },
            {
                msg_id: 2,
                sender_id: 120,
                content: "Sure, Sam, 6 AM!",
                timestamp: "2025-03-01T19:01:00Z"
            }
        ]
    }
]

export default conversation_dummy_data;