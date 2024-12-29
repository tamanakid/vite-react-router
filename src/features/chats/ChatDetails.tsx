import React from 'react';
import { useParams } from 'react-router';


interface IChatDetails {
	chatId: number;
	recipient: string;
	hasNewMessages: boolean;
	messages: string[];
}


function ChatDetails(): React.ReactNode {

	const params = useParams();

	const [chatDetails, setChatDetails] = React.useState<IChatDetails>({
		chatId: Number(params.chatId),
		recipient: 'Constantin',
		hasNewMessages: true,
		messages: [
			'Hello there, I\'m Constantin, leader of the Roman Army',
			'Please surrender your fortified positions or face the wrath of my military prowess.'
		]
	});

	return (
		<div className='chats__chat-details'>
			<div>{chatDetails.recipient}</div>
			{chatDetails.messages.map(message => (
				<div key={message}>
					<div>{message}</div>
				</div>
			))}
		</div>
	)
}

export default ChatDetails;
