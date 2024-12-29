import React from 'react';
import { NavLink, Outlet, useMatches } from "react-router";


interface IChat {
	chatId: number;
	recipient: string;
	hasNewMessages: boolean;
}


function Chats(): React.ReactNode {

	const [chats, setChats] = React.useState<IChat[]>([
		{ chatId: 1, recipient: 'Constantin', hasNewMessages: true },
		{ chatId: 2, recipient: 'Nero', hasNewMessages: false }
	]);

	return (
		<>
			<div className='chats__list'>
				{chats.map(chat => (
					<div key={chat.chatId}>
						<div>
							<NavLink to={`/chats/${chat.chatId}`}>
								{chat.recipient}
							</NavLink>
						</div>
					</div>
				))}
			</div>

			<NavLink to={`/chats/help`}>
				Help
			</NavLink>

			<Outlet />
		</>
	)
}

export default Chats;
