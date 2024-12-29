import React from 'react';
import { RouteObject } from 'react-router';


import NotFound from '../layout/NotFound';
// import LoadingPage from '../layout/LoadingPage';

const Home = React.lazy(() => import('../../features/home/Home'));
const FeedAudit = React.lazy(() => import('../../features/feed-audit/FeedAudit'));
const JobsProcessor = React.lazy(() => import('../../features/jobs-processor/JobsProcessor'));
const Chats = React.lazy(() => import('../../features/chats/Chats'));
const ChatDetails = React.lazy(() => import('../../features/chats/ChatDetails'));
const ChatHelp = React.lazy(() => import('../../features/chats/ChatHelp'));

// import Home from '../../features/home/Home';
// import FeedAudit from '../../features/feed-audit/FeedAudit';
// import JobsProcessor from '../../features/jobs-processor/JobsProcessor';
// import Chats from '../../features/chats/Chats';
// import ChatDetails from '../../features/chats/ChatDetails';
// import ChatHelp from '../../features/chats/ChatHelp';



export type TSkeletonRoute = RouteObject & {
	// index?: boolean;
	// path?: string;
	// component?: () => React.ReactNode | null;
	label?: string | null;
	children?: TSkeletonRoute[] | null;
}


const routes: TSkeletonRoute[] = [
	// <Route path="*" element={<NoMatch />} />
	{
		path: '/*',
		label: 'Not Found',
		// Component: Home,
		element: <NotFound />,
	},
	{
		index: true,
		label: 'Home',
		// Component: Home,
		element: <Home />,
	},
	{
		path: '/feed-audit',
		id: 'feed-audit',
		label: 'Feed Audit',
		element: <FeedAudit />,
	},
	{
		path: '/jobs-processor',
		label: 'Jobs Processor',
		element: <JobsProcessor />,
	},
	{
		path: '/chats',
		label: 'Chats',
		element: <Chats />,
		children: [
			{
				path: 'help',
				label: 'Chat Help',
				element: <ChatHelp />,
			},
			{
				path: ':chatId',
				label: 'Chat Details',
				element: <ChatDetails />,
			}
		]
	}
];


export default routes;