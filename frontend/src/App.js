import { useState, useEffect } from 'react';
import Title from './components/Title';
import ImageHome from './components/ImageHome';
import Buttons from './components/Buttons';
import friendsService from './services/friendsService';
import './App.css';

export default function App() {

	const [friends, setFriends] = useState([]);

	useEffect(() => {
		const newFriends = friendsService.getFriends();
		setFriends(newFriends);
	}, [friends])

	return (
		<div>
			<Title />
			<ImageHome />
			<Buttons />
		</div>
	);
}