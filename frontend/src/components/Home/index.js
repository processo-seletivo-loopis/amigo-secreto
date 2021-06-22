import React from 'react'
import ImageHome from "../ImageHome"
import Friends from '../Friends';
import Buttons from "../Buttons"
import { useState, useEffect } from 'react';
//import friendsService from '../../services/friendsService';

export default function Home() {

    const [friends, setFriends] = useState([]);

	useEffect(() => {
		//const newFriends = friendsService.getFriends();
        const newFriends = [{
            id: 1,
            nome: "Alysson",
            email: "email1@email"
        },{
            id: 2,
            nome: "Alysson2",
            email: "email2@email"
        },{
            id: 3,
            nome: "Alysson3",
            email: "email3@email"
        }
    ];
		setFriends(newFriends);
	}, []);

    return (
        <div>
            {friends.length === 0 ? <ImageHome /> : <Friends friends={friends} />}
			<Buttons canDraw={friends.length >= 3} />
        </div>
    )
}
