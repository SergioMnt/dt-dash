import { Fragment } from 'react';
import './App.scss';
import { Navbar, SideBar } from "./Components/Navs";

export const App = () => {
	return (
		<Fragment>
			<h1>Hola</h1>
			<img className='profile-pic' src={`https://avatars.dicebear.com/api/human/${Math.random()}.svg`} alt="" />
		</Fragment>
	)
}