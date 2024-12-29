import { NavLink } from "react-router";

import './skeleton-navbar.css'


function SkeletonNavbar() {
  // const navigate = useNavigate();

  // function onRedirect(route: string) {
  //   navigate(`/${route}`);
  // }

  return (
    <>
			<NavbarItem route='/' label='Home' />
			<NavbarItem route='/feed-audit' label='Feed Audit' />
			<NavbarItem route='/jobs-processor' label='Jobs Processor' />
			<NavbarItem route='/chats' label='Chats' />
    </>
  )
}


function NavbarItem(props: {
	route: string;
	label: string;
}): JSX.Element {

	return (
		<NavLink
			to={props.route}
			className={({ isActive }) => {
				return `skeleton__navbar__item ${isActive ? 'active' : ''}`;
			}}
		>
			{props.label}
		</NavLink>
	);
}


export default SkeletonNavbar;