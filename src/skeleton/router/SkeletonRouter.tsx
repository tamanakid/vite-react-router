import React from 'react';
import { Routes, Route, useRoutes, useLocation, } from 'react-router';

import routes, { TSkeletonRoute } from './routes.tsx';
import LoadingPage from '../layout/LoadingPage';


function SkeletonRouter() {

	const location = useLocation();
	console.log(location);

	// function buildRoute(route: TSkeletonRoute): React.ReactNode {
	// 	return (
	// 		<Route
	// 			index={route.index}
	// 			path={route.path}
	// 			Component={route.component}
	// 			// render={route.component}
	// 		>
	// 			{/* {route.children?.map(subroute => buildRoute(subroute)) ?? []} */}
	// 		</Route>
	// 	)
	// }


	const allRoutes = useRoutes(routes);

	return <>
		<div></div>
		<React.Suspense fallback={<LoadingPage />}>
			{allRoutes}
		</React.Suspense>
	</>;

  // return (
	// 	<Routes>
	// 		{routes.map(route => buildRoute(route))}
	// 		{/* <Route index={true} element={<Home />} />
	// 		<Route path="/feed-audit" element={<FeedAudit />} />
	// 		<Route path="/jobs-processor" element={<JobsProcessor />} /> */}
	// 		{/* <Route path="dashboard" element={<Dashboard />}>
	// 			<Route index element={<RecentActivity />} />
	// 			<Route path="project/:id" element={<Project />} />
	// 		</Route> */}
	// 	</Routes>
  // )
}

export default SkeletonRouter;
