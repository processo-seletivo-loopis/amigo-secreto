import React, { useState } from 'react'
import Friend from '../Friend'
import { FriendsContainer, Obs } from './styles'
import Alert from '../Alert';

export default function Friends({ friends, onRefresh }) {

    const [isAlertOpen, setIsAlertOpen] = useState(false);
    const [toBeDeletedFriend, setToBeDeletedFriend] = useState({});

    const handleDelete = (friend) => {
        setToBeDeletedFriend(friend);
        setIsAlertOpen(true);
    };

    const handleClose = () => {
        onRefresh();
        setIsAlertOpen(false);
    }

    return (
        <div>
            <Obs>
                OBS: o amigo secreto só pode ocorrer com no mínimo 3 pessoas.
            </Obs>
            <FriendsContainer>
                {friends.map((friend) => {
                    return <Friend key={friend.id} friend={friend} onDelete={handleDelete} />
                })}
            </FriendsContainer>
            <Alert type={2} onClose={handleClose} friend={toBeDeletedFriend} isOpen={isAlertOpen} />
        </div>
    )
}
