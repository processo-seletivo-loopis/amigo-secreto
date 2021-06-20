import React from 'react'
import ImageHome from "../ImageHome"
import Buttons from "../Buttons"
import { useState, useEffect } from 'react';
//import friendsService from '../../services/friendsService';

export default function Home() {

    const [friends, setFriends] = useState([]);

	useEffect(() => {
		//const newFriends = friendsService.getFriends();
        const newFriends = [];
		setFriends(newFriends);
	}, []);

    return (
        <div>
            {friends.length === 0 && <ImageHome />}
			<Buttons />
        </div>
    )
}
