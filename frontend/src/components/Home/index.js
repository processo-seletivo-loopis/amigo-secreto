import React from 'react'
import ImageHome from "../ImageHome"
import Friends from '../Friends';
import Buttons from "../Buttons"
import { useState, useEffect } from 'react';
import friendsService from '../../services/friendsService';

export default function Home() {

    const [friends, setFriends] = useState([]);

    useEffect(() => {
        const getFriends = async () => {
            const newFriends = await friendsService.getFriends();
            setFriends(newFriends.data);
        }
        getFriends();
    }, [friends]);

    return (
        <div>
            {friends.length === 0 ? <ImageHome /> : <Friends friends={friends} />}
            <Buttons canDraw={friends.length >= 3} />
        </div>
    )
}
